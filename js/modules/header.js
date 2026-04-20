/**
 * Header Module - Manages meta tags and social sharing
 */

export function initHeader() {
    console.log('🔗 Header metadata initialized');
    
    // Share configuration
    const shareConfig = {
        title: 'Platform Digital Kampus - Transformasi Pendidikan',
        description: 'Solusi lengkap untuk manajemen akademik, komunikasi, dan kolaborasi mahasiswa dalam satu platform terpadu',
        url: 'https://campusdigital.com',
        image: 'https://campusdigital.com/assets/images/og-image.png'
    };
    
    // Setup share buttons
    setupShareButtons(shareConfig);
    
    // Log meta tags for debugging
    logMetaTags();
}

/**
 * Setup share button functionality
 */
function setupShareButtons(config) {
    // Make share config globally accessible
    window.shareConfig = config;
    
    // WhatsApp share function
    window.shareOnWhatsApp = function() {
        const message = encodeURIComponent(
            `${config.title}\n\n${config.description}\n\n${config.url}`
        );
        const whatsappUrl = `https://wa.me/?text=${message}`;
        window.open(whatsappUrl, '_blank');
    };
    
    // Facebook share function
    window.shareOnFacebook = function() {
        if (window.FB) {
            FB.ui({
                method: 'share',
                href: config.url,
                display: 'popup',
            }, function(){});
        }
    };
    
    // Twitter share function
    window.shareOnTwitter = function() {
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(config.title)}&url=${encodeURIComponent(config.url)}`;
        window.open(twitterUrl, '_blank');
    };
    
    // Copy link function
    window.copyLink = function() {
        navigator.clipboard.writeText(config.url).then(() => {
            alert('Link berhasil disalin!');
        });
    };
}

/**
 * Log meta tags for debugging
 */
function logMetaTags() {
    console.log('📋 Meta Tags:');
    
    const metaTags = {
        'og:title': document.querySelector('meta[property="og:title"]')?.content,
        'og:description': document.querySelector('meta[property="og:description"]')?.content,
        'og:image': document.querySelector('meta[property="og:image"]')?.content,
        'og:url': document.querySelector('meta[property="og:url"]')?.content,
        'twitter:title': document.querySelector('meta[name="twitter:title"]')?.content,
        'twitter:description': document.querySelector('meta[name="twitter:description"]')?.content,
        'twitter:image': document.querySelector('meta[name="twitter:image"]')?.content,
    };
    
    console.table(metaTags);
}

export default initHeader;
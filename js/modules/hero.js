/**
 * Hero Section Module
 */

export function initHero() {
    const heroContainer = document.getElementById('hero');
    
    const heroHTML = `
        <div class="hero-content">
            <h1 class="hero-title">Platform Digital Kampus</h1>
            <p class="hero-subtitle">Transformasi pendidikan dengan solusi digital terpadu untuk manajemen akademik dan kolaborasi mahasiswa</p>
            <div class="hero-buttons">
                <button class="btn btn-primary" id="ctaPrimary">Mulai Sekarang</button>
                <button class="btn btn-secondary" id="ctaSecondary">Pelajari Lebih Lanjut</button>
            </div>
        </div>
    `;
    
    heroContainer.innerHTML = heroHTML;
    
    // Setup button actions
    setupHeroButtons();
}

/**
 * Setup hero button event listeners
 */
function setupHeroButtons() {
    const ctaPrimary = document.getElementById('ctaPrimary');
    const ctaSecondary = document.getElementById('ctaSecondary');
    
    if (ctaPrimary) {
        ctaPrimary.addEventListener('click', () => {
            console.log('📝 Redirect to signup');
            // window.location.href = '/signup';
            scrollToSection('contact');
        });
    }
    
    if (ctaSecondary) {
        ctaSecondary.addEventListener('click', () => {
            console.log('📚 Learn more');
            scrollToSection('features');
        });
    }
}

/**
 * Scroll to specific section
 */
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

export default initHero;
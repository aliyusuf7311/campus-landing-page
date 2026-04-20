/**
 * Features Section Module
 */

const featuresData = [
    {
        icon: '📚',
        title: 'Manajemen Akademik',
        description: 'Kelola jadwal kuliah, nilai, dan transkrip akademik dalam satu dashboard'
    },
    {
        icon: '💬',
        title: 'Komunikasi Terpadu',
        description: 'Berinteraksi dengan dosen dan teman melalui chat dan forum diskusi'
    },
    {
        icon: '📊',
        title: 'Analytics & Progress',
        description: 'Pantau progress akademik dengan visualisasi data yang komprehensif'
    },
    {
        icon: '🎯',
        title: 'Task Management',
        description: 'Kelola tugas, deadline, dan project dengan sistem reminder otomatis'
    },
    {
        icon: '🔐',
        title: 'Keamanan Data',
        description: 'Sistem enkripsi tingkat enterprise untuk melindungi data pribadi'
    },
    {
        icon: '📱',
        title: 'Multi-Platform',
        description: 'Akses dari desktop, tablet, atau smartphone kapan saja dimana saja'
    }
];

export function initFeatures() {
    const featuresContainer = document.getElementById('features');
    
    const sectionTitle = `
        <div class="section-title">
            <h2>Fitur Unggulan</h2>
            <p>Dapatkan akses ke berbagai fitur canggih untuk mendukung perjalanan akademik Anda</p>
        </div>
    `;
    
    const featuresGrid = `
        <div class="features-grid" id="featuresGrid">
            ${featuresData.map((feature, index) => `
                <div class="feature-card" style="animation-delay: ${index * 0.1}s;">
                    <div class="feature-icon">${feature.icon}</div>
                    <h3>${feature.title}</h3>
                    <p>${feature.description}</p>
                </div>
            `).join('')}
        </div>
    `;
    
    featuresContainer.innerHTML = sectionTitle + featuresGrid;
    
    // Add animation observer
    setupFeatureAnimations();
}

/**
 * Setup intersection observer for feature card animations
 */
function setupFeatureAnimations() {
    const cards = document.querySelectorAll('.feature-card');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'slideInUp 0.6s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    cards.forEach(card => {
        observer.observe(card);
    });
}

export default initFeatures;
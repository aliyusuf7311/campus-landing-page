// Import modules
import { initNavbar } from './modules/navbar.js';
import { initHero } from './modules/hero.js';
import { initFeatures } from './modules/features.js';
import { initContact } from './modules/contact.js';
import { initHeader } from './modules/header.js';

/**
 * Initialize all application components
 */
function initApp() {
    console.log('🚀 Campus Digital Platform - Initializing...');
    
    initHeader();
    initNavbar();
    initHero();
    initFeatures();
    initContact();
    
    console.log('✅ Application initialized successfully');
}

// Initialize when DOM is fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}

// Handle smooth scrolling for hash links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

export default initApp;
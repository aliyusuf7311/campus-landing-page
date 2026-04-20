/**
 * Navbar Module - Responsive navigation with hamburger menu
 */

export function initNavbar() {
    const navbarContainer = document.getElementById('navbar');
    
    const navbarHTML = `
        <div class="navbar-container">
            <div class="navbar-logo">
                <a href="#home">🎓 Campus Digital</a>
            </div>
            <ul class="nav-menu" id="navMenu">
                <li><a href="#home" class="nav-link active">Home</a></li>
                <li><a href="#features" class="nav-link">Fitur</a></li>
                <li><a href="#contact" class="nav-link">Hubungi</a></li>
                <li><a href="#" class="nav-link">Login</a></li>
            </ul>
            <div class="hamburger" id="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    `;
    
    navbarContainer.innerHTML = navbarHTML;
    
    // Setup hamburger menu
    setupHamburgerMenu();
    
    // Setup smooth scroll and active link
    setupNavLinks();
}

/**
 * Setup hamburger menu toggle
 */
function setupHamburgerMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when link is clicked
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
}

/**
 * Setup navigation links active state and scrolling
 */
function setupNavLinks() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    const updateActiveLink = () => {
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    const rect = targetSection.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                }
            }
        });
    };
    
    window.addEventListener('scroll', updateActiveLink);
}

export default initNavbar;
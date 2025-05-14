// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add mobile menu functionality
const createMobileMenu = () => {
    const nav = document.querySelector('nav');
    const navLinks = document.querySelector('.nav-links');
    
    // Create mobile menu button
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.classList.add('mobile-menu-btn');
    mobileMenuBtn.innerHTML = '☰';
    mobileMenuBtn.style.display = 'none';
    
    // Add mobile menu styles
    const style = document.createElement('style');
    style.textContent = `
        @media (max-width: 768px) {
            .mobile-menu-btn {
                display: block !important;
                background: none;
                border: none;
                font-size: 1.5rem;
                cursor: pointer;
                padding: 0.5rem;
                position: relative;
            }
            
            .nav-links {
                display: none;
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background: white;
                padding: 1rem;
                box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                z-index: 1000;
            }
            
            .mobile-menu-btn:hover + .nav-links,
            .nav-links:hover {
                display: flex;
                flex-direction: column;
            }
            
            .nav-links a {
                margin: 0.5rem 0;
                padding: 0.5rem;
                transition: background-color 0.3s;
            }

            .nav-links a:hover {
                background-color: var(--gray-color);
                border-radius: var(--border-radius);
            }
        }
    `;
    
    document.head.appendChild(style);
    nav.insertBefore(mobileMenuBtn, navLinks);
};

// Initialize mobile menu
createMobileMenu();

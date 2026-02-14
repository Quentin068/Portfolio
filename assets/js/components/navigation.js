/**
 * Initializes the responsive navigation menu (hamburger).
 */
export function initializeNavigation() {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const nav = document.getElementById('main-nav');
    const navLinks = nav.querySelectorAll('a');

    // Function to close the menu
    const closeMenu = () => {
        hamburgerBtn.classList.remove('is-active');
        nav.classList.remove('is-open');
    };

    if (hamburgerBtn && nav) {
        // Toggle menu on hamburger click
        hamburgerBtn.addEventListener('click', () => {
            hamburgerBtn.classList.toggle('is-active');
            nav.classList.toggle('is-open');
        });

        // Close menu when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }
}

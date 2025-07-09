document.addEventListener('DOMContentLoaded', () => {
    const sideNavbar = document.getElementById('sideNavbar');
    const toggleBtn = document.querySelector('.toggle-btn');
    const closeBtn = document.querySelector('.close-btn');
    const navbarOverlay = document.querySelector('.navbar-overlay');
    const navLinks = document.querySelectorAll('.nav-link');

    // Function to open the navbar
    const openNavbar = () => {
        sideNavbar.classList.add('open');
        navbarOverlay.classList.add('visible');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when navbar is open
    };

    // Function to close the navbar
    const closeNavbar = () => {
        sideNavbar.classList.remove('open');
        navbarOverlay.classList.remove('visible');
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    };

    // Event Listeners
    toggleBtn.addEventListener('click', openNavbar);
    closeBtn.addEventListener('click', closeNavbar);
    navbarOverlay.addEventListener('click', closeNavbar); // Close when clicking outside

    // Handle active link state
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Remove 'active' class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            // Add 'active' class to the clicked link
            this.classList.add('active');

            // Optional: Close navbar after clicking a link on small screens
            if (window.innerWidth <= 768) {
                closeNavbar();
            }
        });
    });

    // Close navbar if screen size changes from small to large while it's open
    let initialScreenWidth = window.innerWidth;
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && initialScreenWidth <= 768 && sideNavbar.classList.contains('open')) {
            closeNavbar();
        }
        initialScreenWidth = window.innerWidth;
    });
});
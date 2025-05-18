// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Get the burger menu icon element
    const burgerMenu = document.querySelector('.burger-menu');
    // Get the mobile navigation menu element
    const mobileNav = document.querySelector('.mobile-nav');

    // Check if both elements exist on the page
    if (burgerMenu && mobileNav) {
        // Add an event listener to the burger menu for 'click' events
        burgerMenu.addEventListener('click', function () {
            // When the burger menu is clicked, toggle the 'is-active' class
            // on the mobile navigation menu.
            // .classList.toggle() adds the class if it's not there,
            // and removes it if it is.
            mobileNav.classList.toggle('is-active');

            // Optional: Also toggle 'is-active' on the burger menu itself
            // if you have CSS to transform it into an 'X' or similar.
            burgerMenu.classList.toggle('is-active');
        });
    } else {
        // Log an error to the console if elements are not found, for debugging.
        if (!burgerMenu) {
            console.error("Burger menu element (.burger-menu) not found.");
        }
        if (!mobileNav) {
            console.error("Mobile navigation element (.mobile-nav) not found.");
        }
    }

    // Optional: Close mobile menu when a link inside it is clicked
    const mobileNavLinks = mobileNav.querySelectorAll('a');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileNav.classList.contains('is-active')) {
                mobileNav.classList.remove('is-active');
                burgerMenu.classList.remove('is-active'); // Also reset burger icon
            }
        });
    });
});
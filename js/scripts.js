document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.toggle-button');
    const navLinks = document.querySelector('.nav-links');
    const joinUsLink = document.querySelector('.menu-label');
    const submenu = joinUsLink.nextElementSibling;
    const goToTopBtn = document.getElementById('goToTopBtn');
    const ctaButton = document.getElementById('ctaButton');

    toggleButton.addEventListener('click', function () {
        navLinks.classList.toggle('active');
        if (!navLinks.classList.contains('active')) {
            submenu.classList.remove('active'); // Ensure the submenu is not expanded when toggling the nav
            submenu.style.display = 'none'; // Hide the submenu
        }
    });

    joinUsLink.addEventListener('click', function (event) {
        if (window.innerWidth <= 768) { // Check if in mobile mode
            event.preventDefault(); // Prevent the default action of the link
            submenu.classList.toggle('active'); // Toggle the visibility of the submenu
            submenu.style.display = submenu.style.display === 'flex' ? 'none' : 'flex'; // Toggle visibility
        }
    });




    // Show the button when the user scrolls down 20px from the top of the document
    window.onscroll = function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            goToTopBtn.style.display = "block";
        } else {
            goToTopBtn.style.display = "none";
        }
    };

    // When the user clicks on the button, scroll to the top of the document
    goToTopBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    
    // Smooth scroll to the games section when the CTA button is clicked
    ctaButton.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default action of the link
        document.querySelector('#games').scrollIntoView({ behavior: 'smooth' });
    });








});
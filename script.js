document.addEventListener("DOMContentLoaded", function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links li a');
    const header = document.querySelector('header');
    const mainContent = document.querySelector('main'); // Select the main content
    const profilePic = document.querySelector('.profile-pic img');
    const lapPic = document.querySelector('.lap-pic img');

    // Toggle the hamburger menu on click
    hamburgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('show');
        header.classList.toggle('expanded');
        
        const isExpanded = navLinks.classList.contains('show');
        mainContent.style.marginTop = isExpanded ? '200px' : '0'; // Adjust this value based on the height of your header when expanded
        
        // Adjust the top values of the images
        const adjustment = isExpanded ? '200px' : '0';
        profilePic.style.top = isExpanded ? 'calc(6em + 200px)' : '6em'; // Adjust this value based on the height of your header when expanded
        lapPic.style.top = isExpanded ? 'calc(10em + 200px)' : '10em'; // Adjust this value based on the height of your header when expanded
    });

    // Close the hamburger menu when a nav item is clicked
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('show');
            header.classList.remove('expanded');
            mainContent.style.marginTop = '0';
            
            // Reset the top values of the images
            profilePic.style.top = '6em';
            lapPic.style.top = '10em';
        });
    });

    // Smooth scrolling for navigation links
    navItems.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1); // Extract the id from href
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the target section
            }
        });
    });
});
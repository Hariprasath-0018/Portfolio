document.addEventListener("DOMContentLoaded", function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links li a');
    const header = document.querySelector('header');
    const mainContent = document.querySelector('main');
    const profilePic = document.querySelector('.profile-pic img');
    const lapPic = document.querySelector('.lap-pic img');

    // Toggle the hamburger menu on click
    hamburgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('show');
        header.classList.toggle('expanded');
        
        const isExpanded = navLinks.classList.contains('show');
        mainContent.style.marginTop = isExpanded ? '200px' : '0';
        
        // Adjust the top values of the images
        profilePic.style.top = isExpanded ? 'calc(6em + 200px)' : '6em';
        lapPic.style.top = isExpanded ? 'calc(10em + 200px)' : '10em';
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
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Letter-by-letter animation for h1
    const text = document.querySelector(".animated-text");
    const strText = text.textContent;
    const splitText = strText.split("");
    text.textContent = "";
    for (let i = 0; i < splitText.length; i++) {
        text.innerHTML += `<span>${splitText[i] === " " ? "&nbsp;" : splitText[i]}</span>`;
    }

    const spans = text.querySelectorAll('span');
    spans.forEach((span, index) => {
        span.style.animationDelay = `${index * 0.1}s`;
    });
    
    const sliders = document.querySelectorAll('.slider');
    const slideIndices = Array.from({ length: sliders.length }, () => 0);

    function showSlides(sliderIndex, n) {
        const slides = sliders[sliderIndex].querySelectorAll(".project-images img");
        
        if (n >= slides.length) {
            slideIndices[sliderIndex] = 0;
        }
        if (n < 0) {
            slideIndices[sliderIndex] = slides.length - 1;
        }

        slides.forEach((slide, index) => {
            slide.classList.remove('active');
            if (index === slideIndices[sliderIndex]) {
                slide.classList.add('active');
            }
        });
    }

    function nextSlide(sliderIndex) {
        slideIndices[sliderIndex]++;
        showSlides(sliderIndex, slideIndices[sliderIndex]);
    }

    function prevSlide(sliderIndex) {
        slideIndices[sliderIndex]--;
        showSlides(sliderIndex, slideIndices[sliderIndex]);
    }

    sliders.forEach((slider, index) => {
        showSlides(index, slideIndices[index]);
    });

    window.nextSlide = nextSlide;
    window.prevSlide = prevSlide;

});

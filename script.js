
        // Loading Screen
        window.addEventListener('load', () => {
            const loading = document.getElementById('loading');
            setTimeout(() => {
                loading.classList.add('hidden');
            }, 1500);
        });

        // 3D Laptop Mouse Interaction
        const laptop = document.getElementById('laptop3d');
        const heroSection = document.querySelector('.hero');
        
        heroSection.addEventListener('mousemove', (e) => {
            const rect = heroSection.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / centerY * -10;
            const rotateY = (x - centerX) / centerX * 10;
            
            laptop.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        heroSection.addEventListener('mouseleave', () => {
            laptop.style.transform = 'rotateX(0deg) rotateY(0deg)';
        });

        // Custom Cursor
        const cursor = document.getElementById('cursor');
        const cursorFollower = document.getElementById('cursorFollower');

        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            
            setTimeout(() => {
                cursorFollower.style.left = e.clientX - 20 + 'px';
                cursorFollower.style.top = e.clientY - 20 + 'px';
            }, 100);
        });

        // Cursor hover effects
        const hoverElements = document.querySelectorAll('a, button, .btn, .skill-card, .project-card, .contact-card');
        
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.transform = 'scale(1.5)';
                cursorFollower.style.transform = 'scale(1.5)';
            });
            
            el.addEventListener('mouseleave', () => {
                cursor.style.transform = 'scale(1)';
                cursorFollower.style.transform = 'scale(1)';
            });
        });

        // Smooth Scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Navigation Active State
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-links a');

        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (pageYOffset >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').slice(1) === current) {
                    link.classList.add('active');
                }
            });
        });

        // Header Scroll Effect
        const header = document.querySelector('header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.style.background = 'rgba(15, 15, 35, 0.95)';
                header.style.padding = '0.5rem 2rem';
            } else {
                header.style.background = 'rgba(15, 15, 35, 0.8)';
                header.style.padding = '1rem 2rem';
            }
        });

        // Reveal Animation
        const revealElements = document.querySelectorAll('.reveal');
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        revealElements.forEach(el => {
            revealObserver.observe(el);
        });

        // Parallax Effect for Floating Shapes
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const shapes = document.querySelectorAll('.shape');
            
            shapes.forEach((shape, index) => {
                const speed = 0.5 + (index * 0.1);
                const yPos = -(scrolled * speed);
                shape.style.transform = `translateY(${yPos}px) rotate(${scrolled * 0.1}deg)`;
            });
        });

        // Typing Animation for Hero Subtitle
        const subtitle = document.querySelector('.hero-subtitle');
        const text = subtitle.textContent;
        subtitle.textContent = '';
        
        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                subtitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        setTimeout(typeWriter, 1000);

        // Particle Animation
        function createParticle() {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: 2px;
                height: 2px;
                background: #6366f1;
                border-radius: 50%;
                pointer-events: none;
                opacity: 0;
                animation: particleFloat 4s linear forwards;
            `;
            
            particle.style.left = Math.random() * window.innerWidth + 'px';
            particle.style.top = window.innerHeight + 'px';
            
            document.body.appendChild(particle);
            
            setTimeout(() => {
                particle.remove();
            }, 4000);
        }

        // Add particle animation CSS
        const particleStyle = document.createElement('style');
        particleStyle.textContent = `
            @keyframes particleFloat {
                0% {
                    opacity: 1;
                    transform: translateY(0) rotate(0deg);
                }
                100% {
                    opacity: 0;
                    transform: translateY(-100vh) rotate(360deg);
                }
            }
        `;
        document.head.appendChild(particleStyle);

        // Create particles periodically
        setInterval(createParticle, 300);

        // Mobile Menu Toggle
        const mobileToggle = document.querySelector('.mobile-toggle');
        const navLinks2 = document.querySelector('.nav-links');

        mobileToggle.addEventListener('click', () => {
            navLinks2.classList.toggle('active');
            mobileToggle.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks2.classList.remove('active');
                mobileToggle.classList.remove('active');
            });
        });

        // Skills Animation
        const skillCards = document.querySelectorAll('.skill-card');
        skillCards.forEach((card, index) => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-20px) rotateY(5deg)';
                card.style.boxShadow = '0 25px 50px rgba(99, 102, 241, 0.3)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(-10px) rotateY(0deg)';
                card.style.boxShadow = '0 20px 40px rgba(99, 102, 241, 0.2)';
            });
        });

        // Project Cards Animation
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(-5px) scale(1)';
            });
        });

        // Contact Cards Animation
        const contactCards = document.querySelectorAll('.contact-card');
        contactCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                const icon = card.querySelector('.contact-icon');
                icon.style.transform = 'scale(1.1) rotate(5deg)';
                card.style.borderColor = '#6366f1';
            });
            
            card.addEventListener('mouseleave', () => {
                const icon = card.querySelector('.contact-icon');
                icon.style.transform = 'scale(1) rotate(0deg)';
                card.style.borderColor = 'rgba(99, 102, 241, 0.2)';
            });
        });

        // Stats Counter Animation - Updated for new stats
        const statNumbers = document.querySelectorAll('.stat-number');
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = entry.target;
                    const finalNumber = target.textContent;
                    const isDecimal = finalNumber.includes('.');
                    const number = parseFloat(finalNumber);
                    let current = 0;
                    const increment = number / 50;
                    
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= number) {
                            current = number;
                            clearInterval(timer);
                        }
                        
                        if (isDecimal) {
                            target.textContent = current.toFixed(2);
                        } else {
                            target.textContent = Math.floor(current);
                        }
                    }, 40);
                }
            });
        }, { threshold: 0.5 });

        statNumbers.forEach(stat => {
            statsObserver.observe(stat);
        });

        // Add smooth page transitions
        document.addEventListener('DOMContentLoaded', () => {
            document.body.style.opacity = '0';
            setTimeout(() => {
                document.body.style.transition = 'opacity 0.5s ease';
                document.body.style.opacity = '1';
            }, 100);
        });

        // Performance optimization: Throttle scroll events
        let ticking = false;
        function updateOnScroll() {
            // Your scroll-based animations here
            ticking = false;
        }

        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(updateOnScroll);
                ticking = true;
            }
        });

        // Add responsive mobile styles
        const mobileStyles = `
            @media (max-width: 768px) {
                .nav-links {
                    position: fixed;
                    top: 0;
                    right: -100%;
                    width: 100%;
                    height: 100vh;
                    background: rgba(15, 15, 35, 0.98);
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    transition: right 0.3s ease;
                    z-index: 999;
                }
                
                .nav-links.active {
                    right: 0;
                }
                
                .hero {
                    grid-template-columns: 1fr;
                    text-align: center;
                    padding: 4rem 1rem;
                }
                
                .hero-laptop {
                    order: -1;
                    margin-bottom: 3rem;
                }
                
                .laptop-container {
                    width: 280px;
                    height: 210px;
                }
                
                .laptop-screen {
                    width: 280px;
                    height: 175px;
                }
                
                .laptop-base {
                    width: 295px;
                    left: -7.5px;
                }
                
                .hero-content h1,
                .hero-content p {
                    text-align: center;
                }
                
                .nav-links a {
                    font-size: 1.5rem;
                    margin: 1rem 0;
                }
                
                .mobile-toggle.active span:nth-child(1) {
                    transform: rotate(45deg) translate(5px, 5px);
                }
                
                .mobile-toggle.active span:nth-child(2) {
                    opacity: 0;
                }
                
                .mobile-toggle.active span:nth-child(3) {
                    transform: rotate(-45deg) translate(7px, -6px);
                }
                
                .hero-title {
                    font-size: 3rem;
                }
                
                .hero-subtitle {
                    font-size: 1.2rem;
                }
                
                .section-title {
                    font-size: 2.5rem;
                }
                
                .skills-grid {
                    grid-template-columns: 1fr;
                }
                
                .contact-grid {
                    grid-template-columns: 1fr;
                }
                
                .project-card {
                    margin-bottom: 2rem;
                }
                
                .project-content {
                    padding: 1.5rem;
                }
                
                .about-grid {
                    grid-template-columns: 1fr;
                    text-align: center;
                }
                
                .stats {
                    grid-template-columns: repeat(3, 1fr);
                    gap: 1rem;
                }
                
                .cursor,
                .cursor-follower {
                    display: none;
                }
            }
            
            @media (max-width: 480px) {
                .hero {
                    padding: 0 1rem;
                }
                
                .about,
                .skills,
                .projects,
                .contact {
                    padding: 4rem 1rem;
                }
                
                .stats {
                    grid-template-columns: 1fr;
                }
                
                .cta-buttons {
                    flex-direction: column;
                }
                
                .btn {
                    width: 100%;
                    margin: 0.5rem 0;
                }
            }
        `;
        
        const styleSheet = document.createElement('style');
        styleSheet.textContent = mobileStyles;
        document.head.appendChild(styleSheet);

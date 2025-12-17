/* ========================================
   JAYANTH KUMAR - PORTFOLIO
   Optimized for Performance
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
    Loader.init();
    SmoothCursor.init();
    Navigation.init();
    ScrollReveal.init();
    SkillBars.init();
    CountUp.init();
    ProjectCards.init();
    ContactForm.init();
    WaterLetters.init();
});

/* ========================================
   LOADER - Quick fade out
   ======================================== */
const Loader = {
    init() {
        const loader = document.getElementById('loader');
        setTimeout(() => {
            loader.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }, 2000);
    }
};

/* ========================================
   SMOOTH CURSOR - Using RAF + Lerp
   ======================================== */
const SmoothCursor = {
    cursor: null,
    follower: null,
    mouseX: 0,
    mouseY: 0,
    cursorX: 0,
    cursorY: 0,
    followerX: 0,
    followerY: 0,
    isHovering: false,

    init() {
        this.cursor = document.getElementById('cursor');
        this.follower = document.getElementById('cursor-follower');

        if (!this.cursor || !this.follower) return;

        // Check for touch device
        if ('ontouchstart' in window) {
            this.cursor.style.display = 'none';
            this.follower.style.display = 'none';
            document.body.style.cursor = 'auto';
            return;
        }

        // Track mouse position
        document.addEventListener('mousemove', (e) => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;
        });

        // Hover states
        const interactives = document.querySelectorAll('a, button, .project-card, input, textarea');
        interactives.forEach(el => {
            el.addEventListener('mouseenter', () => this.setHover(true));
            el.addEventListener('mouseleave', () => this.setHover(false));
        });

        // Start animation loop
        this.animate();
    },

    setHover(state) {
        this.isHovering = state;
        if (state) {
            this.cursor.classList.add('hover');
            this.follower.classList.add('hover');
        } else {
            this.cursor.classList.remove('hover');
            this.follower.classList.remove('hover');
        }
    },

    lerp(start, end, factor) {
        return start + (end - start) * factor;
    },

    animate() {
        // Smooth interpolation - cursor follows mouse quickly
        this.cursorX = this.lerp(this.cursorX, this.mouseX, 0.35);
        this.cursorY = this.lerp(this.cursorY, this.mouseY, 0.35);

        // Follower is slower for trailing effect
        this.followerX = this.lerp(this.followerX, this.mouseX, 0.15);
        this.followerY = this.lerp(this.followerY, this.mouseY, 0.15);

        // Apply transforms (GPU accelerated)
        this.cursor.style.transform = `translate3d(${this.cursorX - 6}px, ${this.cursorY - 6}px, 0)`;
        this.follower.style.transform = `translate3d(${this.followerX - 20}px, ${this.followerY - 20}px, 0)`;

        requestAnimationFrame(() => this.animate());
    }
};

/* ========================================
   NAVIGATION
   ======================================== */
const Navigation = {
    init() {
        const nav = document.getElementById('nav');
        const toggle = document.getElementById('nav-toggle');
        const mobileMenu = document.getElementById('mobile-menu');

        // Scroll effect
        let lastScroll = 0;
        window.addEventListener('scroll', () => {
            const currentScroll = window.scrollY;

            if (currentScroll > 100) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
            lastScroll = currentScroll;
        }, { passive: true });

        // Mobile toggle
        if (toggle && mobileMenu) {
            toggle.addEventListener('click', () => {
                toggle.classList.toggle('active');
                mobileMenu.classList.toggle('active');
                document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
            });

            mobileMenu.querySelectorAll('.mobile-link').forEach(link => {
                link.addEventListener('click', () => {
                    toggle.classList.remove('active');
                    mobileMenu.classList.remove('active');
                    document.body.style.overflow = '';
                });
            });
        }

        // Smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    const offset = target.offsetTop - 80;
                    window.scrollTo({ top: offset, behavior: 'smooth' });
                }
            });
        });
    }
};

/* ========================================
   SCROLL REVEAL - Simple & Performant
   ======================================== */
const ScrollReveal = {
    init() {
        const elements = document.querySelectorAll('.title-reveal, .reveal-text, .reveal-up, .reveal-scale, .project-card, .skill-category');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Stagger the animations
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, index * 50);
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        elements.forEach(el => observer.observe(el));
    }
};

/* ========================================
   SKILL BARS
   ======================================== */
const SkillBars = {
    init() {
        const bars = document.querySelectorAll('.skill-progress');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progress = entry.target.dataset.progress;
                    entry.target.style.width = progress + '%';
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        bars.forEach(bar => observer.observe(bar));
    }
};

/* ========================================
   COUNT UP ANIMATION
   ======================================== */
const CountUp = {
    init() {
        const counters = document.querySelectorAll('.stat-number');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animate(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => observer.observe(counter));
    },

    animate(el) {
        const target = parseInt(el.dataset.count);
        const duration = 1500;
        const startTime = performance.now();

        const update = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Ease out
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(easeOut * target);

            el.textContent = current;

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                el.textContent = target;
            }
        };

        requestAnimationFrame(update);
    }
};

/* ========================================
   PROJECT CARDS - 3D Tilt
   ======================================== */
const ProjectCards = {
    init() {
        const cards = document.querySelectorAll('.project-card');

        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = (y - centerY) / 15;
                const rotateY = (centerX - x) / 15;

                card.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
            });

            // Make the whole card clickable
            card.style.cursor = 'pointer';
            card.addEventListener('click', () => {
                const link = card.querySelector('.project-link');
                if (link) link.click();
            });
        });
    }
};

/* ========================================
   CONTACT FORM
   ======================================== */
const ContactForm = {
    init() {
        const form = document.getElementById('contact-form');
        if (!form) return;

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const btn = form.querySelector('button[type="submit"]');
            const originalHTML = btn.innerHTML;

            btn.innerHTML = '<span>Sent!</span>';
            btn.style.background = '#10b981';

            setTimeout(() => {
                btn.innerHTML = originalHTML;
                btn.style.background = '';
                form.reset();
            }, 2500);
        });
    }
};

/* ========================================
   PARALLAX - Lightweight version
   ======================================== */
const Parallax = {
    init() {
        const hero = document.querySelector('.hero-content');
        const shapes = document.querySelectorAll('.shape');

        let ticking = false;

        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const scrollY = window.scrollY;

                    if (hero && scrollY < window.innerHeight) {
                        hero.style.transform = `translateY(${scrollY * 0.4}px)`;
                        hero.style.opacity = 1 - (scrollY / (window.innerHeight * 0.8));
                    }

                    ticking = false;
                });
                ticking = true;
            }
        }, { passive: true });

        // Mouse parallax for shapes (throttled)
        let mouseX = 0, mouseY = 0;
        let shapeX = 0, shapeY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = (e.clientX - window.innerWidth / 2) / 50;
            mouseY = (e.clientY - window.innerHeight / 2) / 50;
        }, { passive: true });

        const animateShapes = () => {
            shapeX += (mouseX - shapeX) * 0.1;
            shapeY += (mouseY - shapeY) * 0.1;

            shapes.forEach((shape, i) => {
                const speed = (i + 1) * 0.5;
                shape.style.transform = `translate(${shapeX * speed}px, ${shapeY * speed}px)`;
            });

            requestAnimationFrame(animateShapes);
        };

        animateShapes();
    }
};

// Initialize parallax after load
window.addEventListener('load', () => Parallax.init());

/* ========================================
   LIQUID TEXT - Subtle wave distortion
   ======================================== */
const WaterLetters = {
    letters: [],
    mouseX: 0,
    mouseY: 0,
    radius: 200,
    time: 0,

    init() {
        this.letters = document.querySelectorAll('.letter');
        if (!this.letters.length) return;

        this.letters.forEach(letter => {
            letter.dataset.currentY = 0;
            letter.dataset.currentBlur = 0;
            letter.dataset.currentScale = 1;
        });

        document.addEventListener('mousemove', (e) => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;
        }, { passive: true });

        this.animate();
    },

    animate() {
        this.time += 0.02;

        this.letters.forEach((letter, index) => {
            const rect = letter.getBoundingClientRect();
            const letterCenterX = rect.left + rect.width / 2;
            const letterCenterY = rect.top + rect.height / 2;

            const deltaX = this.mouseX - letterCenterX;
            const deltaY = this.mouseY - letterCenterY;
            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

            let targetY = 0;
            let targetBlur = 0;
            let targetScale = 1;

            if (distance < this.radius) {
                const proximity = 1 - (distance / this.radius);

                // Subtle wave motion - like water surface
                const wave = Math.sin(this.time * 3 + index * 0.5) * proximity * 8;
                targetY = wave;

                // Slight blur for depth
                targetBlur = proximity * 1.5;

                // Subtle scale pulse
                targetScale = 1 + (proximity * 0.05);
            }

            // Smooth interpolation
            const currentY = parseFloat(letter.dataset.currentY) || 0;
            const currentBlur = parseFloat(letter.dataset.currentBlur) || 0;
            const currentScale = parseFloat(letter.dataset.currentScale) || 1;

            const newY = currentY + (targetY - currentY) * 0.1;
            const newBlur = currentBlur + (targetBlur - currentBlur) * 0.1;
            const newScale = currentScale + (targetScale - currentScale) * 0.1;

            letter.dataset.currentY = newY;
            letter.dataset.currentBlur = newBlur;
            letter.dataset.currentScale = newScale;

            // Apply subtle liquid effect
            letter.style.transform = `translateY(${newY}px) scale(${newScale})`;
            letter.style.filter = newBlur > 0.1 ? `blur(${newBlur}px)` : 'none';
        });

        requestAnimationFrame(() => this.animate());
    }
};

// app.js - Main application initialization
import { languageManager } from './languageManager.js';
document.addEventListener('DOMContentLoaded', () => {
    languageManager.init();
    });

class App {
    constructor() {
        this.languageManager = languageManager;
    }

    /**
     * Initialize the application
     */
    init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.onReady());
        } else {
            this.onReady();
        }
    }

    /**
     * Called when DOM is ready
     */
    onReady() {
        // Initialize language manager
        this.languageManager.init();

        // Setup smooth scrolling for anchor links
        this.setupSmoothScroll();

        // Setup intersection observer for animations
        this.setupAnimations();

        // Setup analytics if needed
        this.setupAnalytics();
    }

    /**
     * Setup smooth scrolling for anchor links
     */
    setupSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const href = anchor.getAttribute('href');
                if (href === '#') return;

                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    /**
     * Setup intersection observer for scroll animations
     */
    setupAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        });

        // Observe elements with data-animate attribute
        document.querySelectorAll('[data-animate]').forEach(el => {
            observer.observe(el);
        });
    }

    /**
     * Setup Google Analytics (if gtag is available)
     */
    setupAnalytics() {
        if (typeof gtag !== 'undefined') {
            // Track page view
            gtag('event', 'page_view', {
                page_title: document.title,
                page_location: window.location.href,
                page_path: window.location.pathname
            });

            // Track CTA clicks
            document.querySelectorAll('[data-track]').forEach(el => {
                el.addEventListener('click', () => {
                    const action = el.getAttribute('data-track');
                    gtag('event', 'click', {
                        event_category: 'CTA',
                        event_label: action
                    });
                });
            });
        }
    }
}

// Initialize app
const app = new App();
app.init();

export default app;

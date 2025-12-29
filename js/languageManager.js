// languageManager.js - Handle language switching with mobile support
import { translations } from './translations.js';

class LanguageManager {
    constructor() {
        this.currentLang = this.loadLanguage();
        this.translations = translations;
    }

    /**
     * Load saved language from localStorage or default to 'en'
     */
    loadLanguage() {
        return localStorage.getItem('pahtia-language') || 'en';
    }

    /**
     * Set and save a new language
     */
    setLanguage(lang) {
        if (!this.translations[lang]) {
            console.warn(`Language '${lang}' not found, defaulting to 'en'`);
            lang = 'en';
        }
        this.currentLang = lang;
        localStorage.setItem('pahtia-language', lang);
        this.updateContent();
        this.updateSelector();
    }

    /**
     * Get current language
     */
    getCurrentLanguage() {
        return this.currentLang;
    }

    /**
     * Get translation for current language
     */
    getTranslations() {
        return this.translations[this.currentLang];
    }

    /**
     * Update all content on the page
     */
    updateContent() {
        const t = this.getTranslations();
        
        // Update all elements with IDs that match translation keys
        Object.keys(t).forEach(key => {
            const kebabKey = this.camelToKebab(key);
            const element = document.getElementById(kebabKey);
            if (element) {
                // Special handling for HTML content
                if (key === 'aboutPara1') {
                    element.innerHTML = t[key];
                } else {
                    element.textContent = t[key];
                }
            }
        });
    }

    /**
     * Update both desktop and mobile language selectors
     */
    updateSelector() {
        // Update desktop selector
        const desktopSelector = document.getElementById('lang-selector');
        if (desktopSelector) {
            desktopSelector.value = this.currentLang;
        }
        
        // Update mobile selector
        const mobileSelector = document.getElementById('lang-selector-mobile');
        if (mobileSelector) {
            mobileSelector.value = this.currentLang;
        }
    }
    updateDownloadLink(lang) {
        const btn = document.getElementById('download-btn');
        if (!btn) return;

        btn.href = `/assets/pdf/Pharmacy_Conversion_Chart_${lang}.pdf`;
        btn.href = `/assets/pdf/Sig_Codes_Reference_${lang}.pdf`;
    }


    /**
     * Convert camelCase to kebab-case for ID matching
     */
    camelToKebab(str) {
        return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
    }

    /**
     * Initialize language manager on page load
     */
    init() {
        this.updateContent();
        this.updateSelector();
        this.updateDownloadLink(this.currentLanguage);

        
        // Setup desktop language selector
        const desktopSelector = document.getElementById('lang-selector');
        if (desktopSelector) {
            desktopSelector.addEventListener('change', (e) => {
                this.setLanguage(e.target.value);
            });
        }
        
        // Setup mobile language selector
        const mobileSelector = document.getElementById('lang-selector-mobile');
        if (mobileSelector) {
            mobileSelector.addEventListener('change', (e) => {
                this.setLanguage(e.target.value);
            });
        }
    }
}

// Export singleton instance
export const languageManager = new LanguageManager();

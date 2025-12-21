// languageManager.js - Handle language switching and updates (WITH DEBUGGING)
import { translations } from './translations.js';

class LanguageManager {
    constructor() {
        console.log('🔧 LanguageManager: Constructor called');
        this.currentLang = this.loadLanguage();
        this.translations = translations;
        console.log('✅ LanguageManager: Translations loaded:', Object.keys(this.translations));
        console.log('✅ LanguageManager: Current language:', this.currentLang);
    }

    /**
     * Load saved language from localStorage or default to 'en'
     */
    loadLanguage() {
        const savedLang = localStorage.getItem('pahtia-language') || 'en';
        console.log('📂 LanguageManager: Loaded language from storage:', savedLang);
        return savedLang;
    }

    /**
     * Set and save a new language
     */
    setLanguage(lang) {
        console.log('🌐 LanguageManager: Setting language to:', lang);
        if (!this.translations[lang]) {
            console.warn(`⚠️ Language '${lang}' not found, defaulting to 'en'`);
            lang = 'en';
        }
        this.currentLang = lang;
        localStorage.setItem('pahtia-language', lang);
        console.log('💾 LanguageManager: Language saved to storage');
        this.updateContent();
        this.updateSelector();
        console.log('✅ LanguageManager: Content updated');
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
        console.log('📝 LanguageManager: Updating content...');
        let updatedCount = 0;
        
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
                updatedCount++;
            }
        });
        
        console.log(`✅ LanguageManager: Updated ${updatedCount} elements`);
        if (updatedCount === 0) {
            console.warn('⚠️ LanguageManager: No elements were updated! Check if IDs match translation keys.');
        }
    }

    /**
     * Update language selector dropdown
     */
    updateSelector() {
        const selector = document.getElementById('lang-selector');
        if (selector) {
            selector.value = this.currentLang;
            console.log('✅ LanguageManager: Selector updated to:', this.currentLang);
        } else {
            console.warn('⚠️ LanguageManager: Language selector not found!');
        }
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
        console.log('🚀 LanguageManager: Initializing...');
        this.updateContent();
        this.updateSelector();
        
        // Setup language selector
        const selector = document.getElementById('lang-selector');
        if (selector) {
            selector.addEventListener('change', (e) => {
                console.log('👆 LanguageManager: User changed language to:', e.target.value);
                this.setLanguage(e.target.value);
            });
            console.log('✅ LanguageManager: Event listener attached to selector');
        } else {
            console.error('❌ LanguageManager: lang-selector element not found in DOM!');
        }
        
        console.log('✅ LanguageManager: Initialization complete');
    }
}

// Export singleton instance
export const languageManager = new LanguageManager();

// Make it accessible in console for debugging
window.languageManager = languageManager;
console.log('🌍 LanguageManager: Now accessible via window.languageManager');

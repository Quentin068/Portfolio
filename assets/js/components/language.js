/**
 * Initializes the language switcher functionality.
 * It finds all elements with a `data-en` attribute and toggles their content
 * between French and English when the language switch button is clicked.
 */
export function initializeLanguageSwitcher() {
    // Default language is French.
    let currentLang = 'fr';
    const toggleBtn = document.getElementById('lang-toggle-btn');

    // Ensure the toggle button exists before adding an event listener.
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            // Switch the current language.
            currentLang = currentLang === 'fr' ? 'en' : 'fr';

            // Toggle the 'active' class on the FR/EN buttons for visual feedback.
            document.getElementById('fr-btn').classList.toggle('active');
            document.getElementById('en-btn').classList.toggle('active');

            // Select all elements that have a `data-en` attribute.
            const elementsToTranslate = document.querySelectorAll('[data-en]');

            elementsToTranslate.forEach(el => {
                if (currentLang === 'en') {
                    // Before switching to English, store the original French content
                    // in a `data-fr` attribute if it hasn't been stored already.
                    if (!el.dataset.fr) {
                        el.dataset.fr = el.innerHTML;
                    }
                    // Set the element's content to the English version from `data-en`.
                    el.innerHTML = el.dataset.en;
                } else {
                    // If switching back to French, restore the content from `data-fr`.
                    el.innerHTML = el.dataset.fr;
                }
            });

            // Update the `lang` attribute of the <html> tag for accessibility and SEO.
            document.documentElement.lang = currentLang;
        });
    }
}

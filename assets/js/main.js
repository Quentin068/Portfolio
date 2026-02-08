document.addEventListener('DOMContentLoaded', () => {

    // --- EASTER EGG (Ouvre la console du navigateur) ---
    console.log(
        "%c Hello Dev! 👋 \n%c Looking for the source code? It's clean and simple.",
        "color: #64FFDA; font-size: 20px; font-weight: bold;",
        "color: #8892b0; font-size: 12px;"
    );

    // --- LANGUAGE SWITCHER ---
    let currentLang = 'fr';
    const toggleBtn = document.getElementById('lang-toggle-btn');

    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            // Bascule FR <-> EN
            currentLang = currentLang === 'fr' ? 'en' : 'fr';

            // Mise à jour visuelle du bouton
            document.getElementById('fr-btn').classList.toggle('active');
            document.getElementById('en-btn').classList.toggle('active');

            // Traduction des éléments
            const elements = document.querySelectorAll('[data-en]');

            elements.forEach(el => {
                if (currentLang === 'en') {
                    // Sauvegarde du FR si pas encore fait
                    if (!el.dataset.fr) el.dataset.fr = el.innerHTML;
                    // Injection de l'EN
                    el.innerHTML = el.dataset.en;
                } else {
                    // Restauration du FR
                    el.innerHTML = el.dataset.fr;
                }
            });

            // SEO
            document.documentElement.lang = currentLang;
        });
    }
});
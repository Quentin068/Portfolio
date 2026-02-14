document.addEventListener('DOMContentLoaded', () => {

    // --- EASTER EGG CONSOLE ---
    console.log(
        "%c Hello Dev! 👋 \n%c Press 'T' to open the Terminal Mode.",
        "color: #64FFDA; font-size: 20px; font-weight: bold;",
        "color: #8892b0; font-size: 12px;"
    );

    // --- LANGUAGE SWITCHER ---
    let currentLang = 'fr';
    const toggleBtn = document.getElementById('lang-toggle-btn');

    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            currentLang = currentLang === 'fr' ? 'en' : 'fr';

            document.getElementById('fr-btn').classList.toggle('active');
            document.getElementById('en-btn').classList.toggle('active');

            const elements = document.querySelectorAll('[data-en]');

            elements.forEach(el => {
                if (currentLang === 'en') {
                    if (!el.dataset.fr) el.dataset.fr = el.innerHTML;
                    el.innerHTML = el.dataset.en;
                } else {
                    el.innerHTML = el.dataset.fr;
                }
            });
            document.documentElement.lang = currentLang;
        });
    }
});

// --- EMAIL COPY FUNCTION ---
function copyEmail() {
    // Remplace par ton email si besoin
    const email = "ton.email@lecnam.net";
    navigator.clipboard.writeText(email).then(() => {
        alert("Email copié dans le presse-papier !");
    });
}

// --- TERMINAL EASTER EGG (Touche 'T') ---
function toggleTerminal() {
    const term = document.getElementById('terminal-modal');
    term.style.display = term.style.display === 'none' ? 'block' : 'none';
}

document.addEventListener('keydown', (e) => {
    if (e.key === 't' || e.key === 'T') {
        toggleTerminal();
    }
    if (e.key === 'Escape') {
        document.getElementById('terminal-modal').style.display = 'none';
    }
});
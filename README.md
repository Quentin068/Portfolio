# Portfolio de Quentin Mesnel-Terreau

Ce projet est le code source de mon portfolio personnel, conçu pour présenter mon parcours, mes compétences et mes projets en tant qu'étudiant ingénieur en Big Data & IA.

Le site est entièrement statique, construit sans aucun framework, en utilisant uniquement HTML, CSS et JavaScript (ES6+).

## ✨ Fonctionnalités

*   **Design Épuré et Moderne :** Interface sobre avec une attention portée à la typographie et à l'expérience utilisateur.
*   **Double Langue :** Switcher Français / Anglais pour une audience internationale.
*   **Terminal Easter Egg :** Appuyez sur la touche 'T' pour découvrir un terminal caché.
*   **Responsive :** Le site s'adapte à toutes les tailles d'écran, du mobile au bureau.
*   **Structure Modulaire :** Le code est organisé en composants réutilisables (HTML, CSS, JS) pour une maintenance facile.

## 🛠️ Technologies utilisées

*   **HTML**
*   **CSS :**
    *   Variables CSS (Custom Properties)
    *   CSS Grid & Flexbox
    *   Animations
*   **JavaScript :**
    *   Modules ES6
    *   DOM Manipulation
    *   Fetch API pour l'inclusion de composants HTML.

## 📂 Structure du projet

Le projet est organisé pour être aussi modulaire que possible :

```
/
├── index.html              # Fichier principal
├── README.md               # Vous êtes ici
├── assets/
│   ├── css/
│   │   ├── style.css       # Fichier principal qui importe les autres
│   │   ├── base/           # Reset, variables, styles globaux
│   │   ├── components/     # Styles pour les éléments réutilisables (boutons, cartes...)
│   │   ├── layout/         # Styles pour le header, footer...
│   │   └── pages/          # Styles spécifiques à une page
│   └── js/
│       ├── main.js         # Point d'entrée principal du JS
│       ├── include.js      # Script pour l'inclusion de fichiers HTML
│       ├── components/     # Scripts pour les composants (terminal, langue...)
│       └── utils/          # Fonctions utilitaires
└── includes/
    ├── _header.html        # Contenu du header
    └── _footer.html        # Contenu du footer
```

## 🚀 Lancement

Aucune installation n'est requise. Il suffit d'ouvrir le fichier `index.html` dans votre navigateur web préféré.

---

_Design & Code par Quentin Mesnel-Terreau._
// Import modular scripts for different functionalities.
import { initializeLanguageSwitcher } from './components/language.js';
import { initializeTerminal } from './components/terminal.js';
import { initializeNavigation } from './components/navigation.js';
import { includeHTML } from './include.js';

/**
 * Main execution block that runs after the DOM is fully loaded.
 */
document.addEventListener('DOMContentLoaded', () => {

    // Load reusable HTML parts (like header and footer) into the main page.
    // This returns a promise to ensure that other scripts depending on this content
    // wait for it to be fully loaded.
    includeHTML().then(() => {
        // Once the HTML is included, initialize the components that are inside the header.
        initializeLanguageSwitcher();
        initializeNavigation();
    });

    // --- CONSOLE EASTER EGG ---
    // A friendly message for developers inspecting the console.
    console.log(
        "%c Hello Dev! 👋 \n%c Press 'T' to open the Terminal Mode.",
        "color: #64FFDA; font-size: 20px; font-weight: bold;",
        "color: #8892b0; font-size: 12px;"
    );

    // Initialize the terminal easter egg functionality (key listeners).
    initializeTerminal();
});

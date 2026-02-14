/**
 * Toggles the visibility of the terminal modal window.
 */
function toggleTerminal() {
    const term = document.getElementById('terminal-modal');
    // Simple display toggle based on its current state.
    term.style.display = term.style.display === 'none' ? 'block' : 'none';
}

/**
 * Initializes all event listeners related to the terminal easter egg.
 */
export function initializeTerminal() {
    // Listen for global keydown events.
    document.addEventListener('keydown', (e) => {
        // Show/hide the terminal when 'T' is pressed.
        if (e.key === 't' || e.key === 'T') {
            toggleTerminal();
        }
        // Hide the terminal when 'Escape' is pressed.
        if (e.key === 'Escape') {
            document.getElementById('terminal-modal').style.display = 'none';
        }
    });

    // Add a click listener to the terminal's close button.
    const closeButton = document.querySelector('.close-term');
    if (closeButton) {
        closeButton.addEventListener('click', toggleTerminal);
    }
}

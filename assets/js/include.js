/**
 * Dynamically loads and injects HTML content from external files into placeholder elements.
 * This allows for modular HTML structure (e.g., reusable headers and footers).
 *
 * @returns {Promise} A promise that resolves when all HTML includes have been processed.
 */
function includeHTML() {
    // Find all elements with an ID ending in "-placeholder".
    const includeElements = document.querySelectorAll('[id$="-placeholder"]');
    const promises = [];

    includeElements.forEach(el => {
        // Construct the file path from the element's ID.
        // e.g., "header-placeholder" becomes "includes/_header.html".
        const file = `includes/_${el.id.replace('-placeholder', '')}.html`;

        // Fetch the HTML content. This is an asynchronous operation.
        const promise = fetch(file)
            .then(response => {
                if (response.ok) {
                    return response.text();
                }
                throw new Error(`Network response was not ok for ${file}.`);
            })
            .then(data => {
                // Once content is fetched, replace the placeholder with the actual HTML.
                el.innerHTML = data;
                // The `replaceWith` and spread syntax effectively unwrap the placeholder div.
                el.replaceWith(...el.childNodes);
            })
            .catch(error => {
                console.error('Error fetching HTML:', error);
            });

        promises.push(promise);
    });

    // Return a single promise that resolves after all fetch operations are complete.
    return Promise.all(promises);
}

export {includeHTML};

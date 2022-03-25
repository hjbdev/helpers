/**
 * Asynchronously waits for an element to become part of the DOM.
 * @param {string} queryString - The element to search for.
 * @param {number} frequency - How often we should check for the element.
 * @param {number} timeout - How long we should check for before giving up.
 */
export default function awaitElement(queryString : string, frequency : number = 25, timeout : number = 3000) : Promise<Element | null> {
    const start = Date.now();
    return new Promise((resolve, reject) => {
        const interval = setInterval(() => {
            if (document.querySelector(queryString)) {
                clearInterval(interval);
                resolve(document.querySelector(queryString));
                return;
            }

            if (Date.now() - start > timeout) {
                reject(new Error(`awaitElement for ${queryString} timed out after 3 seconds.`));
            }
        }, frequency);
    });
}

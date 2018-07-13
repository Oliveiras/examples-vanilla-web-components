// Get the document of the "parent" HTML (who is importing the custom element, in this case the "index.html").
const currentDocument = document.currentScript.ownerDocument;

// Your class must extends HTMLElement.
class VaDiv extends HTMLElement {
    
    // You must implement this callback.
    connectedCallback() {
        // This code is always the same: clone the content of the template and append to a new shadow-root.
        const template = currentDocument.querySelector('#va-div-template');
        const content = template.content.cloneNode(true);
        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(content);
    }

}

// Define the name of the custom element and what class will control its behavior.
customElements.define('va-div', VaDiv);

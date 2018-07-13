const currentDocument = document.currentScript.ownerDocument;

class VaList extends HTMLElement {

    connectedCallback() {
        const template = currentDocument.querySelector('#va-list-template');
        let content = template.content.cloneNode(true);

        // The only difference now is that we will customize the element rendering.
        this.render(content);

        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(content);
    }

    render(content) {

        // Get the childs of the shadow-root
        let ul = content.querySelector('ul');
        const li = content.querySelector('li');

        // Get the variable with the list of elements.
        const items = window[this.getAttribute('items')];

        // Append a new clone of the <li> for each element in the list.
        for (const item of items) {
            let newLi = li.cloneNode(true);
            newLi.querySelector('.code').innerText = item.code;
            newLi.querySelector('.name').innerText = item.name;
            ul.appendChild(newLi);
        }

        // Remove the original <li>, it was only a "template".
        ul.removeChild(li);
    }

}

customElements.define('va-list', VaList);

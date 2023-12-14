class SaludoComponent extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });

    const p = document.createElement('p');

    p.textContent = '¡Hola, Mundo!';

    const style = document.createElement('style');
    style.textContent = `
      p {
        font-size: 1.5em;
        color: #007acc;
      }
    `;

    shadowRoot.appendChild(style);
    shadowRoot.appendChild(p);
  }
}

customElements.define('saludo-component', SaludoComponent);
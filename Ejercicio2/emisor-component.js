class EmisorComponent extends HTMLElement {
    constructor() {
      super();
      const shadowRoot = this.attachShadow({ mode: 'open' });
      const button = document.createElement('button');
      button.textContent = 'Dar clic';
      
      // Agregar estilos al Shadow DOM
      const style = document.createElement('style');
      style.textContent = `
        button {
          padding: 15px 30px;
          background-color: #007acc;
          color: #fff;
          border: none;
          cursor: pointer;
          font-size: 1em;
          transition: background-color 0.3s ease;
          border-radius: 5px;
        }
  
        button:hover {
          background-color: #005580;
        }
      `;
  
      button.addEventListener('click', () => {
        const customEvent = new CustomEvent('actualizar-mensaje', { detail: { mensaje: 'MARCO ESPIN' } });
        this.dispatchEvent(customEvent);
      });
  
      shadowRoot.appendChild(style);
      shadowRoot.appendChild(button);
    }
  }
  
  customElements.define('emisor-component', EmisorComponent);
  
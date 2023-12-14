class ReceptorComponent extends HTMLElement {
    constructor() {
      super();
      const shadowRoot = this.attachShadow({ mode: 'open' });
      this.label = document.createElement('label');
      this.label.id = 'messageBox';
  
      const style = document.createElement('style');
      style.textContent = `
        label {
          padding: 15px;
          width: 300px;
          border: 2px solid #007acc;
          font-size: 1em;
          margin-top: 10px;
          box-sizing: border-box;
          border-radius: 5px;
          display: inline-block; /* Para que el label se comporte como bloque pero sin ocupar todo el ancho */
        }
      `;
  
      shadowRoot.appendChild(style);
      shadowRoot.appendChild(this.label);
    }
  
    actualizarMensaje(mensaje) {
      this.label.textContent = `Nombre: ${mensaje}`;
    }
  }
  
  customElements.define('receptor-component', ReceptorComponent);
  
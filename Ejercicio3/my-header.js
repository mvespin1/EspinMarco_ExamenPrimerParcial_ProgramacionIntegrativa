class MyHeader extends HTMLElement {
    constructor() {
      super();
      // Crear Shadow DOM
      this.attachShadow({ mode: 'open' });
      // Definir la estructura del componente de encabezado
      this.shadowRoot.innerHTML = `
        <header>
        <h1>PROGRAMACIÓN INTEGRATIVA DE COMPONENTES WEB</h1>
        <h2>EJERCICIO 3 - EXAMEN.</h2>
        </header>
      `;
    }
  }
  // Registrar el componente de encabezado
  customElements.define('my-header', MyHeader);
  
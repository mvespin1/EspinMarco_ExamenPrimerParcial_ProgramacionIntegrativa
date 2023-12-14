class MyHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
      <header>
      <h1>PROGRAMACIÓN INTEGRATIVA DE COMPONENTES WEB</h1>
      <h2>EJERCICIO 5 - EXAMEN</h2>
      <br>
      <h2 style="text-align: left; font-size: 11px;">Nombre:</h2>
      <ul>
        <li style="text-align: left; font-size: 11px;">Marco Espin</li>
      </ul>
    </header>
      `;
  }
}
customElements.define('my-header', MyHeader);

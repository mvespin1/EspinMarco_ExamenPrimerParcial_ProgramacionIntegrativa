// Componente de Formulario
class MyForm extends HTMLElement {
    constructor() {
      super();
      // Crear Shadow DOM
      this.attachShadow({ mode: 'open' });
      // Definir la estructura del componente de formulario
      this.shadowRoot.innerHTML = `

      <style>
      :host {
        display: block;
        margin: 20px auto;
        max-width: 400px;
      }

      form {
        background-color: #fff;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        padding: 20px;
      }

      label {
        display: block;
        margin-bottom: 8px;
      }

      input {
        width: 100%;
        padding: 8px;
        margin-bottom: 16px;
        border: 1px solid #ddd;
        border-radius: 4px;
        box-sizing: border-box;
      }

      button {
        background-color: #3498db;
        color: #fff;
        padding: 10px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
      }
    </style>

        <form>
          <label for="name">Nombre:</label>
          <input type="text" id="name" name="name" required>
  
          <label for="email">Correo Electrónico:</label>
          <input type="email" id="email" name="email" required>
  
          <button type="submit">Enviar</button>
        </form>
      `;
    }
  }
  
  // Registrar el componente de formulario
  customElements.define('my-form', MyForm);
  
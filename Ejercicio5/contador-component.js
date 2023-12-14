    // Define el Web Component
    class ContadorComponent extends HTMLElement {
      constructor() {
        super();
        // Estado interno del contador
        this._contadorValue = 0;

        // Crear la interfaz del componente
        const shadow = this.attachShadow({ mode: 'open' });

        // Contenedor principal
        const container = document.createElement('div');
        container.id = 'contador-container';

        // Caja con bordes y título
        const contadorBox = document.createElement('div');
        contadorBox.id = 'contador-box';

        // Título de la caja
        const title = document.createElement('div');
        title.id = 'contador-title';
        title.textContent = 'Contador';

        // Valor del contador
        this._contadorDisplay = document.createElement('div');
        this._contadorDisplay.id = 'contador-value';
        this._contadorDisplay.textContent = this._contadorValue;

        // Botones de suma y resta
        const contadorButtons = document.createElement('div');
        contadorButtons.id = 'contador-buttons';

        const addButton = document.createElement('button');
        addButton.textContent = '+';
        addButton.addEventListener('click', () => this._increment());

        const subtractButton = document.createElement('button');
        subtractButton.textContent = '-';
        subtractButton.addEventListener('click', () => this._decrement());

        contadorBox.appendChild(title);
        contadorBox.appendChild(this._contadorDisplay);
        contadorButtons.appendChild(addButton);
        contadorButtons.appendChild(subtractButton);
        contadorBox.appendChild(contadorButtons);
        container.appendChild(contadorBox);

        const style = document.createElement('style');
        style.textContent = `
        #contador-container {
          text-align: center;
          margin: 20px auto;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        #contador-box {
          border: 2px solid #3498db;
          border-radius: 10px;
          padding: 30px;
          margin-bottom: 30px;
          background-color: #ecf0f1;
        }

        #contador-title {
          font-size: 2em;
          margin-bottom: 15px;
          color: #2c3e50;
        }

        #contador-value {
          font-size: 3em;
          margin-bottom: 25px;
          color: #000;
          animation: count-up 0.5s ease-out;
        }

        #contador-buttons {
          display: flex;
          justify-content: center;
        }

        #contador-buttons button {
          font-size: 1.5em;
          margin: 0 15px;
          padding: 15px 25px;
          cursor: pointer;
          background-color: skyblue;
          color: white;
          border: none;
          border-radius: 8px;
          transition: background-color 0.3s ease-in-out;
        }

        #contador-buttons button:hover {
          background-color: #3B5E80;
        }

        @keyframes count-up {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        `;

        // Añadir estilos al sombreado (shadow DOM)
        shadow.appendChild(style);

        // Añadir contenedor principal al sombreado (shadow DOM)
        shadow.appendChild(container);
      }

      // Método para incrementar el contador
      _increment() {
        this._contadorValue++;
        this._updateDisplay();
      }

      // Método para decrementar el contador
      _decrement() {
        this._contadorValue--;
        this._updateDisplay();
      }

      // Método para actualizar la interfaz con el valor actual del contador
      _updateDisplay() {
        this._contadorDisplay.textContent = this._contadorValue;
      }
    }

    // Registrar el componente personalizado
    customElements.define('contador-component', ContadorComponent);

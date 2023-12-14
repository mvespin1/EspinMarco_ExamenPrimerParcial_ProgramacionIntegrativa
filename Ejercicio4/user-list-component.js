class UserListComponent extends HTMLElement {
    async connectedCallback() {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await response.json();
      this.innerHTML = `<ul>${users.map(user => `<li>${user.name}</li>`).join('')}</ul>`;
    }
  }
  customElements.define('user-list-component', UserListComponent);
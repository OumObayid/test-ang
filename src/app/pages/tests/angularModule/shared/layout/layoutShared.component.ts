import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-layout-shared',
  template: `
    <div
      class="auth-container container-fluid d-flex justify-content-center align-items-center bg-warning-subtle"
    >
      <div
        class="card shadow-lg p-4 bg-light"
        style="max-width: 400px; width: 100%;"
      >
        <h2 class="text-center text-primary">{{ title }}</h2>
        <ng-content></ng-content>
        <!-- Contenu dynamique (Login/Register) -->
      </div>
    </div>
  `,
  styles: `
.auth-container {
  width:70%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 83vh;
  background-color: #f4f4f4;
}

.auth-card {
  width: 350px;
  padding: 20px;
  background: white;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  text-align: center;
}

  `,
})
export class layoutSharedComponent {
  @Input() title: string = 'Authentification';
}

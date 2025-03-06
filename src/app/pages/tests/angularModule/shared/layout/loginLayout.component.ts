import { layoutSharedComponent } from './layoutShared.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-layout',
  imports: [layoutSharedComponent],
  template: `
    <app-layout-shared title="Connexion">
      <form class="p-4 rounded shadow bg-white">
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="Entrez votre email"
            required
          />
        </div>

        <div class="mb-3">
          <label for="password" class="form-label">Mot de passe</label>
          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="Entrez votre mot de passe"
            required
          />
        </div>

        <button type="submit" class="btn btn-warning w-100">
          Se connecter
        </button>
      </form>
    </app-layout-shared>
  `,
  styles: `

  `,
})
export class LoginLayoutComponent {}

// Liaison multiple avec une chaîne de caractères

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container">
      <h1>
        <strong>Les styles Bindings dans Angular:</strong> Liaison multiple avec
        une chaîne de caractères
      </h1>
      <hr />
      <!-- Affichage de la carte avec les styles dynamiques -->
      <div [style]="userCardStyles" class="card">
        <div class="card-body">
          <h5 class="card-title">User Profile</h5>
          <p class="card-text">{{ user.name }}</p>
        </div>
      </div>

      <!-- Champs pour changer la couleur de fond -->
      <div class="mt-3">
        <label for="bgColorInput" class="form-label"
          >Change Background Color:</label
        >
        <input
          id="bgColorInput"
          type="text"
          class="form-control"
          [(ngModel)]="bgColor"
          placeholder="Enter a color (e.g., #ff5733)"
        />
        <p>Current Background Color: {{ bgColor }}</p>
      </div>
      <div class=" mt-4">
        _______________________________________________________<span class="fs-2">cours</span
        >_______________________________________________________
      </div>
      voir code source
    </div>
  `,
})
export class Test17Component {
  // Exemple d'utilisateur
  user = { name: 'John Doe' };

  // Propriétés pour gérer les styles
  bgColor = '#f5f5f5'; // Couleur de fond de la carte

  // Styles dynamiques pour la carte
  //Un getter est une méthode spéciale en JavaScript/TypeScript qui permet de définir un accès en lecture à une propriété d'un objet.
  get userCardStyles() {
    return `display: flex; padding: 16px; background-color: ${this.bgColor};`;
  }

}

// Liaison avec un objet de styles
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container">
      <h1>
        <strong>Les styles Bindings dans Angular:</strong> Liaison avec un objet
        de styles
      </h1>
      <hr />
      <div [style]="userStyles" class="p-3 rounded">
        {{ user.name }}
      </div>
      <div class="mt-3">
        <!-- Champ pour modifier la couleur de fond -->
        <label for="bgColorInput" class="form-label"
          >Change Background Color:</label
        >
        <input
          id="bgColorInput"
          type="text"
          class="form-control"
          [(ngModel)]="bgColor"
          (input)="updateBackgroundColor()"
          placeholder="Enter a color (e.g., #ff5733)"
        />
        <p class="mt-2">
          Current Background Color: <strong>{{ bgColor }}</strong>
        </p>
      </div>
      <div class=" mt-4">
        _______________________________________________________<span class="fs-2">cours</span
        >_______________________________________________________
      </div>
      voir code source
    </div>
  `,
})
export class Test18Component {
  // Exemple d'utilisateur
  user = { name: 'John Doe' };

  // Variable pour stocker la couleur de fond dynamique
  bgColor = '#f0afca'; // Couleur par défaut

  // Objet de styles dynamiques pour l'élément
  userStyles = {
    display: 'flex',
    padding: '16px',
    backgroundColor: this.bgColor,
    fontSize: '1.2rem',
    border: '1px solid #ccc',
  };

  // Méthode pour mettre à jour la couleur de fond
  updateBackgroundColor() {
    this.userStyles = {
      ...this.userStyles, // Conserve les autres styles
      backgroundColor: this.bgColor, // Met à jour uniquement la couleur de fond
    };
  }
}

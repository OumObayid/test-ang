//Combinaison des approches
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container">
      <h1>
        <strong>Les styles Bindings dans Angular:</strong> Combinaison des
        approches
      </h1>
      <hr />
      <div
        class="p-3 border rounded"
        [style]="baseStyles"
        [style.color]="textColor"
        [style.fontSize.px]="fontSize"
      >
        {{ user.name }}
      </div>

      <!-- Contrôles interactifs -->
      <div class="mt-4">
        <label for="textColorInput" class="form-label">Text Color:</label>
        <input
          id="textColorInput"
          type="text"
          class="form-control mb-3"
          [(ngModel)]="textColor"
          placeholder="Enter a color (e.g., blue, #ff5733)"
        />

        <label for="fontSizeInput" class="form-label">Font Size (px):</label>
        <input
          id="fontSizeInput"
          type="number"
          class="form-control mb-3"
          [(ngModel)]="fontSize"
          placeholder="Enter font size (e.g., 16)"
        />
      </div>
      <div class=" mt-4">
        _______________________________________________________<span class="fs-2">cours</span
        >_______________________________________________________
      </div>
      voir code source
    </div>
  `,
  styles: [
    `
      .p-3 {
        max-width: 400px;
        margin: auto;
      }
    `,
  ],
})
export class Test19Component {
  // Données utilisateur
  user = { name: 'John Doe' };

  // Styles de base pour l'élément
  baseStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f9fa', // Couleur de fond par défaut
    padding: '16px',
    border: '1px solid #dee2e6',
  };

  // Propriétés dynamiques pour les styles
  textColor = '#000000'; // Couleur par défaut : noir
  fontSize = 16; // Taille de police par défaut : 16px
}

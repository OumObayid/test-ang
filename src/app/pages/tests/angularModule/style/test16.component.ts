// Liaison avec unités
// Cette syntaxe évite d'avoir à concaténer l'unité manuellement. Angular s'en charge pour nous !
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [CommonModule, FormsModule],
  template: `
     <div class="container">
      <h1>
        <strong>Les styles Bindings dans Angular:</strong> Liaison avec unités
      </h1>
      <hr>
      <div class="border border-2 w-25 m-2" [style.height.px]="cardHeight">
        {{ user.name }}
      </div>
      <div class=" w-25 m-2">
        <!-- Champs pour changer la hauteur de la carte -->
        <label for="heightInput">Change Card Height:</label>
        <input class="form-control"
          id="heightInput"
          type="number"
          [(ngModel)]="cardHeight"
          min="100"
          max="500"
          step="10"
        />
        <p>Current Height: {{ cardHeight }} px</p>
      </div>
      <div class=" mt-4">
        _______________________________________________________<span class="fs-2">cours</span
        >_______________________________________________________
      </div>
      voir code source
    </div>
  `,
})
export class test16Component {
  user = { name: 'John Doe' }; // Exemple d'utilisateur
  cardHeight = 200; // Hauteur initiale de la carte
}

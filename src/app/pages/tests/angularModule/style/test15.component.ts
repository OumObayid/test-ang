// La syntaxe la plus simple pour lier un style est d'utiliser:
// [style.propriété]="valeur".
import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  template: `
   <div class="container">
      <h1>
        <strong>Les Style Bindings dans Angular:</strong> Liaison d'une propriété style unique
      </h1>
      <hr>

        <div
          class="alert alert-info text-center"
          [style.display]="isVisible ? 'block' : 'none'"
        >
          <strong>{{ user.name }}</strong>
        </div>
        <button class="btn btn-success w-100 mt-2" (click)="toggleVisibility()">
          {{ isVisible ? 'Masquer' : 'Afficher' }}
        </button>

      <div class=" mt-4">
        _______________________________________________________<span class="fs-2">cours</span
        >_______________________________________________________
      </div>
      voir code source
    </div>

  `,
})
export class Test15Component {
  user = { name: 'John Doe' };
  isVisible = true;

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }
}

import { Component, Input, viewChild, ElementRef } from '@angular/core';
import { User } from '../../../../interfaces/user';

@Component({
  selector: 'app-enfant29',
  standalone: true,
  template: `
    <div #card class="border p-3 mb-2">
      <h3>{{ propsUser.firstname }} {{ propsUser.lastname }}</h3>
      <p>Email : {{ propsUser.email }}</p>
    </div>
  `,
})
export class Enfant29Component {
  @Input() propsUser!: User;
  card = viewChild<ElementRef>('card');

  // Méthode pour mettre en évidence un utilisateur
  colorCardUser() {
    const element = this.card(); // Accède à l'élément DOM correspondant
    if (element) {
      element.nativeElement.style.backgroundColor = 'yellow'; // Applique un style via ViewChild
    }
  }
  initialize() {
    const element = this.card(); // Accède à l'élément DOM correspondant
    if (element) {
      element.nativeElement.style.backgroundColor = ''; // Applique un style via ViewChild
    }
  }
}

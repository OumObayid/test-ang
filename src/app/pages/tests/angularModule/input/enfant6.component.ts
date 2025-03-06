// utilisation de ajax
import { CommonModule } from '@angular/common';
import { Component,Input } from '@angular/core';
import { Categorie } from '../../../../interfaces/categorie';

@Component({
  selector: 'app-enfant6',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="border p-2">
        Categorie:    {{ data.nom }}
    </div>
  `,
})
export class Enfant6Component {
  @Input() data: Categorie = {
    id: 0,
    nom: ''
  };
}

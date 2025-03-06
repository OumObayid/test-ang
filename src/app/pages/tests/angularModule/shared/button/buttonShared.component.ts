import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-shared',
  imports:[CommonModule],
  template: `

    <button class="btn me-2" [type]="type" [ngClass]="color" [disabled]="disabled">
      {{ label }}
    </button>
  `,
  styles: [`
    .primary { background-color: blue; color: white; }
    .secondary { background-color: gray; color: white; }
    .danger { background-color: red; color: white; }
  `]
})
export class ButtonSharedComponent {
  @Input() label: string = 'Bouton';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() color: 'primary' | 'secondary' | 'danger' = 'primary';
  @Input() disabled: boolean = false;
}





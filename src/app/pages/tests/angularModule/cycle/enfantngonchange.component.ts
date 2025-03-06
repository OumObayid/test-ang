import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [CommonModule],
  template: `
    <div class="border p-2 my-3">
      <h3>Composant Enfant</h3>
      <p>Message reçu : {{ message }}</p>
      <p *ngIf="previousMessage">Ancien message : {{ previousMessage }}</p>
    </div>
  `,
})
export class EnfantNgOnChangeComponent implements OnChanges {
  @Input() message!: string;
  previousMessage: string = '';

  ngOnChanges(changes: SimpleChanges) {
    if (changes['message'] && !changes['message'].firstChange) {
      this.previousMessage = changes['message'].previousValue;
    }
  }
}

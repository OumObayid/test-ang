import { Component } from '@angular/core';

@Component({
  selector: 'app-card-props',
  standalone: true,
  template: `
    <div class="simple-card my-3">
      <ng-content />
    </div>
  `,
  styles: `
    .simple-card {
      padding: 16px;
      border: 1px solid #ccc;
      border-radius: 10px;
      background-color:#fbf7ff
    }
  `
})
export class CardPropsComponent {}


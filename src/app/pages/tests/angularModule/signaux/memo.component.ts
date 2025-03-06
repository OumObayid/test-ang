import { Component, signal, memo } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  template: `
    <div class="container">
      <h2>Compteur: {{ count() }}</h2>
      <h3>Double: {{ doubleCount() }}</h3>
      <button (click)="increment()">Incrémenter</button>
    </div>
  `,
  styles: [
    `
      .container {
        text-align: center;
        margin-top: 20px;
      }
      button {
        background-color: #007bff;
        color: white;
        border: none;
        padding: 10px;
        cursor: pointer;
        font-size: 16px;
      }
      button:hover {
        background-color: #0056b3;
      }
    `,
  ],
})
export class MemoComponent {
  count = signal(0); // Signal réactif de base

  // Signal dérivé, recalculé uniquement si `count` change
  doubleCount = memo(() => this.count() * 2);

  increment() {
    this.count.set(this.count() + 1);
  }
}


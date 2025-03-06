import { Component, signal, store } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  template: `
    <div class="container">
      <h2>Compteur: {{ state.count }}</h2>
      <h3>Utilisateur: {{ state.user }}</h3>
      <button (click)="increment()">Incrémenter</button>
      <button (click)="setUser()">Changer Utilisateur</button>
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
        margin: 5px;
      }
      button:hover {
        background-color: #0056b3;
      }
    `,
  ],
})
export class CounterComponent {
  // 📌 Store avec un état structuré
  state = store({
    count: 0,
    user: 'Anonyme',
  });

  // 🎯 Met à jour `count`
  increment() {
    this.state.count += 1;
  }

  // 🎯 Met à jour `user`
  setUser() {
    this.state.user = 'Utilisateur ' + (Math.random() * 100).toFixed(0);
  }
}



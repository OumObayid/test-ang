import { Enfant31_2Component } from './enfant31_2.component';
import { Component, computed, contentChild } from '@angular/core';

@Component({
  selector: 'app-enfant31_1',
  standalone: true,
  template: `
    <div class="card">
      <h2>Profil Utilisateur</h2>
      <ng-content />

      <button class="btn btn-success" (click)="toggleConnect()">{{status? 'se deconnecter':'se connecter'}}</button>
        <p>Statut actuel : {{ status }}</p>

    </div>
  `,
   styles: `
   .card {
     padding: 16px;
     border: 1px solid #ddd;
     border-radius: 8px;
   }
 `
})
export class Enfant31_1Component {
  badge = contentChild(Enfant31_2Component);
  status=this.badge()?.status;
  toggleConnect(){
    this.badge()!.status=!this.badge()?.status
      }
}

import { Component } from '@angular/core';

export interface User {
  id: number;
  name: string;
  username?: string;
  email: string;
  phone?: string;
}
@Component({
  selector: 'app-user-role',
  standalone: true,
  template: `
    <div class="container">
      <h1>&#64;switch</h1>
      <hr />

      <h2>Panneau utilisateur</h2>
      @switch (userRole) { @case ('admin') {
      <div class="admin-panel">
        <h3>Panneau Administrateur</h3>
        <p>Accès complet au système</p>
      </div>
      } @case ('manager') {
      <div class="manager-panel">
        <h3>Panneau Manager</h3>
        <p>Accès à la gestion d'équipe</p>
      </div>
      } @default {
      <div class="user-panel">
        <h3>Panneau Utilisateur</h3>
        <p>Accès limité</p>
      </div>
      } }
      <div class=" mt-4">
        ****************************************<span class="fs-2">cours</span
        >*************************************************
      </div>
      <pre>
<strong>Syntaxe:</strong>
&#64;switch (expression) &#123;
&#64;case (valeur1) &#123;
// Code pour valeur1
&#125;
&#64;case (valeur2) &#123;
// Code pour valeur2
&#125;
&#64;default &#123;
// Code par défaut
&#125;
&#125;
      </pre
      >
    </div>
  `,
})
export class Test24Component {
  userRole: string = 'admin';
}

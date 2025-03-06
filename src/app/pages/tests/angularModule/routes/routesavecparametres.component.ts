import { Component } from '@angular/core';

@Component({
  selector: 'app-routes-avec-parametres',
  imports: [],
  template: `
  <h1>Routes Dynamiques avec des Paramètres</h1>
  <hr>
  <p>Les routes peuvent accepter des paramètres pour afficher du contenu dynamique.</p>
<h2>📌 Exemple: Route avec un ID utilisateur</h2>
<h3>🔹 1. Définition de la route (app.routes.ts) :</h3>
<pre class="tab">
&#123; path: 'user/:id', component: UserComponent &#125;</pre>
<h3>🔹 2. Récupération du paramètre dans UserComponent :</h3>
<pre class="tab">
import &#123; Component &#125; from '&#64;angular/core';
import &#123; ActivatedRoute &#125; from '&#64;angular/router';

&#64;Component(&#123;
  selector: 'app-user',
  template: &#96;&#60;h2&#62;Utilisateur ID: &#123; &#123; userId &#125; &#125;&#60;/h2&#62;&#96;
&#125;)
export class UserComponent &#123;
  userId: string = '';

  constructor(private route: ActivatedRoute) &#123;
    this.route.paramMap.subscribe(params =&#62; &#123;
      this.userId = params.get('id') || '';
    &#125;);
  &#125;
&#125;</pre>
<h3>🔹 3. Lien dynamique pour naviguer vers un utilisateur :</h3>
<pre class="tab">
&#60;a [routerLink]="['/user', 42]"&#62;Voir l'utilisateur 42&#60;/a&#62;</pre>

  `,
 styles: `
 pre,p{
   font-size:15px;
 }
.tab {
           background-color: #f8f9fa;
           padding: 15px;
           border: 1px solid #ddd;
           border-radius: 5px;
           overflow-x: auto;
           font-family: monospace;
           font-weight:bold;
       }
 `,
})
export class RoutesAvecParametresComponent {

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-redirection',
  imports: [],
  template: `
  <h1>Redirections et Pages 404 (Not Found)</h1>
  <hr>
  <p>On peut rediriger une URL et gérer les erreurs 404.</p>
  <h2>📌 Exemple: Page 404</h2>
  <h3>🔹 1. Définition des routes avec une redirection (app.routes.ts) :</h3>
  <pre class="tab">&#123; path: '', redirectTo: '/home', pathMatch: 'full' &#125;,
&#123; path: '**', component: NotFoundComponent &#125; // Gère les pages inexistantes
</pre>
<h3>🔹 2. Création du composant NotFoundComponent.ts :</h3>
<pre class="tab">import &#123; Component &#125; from '&#64;angular/core';

&#64;Component(&#123;
  selector: 'app-not-found',
  template: &#96;&#60;h2&#62;Page non trouvée&#60;/h2&#62;&#96;
&#125;)
export class NotFoundComponent &#123;&#125;
</pre>
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
export class RedirectionEtPage404Component {

}

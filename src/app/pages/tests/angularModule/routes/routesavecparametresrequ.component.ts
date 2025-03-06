import { Component } from '@angular/core';

@Component({
  selector: 'app-routes-parametre-req',
  imports: [],
  template: `
  <h1>Route avec Query Parameters (Paramètres de requête)</h1>
  <hr>
  <p>Les Query Params permettent de passer des informations supplémentaires dans l'URL.</p>
  <h2>📌 Exemple: Filtres dans une liste de produits</h2>
  <h3>🔹 1. Définition de la route (app.routes.ts) :</h3>
  <pre class="tab">&#123; path: 'products', component: ProductListComponent &#125;</pre>
  <h3>🔹 2. Récupération des Query Params (ProductListComponent.ts) :</h3>
  <pre class="tab">import &#123; Component &#125; from '&#64;angular/core';
import &#123; ActivatedRoute &#125; from '&#64;angular/router';

&#64;Component(&#123;
  selector: 'app-product-list',
  template: &#96;&#60;h2&#62;Catégorie: &#123; &#123; category &#125; &#125;&#60;/h2&#62;&#96;
&#125;)
export class ProductListComponent &#123;
  category: string = '';

  constructor(private route: ActivatedRoute) &#123;
    this.route.queryParamMap.subscribe(params =&#62; &#123;
      this.category = params.get('category') || 'Toutes';
    &#125;);
  &#125;
&#125;</pre>
<h3>🔹 3. Lien avec Query Params :</h3>
<pre class="tab">&#60;a [routerLink]="['/products']" [queryParams]="&#123; category: 'electronics' &#125;"&#62;oir les Électroniques&#62;/a&#62;</pre>
  `,
 styles: `
 pre,p{
   font-size:15px;
 }
 p
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
export class RoutesAvecParametresReqComponent {

}

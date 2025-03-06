import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-LaravelDonneesEloquent',
  template:`
<h1>📌 Partie 2 : Gestion de la Base de Données avec Eloquent
</h1>
<h2>🔹 CRUD avec Eloquent</h2>
<h3>🔸 Créer un produit</h3>
<pre class="tab">$product = Product::create([
    'name' => 'Produit Test',
    'description' => 'Ceci est un produit test',
    'price' => 49.99
]);</pre>
<h3>🔸 Lire un produit</h3>
<pre class="tab">$product = Product::find(1); // Récupérer par ID</pre>
<h3>🔸 Mettre à jour un produit</h3>
<pre class="tab">$product = Product::find(1);
$product->price = 59.99;
$product->save();</pre>
<h3>🔸 Supprimer un produit</h3>
<pre class="tab">Product::destroy(1);</pre>

  `,
 styles: `
 .tab,p,li{
   font-size:15px;
 }
.tab {
          background-color: #f8f9fa;
          padding: 15px;
          border: 1px solid #ddd;
          border-radius: 5px;
          overflow-x: auto;
          font-family: monospace;
        }
 `,})
export class LaravelDonneesEloquentComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}

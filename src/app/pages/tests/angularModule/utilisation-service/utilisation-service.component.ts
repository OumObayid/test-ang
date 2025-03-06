import { Component } from '@angular/core';

@Component({
  selector: 'app-utilisation-service',
  imports: [],
  template: `
    <div class="container mt-4">
      <h1>Les Services dans Angular</h1>
      <hr />

      <p>
        Les services dans Angular sont utilisés pour centraliser la logique
        métier et faciliter le partage de données entre plusieurs composants.
        Ils permettent d'effectuer des appels API, de gérer un état global, et
        de réduire la redondance du code.
      </p>
      <h2>📌 Pourquoi utiliser un Service ?</h2>
      <ul>
        <li>Séparer la logique métier du composant.</li>
        <li>Réutiliser le code dans plusieurs composants.</li>
        <li>Faciliter la gestion des appels HTTP vers une API.</li>
        <li>Permettre l’injection de dépendances.</li>
      </ul>
      <h2>🏗 Créer et Utiliser un Service dans Angular</h2>
      <h4>1. Créer un Service</h4>
      <pre class="tab">
ng generate service services/product
</pre
      >
      <p>Cela crée deux fichiers :</p>
      <ul>
        <li>product.service.ts</li>
        <li>product.service.spec.ts (pour les tests)</li>
      </ul>
      <h4>2. Définition du Service</h4>
      <p>
        Dans le fichier product.service.ts, on crée un service pour gérer les
        produits.
      </p>
      <pre class="tab">
import &#123; Injectable &#125; from '&#64;angular/core';
import &#123; HttpClient &#125; from '&#64;angular/common/http';
import &#123; Observable &#125; from 'rxjs';
import &#123; Product &#125; from '../models/product';

&#64;Injectable(&#123;
  providedIn: 'root', // Permet au service d'être accessible partout
&#125;)
export class ProductService &#123;
  private apiUrl = 'https://fakestoreapi.com/products'; // URL de l'API

  constructor(private http: HttpClient) &#123;&#125;

  // Récupérer tous les produits
  getProducts(): Observable&#60;Product[]&#62; &#123;
    return this.http.get&#60;Product[]&#62;(this.apiUrl);
  &#125;

  // Récupérer un produit par ID
  getProductById(id: number): Observable&#60;Product&#62; &#123;
    return this.http.get&#60;Product&#62;(&#96;$&#123;this.apiUrl&#125;/$&#123;id&#125;&#96;);
  &#125;

  // Ajouter un produit
  addProduct(product: Product): Observable&#60;Product&#62; &#123;
    return this.http.post&#60;Product&#62;(this.apiUrl, product);
  &#125;

  // Mettre à jour un produit
  updateProduct(id: number, product: Product): Observable&#60;Product&#62; &#123;
    return this.http.put&#60;Product&#62;(&#96;$&#123;this.apiUrl&#125;/$&#123;id&#125;&#96;, product);
  &#125;

  // Supprimer un produit
  deleteProduct(id: number): Observable&#60;void&#62; &#123;
    return this.http.delete&#60;void&#62;(&#96;$&#123;this.apiUrl&#125;/$&#123;id&#125;&#96;);
  &#125;
&#125;</pre
      >
      <h4>👉 Explication :</h4>
      <ul>
        <li>
          &#64;Injectable(&#123; providedIn: 'root' &#125;) : Le service est
          injectable et accessible dans toute l'application.
        </li>
        <li>HttpClient : Permet d'effectuer des requêtes HTTP vers une API.</li>
        <li>
          Observable&#60;T&#62; : Utilisé pour gérer les données de manière
          asynchrone avec RxJS.
        </li>
      </ul>
      <h4>Utiliser un Service dans un Composant:</h4>
      <p>
        Maintenant que le service est créé, nous pouvons l'utiliser dans un
        composant.
      </p>
      🔹 Injection du Service dans un Composant Dans product-list.component.ts :
      <pre class="tab">
import &#123; Component, OnInit &#125; from '&#64;angular/core';
import &#123; ProductService &#125; from '../services/product.service';
import &#123; Product &#125; from '../models/product';

&#64;Component(&#123;
  selector: 'app-product-list',
  template: &#96;
    &#60;h1&#62;Liste des Produits&#60;/h1&#62;
    &#60;ul&#62;
      &#60;li *ngFor="let product of products"&#62;
        &#123; &#123; product.nom &#125; &#125; - &#123; &#123; product.prix | currency &#125; &#125;
      &#60;/li&#62;
    &#60;/ul&#62;
  &#96;,
&#125;)
export class ProductListComponent implements OnInit &#123;
  products: Product[] = [];

  constructor(private productService: ProductService) &#123;&#125;

  ngOnInit(): void &#123;
    this.productService.getProducts().subscribe((data) =&#62; &#123;
      this.products = data;
    &#125;);
  &#125;
&#125;</pre
      >
      <h4>👉 Explication :</h4>
      <ul>
        <li>
          constructor(private productService: ProductService) &#123;&#125; :
          Injection du service.
        </li>
        <li>
          this.productService.getProducts().subscribe(...) : Récupère les
          données et les stocke dans products.
        </li>
      </ul>
      <h4>🎯 Avantages des Services</h4>
      <p>
        ✅ Réutilisabilité : Un même service peut être utilisé dans plusieurs
        composants.
      </p>
      <p>
        ✅ Centralisation de la logique métier : Facilite la maintenance et la
        gestion des appels API.
      </p>
      <p>
        ✅ Facilité de test : Permet d’écrire des tests unitaires indépendants
        des composants.
      </p>
      <p>✅ Optimisation des performances : Évite les appels API redondants.</p>
    </div>
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
  `,
})
export class UtilisationServiceComponent {}

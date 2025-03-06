import { ProductService } from './products.service';
import { ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component, viewChild } from '@angular/core';

@Component({
  selector: 'app-http',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container mt-3">
      <h1>C'est quoi Http Client ?</h1>
      <hr />
      <p>
        HttpClient est le service intégré d'Angular pour effectuer des requêtes HTTP en GET, POST, DELETE, PUT etc. Il permet de communiquer avec des API REST, récupérer des données JSON, envoyer des formulaires, gérer des erreurs, et bien plus encore.
      </p>
      <h3>Configuration:</h3>
      <p>
        Pour pouvoir utiliser le HttpClient, vous devez ajouter
        provideHttpClient() dans le tableau de providers de appConfig.
      </p>
      <pre class="tab">
export const appConfig: ApplicationConfig = &#123;
  providers: [provideHttpClient()],
&#125;;</pre
      >
      <p>
        Cela a pour effet de mettre à disposition le HttpClient au sein de votre
        application entière, ainsi vous pourrez faire vos requêtes http.
      </p>
      <h3>Création du service avec httpclient:</h3>
      <pre class="tab">import &#123; Injectable &#125; from '&#64;angular/core';
import &#123; HttpClient, HttpHeaders &#125; from '&#64;angular/common/http';
import &#123; Observable, throwError &#125; from 'rxjs';
import &#123; catchError &#125; from 'rxjs/operators';

&#64;Injectable(&#123;
  providedIn: 'root',
&#125;)
export class ProductService &#123;
  private apiUrl = 'https://dummyjson.com/products'; // URL de l'API

  constructor(private http: HttpClient) &#123;&#125;

  // 🔹 1️⃣ Récupérer tous les produits (GET)
  getProducts(): Observable&#60;any&#62; &#123;
    return this.http.get&#60;any&#62;(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  &#125;

  // 🔹 2️⃣ Récupérer un produit par ID (GET)
  getProductById(id: number): Observable&#60;any&#62; &#123;
    return this.http.get&#60;any&#62;(&#96;$&#123;this.apiUrl&#125;/$&#123;id&#125;&#96;).pipe(
      catchError(this.handleError)
    );
  &#125;

  // 🔹 3️⃣ Ajouter un produit (POST)
  addProduct(product: any): Observable&#60;any&#62; &#123;
    return this.http.post&#60;any&#62;(this.apiUrl, product, this.httpOptions()).pipe(
      catchError(this.handleError)
    );
  &#125;

  // 🔹 4️⃣ Mettre à jour un produit (PUT)
  updateProduct(id: number, product: any): Observable&#60;any&#62; &#123;
    return this.http.put&#60;any&#62;(&#96;$&#123;this.apiUrl&#125;/$&#123;id&#125;&#96;, product, this.httpOptions()).pipe(
      catchError(this.handleError)
    );
  &#125;

  // 🔹 5️⃣ Supprimer un produit (DELETE)
  deleteProduct(id: number): Observable&#60;any&#62; &#123;
    return this.http.delete&#60;any&#62;(&#96;$&#123;this.apiUrl&#125;/$&#123;id&#125;&#96;).pipe(
      catchError(this.handleError)
    );
  &#125;

  // 🛑 Gestion des erreurs
  private handleError(error: any) &#123;
    console.error('Erreur détectée:', error);
    return throwError(() =&#62; new Error('Problème avec l\'API.'));
  &#125;

  // 📌 Options HTTP (headers)
  private httpOptions() &#123;
    return &#123;
      headers: new HttpHeaders(&#123;
        'Content-Type': 'application/json',
      &#125;),
    &#125;;
  &#125;
&#125;
</pre>
      <h3>Utilisation du Service dans un Composant</h3>
      <p>On va maintenant utiliser notre ProductService dans un composant pour afficher les données de l’API.</p>
      <p>👉 Code du composant product.component.ts :</p>
      <pre class="tab">import &#123; Component, OnInit &#125; from '&#64;angular/core';
import &#123; ProductService &#125; from '../services/product.service';
import &#123; CommonModule &#125; from '&#64;angular/common';

&#64;Component(&#123;
  selector: 'app-product',
  imports:[CommonModule],
  template: &#96;
  &#60;div class="container"&#62;
  &#60;h1&#62;Liste des Produits&#60;/h1&#62;
  &#60;hr /&#62;

  &#60;div *ngIf="hasError"&#62;
    &#60;p class="text-danger"&#62;Une erreur s'est produite lors du chargement des produits.&#60;/p&#62;
  &#60;/div&#62;

  &#60;div *ngIf="products.length &#62; 0; else noProducts" class="row"&#62;
    &#60;div *ngFor="let product of products" class="col-md-4"&#62;
      &#60;div class="card mb-4"&#62;
        &#60;img [src]="product.thumbnail" class="card-img-top" [alt]="product.title" /&#62;
        &#60;div class="card-body"&#62;
          &#60;h5 class="card-title"&#62;&#123; &#123; product.title &#125; &#125;&#60;/h5&#62;
          &#60;p class="card-text"&#62;&#123; &#123; product.description &#125;&#125;&#60;/p&#62;
          &#60;p&#62;&#60;strong&#62;Prix:&#60;/strong&#62; &#123; &#123; product.price | currency &#125; &#125;&#60;/p&#62;
        &#60;/div&#62;
      &#60;/div&#62;
    &#60;/div&#62;
  &#60;/div&#62;

  &#60;ng-template #noProducts&#62;
    &#60;p&#62;Aucun produit disponible.&#60;/p&#62;
  &#60;/ng-template&#62;
&#60;/div&#62;

  &#96;,

&#125;)
export class ProductComponent implements OnInit &#123;
  products: any[] = []; // Stockage des produits
  hasError: boolean = false; // Gestion des erreurs

  constructor(private productService: ProductService) &#123;&#125;

  ngOnInit(): void &#123;
    this.productService.getProducts().subscribe(&#123;
      next: (response) =&#62; &#123;
        this.products = response.products; // L'API retourne un objet avec &#96;products&#96;
        console.log('Produits récupérés:', this.products);
      &#125;,
      error: (err) =&#62; &#123;
        console.error('Erreur lors de la récupération:', err);
        this.hasError = true;
      &#125;,
    &#125;);
  &#125;
&#125;</pre>
      <hr />
      <h2>Liste des produits</h2>
      @if (products.length > 0) {
      <div class="row mt-3">
        @for (product of products; track $index) { @if ($index < 9) {
        <!-- Afficher uniquement les 10 premiers produits -->
        <div class="col-md-4 mb-4">
          <div class="card">
            <img
              [src]="
                product.thumbnail ||
                (product.images?.length ? product.images[0] : '')
              "
              [alt]="product.nom"
              class="card-img-top img-fluid"
              style="max-height: 150px; object-fit: cover;"
            />
            <div class="card-body">
              <h5 class="card-title">{{ product.title }}</h5>
              <p class="card-text">
                {{ product.description.substring(0, 100) + '...' }}
                <!-- Description raccourcie -->
              </p>
              <p class="card-text">
                <strong>Catégorie :</strong> {{ product.category }}
              </p>
              <p class="card-text">
                <strong>Prix :</strong> {{ product.price }} €
              </p>
              <a href="#" class="btn btn-primary">Voir le produit</a>
            </div>
          </div>
        </div>
        } }
      </div>
      } @if (products.length === 0 && hasError) {
      <div class="alert alert-danger">
        Une erreur est survenue lors de la récupération des produits.
      </div>
      }
      <hr />
    </div>
  `,
  styles: `
   pre,p{
          font-size:15px;
         }
.fa-check  {
     color: grey;
   }

i.fa-copy {
     cursor: pointer;
     color: grey;
     font-size: 20px;
     position: absolute;
     top: 20px;
     right: 20px;
     transition: color 0.5s ease, transform 0.3s ease;
     display: inline-block;
     padding: 10px;
   }
i.fa-copy:hover{
       color:#aaacad;
     transform: scale(1.2); /* Effet d'agrandissement au survol */
     cursor: pointer; /* Change le curseur pour indiquer une action cliquable */
     }
     .confirm{
       position: absolute;
       top: 30px;
       right: 60px;
       color:grey;
            font-weight:bold;
     }
      .tab {
        background-color:#f8f9fa;
        padding: 15px;
        border: 1px solid #ddd;
        border-radius: 5px;
        overflow-x: auto;
        font-family: monospace;
      }
      .active {
        background-color:#eef06f !important; /* Couleur de l'onglet actif */
     border-color: grey; /* Couleur de la bordure pour l'onglet actif */
   }
      h3 {
        margin-top: 20px;
      }
      `,
  // -------------------------style pour afficher le code source----------------
})
export class ClienthttpComponent {
  products: any[] = []; // Stockage des produits
  hasError: boolean = false; // Gestion des erreurs

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (response) => {
        this.products = response.products; // L'API retourne un objet avec `products`
        console.log('Produits récupérés:', this.products);
      },
      error: (err) => {
        console.error('Erreur lors de la récupération:', err);
        this.hasError = true;
      },
    });
  }

  // ----------------------ts pour afficher le code source--------------------
  infoTab1 = viewChild<ElementRef>('tab1');
  infoTab2 = viewChild<ElementRef>('tab2');
  clicked: boolean = false;
  copy1() {
    const element = this.infoTab1()?.nativeElement;
    if (element) navigator.clipboard.writeText(element.textContent);
    this.clicked = true;
    setTimeout(() => {
      this.clicked = false;
    }, 1500);
  }
  // ----------------------Fin ts pour afficher le code source--------------------
}

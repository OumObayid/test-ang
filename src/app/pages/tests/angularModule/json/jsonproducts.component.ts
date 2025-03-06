import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // Importer Router
import { Component, OnInit, viewChild, ElementRef } from '@angular/core';
import {
  Product,
  JsonProductsService,
} from '../../../../services/http/json/jsonproducts.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container">
      <h1>Crud avec api json</h1>
      <hr />
      <p>Dans ce cours, nous allons voir comment effectuer les opérations CRUD (Create, Read, Update, Delete) dans une application Angular en utilisant une API REST JSON créé par node js. Nous utiliserons HttpClient pour communiquer avec cette API distante (JSON Server).</p>
      <p>(voir démarche à suivre)</p>
      <hr>
      <h3 class="mb-4">Gestion des Produits</h3>
      <p>Pour que ça marche, il faur démarrer le serveur json</p>
      <!-- Ajouter un produit -->
      <div class="mb-4">
        <div class="card-header">Ajouter un produit</div>
        <div class="card-body">
          <form (ngSubmit)="addProduct()" class="row g-3">
            <div class="col-md-6">
              <label for="name" class="form-label">Nom</label>
              <input
                type="text"
                id="name"
                class="form-control"
                [(ngModel)]="newProduct.name"
                name="name"
                required
              />
            </div>
            <div class="col-md-6">
              <label for="price" class="form-label">Prix</label>
              <input
                type="number"
                id="price"
                class="form-control"
                [(ngModel)]="newProduct.price"
                name="price"
                required
              />
            </div>
            <div class="col-md-6">
              <label for="categoryName" class="form-label"
                >Catégorie name</label
              >
              <input
                type="text"
                id="categoryName"
                class="form-control"
                [(ngModel)]="newProduct.categoryName"
                name="categoryName"
                required
              />
            </div>
            <div class="col-md-12">
              <label for="description" class="form-label">Description</label>
              <textarea
                id="description"
                class="form-control"
                [(ngModel)]="newProduct.description"
                name="description"
                rows="3"
                required
              ></textarea>
            </div>
            <div class="col-12">
              <button type="submit" class="btn btn-success">Ajouter</button>
            </div>
          </form>
        </div>
      </div>

      <!-- Liste des produits -->
      <div>
        <h3>Liste des Produits</h3>
        <hr />
        <div class="row">
          <div
            *ngFor="let product of products"
            class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 flex-wrap"
          >
            <div class="card d-flex flex-column mb-4 p-2">
              <strong>{{ product.name }}</strong>
              Prix : {{ product.price }} € - Catégorie :
              {{ product.categoryName }}<br />
              <em>{{ product.description }}</em>
              <div class="mt-2">
                <button
                  class="btn btn-sm btn-warning me-2"
                  (click)="navigateToUpdatePage(product.id)"
                >
                  Modifier
                </button>
                <button
                  class="btn btn-sm btn-danger"
                  (click)="deleteProduct(product.id)"
                >
                  Supprimer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- --------------------Template pour afficher le code source---------------- -->
      <!-- Nav Tabs -->
      <ul class="nav nav-tabs" id="codeTabs" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="c1-tab"
            data-bs-toggle="tab"
            data-bs-target="#c1"
            type="button"
            role="tab"
            aria-controls="c1"
            aria-selected="true"
          >
            jsonproducts.component.ts
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link "
            id="c2-tab"
            data-bs-toggle="tab"
            data-bs-target="#c2"
            type="button"
            role="tab"
            aria-controls="c2"
            aria-selected="true"
          >
          jsonupdateproduct.component.ts
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="c3-tab"
            data-bs-toggle="tab"
            data-bs-target="#c3"
            type="button"
            role="tab"
            aria-controls="c3"
            aria-selected="true"
          >
            jsonproducts.service.ts
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="c4-tab"
            data-bs-toggle="tab"
            data-bs-target="#c4"
            type="button"
            role="tab"
            aria-controls="c4"
            aria-selected="true"
          >
            Démarche à suivre
          </button>
        </li>
      </ul>

      <!-- Tab Content -->
      <div class="tab-content" id="codeTabsContent" style="position: relative;">
        <!-- Composant C1 -->
        <div
          class="tab-pane fade show active "
          id="c1"
          role="tabpanel"
          aria-labelledby="c1-tab"
          style="position: relative;"
        >
          <!-- Bouton de copie pour C1 -->
          <i (click)="copy1()" class="fas fa-copy"></i>
          <span class="confirm" *ngIf="clicked"
            >copied <i class="fas fa-check"></i>
          </span>
          <pre #tab1 class="tab fw-bold" ngNonBindable>
import &#123; CommonModule &#125; from '&#64;angular/common';
import &#123; FormsModule &#125; from '&#64;angular/forms';
import &#123; Router &#125; from '&#64;angular/router'; // Importer Router
import &#123; Component, OnInit &#125; from '&#64;angular/core';
import &#123; Product, JsonProductsService &#125; from '../../../services/http/json/jsonproducts.service';

&#64;Component(&#123;
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: &#96;
    &#60;div class="container mt-4"&#62;
      &#60;h1 class="text-center mb-4"&#62;Gestion des Produits&#60;/h1&#62;
      &#60;!-- Ajouter un produit --&#62;
      &#60;div class="mb-4"&#62;
        &#60;div class="card-header"&#62;Ajouter un produit&#60;/div&#62;
        &#60;div class="card-body"&#62;
          &#60;form (ngSubmit)="addProduct()" class="row g-3"&#62;
            &#60;div class="col-md-6"&#62;
              &#60;label for="name" class="form-label"&#62;Nom&#60;/label&#62;
              &#60;input
                type="text"
                id="name"
                class="form-control"
                [(ngModel)]="newProduct.name"
                name="name"
                required
              /&#62;
            &#60;/div&#62;
            &#60;div class="col-md-6"&#62;
              &#60;label for="price" class="form-label"&#62;Prix&#60;/label&#62;
              &#60;input
                type="number"
                id="price"
                class="form-control"
                [(ngModel)]="newProduct.price"
                name="price"
                required
              /&#62;
            &#60;/div&#62;
            &#60;div class="col-md-6"&#62;
              &#60;label for="categoryName" class="form-label"&#62;Catégorie name&#60;/label&#62;
              &#60;input
                type="text"
                id="categoryName"
                class="form-control"
                [(ngModel)]="newProduct.categoryName"
                name="categoryName"
                required
              /&#62;
            &#60;/div&#62;
            &#60;div class="col-md-12"&#62;
              &#60;label for="description" class="form-label"&#62;Description&#60;/label&#62;
              &#60;textarea
                id="description"
                class="form-control"
                [(ngModel)]="newProduct.description"
                name="description"
                rows="3"
                required
              &#62;&#60;/textarea&#62;
            &#60;/div&#62;
            &#60;div class="col-12"&#62;
              &#60;button type="submit" class="btn btn-success"&#62;Ajouter&#60;/button&#62;
            &#60;/div&#62;
          &#60;/form&#62;
        &#60;/div&#62;
      &#60;/div&#62;

      &#60;!-- Liste des produits --&#62;
      &#60;div &#62;
        &#60;h3&#62; Liste des Produits&#60;/h3&#62;
        &#60;hr&#62;
        &#60;div class="row"&#62;
        &#60;div
          *ngFor="let product of products"
          class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 flex-wrap"
        &#62;
          &#60;div class="card d-flex flex-column mb-4 p-2"&#62;
            &#60;strong&#62;&#123;&#123; product.name &#125;&#125;&#60;/strong&#62;
            Prix : &#123;&#123; product.price &#125;&#125; € - Catégorie : &#123;&#123; product.categoryName &#125;&#125;&#60;br /&#62;
            &#60;em&#62;&#123;&#123; product.description &#125;&#125;&#60;/em&#62;
            &#60;div class="mt-2"&#62;
              &#60;button
                class="btn btn-sm btn-warning me-2"
                (click)="navigateToUpdatePage(product.id)"
              &#62;
                Modifier
              &#60;/button&#62;
              &#60;button
                class="btn btn-sm btn-danger"
                (click)="deleteProduct(product.id)"
              &#62;
                Supprimer
              &#60;/button&#62;
            &#60;/div&#62;
          &#60;/div&#62;
        &#60;/div&#62;
      &#60;/div&#62;
    &#60;/div&#62;
  &#96;,
  styles: [],
&#125;)
export class JsonProductsComponent implements OnInit &#123;
  products: Product[] = [];
  newProduct: Product = &#123;
    id: 0,
    name: '',
    price: 0,
    categoryName: '',
    description: '',
  &#125;;

  constructor(
    private jsonProductsService: JsonProductsService,
    private router: Router // Injecter le Router
  ) &#123;&#125;
// Recuperation des produits lors de l'initialisation du composant
  ngOnInit(): void &#123;
    this.fetchProducts();
  &#125;
// Recuperation des produits via le service et affichage des produits dans le template
  fetchProducts(): void &#123;
    this.jsonProductsService.getProducts().subscribe((data) =&#62; &#123;
      this.products = data;
      console.log('data :', data);
    &#125;);
  &#125;
//preparation du produit à envoyer au service pour ajout dans la base de données
  addProduct(): void &#123;
    const newId =
      this.products.length &#62; 0
        ? Math.max(...this.products.map((p) =&#62; p.id)) + 1
        : 1;
    const productToAdd = &#123; ...this.newProduct, id: newId &#125;;
// envoie du produit via le service
    this.jsonProductsService.addProduct(productToAdd).subscribe((product) =&#62; &#123;
      this.products.push(product); //reaffichage des produits avec le nouveau ajouté
      // Reinitialisation du formailre
      // ou  this.fetchProducts();
      this.newProduct = &#123;
        id: 0,
        name: '',
        price: 0,
        categoryName: '',
        description: '',
      &#125;;
    &#125;);
  &#125;
// Redirection vers la page de mise à jour
  navigateToUpdatePage(productId: number): void &#123;
    // Rediriger vers la page de mise à jour
    this.router.navigate(['/updateproduct-json', productId]);
  &#125;
// Suppression d'un produit via le service et reaffichage des produits sans le produit supprimé
  deleteProduct(id: number): void &#123;
    this.jsonProductsService.deleteProduct(id).subscribe(() =&#62; &#123;
      this.products = this.products.filter((p) =&#62; p.id !== id); //reaffichage des produits sans le produit supprimé
      // ou  this.fetchProducts();
    &#125;);
  &#125;
&#125;</pre
          >
        </div>
         <!-- Composant C2 -->
         <div
          class="tab-pane fade show "
          id="c2"
          role="tabpanel"
          aria-labelledby="c2-tab"
          style="position: relative;"
        >
          <!-- Bouton de copie pour C2 -->
          <i (click)="copy2()" class="fas fa-copy"></i>
          <span class="confirm" *ngIf="clicked"
            >copied <i class="fas fa-check"></i>
          </span>
          <pre #tab2 class="tab fw-bold" ngNonBindable>
import &#123; FormsModule &#125; from '&#64;angular/forms';
import &#123; CommonModule &#125; from '&#64;angular/common';
import &#123; Component, OnInit &#125; from '&#64;angular/core';
import &#123; ActivatedRoute, Router &#125; from '&#64;angular/router';
import &#123; JsonProductsService &#125; from '../../../services/http/json/jsonproducts.service';
import &#123; Product &#125; from '../../../services/http/json/jsonproducts.service';

&#64;Component(&#123;
  selector: 'app-update-product',
  imports: [CommonModule, FormsModule],
  template: &#96;
    &#60;div class="container mt-4"&#62;
      &#60;h1 class="text-center mb-4"&#62;Mettre à jour le produit&#60;/h1&#62;
      &#60;div class="card-body"&#62;
        &#60;form (ngSubmit)="updateProduct()" class="row g-3"&#62;
          &#60;div class="col-md-6"&#62;
            &#60;label for="name" class="form-label"&#62;Nom&#60;/label&#62;
            &#60;input
              type="text"
              id="name"
              class="form-control"
              [(ngModel)]="product.name"
              name="name"
              required
            /&#62;
          &#60;/div&#62;
          &#60;div class="col-md-6"&#62;
            &#60;label for="price" class="form-label"&#62;Prix&#60;/label&#62;
            &#60;input
              type="number"
              id="price"
              class="form-control"
              [(ngModel)]="product.price"
              name="price"
              required
            /&#62;
          &#60;/div&#62;
          &#60;div class="col-md-6"&#62;
            &#60;label for="categoryName" class="form-label"&#62;Catégorie name&#60;/label&#62;
            &#60;input
              type="text"
              id="categoryName"
              class="form-control"
              [(ngModel)]="product.categoryName"
              name="categoryName"
              required
            /&#62;
          &#60;/div&#62;
          &#60;div class="col-md-12"&#62;
            &#60;label for="description" class="form-label"&#62;Description&#60;/label&#62;
            &#60;textarea
              id="description"
              class="form-control"
              [(ngModel)]="product.description"
              name="description"
              rows="3"
              required
            &#62;&#60;/textarea&#62;
          &#60;/div&#62;
          &#60;div class="col-12"&#62;
            &#60;button type="submit" class="btn btn-success"&#62;Mettre à jour&#60;/button&#62;
          &#60;/div&#62;
        &#60;/form&#62;
      &#60;/div&#62;
    &#60;/div&#62;
  &#96;,
  styles: [],
&#125;)
export class JsonUpdateProductComponent implements OnInit &#123;
  // Initialisation d'un produit vide
  product: Product = &#123;
    id: 0,
    name: '',
    price: 0,
    categoryName: '',
    description: '',
  &#125;;

  // Injection des dépendances
  constructor(
    private activatedRoute: ActivatedRoute,
    private jsonProductsService: JsonProductsService,
    private router: Router
  ) &#123;&#125;

  // Récupérer le produit par ID lors de l'initialisation du composant
  ngOnInit(): void &#123;
    const productId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.jsonProductsService.getProductById(productId).subscribe((product) =&#62; &#123;
      this.product = product;
    &#125;);
  &#125;

  // Mettre à jour le produit et rediriger vers la liste des produits après mise à jour
  updateProduct(): void &#123;
    this.jsonProductsService.updateProduct(this.product).subscribe(() =&#62; &#123;
      alert('Produit mis à jour !');
      this.router.navigate(['/products-json']); // Redirection vers la liste des produits après mise à jour
    &#125;);
  &#125;
&#125;</pre
          >
        </div>
         <!-- Composant C3 -->
         <div
          class="tab-pane fade show"
          id="c3"
          role="tabpanel"
          aria-labelledby="c3-tab"
          style="position: relative;"
        >
          <!-- Bouton de copie pour C3 -->
          <i (click)="copy3()" class="fas fa-copy"></i>
          <span class="confirm" *ngIf="clicked"
            >copied <i class="fas fa-check"></i>
          </span>
          <pre #tab3 class="tab fw-bold" ngNonBindable>
import &#123; HttpClient &#125; from '&#64;angular/common/http';
import &#123; Injectable &#125; from '&#64;angular/core';
import &#123; Observable &#125; from 'rxjs';

export interface Product &#123;
  id: number;
  name: string;
  price: number;
  categoryName: string;
  description: string;
&#125;

&#64;Injectable(&#123;
  providedIn: 'root',
&#125;)
export class JsonProductsService &#123;
  // URL de l'API
  private baseURL = 'http://localhost:3000/products';

  // Injecter le service HttpClient
  constructor(private http: HttpClient) &#123;&#125;

  // Récupérer tous les produits
  getProducts(): Observable&#60;Product[]&#62; &#123;
    return this.http.get&#60;Product[]&#62;(this.baseURL);
  &#125;
  // Récupérer un produit par ID
  getProductById(id: number): Observable&#60;Product&#62; &#123;
    return this.http.get&#60;Product&#62;(d&#96;$&#123;this.baseURL&#125;/$&#123;id&#125;d&#96;);
  &#125;

  // Ajouter un produit
  addProduct(product: Product): Observable&#60;Product&#62; &#123;
    return this.http.post&#60;Product&#62;(this.baseURL, product);
  &#125;

  // Modifier un produit
  updateProduct(product: Product): Observable&#60;Product&#62; &#123;
    return this.http.put&#60;Product&#62;(d&#96;$&#123;this.baseURL&#125;/$&#123;product.id&#125;d&#96;, product);
  &#125;

  // Supprimer un produit
  deleteProduct(id: number): Observable&#60;void&#62; &#123;
    return this.http.delete&#60;void&#62;(d&#96;$&#123;this.baseURL&#125;/$&#123;id&#125;d&#96;);
  &#125;
&#125;</pre
          >
        </div>
         <!-- Composant C4 -->
         <div
          class="tab-pane fade show"
          id="c4"
          role="tabpanel"
          aria-labelledby="c4-tab"
          style="position: relative;"
        >
          <!-- Bouton de copie pour C4 -->
          <i (click)="copy4()" class="fas fa-copy"></i>
          <span class="confirm" *ngIf="clicked"
            >copied <i class="fas fa-check"></i>
          </span>
          <pre #tab4 class="tab fw-bold" ngNonBindable>
1. Créer un dossier back-end-json à la racine du projet.

2. Initialiser le dossier avec npm init -y.

3. Installer json-server avec npm install json-server.

4. Créer un fichier db.json dans le même dossier avec le contenu suivant :
(voir db.json).

5. Créer un fichier server.js dans le même dossier avec le contenu suivant :
(voir server.js).

6. Démarrer le serveur avec node server.js.

7. Créer un service Angular avec la commande :
ng generate service services/http/json/jsonproducts, et avec le contenu suivant:  (voir jsonproducts.service.ts).

8. Créer un composant Angular avec la commande pour la gestion des produits :
ng generate component pages/tests/json/jsonproducts, et avec le contenu suivant:  (voir jsonproducts.component.ts).

9. Créer un composant Angular avec la commande pour la mise à jour des produits : ng generate component pages/tests/json/jsonupdateproduct,
 et avec le contenu suivant:  (voir jsonupdateproduct.component.ts).</pre
          >
        </div>
      </div>
      <!-- --------------------Fin Template pour afficher le code source---------------- -->
    </div>
  `,
  styles: `
   // -------------------------style pour afficher le code source----------------
         pre{
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
              background-color: #f8f9fa;
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
   // -------------------------Fin style pour afficher le code source----------------
            `,
})
export class JsonProductsComponent implements OnInit {
  products: Product[] = [];
  newProduct: Product = {
    id: 0,
    name: '',
    price: 0,
    categoryName: '',
    description: '',
  };

  constructor(
    private jsonProductsService: JsonProductsService,
    private router: Router // Injecter le Router
  ) {}
  // Recuperation des produits lors de l'initialisation du composant
  ngOnInit(): void {
    this.fetchProducts();
  }
  // Recuperation des produits via le service et affichage des produits dans le template
  fetchProducts(): void {
    this.jsonProductsService.getProducts().subscribe((data) => {
      this.products = data;
      console.log('data :', data);
    });
  }
  //preparation du produit à envoyer au service pour ajout dans la base de données
  addProduct(): void {
    const newId =
      this.products.length > 0
        ? Math.max(...this.products.map((p) => p.id)) + 1
        : 1;
    const productToAdd = { ...this.newProduct, id: newId };
    // envoie du produit via le service
    this.jsonProductsService.addProduct(productToAdd).subscribe((product) => {
      this.products.push(product); //reaffichage des produits avec le nouveau ajouté
      // Reinitialisation du formailre
      // ou  this.fetchProducts();
      this.newProduct = {
        id: 0,
        name: '',
        price: 0,
        categoryName: '',
        description: '',
      };
    });
  }
  // Redirection vers la page de mise à jour
  navigateToUpdatePage(productId: number): void {
    // Rediriger vers la page de mise à jour
    this.router.navigate(['/updateproduct-json', productId]);
  }
  // Suppression d'un produit via le service et reaffichage des produits sans le produit supprimé
  deleteProduct(id: number): void {
    this.jsonProductsService.deleteProduct(id).subscribe(() => {
      this.products = this.products.filter((p) => p.id !== id); //reaffichage des produits sans le produit supprimé
      // ou  this.fetchProducts();
    });
  }

  // ----------------------ts pour afficher le code source--------------------
  infoTab1 = viewChild<ElementRef>('tab1');
  infoTab2 = viewChild<ElementRef>('tab2');
  infoTab3 = viewChild<ElementRef>('tab32');
  infoTab4 = viewChild<ElementRef>('tab4');
  clicked: boolean = false;
  copy1() {
    const element = this.infoTab1()?.nativeElement;
    if (element) navigator.clipboard.writeText(element.textContent);
    this.clicked = true;
    setTimeout(() => {
      this.clicked = false;
    }, 1500);
  }
  copy2() {
    const element = this.infoTab2()?.nativeElement;
    if (element) navigator.clipboard.writeText(element.textContent);
    this.clicked = true;
    setTimeout(() => {
      this.clicked = false;
    }, 1500);
  }
  copy3() {
    const element = this.infoTab3()?.nativeElement;
    if (element) navigator.clipboard.writeText(element.textContent);
    this.clicked = true;
    setTimeout(() => {
      this.clicked = false;
    }, 1500);
  }
  copy4() {
    const element = this.infoTab4()?.nativeElement;
    if (element) navigator.clipboard.writeText(element.textContent);
    this.clicked = true;
    setTimeout(() => {
      this.clicked = false;
    }, 1500);
  }
  // ----------------------Fin ts pour afficher le code source--------------------
}

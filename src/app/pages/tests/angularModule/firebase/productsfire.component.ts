import { CommonModule } from '@angular/common';
import { FirestoreService } from '../../../../services/firebase/firestore.service';
import { Component, viewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router'; // Importer Router

// Interface pour typer les produits
interface Product {
  id?: string; // ID facultatif (attribué par Firestore)
  nom: string;
  description?: string;
  prix: number;
  categorie_nom?: string;
}

@Component({
  selector: 'app-productsFirebase',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink], // Ajout de FormsModule pour gérer les formulaires
  template: `
    <div class="container mt-3">
      <h1>CRUD avec Api firebase</h1>
      <hr />
      <p>Dans ce cours, vous allez apprendre à connecter une application Angular avec Firebase, une plateforme Backend-as-a-Service de Google. Nous allons voir comment créer, lire, mettre à jour et supprimer (CRUD) des données en utilisant Firestore Database</p>
      <p>(voir démarche à suivre)</p>
      <hr>
      <h3>Ajouter un nouveau produit</h3>
      <!-- Formulaire d'ajout -->
      <form (ngSubmit)="addProduct()" #productForm="ngForm" class="mb-4">
        <div class="mb-3">
          <label for="nom" class="form-label">Nom du produit</label>
          <input
            type="text"
            id="nom"
            class="form-control"
            [(ngModel)]="newProduct.nom"
            name="nom"
            required
          />
        </div>
        <div class="mb-3">
          <label for="description" class="form-label">Description</label>
          <textarea
            id="description"
            class="form-control"
            [(ngModel)]="newProduct.description"
            name="description"
          ></textarea>
        </div>
        <div class="mb-3">
          <label for="prix" class="form-label">Prix</label>
          <input
            type="number"
            id="prix"
            class="form-control"
            [(ngModel)]="newProduct.prix"
            name="prix"
            required
          />
        </div>
        <div class="mb-3">
          <label for="categorie_nom" class="form-label">Catégorie</label>
          <input
            type="text"
            id="categorie_nom"
            class="form-control"
            [(ngModel)]="newProduct.categorie_nom"
            name="categorie_nom"
          />
        </div>
        <button
          type="submit"
          class="btn btn-success"
          [disabled]="productForm.invalid"
        >
          Ajouter le produit
        </button>
      </form>

      <hr />
      <h3>Liste des produits</h3>
      <div class="row">
        <div
          class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center"
          *ngFor="let product of products"
        >
          <div class="card p-2" style="width: 18rem; height: 100%">
            <div class="card-body">
              <strong>{{ product.nom }}</strong>
              <p>{{ product.description || 'Pas de description' }}</p>
              <span class="badge bg-primary">{{ product.prix }} $</span>
              <p>
                <strong>Catégorie: </strong
                >{{ product.categorie_nom || 'Non définie' }}
              </p>
            </div>
            <button
              class="btn btn-warning btn-sm mt-2"
              [routerLink]="['/update-product-firebase', product.id]"
            >
              Modifier
            </button>
            <button
              class="btn btn-danger btn-sm mt-2"
              (click)="deleteProduct(product.id!)"
            >
              Supprimer
            </button>
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
            Composant Parent
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="c2-tab"
            data-bs-toggle="tab"
            data-bs-target="#c2"
            type="button"
            role="tab"
            aria-controls="c2"
            aria-selected="true"
          >
          UpdateProductFireComponent.ts
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
           FirestoreService.ts
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
import &#123; FirestoreService &#125; from '../../../services/firebase/firestore.service';
import &#123; Component &#125; from '&#64;angular/core';
import &#123; FormsModule &#125; from '&#64;angular/forms';
import &#123; RouterLink &#125; from '&#64;angular/router';

// Interface pour typer les produits
interface Product &#123;
  id?: string; // ID facultatif (attribué par Firestore)
  nom: string;
  description?: string;
  prix: number;
  categorie_nom?: string;
&#125;

&#64;Component(&#123;
  selector: 'app-productsFirebase',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink], // Ajout de FormsModule pour gérer les formulaires
  template: &#96;
    &#60;div class="container mt-3"&#62;
      &#60;h1&#62;CRUD Firebase avec Angular&#60;/h1&#62;
      &#60;hr /&#62;
      &#60;h3&#62;Ajouter un nouveau produit&#60;/h3&#62;
      &#60;!-- Formulaire d'ajout --&#62;
      &#60;form (ngSubmit)="addProduct()" #productForm="ngForm" class="mb-4"&#62;
        &#60;div class="mb-3"&#62;
          &#60;label for="nom" class="form-label"&#62;Nom du produit&#60;/label&#62;
          &#60;input
            type="text"
            id="nom"
            class="form-control"
            [(ngModel)]="newProduct.nom"
            name="nom"
            required
          /&#62;
        &#60;/div&#62;
        &#60;div class="mb-3"&#62;
          &#60;label for="description" class="form-label"&#62;Description&#60;/label&#62;
          &#60;textarea
            id="description"
            class="form-control"
            [(ngModel)]="newProduct.description"
            name="description"
          &#62;&#60;/textarea&#62;
        &#60;/div&#62;
        &#60;div class="mb-3"&#62;
          &#60;label for="prix" class="form-label"&#62;Prix&#60;/label&#62;
          &#60;input
            type="number"
            id="prix"
            class="form-control"
            [(ngModel)]="newProduct.prix"
            name="prix"
            required
          /&#62;
        &#60;/div&#62;
        &#60;div class="mb-3"&#62;
          &#60;label for="categorie_nom" class="form-label"&#62;Catégorie&#60;/label&#62;
          &#60;input
            type="text"
            id="categorie_nom"
            class="form-control"
            [(ngModel)]="newProduct.categorie_nom"
            name="categorie_nom"
          /&#62;
        &#60;/div&#62;
        &#60;button
          type="submit"
          class="btn btn-success"
          [disabled]="productForm.invalid"
        &#62;
          Ajouter le produit
        &#60;/button&#62;
      &#60;/form&#62;

      &#60;hr /&#62;
      &#60;h3&#62;Liste des produits&#60;/h3&#62;
      &#60;div class="row"&#62;
        &#60;div
          class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center"
          *ngFor="let product of products"
        &#62;
          &#60;div class="card p-2" style="width: 18rem; height: 100%"&#62;
            &#60;div class="card-body"&#62;
              &#60;strong&#62;&#123;&#123; product.nom &#125;&#125;&#60;/strong&#62;
              &#60;p&#62;&#123;&#123; product.description || 'Pas de description' &#125;&#125;&#60;/p&#62;
              &#60;span class="badge bg-primary"&#62;&#123;&#123; product.prix &#125;&#125; $&#60;/span&#62;
              &#60;p&#62;
                &#60;strong&#62;Catégorie: &#60;/strong
                &#62;&#123;&#123; product.categorie_nom || 'Non définie' &#125;&#125;
              &#60;/p&#62;
            &#60;/div&#62;
            &#60;button
              class="btn btn-warning btn-sm mt-2"
              [routerLink]="['/update-product-firebase', product.id]"
            &#62;
              Modifier
            &#60;/button&#62;
            &#60;button
              class="btn btn-danger btn-sm mt-2"
              (click)="deleteProduct(product.id!)"
            &#62;
              Supprimer
            &#60;/button&#62;

          &#60;/div&#62;
        &#60;/div&#62;
      &#60;/div&#62;
    &#60;/div&#62;
  &#96;,
&#125;)
export class ProductsfireComponent &#123;
  products: Product[] = [];
  newProduct: Product = &#123;
    nom: '',
    description: '',
    prix: 0,
    categorie_nom: '',
  &#125;;

  constructor(private firestoreService: FirestoreService) &#123;
    this.fetchProducts();
  &#125;

//Ajoute un nouveau produit à partir du formulaire
  addProduct() &#123;
    if (!this.newProduct.nom || this.newProduct.prix &#60;= 0) &#123;
      console.error('Les champs obligatoires ne sont pas remplis.');
      return;
    &#125;

    this.firestoreService
      .addDocument('angproducts', this.newProduct)
      .then(() =&#62; &#123;
        console.log('Produit ajouté avec succès !');
        this.fetchProducts(); // Recharge les produits
        this.resetForm(); // Réinitialise le formulaire
      &#125;)
      .catch((error) =&#62; &#123;
        console.error("Erreur lors de l'ajout du produit :", error);
      &#125;);
  &#125;

  //Réinitialise le formulaire après un ajout
  resetForm() &#123;
    this.newProduct = &#123;
      nom: '',
      description: '',
      prix: 0,
      categorie_nom: '',
    &#125;;
  &#125;

 //Récupère tous les produits depuis Firestore
  fetchProducts() &#123;
    this.firestoreService.getDocuments('angproducts').subscribe(&#123;
      next: (data) =&#62; &#123;
        this.products = data;
        console.log('Produits récupérés :', data);
      &#125;,
      error: (error) =&#62; &#123;
        console.error('Erreur lors de la récupération des produits :', error);
      &#125;,
    &#125;);
  &#125;

  /**
   * Supprime un produit depuis Firestore
   * &#64;param id Identifiant du produit à supprimer
   */
  deleteProduct(id: string) &#123;
    if (!id) return;

    this.firestoreService
      .deleteDocument('angproducts', id)
      .then(() =&#62; &#123;
        console.log('Produit supprimé :', id);
        this.fetchProducts(); // Recharge la liste après suppression
      &#125;)
      .catch((error) =&#62; &#123;
        console.error('Erreur lors de la suppression du produit :', error);
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
          <!-- Bouton de copie pour C3 -->
          <i (click)="copy2()" class="fas fa-copy"></i>
          <span class="confirm" *ngIf="clicked"
            >copied <i class="fas fa-check"></i>
          </span>
          <pre #tab2 class="tab fw-bold" ngNonBindable>
import &#123; Injectable &#125; from '&#64;angular/core';
import &#123; Firestore, collectionData, addDoc, collection, deleteDoc, doc &#125; from '&#64;angular/fire/firestore';
import &#123; Observable &#125; from 'rxjs';

&#64;Injectable(&#123;
  providedIn: 'root',
&#125;)
export class FirestoreService &#123;
  constructor(private firestore: Firestore) &#123;&#125;

  getDocuments(collectionName: string): Observable&#60;any[]&#62; &#123;
    const colRef = collection(this.firestore, collectionName);
    return collectionData(colRef, &#123; idField: 'id' &#125;);
  &#125;

  addDocument(collectionName: string, data: any) &#123;
    const colRef = collection(this.firestore, collectionName);
    return addDoc(colRef, data);
  &#125;

  deleteDocument(collectionName: string, docId: string) &#123;
    const docRef = doc(this.firestore, &#96;$&#123;collectionName&#125;/$&#123;docId&#125;&#96;);
    return deleteDoc(docRef);
  &#125;

   // 🔥 Mettre à jour un document existant
    updateDocument(collectionName: string, docId: string, newData: any) &#123;
      const docRef = doc(this.firestore, &#96;$&#123;collectionName&#125;/$&#123;docId&#125;&#96;);
      return updateDoc(docRef, newData);
    &#125;

&#125;</pre
          >
        </div>
        <!-- Composant C3 -->
        <div
          class="tab-pane fade show "
          id="c3"
          role="tabpanel"
          aria-labelledby="c3-tab"
          style="position: relative;"
        >
          <!-- Bouton de copie pour C1 -->
          <i (click)="copy3()" class="fas fa-copy"></i>
          <span class="confirm" *ngIf="clicked"
            >copied <i class="fas fa-check"></i>
          </span>
          <pre #tab3 class="tab fw-bold" ngNonBindable>
import &#123;
  FirestoreService,
  Product,
&#125; from './../../../services/firebase/firestore.service';
import &#123; FormsModule &#125; from '&#64;angular/forms';
import &#123; CommonModule &#125; from '&#64;angular/common';
import &#123; Component, OnInit &#125; from '&#64;angular/core';
import &#123; ActivatedRoute, Router &#125; from '&#64;angular/router';

&#64;Component(&#123;
  selector: 'app-update-product-fire',
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
              [(ngModel)]="product.nom"
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
              [(ngModel)]="product.prix"
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
              [(ngModel)]="product.categorie_nom"
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
export class UpdateProductFireComponent implements OnInit &#123;
  product: Product = &#123;
    id: 0,
    nom: '',
    prix: 0,
    categorie_nom: '',
    description: '',
  &#125;;
  productId: string = '';
  constructor(
    private activatedRoute: ActivatedRoute,
    private firestoreService: FirestoreService,
    private router: Router
  ) &#123;&#125;

  ngOnInit(): void &#123;
    this.productId = this.activatedRoute.snapshot.paramMap.get('id') || '';
    this.firestoreService
      .getDocumentById('angproducts', this.productId)
      .subscribe((product) =&#62; &#123;
        this.product = product;
      &#125;);
  &#125;

  updateProduct(): void &#123;
    this.firestoreService
      .updateDocument('angproducts', this.productId, this.product)
      .then(() =&#62; &#123;
        alert('Produit mis à jour !');
        this.router.navigate(['/products-firebase']); // Redirection vers la liste des produits après mise à jour    &#125;)
      &#125;)
      .catch((error) =&#62; &#123;
        console.error('Erreur lors de la suppression du produit :', error);
      &#125;);
  &#125;
&#125;</pre>
        </div>
        <!-- Composant C4 -->
        <div
          class="tab-pane fade show "
          id="c4"
          role="tabpanel"
          aria-labelledby="c4-tab"
          style="position: relative;"
        >
          <!-- Bouton de copie pour C1 -->
          <i (click)="copy4()" class="fas fa-copy"></i>
          <span class="confirm" *ngIf="clicked"
            >copied <i class="fas fa-check"></i>
          </span>
          <pre #tab4 class="tab fw-bold" ngNonBindable>
1. Cree une base de données Firestore sur Firebase ainsi une collection angproducts.

2. Récupère la configuration Firebase:
firebaseConfig : &#123;
    apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    authDomain: "eshop-a7e80.firebaseapp.com",
    projectId: "eshop-a7e80",
    storageBucket: "eshop-a7e80.appspot.com",
    messagingSenderId: "210536635875",
    appId: "1:210536635875:web:102174013c4495022b94d6"
  &#125;

3. Configurer Firebase dans Angular:
   Dans src/environments/environment.ts et src/environments/environment.development.ts,  ajoute la configuration Firebase obtenue:
   export const environment = &#123;
      production: true,
      apiURL: 'http://localhost:8000',
      siteURL: 'http://localhost:4200',
      apiVersion: 'v1', // Version de l'API
      firebaseConfig : &#123;
        apiKey: "AIzaSyCdKHLM6_7ZhC7FmmxmzroMrtPmHlL8S7E",
        authDomain: "eshop-a7e80.firebaseapp.com",
        projectId: "eshop-a7e80",
        storageBucket: "eshop-a7e80.appspot.com",
        messagingSenderId: "210536635875",
        appId: "1:210536635875:web:102174013c4495022b94d6"
      &#125;
    &#125;;

4. Installer Firebase dans Angular: npm install firebase &#64;angular/fire

5. Importer Firebase dans Angular dans app.config.ts:
  import &#123; provideFirestore, getFirestore &#125; from '&#64;angular/fire/firestore';
  import &#123; initializeApp &#125; from 'firebase/app';
  import &#123; provideFirebaseApp &#125; from '&#64;angular/fire/app';
   export const appConfig: ApplicationConfig = &#123;
     providers: [
        // Ajout de la configuration Firebase
       provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
       provideFirestore(() => getFirestore()), // Fournit le module Firestore
       ......
       ]
    &#125;;

6. Créer un service FirestoreService pour gérer les opérations Firestore:
  voir le code source dans le fichier src/app/services/firebase/firestore.service.ts

7. Créer un composant ProductsfireComponent pour gérer les produits:
  voir le code source dans le fichier src/app/pages/tests/firebase/productsfire.component.ts</pre
          >
        </div>
      </div>
      <!-- --------------------Fin Template pour afficher le code source---------------- -->
    </div>
  `,

  styles: `
// -------------------------style pour afficher le code source----------------
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
export class ProductsfireComponent {
  products: Product[] = [];
  newProduct: Product = {
    nom: '',
    description: '',
    prix: 0,
    categorie_nom: '',
  };

  constructor(
    private firestoreService: FirestoreService,
    private router: Router
  ) {
    this.fetchProducts();
  }

  //Ajoute un nouveau produit à partir du formulaire
  addProduct() {
    if (!this.newProduct.nom || this.newProduct.prix <= 0) {
      console.error('Les champs obligatoires ne sont pas remplis.');
      return;
    }

    this.firestoreService
      .addDocument('angproducts', this.newProduct)
      .then(() => {
        console.log('Produit ajouté avec succès !');
        this.fetchProducts(); // Recharge les produits
        this.resetForm(); // Réinitialise le formulaire
      })
      .catch((error) => {
        console.error("Erreur lors de l'ajout du produit :", error);
      });
  }

  //Réinitialise le formulaire après un ajout
  resetForm() {
    this.newProduct = {
      nom: '',
      description: '',
      prix: 0,
      categorie_nom: '',
    };
  }

  //Récupère tous les produits depuis Firestore
  fetchProducts() {
    this.firestoreService.getDocuments('angproducts').subscribe({
      next: (data) => {
        this.products = data;
        console.log('Produits récupérés :', data);
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des produits :', error);
      },
    });
  }

  /**
   * Supprime un produit depuis Firestore
   * @param id Identifiant du produit à supprimer
   */
  deleteProduct(id: string) {
    if (!id) return;

    this.firestoreService
      .deleteDocument('angproducts', id)
      .then(() => {
        console.log('Produit supprimé :', id);
        this.fetchProducts(); // Recharge la liste après suppression
      })
      .catch((error) => {
        console.error('Erreur lors de la suppression du produit :', error);
      });
  }

  // ----------------------ts pour afficher le code source--------------------
  infoTab1 = viewChild<ElementRef>('tab1');
  infoTab2 = viewChild<ElementRef>('tab2');
  infoTab3 = viewChild<ElementRef>('tab3');
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
    const element = this.infoTab3()?.nativeElement;
    if (element) navigator.clipboard.writeText(element.textContent);
    this.clicked = true;
    setTimeout(() => {
      this.clicked = false;
    }, 1500);
  }
  // ----------------------Fin ts pour afficher le code source--------------------
}

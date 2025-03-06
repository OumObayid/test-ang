import { ProductNodeService } from '../../../../services/http/apinodejs/productnode.service';
import { FormsModule } from '@angular/forms';
import { Component, OnInit, viewChild, ElementRef } from '@angular/core';
import {
  Product,
} from '../../../../services/http/apinodejs/productnode.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [FormsModule, CommonModule, RouterLink],
  template: `
    <div class="container mt-3">
      <h1>crud-angular-nodejs-mongodb</h1>
      <hr>
      <p>(Voir démarche à suivre en bas)</p>
      <p>Dans ce cours, vous apprendrez à construire une application complète avec Angular, un backend Node.js/Express et une base de données MongoDB. Vous développerez un système CRUD (Create, Read, Update, Delete) permettant de gérer des produits.</p>
      <p>Avant tout pour tester, il faut demarrer le serveur node js et se connecter a mongodb</p>
      <hr />
      <h3>Liste des Produits</h3>
      <div class="row">
        <div
          class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center"
          *ngFor="let product of products"
        >
          <div class="card p-2 " style="width: 18rem; height: 100%">
            <div class="card-body">
              <strong>{{ product.nom }}</strong>
              <p>{{ product.description }}</p>
              <span class="badge bg-primary">{{ product.prix }} $</span>
              <p><strong>Categorie: </strong>{{ product.categorie_nom }}</p>
            </div>
            <button
              class="btn btn-danger btn-sm mt-2"
              (click)="deleteProduct(product._id!)"
            >
              Delete
            </button>
            <button
              class="btn btn-warning btn-sm mt-2"
              [routerLink]="['/update-node', product._id]"
            >
              Update
            </button>
          </div>
        </div>
      </div>

      <div class="my-4">
        <h3>Add Product</h3>

        <div class="form-group">
          <label for="productName">Nom</label>
          <input
            id="productName"
            type="text"
            class="form-control"
            [(ngModel)]="newProduct.nom"
            placeholder="Enter product name"
          />
        </div>

        <div class="form-group mt-2">
          <label for="productDescription">Description</label>
          <input
            id="productDescription"
            type="text"
            class="form-control"
            [(ngModel)]="newProduct.description"
            placeholder="Enter product description"
          />
        </div>

        <div class="form-group mt-2">
          <label for="productPrix">Prix</label>
          <input
            id="productPrix"
            type="number"
            class="form-control"
            [(ngModel)]="newProduct.prix"
            placeholder="Enter product price"
          />
        </div>

        <div class="form-group mt-2">
          <label for="productCategory">Categorie</label>
          <input
            id="productCategory"
            type="text"
            class="form-control"
            [(ngModel)]="newProduct.categorie_nom"
            placeholder="Enter product category"
          />
        </div>

        <button class="btn btn-success mt-2" (click)="addProduct()">Add</button>
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
            ProductsComponent.ts
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
            aria-selected="false"
          >
            UpdateProductComponent.ts
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
            aria-selected="false"
          >
            ProductService.ts
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
            aria-selected="false"
          >
            server.js
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="c5-tab"
            data-bs-toggle="tab"
            data-bs-target="#c5"
            type="button"
            role="tab"
            aria-controls="c5"
            aria-selected="false"
          >
            insertProducts.js
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="c6-tab"
            data-bs-toggle="tab"
            data-bs-target="#c6"
            type="button"
            role="tab"
            aria-controls="c6"
            aria-selected="false"
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
import &#123; FormsModule &#125; from '&#64;angular/forms';
import &#123; Component, OnInit &#125; from '&#64;angular/core';
import &#123;
  Product,
  ProductService,
&#125; from '../../../services/http/apinodejs/product.service';
import &#123; CommonModule &#125; from '&#64;angular/common';
import &#123; RouterLink &#125; from '&#64;angular/router';

&#64;Component(&#123;
  selector: 'app-products',
  imports: [FormsModule, CommonModule, RouterLink],
  template: &#96;
    &#60;div class="container mt-3"&#62;
      &#60;h1&#62;crud-angular-nodejs-mongodb&#60;/h1&#62;
      &#60;hr /&#62;
      &#60;h3&#62;Products&#60;/h3&#62;
      &#60;div class="row"&#62;
        &#60;div
          class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center"
          *ngFor="let product of products"
        &#62;
          &#60;div class="card p-2 " style="width: 18rem; height: 100%"&#62;
            &#60;div class="card-body"&#62;
              &#60;strong&#62;&#123;&#123; product.nom &#125;&#125;&#60;/strong&#62;
              &#60;p&#62;&#123;&#123; product.description &#125;&#125;&#60;/p&#62;
              &#60;span class="badge bg-primary"&#62;&#123;&#123; product.prix &#125;&#125; $&#60;/span&#62;
              &#60;p&#62;&#60;strong&#62;Categorie: &#60;/strong&#62;&#123;&#123; product.categorie_nom &#125;&#125;&#60;/p&#62;
            &#60;/div&#62;
            &#60;button
              class="btn btn-danger btn-sm mt-2"
              (click)="deleteProduct(product._id!)"
            &#62;
              Delete
            &#60;/button&#62;
            &#60;button
              class="btn btn-warning btn-sm mt-2"
              [routerLink]="['/update-node', product._id]"
            &#62;
              Update
            &#60;/button&#62;
          &#60;/div&#62;
        &#60;/div&#62;
      &#60;/div&#62;

      &#60;div class="mt-4"&#62;
        &#60;h3&#62;Add Product&#60;/h3&#62;

        &#60;div class="form-group"&#62;
          &#60;label for="productName"&#62;Nom&#60;/label&#62;
          &#60;input
            id="productName"
            type="text"
            class="form-control"
            [(ngModel)]="newProduct.nom"
            placeholder="Enter product name"
          /&#62;
        &#60;/div&#62;

        &#60;div class="form-group mt-2"&#62;
          &#60;label for="productDescription"&#62;Description&#60;/label&#62;
          &#60;input
            id="productDescription"
            type="text"
            class="form-control"
            [(ngModel)]="newProduct.description"
            placeholder="Enter product description"
          /&#62;
        &#60;/div&#62;

        &#60;div class="form-group mt-2"&#62;
          &#60;label for="productPrix"&#62;Prix&#60;/label&#62;
          &#60;input
            id="productPrix"
            type="number"
            class="form-control"
            [(ngModel)]="newProduct.prix"
            placeholder="Enter product price"
          /&#62;
        &#60;/div&#62;

        &#60;div class="form-group mt-2"&#62;
          &#60;label for="productCategory"&#62;Categorie&#60;/label&#62;
          &#60;input
            id="productCategory"
            type="text"
            class="form-control"
            [(ngModel)]="newProduct.categorie_nom"
            placeholder="Enter product category"
          /&#62;
        &#60;/div&#62;

        &#60;button class="btn btn-success mt-2" (click)="addProduct()"&#62;Add&#60;/button&#62;
      &#60;/div&#62;
    &#60;/div&#62;
  &#96;,
  styles: [],
&#125;)
export class ProductsComponent implements OnInit &#123;
  products: Product[] = [];
  newProduct: Product = &#123;
    nom: '',
    description: '',
    prix: 0,
    categorie_nom: '',
  &#125;;

  constructor(private productService: ProductService) &#123;&#125;

  ngOnInit(): void &#123;
    this.fetchProducts();
  &#125;

  fetchProducts() &#123;
    this.productService.getProducts().subscribe((data) =&#62; &#123;
      this.products = data;
    &#125;);
  &#125;

  addProduct() &#123;
    this.productService.addProduct(this.newProduct).subscribe((value) =&#62; &#123;
      console.log('value :', value);
      this.fetchProducts();
    &#125;);
  &#125;

  deleteProduct(id: string) &#123;
    this.productService.deleteProduct(id).subscribe(() =&#62; &#123;
      this.fetchProducts();
    &#125;);
  &#125;
&#125;</pre
          >
        </div>
        <!-- Composant C2 -->
        <div
          class="tab-pane fade show"
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
import &#123; Component, OnInit &#125; from '&#64;angular/core';
import &#123; ActivatedRoute, Router &#125; from '&#64;angular/router';
import &#123; HttpClient &#125; from '&#64;angular/common/http';
import &#123; CommonModule &#125; from '&#64;angular/common';
import &#123; FormsModule &#125; from '&#64;angular/forms';
import &#123; ProductService &#125; from '../../../services/http/apinodejs/product.service';

&#64;Component(&#123;
  selector: 'app-update-product',
  imports: [CommonModule, FormsModule],
  template: &#96;
    &#60;div class="container mt-4"&#62;
      &#60;h2&#62;Update Product&#60;/h2&#62;

      &#60;div class="form-group"&#62;
        &#60;label for="productName"&#62;Nom&#60;/label&#62;
        &#60;input
          id="productName"
          type="text"
          class="form-control"
          [(ngModel)]="product.nom"
          placeholder="Enter product name"
        /&#62;
      &#60;/div&#62;

      &#60;div class="form-group mt-2"&#62;
        &#60;label for="productDescription"&#62;Description&#60;/label&#62;
        &#60;input
          id="productDescription"
          type="text"
          class="form-control"
          [(ngModel)]="product.description"
          placeholder="Enter product description"
        /&#62;
      &#60;/div&#62;

      &#60;div class="form-group mt-2"&#62;
        &#60;label for="productPrix"&#62;Prix&#60;/label&#62;
        &#60;input
          id="productPrix"
          type="number"
          class="form-control"
          [(ngModel)]="product.prix"
          placeholder="Enter product price"
        /&#62;
      &#60;/div&#62;

      &#60;div class="form-group mt-2"&#62;
        &#60;label for="productCategory"&#62;Categorie&#60;/label&#62;
        &#60;input
          id="productCategory"
          type="text"
          class="form-control"
          [(ngModel)]="product.categorie_nom"
          placeholder="Enter product category"
        /&#62;
      &#60;/div&#62;

      &#60;button class="btn btn-success mt-2" (click)="updateProduct()"&#62;
        Save
      &#60;/button&#62;
    &#60;/div&#62;
  &#96;,
  styles: [],
&#125;)
export class UpdateProductComponent implements OnInit &#123;
  product: any = &#123;&#125;;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) &#123;&#125;

  ngOnInit(): void &#123;
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) &#123;
      this.productService.getProducts().subscribe((products) =&#62; &#123;
        const foundProduct = products.find((prod) =&#62; prod._id === productId);
        if (foundProduct) &#123;
          this.product = foundProduct;
        &#125;
      &#125;);
    &#125;
  &#125;

  updateProduct(): void &#123;
    if (this.product._id) &#123;
      this.productService
        .updateProduct(this.product._id, this.product)
        .subscribe(&#123;
          next: () =&#62; &#123;
            alert('Produit mis à jour avec succès !');
            this.router.navigate(['/products-node']); // Redirection vers la liste des produits
          &#125;,
          error: (error) =&#62; &#123;
            console.error('Erreur lors de la mise à jour du produit :', error);
          &#125;,
        &#125;);
    &#125;
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
import &#123; Injectable &#125; from '&#64;angular/core';
import &#123; HttpClient &#125; from '&#64;angular/common/http';
import &#123; Observable &#125; from 'rxjs';

export interface Product &#123;
  _id?: string; // L'identifiant est optionnel (généré automatiquement pour les nouveaux produits)
  nom: string; // Nom du produit
  description: string; // Description du produit
  prix: number; // Prix du produit
  categorie_nom: string; // Nom de la catégorie
&#125;

&#64;Injectable(&#123;
  providedIn: 'root', // Rend ce service disponible partout dans l'application
&#125;)
export class ProductService &#123;
  private apiUrl = 'http://localhost:5000/api/products'; // URL de base de l'API

  constructor(private http: HttpClient) &#123;&#125;

  /**
   * Récupère tous les produits
   * &#64;returns Un tableau de produits sous forme d'Observable
   */
  getProducts(): Observable&#60;Product[]&#62; &#123;
    this.http.get&#60;Product[]&#62;(this.apiUrl).subscribe((data) =&#62; &#123;
      // console.log("Données reçues dans le service :", data);
    &#125;);
    return this.http.get&#60;Product[]&#62;(this.apiUrl);
  &#125;

  /**
   * Ajoute un nouveau produit
   * &#64;param product Les détails du produit à ajouter
   * &#64;returns Le produit ajouté sous forme d'Observable
   */
  addProduct(product: Product): Observable&#60;Product&#62; &#123;
    // this.http.post&#60;Product&#62;(this.apiUrl, product).subscribe((data) =&#62; &#123;
    //   console.log("Produit ajouté :", data);
    // &#125;);
    return this.http.post&#60;Product&#62;(this.apiUrl, product);
  &#125;

  /**
   * Met à jour un produit existant
   * &#64;param id L'identifiant du produit à mettre à jour
   * &#64;param product Les nouvelles données du produit
   * &#64;returns Le produit mis à jour sous forme d'Observable
   */
  updateProduct(id: string, product: Product): Observable&#60;Product&#62; &#123;
    return this.http.put&#60;Product&#62;(&#96;$&#123;this.apiUrl&#125;/$&#123;id&#125;&#96;, product);
  &#125;

  /**
   * Supprime un produit
   * &#64;param id L'identifiant du produit à supprimer
   * &#64;returns Un Observable indiquant la suppression
   */
  deleteProduct(id: string): Observable&#60;void&#62; &#123;
    return this.http.delete&#60;void&#62;(&#96;$&#123;this.apiUrl&#125;/$&#123;id&#125;&#96;);
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
const express = require("express"); // Importation du framework Express pour créer le serveur
const mongoose = require("mongoose"); // Importation de Mongoose pour interagir avec MongoDB
const cors = require("cors"); // Importation de CORS pour permettre les requêtes cross-origin (entre frontend et backend)

const app = express(); // Création de l'application Express
const PORT = 5000; // Définition du port sur lequel le serveur écoutera

// Middleware pour activer CORS (autorise les requêtes depuis d'autres domaines)
app.use(cors());
// Middleware pour parser les requêtes en JSON (utilisé pour recevoir des données au format JSON dans les requêtes HTTP)
app.use(express.json());

// Connexion à MongoDB via Mongoose
mongoose
  .connect(
    "mongodb+srv://elobayidoumaima:Stlr6cghlKkOgIOb&#64;cluster0.aaf20.mongodb.net/mydbase?retryWrites=true&w=majority",
    &#123;
      useNewUrlParser: true, // Utilise l'analyseur d'URL pour une connexion MongoDB plus récente
      useUnifiedTopology: true, // Permet d'utiliser le nouveau moteur de gestion des connexions
    &#125;
  )
  .then(() => console.log("Connected to MongoDB")) // Confirmation si la connexion réussit
  .catch((err) => console.error("Error connecting to MongoDB:", err)); // Affiche l'erreur si la connexion échoue

// Schéma pour la collection des produits (définition de la structure des données dans MongoDB)
const productSchema = new mongoose.Schema(&#123;
  nom: &#123; type: String, required: true &#125;, // Nom du produit, obligatoire
  description: &#123; type: String &#125;, // Description du produit, optionnelle
  prix: &#123; type: Number, required: true &#125;, // Prix du produit, obligatoire
  categorie_nom: &#123; type: String &#125;, // Catégorie du produit, optionnelle
&#125;);

// Modèle Mongoose basé sur le schéma de produit
const Product = mongoose.model("Product", productSchema);

// Routes API

// Route pour récupérer tous les produits (GET)
app.get("/api/products", async (req, res) => &#123;
  try &#123;
    const products = await Product.find(); // Récupère tous les documents de la collection "products"
    res.json(products); // Renvoie les produits au format JSON
  &#125; catch (err) &#123;
    res.status(500).json(&#123; message: "Error fetching products" &#125;); // Erreur si la récupération échoue
  &#125;
&#125;);

// Route pour ajouter un nouveau produit (POST)
app.post("/api/products", async (req, res) => &#123;
  try &#123;
    const product = new Product(req.body); // Crée un nouveau produit avec les données reçues dans la requête
    const savedProduct = await product.save(); // Sauvegarde le produit dans la base de données
    res.json(savedProduct); // Renvoie le produit sauvegardé
  &#125; catch (err) &#123;
    res.status(500).json(&#123; message: "Error saving product" &#125;); // Erreur si l'ajout échoue
  &#125;
&#125;);

// Route pour mettre à jour un produit existant (PUT)
app.put("/api/products/:id", async (req, res) => &#123;
  try &#123;
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id, // Identifiant du produit à mettre à jour
      req.body, // Données mises à jour
      &#123; new: true &#125; // Retourne le document mis à jour
    );
    res.json(updatedProduct); // Renvoie le produit mis à jour
  &#125; catch (err) &#123;
    res.status(500).json(&#123; message: "Error updating product" &#125;); // Erreur si la mise à jour échoue
  &#125;
&#125;);

// Route pour supprimer un produit (DELETE)
app.delete("/api/products/:id", async (req, res) => &#123;
  try &#123;
    await Product.findByIdAndDelete(req.params.id); // Supprime le produit par son identifiant
    res.json(&#123; message: "Product deleted" &#125;); // Renvoie un message de confirmation
  &#125; catch (err) &#123;
    res.status(500).json(&#123; message: "Error deleting product" &#125;); // Erreur si la suppression échoue
  &#125;
&#125;);

// Démarrage du serveur
app.listen(PORT, () => &#123;
  console.log(&#96;Server running on http://localhost:$&#123;PORT&#125;&#96;); // Message dans la console confirmant que le serveur est en marche
&#125;);</pre
          >
        </div>
        <!-- Composant C5 -->
        <div
          class="tab-pane fade show"
          id="c5"
          role="tabpanel"
          aria-labelledby="c5-tab"
          style="position: relative;"
        >
          <!-- Bouton de copie pour C5 -->
          <i (click)="copy5()" class="fas fa-copy"></i>
          <span class="confirm" *ngIf="clicked"
            >copied <i class="fas fa-check"></i>
          </span>
          <pre #tab5 class="tab fw-bold" ngNonBindable>
const &#123; MongoClient &#125; = require("mongodb");

const uri =
  "mongodb+srv://elobayidoumaima:Stlr6cghlKkOgIOb&#64;cluster0.aaf20.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
  // Remplacez par votre chaîne de connexion MongoDB
const client = new MongoClient(uri);

const products = [
  &#123;
    nom: "Smartphone",
    description: "Un smartphone performant avec écran AMOLED.",
    prix: 799.99,
    categorie_nom: "Électronique",
  &#125;,
  &#123;
    nom: "Ordinateur portable",
    description: "Un ordinateur léger et puissant.",
    prix: 1299.99,
    categorie_nom: "Électronique",
  &#125;,
  &#123;
    nom: "Table basse",
    description: "Table en bois massif, idéale pour le salon.",
    prix: 199.99,
    categorie_nom: "Mobilier",
  &#125;,
  &#123;
    nom: "Lampe de bureau",
    description: "Lampe LED moderne avec bras articulé.",
    prix: 49.99,
    categorie_nom: "Mobilier",
  &#125;,
];

async function run() &#123;
  try &#123;
    await client.connect();
    console.log("Connecté à MongoDB");

    const db = client.db("mydbase");
    const collection = db.collection("products");

    const result = await collection.insertMany(products);
    console.log(&#96;$&#123;result.insertedCount&#125; produits insérés.&#96;);
  &#125; catch (error) &#123;
    console.error("Erreur :", error);
  &#125; finally &#123;
    await client.close();
  &#125;
&#125;

run();

          </pre
          >
        </div>
        <!-- Composant C6 -->
        <div
          class="tab-pane fade show"
          id="c6"
          role="tabpanel"
          aria-labelledby="c6-tab"
          style="position: relative;"
        >
          <pre #tab6 class="tab fw-bold" ngNonBindable>
Avant tout: se connecter à MongoDB Atlas et créer une base de données nommée <strong>mydbase</strong> et une collection nommée <strong>products</strong>.
et recupérer la chaîne de connexion.

1. Créer le dossier back-end-node pour le serveur Node.js à la racine du projet.

2. Dans le dossier back-end-node initialiser avec la commande : <strong>npm init -y</strong>.

3. Installer les dépendances nécessaires avec la commande : <strong>npm install express mongoose cors body-parser</strong>.
    •	express : Framework pour créer des routes.
    •	mongoose : ORM pour interagir avec MongoDB.
    •	cors : Pour autoriser les requêtes entre le frontend et le backend.
    •	body-parser : Pour parser les requêtes JSON.

4. Créer un fichier server.js pour le serveur Node.js.

5. Y mettre le code du serveur server.js.

6. Lancer le serveur Node.js avec la commande : <strong>node server.js</strong>.

7. Lancer le ficher insertProducts.js pour insérer des produits dans la base de données avec la commande : <strong>node insertProducts.js</strong>.
   ou insérer les produits manuellement dans MongoDB Compass.

8. Créer le dossier services/http/apinodejs pour les services Angular.

9. Créer un service ProductService pour les appels HTTP. voir ProductService.ts.

10. Créer un composant ProductsComponent pour afficher les produits. voir ProductsComponent.ts.

11. Créer un composant UpdateProductComponent pour mettre à jour un produit. voir UpdateProductComponent.ts.

12. configurer HttpClient dans app.config.ts:
    <strong>export const appConfig: ApplicationConfig = &#123;
      providers: [
        provideHttpClient(withFetch()),
        ...
      </strong>
13. Ajouter les routes dans app-route.ts:
    <strong>
      &#123; path: 'products-node', component: ProductsComponent &#125;,
      &#123; path: 'update-node/:id', component:UpdateProductComponent &#125;,
    </strong>
14. demarrer l'application avec la commande : <strong>ng serve</strong>.</pre>
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
export class ProductsnodeComponent implements OnInit {
  products: Product[] = [];
  newProduct: Product = {
    nom: '',
    description: '',
    prix: 0,
    categorie_nom: '',
  };

  constructor(private productService: ProductNodeService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  addProduct() {
    this.productService.addProduct(this.newProduct).subscribe((value) => {
      console.log('value :', value);
      this.fetchProducts();
    });
  }

  deleteProduct(id: string) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.fetchProducts();
    });
  }

  // ----------------------ts pour afficher le code source--------------------
  infoTab1 = viewChild<ElementRef>('tab1');
  infoTab2 = viewChild<ElementRef>('tab2');
  infoTab3 = viewChild<ElementRef>('tab3');
  infoTab4 = viewChild<ElementRef>('tab4');
  infoTab5 = viewChild<ElementRef>('tab5');
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
  copy5() {
    const element = this.infoTab5()?.nativeElement;
    if (element) navigator.clipboard.writeText(element.textContent);
    this.clicked = true;
    setTimeout(() => {
      this.clicked = false;
    }, 1500);
  }
  // ----------------------Fin ts pour afficher le code source--------------------
}

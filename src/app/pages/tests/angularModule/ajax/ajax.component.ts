import { ElementRef, OnInit } from '@angular/core';
// utilisation de ajax
import { CommonModule } from '@angular/common';
import { Component, viewChild } from '@angular/core';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-ajax',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container mt-3">
      <h1>AJAX dans Angular</h1>
      <hr>
      <p>
        AJAX a été principalement conçu pour mettre à jour des parties d'une
        page Web, sans recharger la page entière.
      </p>
      <p>
        En Angular, on utilise généralement HttpClient (du module
        HttpClientModule) pour effectuer des requêtes AJAX, mais il est aussi
        possible d'utiliser RxJS avec ajax().
      </p>
      <strong>syntaxe:</strong>
      <pre class="tab">
ajax(&#123;
  url: "........",
  method: "GET",
&#125;).subscribe(&#123;
  next: (response: any) => &#123;
   //utilisation de la reponse de l'api
  &#125;,
  error: () => &#123;
    this.hasError = true;
  &#125;,
&#125;);
</pre
      >
      <h3>Liste des Produits</h3>

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
            Composant appComponent
          </button>
        </li>
      </ul>

      <!-- Tab Content -->
      <div class="tab-content " id="codeTabsContent">
        <!-- Composant C1 -->
        <div
          class="tab-pane fade show active"
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
import &#123; OnInit &#125; from "&#64;angular/core";
// utilisation de ajax
import &#123; CommonModule &#125; from "&#64;angular/common";
import &#123; Component &#125; from "&#64;angular/core";
import &#123; ajax &#125; from "rxjs/ajax";

&#64;Component(&#123;
  selector: "app-ajax",
  standalone: true,
  imports: [CommonModule],
  template: &#96;
    &#60;div class="container mt-3"&#62;
      &#60;h1&#62;Liste des Produits&#60;/h1&#62;

      &#64;if (products.length &#62; 0) &#123;
      &#60;div class="row mt-3"&#62;
        &#64;for (product of products; track $index) &#123; &#64;if ($index &#60; 9) &#123;
        &#60;!-- Afficher uniquement les 10 premiers produits --&#62;
        &#60;div class="col-md-4 mb-4"&#62;
          &#60;div class="card"&#62;
            &#60;img
              [src]="
                product.thumbnail ||
                (product.images?.length ? product.images[0] : '')
              "
              [alt]="product.nom"
              class="card-img-top img-fluid"
              style="max-height: 150px; object-fit: cover;"
            /&#62;
            &#60;div class="card-body"&#62;
              &#60;h5 class="card-title"&#62;&#123;&#123; product.title &#125;&#125;&#60;/h5&#62;
              &#60;p class="card-text"&#62;
                &#123;&#123; product.description.substring(0, 100) + "..." &#125;&#125;
                &#60;!-- Description raccourcie --&#62;
              &#60;/p&#62;
              &#60;p class="card-text"&#62;
                &#60;strong&#62;Catégorie :&#60;/strong&#62; &#123;&#123; product.category &#125;&#125;
              &#60;/p&#62;
              &#60;p class="card-text"&#62;
                &#60;strong&#62;Prix :&#60;/strong&#62; &#123;&#123; product.price &#125;&#125; €
              &#60;/p&#62;
              &#60;a href="#" class="btn btn-primary"&#62;Voir le produit&#60;/a&#62;
            &#60;/div&#62;
          &#60;/div&#62;
        &#60;/div&#62;
        &#125; &#125;
      &#60;/div&#62;
      &#125; &#64;if (products.length === 0 && hasError) &#123;
      &#60;div class="alert alert-danger"&#62;
        Une erreur est survenue lors de la récupération des produits.
      &#60;/div&#62;
      &#125;
    &#60;/div&#62;
  &#96;,
&#125;)
export class AjaxComponent implements OnInit &#123;
  products: any[] = [];
  hasError: boolean = false;
  ngOnInit(): void &#123;
    const response = ajax(&#123;
      url: "https://dummyjson.com/products",
      method: "GET",
    &#125;);

    response.subscribe(&#123;
      next: (response: any) =&#62; &#123;
        this.products = response.response.products || []; // Assurez-vous que la clé existe
        console.log("response :", this.products);
      &#125;,
      error: () =&#62; &#123;
        this.hasError = true;
      &#125;,
    &#125;);
  &#125;
&#125;</pre
          >
        </div>
      </div>
      <!-- --------------------Fin Template pour afficher le code source---------------- -->
      </div>
  `,
  // -------------------------style pour afficher le code source----------------
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
export class AjaxComponent implements OnInit {
  products: any[] = [];
  hasError: boolean = false;
  ngOnInit(): void {
    const response = ajax({
      url: 'https://dummyjson.com/products',
      method: 'GET',
    });

    response.subscribe({
      next: (response: any) => {
        this.products = response.response.products || []; // Assurez-vous que la clé existe
        console.log('response :', this.products);
      },
      error: () => {
        this.hasError = true;
      },
    });
  }

  // ----------------------ts pour afficher le code source--------------------
  infoTab1 = viewChild<ElementRef>('tab1');
  clicked: boolean = false;

  copy1() {
    const element = this.infoTab1()?.nativeElement;
    if (element) navigator.clipboard.writeText(element.textContent);
    this.clicked = true;
    setTimeout(() => {
      this.clicked = false;
    }, 1500);
  }
  // ------------------Fin ts pour afficher le code source-------------------
}

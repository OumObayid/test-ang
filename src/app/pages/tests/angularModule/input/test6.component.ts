import { CommonModule } from '@angular/common';
import { Enfant6Component } from './enfant6.component';
import { Component, viewChild, ElementRef } from '@angular/core';
import { Categorie } from '../../../../interfaces/categorie';

@Component({
  selector: 'app-test6',
  imports: [Enfant6Component, CommonModule],
  template: `
    <div class="container">
      <h1>
        <pre><code>&#64;Input()</code></pre>
      </h1>
      <hr />
      <!-- Utilisation du composant enfant -->
      <div class="border p-3">
        <h3>parent</h3>
        @for (categorie of categories; track categorie.id) {
        <app-enfant6 [data]="categorie"></app-enfant6>
        } @empty {
        <p>aucune catégorie n'a été trouvée</p>
        }
      </div>
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
            aria-selected="false"
          >
            Composant Enfant
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
import &#123; EnfantComponent &#125; from "./enfant.component";
import &#123; Component &#125; from "&#64;angular/core";
import &#123; Categorie &#125; from "../../../interfaces/categorie";

&#64;Component(&#123;
  selector: "app-root",
  imports: [EnfantComponent],
  template: &#96;
    &#60;div class="container"&#62;
      &#60;h1&#62;
        &#60;pre&#62;&#60;code&#62;&#64;Input()&#60;/code&#62;&#60;/pre&#62;
      &#60;/h1&#62;
      &#60;hr /&#62;
      &#60;!-- Utilisation du composant enfant --&#62;
      &#60;div class="border p-3"&#62;
        &#60;h3&#62;parent&#60;/h3&#62;
        &#64;for (categorie of categories; track categorie.id) &#123;
        &#60;app-enfant [data]="categorie"&#62;&#60;/app-enfant&#62;
        &#125; &#64;empty &#123;
        &#60;p&#62;aucune catégorie n'a été trouvée&#60;/p&#62;
        &#125;
      &#60;/div&#62;
    &#60;/div&#62;
  &#96;,
&#125;)
export class Test6Component &#123;
  categories: Categorie[] = [
    &#123;
      id: 1,
      nom: "Accessoires",
    &#125;,
    &#123;
      id: 2,
      nom: "Vestes",
    &#125;,
    &#123;
      id: 3,
      nom: "Pantalons",
    &#125;,
    &#123;
      id: 4,
      nom: "Chemises",
    &#125;,
    &#123;
      id: 5,
      nom: "Robes",
    &#125;,
  ];
&#125;</pre
          >
        </div>

        <!-- Composant C2 -->
        <div
          class="tab-pane fade"
          id="c2"
          role="tabpanel"
          aria-labelledby="c2-tab"
          style="position: relative;"
        >
          <!-- Bouton de copie pour C2 -->
          <i (click)="copy2()" class="fas fa-copy"></i>
          <span class="confirm" *ngIf="clicked"
            >copied <i class="fas fa-check"></i
          ></span>

          <pre #tab2 class="tab fw-bold" ngNonBindable>
import &#123; CommonModule &#125; from '&#64;angular/common';
import &#123; Component,Input &#125; from '&#64;angular/core';
import &#123; Categorie &#125; from '../../../interfaces/categorie';

&#64;Component(&#123;
  selector: 'app-enfant',
  standalone: true,
  imports: [CommonModule],
  template: &#96;
    &#60;div class="border p-2"&#62;
        Categorie:    &#123;&#123; data.nom &#125;&#125;
    &#60;/div&#62;
  &#96;,
&#125;)
export class EnfantComponent &#123;
  &#64;Input() data: Categorie = &#123;
    id: 0,
    nom: ''
  &#125;;
&#125;</pre>
        </div>
      </div>
      <!-- --------------------Fin Template pour afficher le code source---------------- -->

      <hr />
      <div class=" mt-5">
        ****************************************<span class="fs-2"
          >Explication</span
        >*************************************************
        <pre>
<div class="fs-6 fw-bold text-danger mt-4">C'est quoi &#64;Input ?</div>
<div>&#64;Input() sert à passer une donnée d’un composant parent vers son composant enfant.</div>
Le parent (Test6Component) récupère une liste de catégories depuis un service
(CategoriesService) et la charge dans la propriété
<strong>categories</strong>, et les transmet au composant enfant (Enfant6Component)
via le décorateur &#64;Input.
<strong>Composant parent (Test6Component) :</strong>
Il importe le composant enfant (Enfant6Component) pour l'utiliser dans son modèle.
Il récupère les données via un service asynchrone dans la méthode fetchCategories().
Il passe ces données au composant enfant avec l'attribut [data]="categories" dans le code:

 <strong>&#64;for (categorie of categories; track categorie.id)
  &#123;&#60;app-enfant6 <span class="text-danger">[data]="categories"</span> &#62;&#60;&#47;app-enfant6&#62;&#125;</strong>

 <strong>Composant enfant (Enfant6Component) :</strong>
Il utilise &#64;Input pour recevoir les données de catégories depuis le parent:
&#64;Input() data:Categories[]=[];
Il utilise la propriété  data pour afficher le contenu
        </pre>
      </div>
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
         pre{
          font-size:15px;
         }
// -------------------------Fin style pour afficher le code source----------------
         `,
})
export class Test6Component {
  categories: Categorie[] = [
    {
      id: 1,
      nom: 'Accessoires',
    },
    {
      id: 2,
      nom: 'Vestes',
    },
    {
      id: 3,
      nom: 'Pantalons',
    },
    {
      id: 4,
      nom: 'Chemises',
    },
    {
      id: 5,
      nom: 'Robes',
    },
  ];

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
  copy2() {
    const element = this.infoTab2()?.nativeElement;
    if (element) navigator.clipboard.writeText(element.textContent);
    this.clicked = true;
    setTimeout(() => {
      this.clicked = false;
    }, 1500);
  }
  // ----------------------Fin ts pour afficher le code source--------------------
}

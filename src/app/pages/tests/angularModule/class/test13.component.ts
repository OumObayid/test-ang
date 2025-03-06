import { ElementRef, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [CommonModule],
  template: `
    <div class="container">
      <h1>
        <strong>Les Class Bindings dans Angular:</strong> Liaison directe avec
        un objet
      </h1>
      <hr />
      <div [ngClass]="userClassObject">
        {{ user.name }}
      </div>
      <button class="btn btn-success my-3" (click)="toggleHighlight()">
        Toggle Highlight
      </button>
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
import &#123; CommonModule &#125; from '&#64;angular/common';
import &#123; Component &#125; from '&#64;angular/core';

&#64;Component(&#123;
  selector: 'app-root',
  imports:&#91;CommonModule&#93;,
  template: &#96;
  &#60;div class="container"&#62;
      &#60;h1&#62;
        &#60;strong&#62;Les Class Bindings dans Angular:&#60;/strong&#62; Liaison directe avec un objet
      &#60;/h1&#62;
      &#60;hr&#62;
    &#60;div &#91;ngClass&#93;="userClassObject"&#62;
      &#123;&#123; user.name &#125;&#125;
    &#60;/div&#62;
    &#60;button class="btn btn-success my-3" (click)="toggleHighlight()"&#62;Toggle Highlight&#60;/button&#62;
    &#60;/div&#62;
  &#96;,
  styles: &#91;&#96;
    .card &#123; border: 1px solid #ccc; padding: 16px; border-radius: 8px; &#125;
    .elevated &#123; box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); &#125;
    .highlighted &#123; background-color: yellow; &#125;
  &#96;&#93;
&#125;)

export class AppComponent &#123;
  user = &#123; name: 'John Doe' &#125;; // Exemple de données utilisateur

  // Objet contenant les classes avec leur état (true/false)
  userClassObject = &#123;
    'card': true,         // Toujours appliquée
    'elevated': true,     // Toujours appliquée
    'highlighted': false  // Appliquée ou non dynamiquement
  &#125;;

  // Méthode pour basculer la classe "highlighted"
  toggleHighlight() &#123;
    this.userClassObject&#91;'highlighted'&#93; = !this.userClassObject&#91;'highlighted'&#93;;
    // this.userClassObject.highlighted = !this.userClassObject.highlighted;
  &#125;
&#125; </pre
          >
        </div>
      </div>
      <!-- --------------------Fin Template pour afficher le code source---------------- -->

      <!-- -------------------- Template pour afficher le cours---------------- -->
      <div>
        _______________________________________________________<span class="fs-2">cours</span
        > _______________________________________________________
      </div>
      <pre style="font-size: 13px">
Différences entre &#91;class&#93; et &#91;ngClass&#93;
&#91;class&#93;:
Utilisé pour ajouter une seule classe statiquement ou dynamiquement.
Exemple :
html
Copier le code
&#60;div &#91;class&#93;="'card'"&#62;...&#60;/div&#62;
&#60;div &#91;class&#93;="isHighlighted ? 'highlighted' : ''"&#62;...&#60;/div&#62;

&#91;ngClass&#93;:
Conçu pour gérer plusieurs classes dynamiques.
Prend en charge les objets, tableaux, ou chaînes de caractères concaténées.
      </pre
      >
      <!-- --------------------Fin Template pour afficher le cours---------------- -->
    </div>
  `,
  styles: [
    `
      .card {
        border: 1px solid #ccc;
        padding: 16px;
        border-radius: 8px;
      }
      .elevated {
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
      }
      .highlighted {
        background-color: yellow;
      }
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

      i.fa-copy:hover {
        color: #aaacad;
        transform: scale(1.2); /* Effet d'agrandissement au survol */
        cursor: pointer; /* Change le curseur pour indiquer une action cliquable */
      }
      .confirm {
        position: absolute;
        top: 30px;
        right: 60px;
        color: grey;
        font-weight: bold;
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
  ],
})
export class Test13Component {
  user = { name: 'John Doe' }; // Exemple de données utilisateur

  // Objet contenant les classes avec leur état (true/false)
  userClassObject = {
    card: true, // Toujours appliquée
    elevated: true, // Toujours appliquée
    highlighted: false, // Appliquée ou non dynamiquement
  };

  // Méthode pour basculer la classe "highlighted"
  toggleHighlight() {
    this.userClassObject['highlighted'] = !this.userClassObject['highlighted'];
    // this.userClassObject.highlighted = !this.userClassObject.highlighted;
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

import { CommonModule } from '@angular/common';
import { Component, viewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-user',
  imports:[CommonModule],
  template: `
    <div class="container">
      <h1>
        <strong>Les Class Bindings dans Angular:</strong> Liaison directe avec
        une chaîne de caractères
      </h1>
      <hr />
      <div [class]="userClasses">
        <strong>{{ user.name }}</strong>
      </div>
      <div class="mt-3">
        <button
          class="btn btn-success me-2"
          (click)="toggleClass('highlighted')"
        >
          Toggle Highlight
        </button>
        <button
          class="btn btn-secondary me-2"
          (click)="toggleClass('elevated')"
        >
          Toggle Elevation
        </button>
        <button class="btn btn-danger" (click)="resetClasses()">
          Reset Classes
        </button>
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
import &#123; Component &#125; from '&#64;angular/core';

&#64;Component(&#123;
  selector: 'app-root',
  template: &#96;
    &#60;div class="container"&#62;
      &#60;h1&#62;
        &#60;strong&#62;Les Class Bindings dans Angular:&#60;/strong&#62; Liaison directe avec une chaîne de caractères
      &#60;/h1&#62;
      &#60;hr&#62;
      &#60;div [class]="userClasses"&#62;
        &#60;strong&#62;&#123;&#123; user.name &#125;&#125;&#60;/strong&#62;
      &#60;/div&#62;
      &#60;div class="mt-3"&#62;
        &#60;button class="btn btn-success me-2" (click)="toggleClass('highlighted')"&#62;
          Toggle Highlight
        &#60;/button&#62;
        &#60;button class="btn btn-secondary me-2" (click)="toggleClass('elevated')"&#62;
          Toggle Elevation
        &#60;/button&#62;
        &#60;button class="btn btn-danger" (click)="resetClasses()"&#62;
          Reset Classes
        &#60;/button&#62;
      &#60;/div&#62;

    &#60;/div&#62;
  &#96;,
  styles: [
    &#96;
      .card &#123;
        border: 1px solid #ccc;
        border-radius: 8px;
        padding: 16px;
        max-width: 300px;
        margin-bottom: 16px;
        background-color: #f9f9f9;
      &#125;
      .elevated &#123;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
      &#125;
      .highlighted &#123;
        background-color: #d4edda;
        border-color: #c3e6cb;
      &#125;
    &#96;,
  ],
&#125;)
export class AppComponent &#123;
  user = &#123; name: 'John Doe' &#125;; // Informations utilisateur
  userClasses = 'card elevated highlighted'; // Classes par défaut

  // Méthode pour basculer la classe "highlighted"
  toggleClass(className:string) &#123;
    if (this.userClasses.includes(className)) &#123;
      this.userClasses = this.userClasses.replace(className, '').trim();
    &#125; else &#123;
      this.userClasses +=' ' + className;
    &#125;
  &#125;

  // Réinitialise les classes à leur état par défaut
  resetClasses() &#123;
    this.userClasses = 'card elevated highlighted';
  &#125;
&#125;</pre
          >
        </div>
      </div>
      <!-- --------------------Fin Template pour afficher le code source---------------- -->

      <!-- --------------------Template pour afficher le cours---------------- -->
      <div class=" mt-4">
        __________________________________________________________ <span class="fs-2">cours</span
        > __________________________________________________________
      </div>
      <pre>
Cet exemple illustre l'utilisation des "Class Bindings" dans Angular pour appliquer dynamiquement des classes CSS à un élément HTML,<br> en fonction de l'état ou des interactions utilisateur. Voici une explication détaillée des différentes parties :

<strong>1. Liaison de classes avec [class]:</strong>
[class]="userClasses" : Cela permet de lier dynamiquement des classes CSS à un élément HTML.
La propriété userClasses contient les noms de classes sous forme de chaîne de caractères (comme "card elevated highlighted").
Angular applique automatiquement ces classes à l'élément.

<strong>2. Propriétés et données du composant :</strong>
user : C'est un objet contenant des informations sur l'utilisateur (ici, uniquement un nom).
userClasses : Une chaîne de caractères qui stocke les classes CSS actuellement appliquées à l'élément HTML.

<strong>3. Méthodes pour gérer les classes :</strong>
toggleHighlight() :
Cette méthode vérifie si la classe "highlighted" est présente dans userClasses.
Si oui, elle la supprime ; sinon, elle l'ajoute.
Cela permet d'activer ou désactiver la classe "highlighted".
toggleElevation() :
Similaire à toggleHighlight(), mais pour la classe "elevated".
resetClasses() :
Réinitialise la propriété userClasses à son état par défaut (toutes les classes initiales sont réappliquées).

<strong>4. Interactions utilisateur :</strong>
Trois boutons permettent de modifier dynamiquement les classes :
Toggle Highlight : Active ou désactive la classe "highlighted".
Toggle Elevation : Active ou désactive la classe "elevated".
Reset Classes : Réinitialise toutes les classes à leur état initial.

<strong>5. Styles CSS :</strong>
.card : Style de base pour l'élément (bordure, fond, etc.).
.elevated : Ajoute une ombre pour donner un effet d'élévation.
.highlighted : Change la couleur de fond et de bordure pour mettre en avant l'élément.

      </pre>
      <!-- --------------------Fin Template pour afficher le cours---------------- -->
    </div>
  `,
  styles: [
    `
      .card {
        border: 1px solid #ccc;
        border-radius: 8px;
        padding: 16px;
        max-width: 300px;
        margin-bottom: 16px;
        background-color: #f9f9f9;
      }
      .elevated {
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
      }
      .highlighted {
        background-color: #d4edda;
        border-color: #c3e6cb;
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
        color:grey;
        font-weight:bold
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
export class Test11Component {
  user = { name: 'John Doe' }; // Informations utilisateur
  userClasses = 'card elevated highlighted'; // Classes par défaut

  // Méthode pour basculer la classe "highlighted"
  toggleClass(className: string) {
    if (this.userClasses.includes(className)) {
      this.userClasses = this.userClasses.replace(className, '').trim();
    } else {
      this.userClasses += ' ' + className;
    }
  }

  // Réinitialise les classes à leur état par défaut
  resetClasses() {
    this.userClasses = 'card elevated highlighted';
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

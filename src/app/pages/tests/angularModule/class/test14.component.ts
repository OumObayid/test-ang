import { CommonModule } from '@angular/common';
import { Component, viewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [CommonModule],
  template: `
    <div class="container">
      <h1>
        <strong>Les Class Bindings dans Angular:</strong> Combinaison de
        plusieurs approches
      </h1>
      <hr />
      <div
        class="user-card"
        [class]="baseClasses"
        [class.active]="isActive"
        [ngClass]="additionalClasses"
      >
        {{ user.name }}
      </div>
      <button class="btn btn-success mt-3" (click)="toggleState()">
        Toggle State
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
        &#60;strong&#62;Les Class Bindings dans Angular:&#60;/strong&#62; Combinaison de plusieurs approches
      &#60;/h1&#62;
      &#60;hr&#62;
    &#60;div class="user-card"
         &#91;class&#93;="baseClasses"
         &#91;class.active&#93;="isActive"
         &#91;ngClass&#93;="additionalClasses"&#62;
      &#123;&#123; user.name &#125;&#125;
    &#60;/div&#62;
    &#60;button class="btn btn-success mt-3" (click)="toggleState()"&#62;Toggle State&#60;/button&#62;
    &#60;/div&#62;
  &#96;,
  styles: &#91;&#96;
    .user-card &#123;
      padding: 20px;
      border: 1px solid #ccc;
      margin: 10px 0;
      border-radius: 8px;
    &#125;
    .active &#123;
      border-color: green;
      background-color: #eaffea;
    &#125;
    .highlighted &#123;
      font-weight: bold;
      color: #007bff;
    &#125;
    .elevated &#123;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    &#125;
  &#96;&#93;
&#125;)

export class AppComponent &#123;
  user = &#123; name: 'John Doe' &#125;;

  // Classes de base
  baseClasses = 'card elevated';

  // État actif
  isActive = false;

  // Classes dynamiques
  additionalClasses = &#123;
    'highlighted': false,
    'shadow': false
  &#125;;

  // Fonction pour basculer les états
  toggleState() &#123;
    this.isActive = !this.isActive; // Toggle pour 'active'
    this.additionalClasses&#91;'highlighted'&#93; = !this.additionalClasses&#91;'highlighted'&#93;; // Toggle pour 'highlighted'
    this.additionalClasses&#91;'shadow'&#93; = !this.additionalClasses&#91;'shadow'&#93;; // Toggle pour 'shadow'
  &#125;
&#125;</pre
          >
        </div>
      </div>
      <!-- --------------------Fin Template pour afficher le code source---------------- -->
 </div>
  `,
  styles: [
    `
      .user-card {
        padding: 20px;
        border: 1px solid #ccc;
        margin: 10px 0;
        border-radius: 8px;
      }
      .active {
        border-color: green;
        background-color: #eaffea;
      }
      .highlighted {
        font-weight: bold;
        color: #007bff;
      }
      .elevated {
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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
export class test14Component {
  user = { name: 'John Doe' };

  // Classes de base
  baseClasses = 'card elevated';

  // État actif
  isActive = false;

  // Classes dynamiques
  additionalClasses = {
    highlighted: false,
    shadow: false,
  };

  // Fonction pour basculer les états
  toggleState() {
    this.isActive = !this.isActive; // Toggle pour 'active'
    this.additionalClasses['highlighted'] =
      !this.additionalClasses['highlighted']; // Toggle pour 'highlighted'
    this.additionalClasses['shadow'] = !this.additionalClasses['shadow']; // Toggle pour 'shadow'
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

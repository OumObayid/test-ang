import { CommonModule } from '@angular/common';
import {
  Component,
  signal,
  effect,
  viewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-signal-example',
  imports: [CommonModule],
  template: `
    <div class="container">
      <h1>Signal et Effect</h1>
      <hr />
      <p>Compteur : {{ count() }}</p>
      <button class="btn btn-success" (click)="increment()">Incrémenter</button>
      <button class="btn btn-danger mx-2" (click)="decrement()">
        Décrémenter
      </button>
      <button class="btn btn-danger" (click)="reinitialse()">
        Reinitialiser
      </button>
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
import &#123; Component, signal, effect &#125; from '&#64;angular/core';

&#64;Component(&#123;
  selector: 'app-root',
  template: &#96;
    &#60;div class="container"&#62;
      &#60;h1&#62;Signal et Effect&#60;/h1&#62;
      &#60;hr /&#62;
      &#60;p&#62;Compteur : &#123;&#123; count() &#125;&#125;&#60;/p&#62;
      &#60;button class="btn btn-success" (click)="increment()"&#62;
        Incrémenter
      &#60;/button&#62;
      &#60;button class="btn btn-danger mx-2" (click)="decrement()"&#62;Décrémenter&#60;/button&#62;
      &#60;button class="btn btn-danger" (click)="reinitialse()"&#62;Reinitialiser&#60;/button&#62;
    &#60;/div&#62;
  &#96;,
&#125;)
export class AppComponent &#123;
  // Déclaration du signal
  count = signal(0);

  constructor() &#123;
    // Déclaration d'un effet qui observe les changements du signal &#96;count&#96;
    effect(() =&#62; &#123;
      console.log(&#96;Le compteur a changé : $&#123;this.count()&#125;&#96;);
      document.title=&#96;title: $&#123;this.count()&#125;&#96;;  &#125;);
  &#125;

  // Méthode pour incrémenter la valeur du compteur
  increment() &#123;
    this.count.update((currentValue) =&#62; currentValue + 1);
  &#125;

  // Méthode pour décrémenter la valeur du compteur
  decrement() &#123;
    this.count.update((currentValue) =&#62; currentValue - 1);
  &#125;
  reinitialse()&#123;
    this.count.set(0);
  &#125;
&#125;</pre
          >
        </div>
      </div>
      <!-- --------------------Fin Template pour afficher le code source---------------- -->
      <div >
        ______________________________________________________________<span class="fs-2"
          >Cours</span
        >______________________________________________________________
      </div>
      <pre>

<strong>Signal :</strong>
signal(0) initialise un signal avec une valeur de 0.
Pour accéder à la valeur du signal, on utilise count().

<strong>Effect :</strong>
effect() exécute automatiquement son callback chaque fois que le signal count change.
Dans cet exemple, chaque mise à jour du signal est détectée, et un message est affiché dans la console.

<strong>Mise à jour :</strong>
update() est utilisé pour modifier la valeur du signal en fonction de sa valeur actuelle.
Les méthodes increment() et decrement() modifient respectivement la valeur du compteur.
</pre>
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
export class Test5Component {
  // Déclaration du signal
  count = signal(0);

  constructor() {
    // Déclaration d'un effet qui observe les changements du signal `count`
    effect(() => {
      console.log(`Le compteur a changé : ${this.count()}`);
      document.title = `title: ${this.count()}`;
    });
  }

  // Méthode pour incrémenter la valeur du compteur
  increment() {
    this.count.update((currentValue) => currentValue + 1);
  }

  // Méthode pour décrémenter la valeur du compteur
  decrement() {
    this.count.update((currentValue) => currentValue - 1);
  }
  reinitialse() {
    this.count.set(0);
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

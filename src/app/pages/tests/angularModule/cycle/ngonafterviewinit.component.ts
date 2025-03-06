import {
  AfterViewInit,
  Component,
  ElementRef,
  viewChild,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container mt-4">
      <h1>ngAfterViewInit() : Exécuter du code après l'affichage</h1>
      <hr />
      <p>
        Cette méthode est appelée après que la vue d’un composant (et de ses
        enfants) a été complètement initialisée. C’est l’endroit idéal pour
        effectuer des manipulations liées à la vue, comme interagir avec des
        éléments du DOM ou utiliser ViewChild pour accéder à des composants ou
        éléments enfants
      </p>
      <p>
        ➡️ Déclenché une seule fois après l’affichage du composant et des
        enfants.
      </p>
      <p>
        ➡️ Utilisation principale : Manipuler le DOM ou appeler une bibliothèque
        qui a besoin du DOM.
      </p>
      <h2>Exemple : Changer la couleur d’un élément après l’affichage</h2>
      <p>
        Voici un exemple plus significatif qui montre l'utilité de
        ngAfterViewInit() pour effectuer des actions après l'initialisation de
        la vue, comme accéder à des éléments DOM, mesurer leur taille, appliquer
        des styles conditionnels, ou lancer des animations :
      </p>
      <hr />
      <div #myDiv class="box">
      Ce div sera manipulé après l'initialisation de la vue.
      </div>
      <!-- --------------------Template pour afficher le code source---------------- -->
      <!-- Nav Tabs -->
      <ul class="nav nav-tabs mt-5" id="codeTabs" role="tablist">
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
import &#123; Component, AfterViewInit, ViewChild, ElementRef &#125; from '&#64;angular/core';

&#64;Component(&#123;
  selector: 'app-example',
  template: &#96;
    &#60;div #myDiv class="box"&#62;
      &#60;p&#62;Ce div sera manipulé après l'initialisation de la vue.&#60;/p&#62;
    &#60;/div&#62;
  &#96;,
  styles: [&#96;
    .box &#123;
      width: 200px;
      height: 200px;
      background-color: lightblue;
      text-align: center;
      line-height: 200px;
    &#125;
  &#96;]
&#125;)
export class ExampleComponent implements AfterViewInit &#123;
  &#64;ViewChild('myDiv') myDiv!: ElementRef;

  ngAfterViewInit() &#123;
    // Manipulation du DOM après la vue initialisée
    const divElement = this.myDiv.nativeElement;

    // Vérification de la taille du div
    console.log('Dimensions du div:', divElement.offsetWidth, divElement.offsetHeight);

    // Appliquer un effet après l'initialisation
    divElement.style.backgroundColor = 'green';  // Change la couleur du fond après initialisation
    divElement.style.transform = 'scale(1.1)';  // Appliquer une transformation
    divElement.style.transition = 'transform 0.5s';  // Animation lors de la transformation

    // Lancer une animation
    setTimeout(() =&#62; &#123;
      divElement.style.transform = 'scale(1)';
    &#125;, 1000);
  &#125;
&#125;</pre
          >
        </div>
      </div>
      <div class=" mt-4">
        ****************************************<span class="fs-2">Explication de l'exemple</span
        >*************************************************
      </div>
      <pre>
<h4>Ce que fait cet exemple :</h4>
Manipulation du DOM après la vue initialisée :
On modifie la couleur de fond du div et on applique une transformation CSS (scale)
pour montrer qu'on peut interagir avec les éléments DOM une fois que la vue est complètement rendue.

Mesure des éléments :
Avant d'appliquer une animation ou une transformation, on peut mesurer des propriétés
comme la largeur et la hauteur du div (avec offsetWidth et offsetHeight).

Animations ou autres effets visuels :
Grâce à ngAfterViewInit(), tu peux ajouter des animations, des transitions ou
d'autres effets qui ne peuvent être appliqués que lorsque les éléments du DOM sont prêts.

<h4>Pourquoi utiliser ngAfterViewInit() ici ?</h4>

Accès sécurisé au DOM :
Les actions sur le DOM avec &#64;ViewChild ou &#64;ViewChildren sont possibles uniquement
après le cycle de vie complet de la vue, ce qui garantit que l'élément auquel tu fais
référence est déjà présent dans le DOM.

Calculs ou animations :
Si tu as besoin de manipuler un élément (par exemple, pour obtenir sa taille ou
appliquer une animation), ngAfterViewInit() est l'endroit idéal pour cela,
car c'est après ce hook que tous les éléments de la vue sont initialisés.
  </pre>
      <!-- --------------------Fin Template pour afficher le code source---------------- -->
    </div>
  `,
  styles: `

    .box {
      width: 400px;
      height: 200px;
      background-color: lightblue;
      text-align: center;
      line-height: 200px;
      max-width: 100%;
      white-space: normal;
    }
    // -------------------------style pour afficher le code source----------------
    pre,p{
      font-size:15px;
     }
    .fa-check {
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
export class NgOnAfterViewInitComponent implements AfterViewInit {
  @ViewChild('myDiv') myDiv!: ElementRef;

  ngAfterViewInit() {
    // Manipulation du DOM après la vue initialisée
    const divElement = this.myDiv.nativeElement;

    // Vérification de la taille du div
    console.log(
      'Dimensions du div:',
      divElement.offsetWidth,
      divElement.offsetHeight
    );

    // Appliquer un effet après l'initialisation
    divElement.style.backgroundColor = 'green'; // Change la couleur du fond après initialisation
    divElement.style.transform = 'scale(1.1)'; // Appliquer une transformation
    divElement.style.transition = 'transform 0.5s'; // Animation lors de la transformation

    // Lancer une animation
    setTimeout(() => {
      divElement.style.transform = 'scale(1)';
    }, 1000);
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

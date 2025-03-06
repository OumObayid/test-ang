import { CommonModule } from '@angular/common';
import { Enfant30Component } from './enfant30.component';
import { Component, ElementRef, viewChild } from '@angular/core';
import { User } from '../../../../interfaces/user';

@Component({
  selector: 'app-test30',
  imports: [Enfant30Component, CommonModule],
  template: `
    <div class="container">
      <h1>contentChild: accéder aux éléments enfants d'un composant</h1>
      <hr />
      <div class="border p-3">
        <h3>Parent</h3>
        <app-enfant30>
          <h2 #cardTitle>John Doe</h2>
          <p>Développeur Web</p>
          <p>Lorem ipsum dolor sit amet...</p>
        </app-enfant30>
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
import &#123; EnfantComponent &#125; from './enfant.component';
import &#123; Component &#125; from '&#64;angular/core';

&#64;Component(&#123;
  selector: 'app-enfant',
  imports: [EnfantComponent],
  template: &#96;
    &#60;div class="container"&#62;
      &#60;h1&#62;contentChild: accéder aux éléments enfants d'un composant&#60;/h1&#62;
      &#60;hr /&#62;
      &#60;div class="border p-3"&#62;
        &#60;h3&#62;Parent&#60;/h3&#62;
        &#60;app-enfant&#62;
          &#60;h2 #cardTitle&#62;John Doe&#60;/h2&#62;
          &#60;p&#62;Développeur Web&#60;/p&#62;
          &#60;p&#62;Lorem ipsum dolor sit amet...&#60;/p&#62;
        &#60;/app-enfant&#62;
      &#60;/div&#62;
    &#60;/div&#62;
  &#96;,
&#125;)
export class Test30Component &#123;&#125;</pre
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
import &#123;  Component,  contentChild,  ElementRef,&#125; from "&#64;angular/core";

&#64;Component(&#123;
  selector: "app-enfant30",
  standalone: true,
  template: &#96;
    &#60;div class="border p-3"&#62;
      &#60;h3&#62;Enfant&#60;/h3&#62;
      &#60;ng-content /&#62;
      &#60;div&#62;
        Titre de la carte :
        &#60;span class="text-danger fw-bold"&#62;&#123;&#123;
          title()?.nativeElement.textContent
        &#125;&#125;&#60;/span&#62;
      &#60;/div&#62;
    &#60;/div&#62;
  &#96;,
&#125;)
export class Enfant30Component &#123;
  title = contentChild&#60;ElementRef&#62;("cardTitle"); // c'est un signal
  // ou
  // &#64;ContentChild('cardTitle') title!: ElementRef;//ce n'est pas un signal
&#125;</pre
          >
        </div>
      </div>
      <!-- --------------------Fin Template pour afficher le code source---------------- -->

      <div class=" mt-4">
        ****************************************<span class="fs-2">cours</span
        >*************************************************
      </div>
      <pre>
Le contentChild() est une fonction qui permet d'accéder aux éléments enfants d'un composant.

Vous avez un composant parent qui passe un titre à travers un element dom via une référence dans le ngcontent d'un composant enfant .
L'enfant utilise contentChild pour accéder à l'élément contenent le titre et le personnaliser.

L'utilisation de contentChild() retourne un signal, ce qui signifie que la valeur sera automatiquement mise à jour si l'élément enfant change.

<strong>Utilisation:</strong>
template du parent:<span class="text-danger fw-bold">
&#60;app-enfant&#62;
&#60;h2 #cardTitle&#62;John Doe&#60;/h2&#62;
&#60;/app-enfant&#62;
</span>
template de l'enfant:<span class="text-danger fw-bold">
.......
&#60;ng-content /&#62;
.......
</span>
ts de l'enfant:<span class="text-danger fw-bold">
  title = contentChild&#60;ElementRef&#62;('cardTitle'); // c'est un signal
  </span>
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
export class Test30Component {
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

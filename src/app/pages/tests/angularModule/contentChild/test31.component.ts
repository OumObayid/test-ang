import { CommonModule } from '@angular/common';
import { Enfant31_2Component } from './enfant31_2.component';
import { Enfant31_1Component } from './enfant31_1.component';
import {
  Component,
  viewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-test31',
  imports: [Enfant31_1Component, Enfant31_2Component, CommonModule],
  standalone: true,
  template: `
    <div class="container">
      <h1>
        contentChild: Accéder à un composant enfant dans la projection de
        contenu
      </h1>
      <hr />
      <div>
        <h3>Parent</h3>
        <app-enfant31_1>
          <app-enfant31_2></app-enfant31_2>
        </app-enfant31_1>
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
            Composant Enfant 1
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
            Composant Enfant 2
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
import &#123; Enfant1Component &#125; from './enfant1.component';
import &#123; Enfant2Component &#125; from './enfant2.component';
import &#123; Component &#125; from '&#64;angular/core';

&#64;Component(&#123;
  selector: 'app-root',
  imports: [Enfant1Component, Enfant2Component],
  standalone: true,
  template: &#96;
    &#60;div class="container"&#62;
      &#60;h1&#62;
        contentChild: Accéder à un composant enfant dans la projection de
        contenu
      &#60;/h1&#62;
      &#60;hr /&#62;
      &#60;div&#62;
        &#60;h3&#62;Parent&#60;/h3&#62;
        &#60;app-enfant1&#62;
          &#60;app-enfant2&#62;&#60;/app-enfant2&#62;
        &#60;/app-enfant1&#62;
      &#60;/div&#62;
    &#60;/div&#62;
  &#96;,
  styles: &#96;
  .card &#123;
    padding: 16px;
    border: 1px solid #ddd;
    border-radius: 8px;
  &#125;
&#96;,
&#125;)
export class Test31Component &#123;&#125;</pre
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
import &#123; Enfant2Component &#125; from './enfant2.component';
import &#123; Component, computed, contentChild &#125; from '&#64;angular/core';

&#64;Component(&#123;
  selector: 'app-enfant1',
  standalone: true,
  template: &#96;
    &#60;div class="card"&#62;
      &#60;h2&#62;Profil Utilisateur&#60;/h2&#62;
      &#60;ng-content /&#62;

      &#64;if (badgeStatus()) &#123;
        &#60;p&#62;Statut actuel : &#123;&#123; badgeStatus() &#125;&#125;&#60;/p&#62;
      &#125;
    &#60;/div&#62;
  &#96;,
   styles: [&#96;
   .card &#123;
     padding: 16px;
     border: 1px solid #ddd;
     border-radius: 8px;
   &#125;
 &#96;],
&#125;)
export class Enfant1Component &#123;
  badge = contentChild(Enfant2Component);
  badgeStatus = computed(() =&#62; this.badge()?.status);
&#125;</pre>
        </div>

        <!-- Composant C3 -->
        <div
          class="tab-pane fade"
          id="c3"
          role="tabpanel"
          aria-labelledby="c3-tab"
          style="position: relative;"
        >
          <!-- Bouton de copie pour C3 -->
          <i (click)="copy3()" class="fas fa-copy"></i>
          <span class="confirm" *ngIf="clicked"
            >copied <i class="fas fa-check"></i
          ></span>

          <pre #tab3 class="tab fw-bold" ngNonBindable>
import &#123; Component&#125; from '&#64;angular/core';

&#64;Component(&#123;
  selector: 'app-enfant2',
  standalone: true,
  template: &#96;
     &#60;span class="badge"&#62;
      &#123;&#123; status &#125;&#125;
    &#60;/span&#62;
  &#96;,
   styles: [&#96;
   .badge &#123;
     padding: 4px 8px;
     background-color: #4CAF50;
     color: white;
     border-radius: 4px;
   &#125;
 &#96;],
&#125;)
export class Enfant2Component &#123;
  status = 'En ligne';

&#125;</pre>
        </div>
      </div>
      <!-- --------------------Fin Template pour afficher le code source---------------- -->

      <hr />
      <div class=" mt-4">
        ****************************************<span class="fs-2">cours</span
        >*************************************************
      </div>
      <pre>
      ...
      </pre
      >
    </div>
  `,
  styles: `
  .card {
    padding: 16px;
    border: 1px solid #ddd;
    border-radius: 8px;
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

export class Test31Component {
  // ----------------------ts pour afficher le code source--------------------
  infoTab1 = viewChild<ElementRef>('tab1');
  infoTab2 = viewChild<ElementRef>('tab2');
  infoTab3 = viewChild<ElementRef>('tab3');
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
  // ----------------------Fin ts pour afficher le code source--------------------
}

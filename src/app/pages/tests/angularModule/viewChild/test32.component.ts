import { CommonModule } from '@angular/common';
import {
  Component,
  ViewChild,
  TemplateRef,
  viewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  standalone: true,
  template: `
    <div class="container mt-3">
      <h1>ViewChild avec ng-template</h1>
      <button class="btn btn-success" (click)="toggleTemplate()">
        {{ showTemplate ? 'Masquer' : 'Afficher' }} le contenu
      </button>
      <!-- Contenu affiché ou masqué -->
      <ng-container *ngIf="showTemplate">
        <ng-container *ngTemplateOutlet="myTemplate"></ng-container>
      </ng-container>

      <!-- Template référencé avec ViewChild -->
      <ng-template #refTemplate>
        <p class="mt-3">Contenu du template rendu via ViewChild</p>
      </ng-template>
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
import &#123; CommonModule &#125; from "&#64;angular/common";
import &#123; Component, ViewChild, TemplateRef &#125; from "&#64;angular/core";

&#64;Component(&#123;
  selector: "app-root",
  imports: [CommonModule],
  standalone: true,
  template: &#96;
    &#60;div class="container mt-3"&#62;
      &#60;h1&#62;ViewChild avec ng-template&#60;/h1&#62;
      &#60;button class="btn btn-success" (click)="toggleTemplate()"&#62;
        &#123;&#123; showTemplate ? "Masquer" : "Afficher" &#125;&#125; le contenu
      &#60;/button&#62;
      &#60;!-- Contenu affiché ou masqué --&#62;
      &#60;ng-container *ngIf="showTemplate"&#62;
        &#60;ng-container *ngTemplateOutlet="myTemplate"&#62;&#60;/ng-container&#62;
      &#60;/ng-container&#62;

      &#60;!-- Template référencé avec ViewChild --&#62;
      &#60;ng-template #refTemplate&#62;
        &#60;p class="mt-3"&#62;Contenu du template rendu via ViewChild&#60;/p&#62;
      &#60;/ng-template&#62;
    &#60;/div&#62;
  &#96;,
&#125;)
export class Test32Component &#123;
  &#64;ViewChild("refTemplate") myTemplate!: TemplateRef&#60;any&#62;;
  showTemplate: boolean = false;

  toggleTemplate() &#123;
    this.showTemplate = !this.showTemplate; // Bascule entre afficher/masquer
  &#125;
&#125;

          </pre
          >
        </div>
      </div>
      <!-- --------------------Fin Template pour afficher le code source---------------- -->
      <div class=" mt-4">
        ****************************************<span class="fs-2">cours</span
        >*************************************************
      </div>
      <pre>
<strong>syntaxe :</strong>
<span class="text-danger fw-bold">&#64;ViewChild('refTemplate') myTemplate!: TemplateRef&#123;any&#125;;</span>

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
export class Test32Component {
  @ViewChild('refTemplate') myTemplate!: TemplateRef<any>;
  showTemplate: boolean = false;

  toggleTemplate() {
    this.showTemplate = !this.showTemplate; // Bascule entre afficher/masquer
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

  // ----------------------Fin ts pour afficher le code source--------------------
}

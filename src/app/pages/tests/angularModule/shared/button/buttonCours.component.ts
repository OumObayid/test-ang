import { CommonModule } from '@angular/common';
import { ParentButtonComponent } from './parentButton.component';
import { Component, viewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-button-cours',
  imports: [ParentButtonComponent, CommonModule],
  template: `
    <h1>📌 Créer un bouton réutilisable</h1>
    <hr />
    <app-button-parent></app-button-parent>

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
          Composant utilisant le bouton
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
          aria-selected="true"
        >
          le bouton réutilisable
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
          aria-selected="true"
        >
          démarche à suivre
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
import &#123; ButtonSharedComponent &#125; from './buttonShared.component';
import &#123; Component, OnInit &#125; from '&#64;angular/core';

&#64;Component(&#123;
  selector: 'app-button-parent',
  imports: [ButtonSharedComponent],
  template: &#96;
    &#60;div class="border p-2"&#62;
      &#60;h2&#62;Composant utilisant le bouton réutilisable&#60;/h2&#62;
      &#60;div class="border p-2"&#62;
        &#60;h3&#62;Boutons réutilisables&#60;/h3&#62;
        &#60;div class="d-flex"&#62;
      &#60;app-button-shared
        label="Envoyer"
        type="submit"
        color="primary"
      &#62;&#60;/app-button-shared&#62;
      &#60;app-button-shared label="Annuler" color="secondary"&#62;&#60;/app-button-shared&#62;
      &#60;app-button-shared
        label="Supprimer"
        color="danger"
        [disabled]="true"
      &#62;&#60;/app-button-shared&#62;&#60;/div&#62;&#60;/div&#62;
    &#60;/div&#62;
  &#96;,
  styles: &#96;

  &#96;,
&#125;)
export class ParentButtonComponent implements OnInit &#123;
  constructor() &#123;&#125;

  ngOnInit(): void &#123;&#125;
&#125;</pre
        >
      </div>
      <!-- Composant C2 -->
      <div
        class="tab-pane fade show"
        id="c2"
        role="tabpanel"
        aria-labelledby="c1-tab"
        style="position: relative;"
      >
        <!-- Bouton de copie pour C2 -->
        <i (click)="copy2()" class="fas fa-copy"></i>
        <span class="confirm" *ngIf="clicked"
          >copied <i class="fas fa-check"></i>
        </span>
        <pre #tab2 class="tab fw-bold" ngNonBindable>
import &#123; ButtonSharedComponent &#125; from './buttonShared.component';
import &#123; Component, OnInit &#125; from '&#64;angular/core';

&#64;Component(&#123;
  selector: 'app-button-parent',
  imports: [ButtonSharedComponent],
  template: &#96;
    &#60;div class="border p-2"&#62;
      &#60;h2&#62;Composant utilisant le bouton réutilisable&#60;/h2&#62;
      &#60;div class="border p-2"&#62;
        &#60;h3&#62;Boutons réutilisables&#60;/h3&#62;
        &#60;div class="d-flex"&#62;
      &#60;app-button-shared
        label="Envoyer"
        type="submit"
        color="primary"
      &#62;&#60;/app-button-shared&#62;
      &#60;app-button-shared label="Annuler" color="secondary"&#62;&#60;/app-button-shared&#62;
      &#60;app-button-shared
        label="Supprimer"
        color="danger"
        [disabled]="true"
      &#62;&#60;/app-button-shared&#62;&#60;/div&#62;&#60;/div&#62;
    &#60;/div&#62;
  &#96;,
  styles: &#96;

  &#96;,
&#125;)
export class ParentButtonComponent implements OnInit &#123;
  constructor() &#123;&#125;

  ngOnInit(): void &#123;&#125;
&#125;</pre
        >
      </div>
      <!-- Composant C3 -->
      <div
        class="tab-pane fade show"
        id="c3"
        role="tabpanel"
        aria-labelledby="c3-tab"
        style="position: relative;"
      >
       
        <div #tab3 class="bg-white p-3 border  fw-bold" ngNonBindable>
          <p>
            La meilleure méthode en Angular pour créer un bouton réutilisable
            est d'utiliser un composant Angular avec &#64;Input().
          </p>
          <h2>🔹 1. Créer le composant bouton</h2>
          <p>Dans le terminal :</p>
          <pre class="tab">
ng generate component shared/button
</pre
          >
          <h2>🔹 2. Modifier le composant (button.component.ts)</h2>
          <p>Ajoute des entrées personnalisables :</p>
          <pre class="tab">
import &#123; Component, Input &#125; from '&#64;angular/core';

&#64;Component(&#123;
  selector: 'app-button',
  template: &#96;
    &#60;button [type]="type" [ngClass]="color" [disabled]="disabled"&#62;
      &#123; &#123; label &#125; &#125;
    &#60;/button&#62;
  &#96;,
  &#115;&#116;&#121;&#108;&#101;&#115; : &#91;&#96;
    .primary &#123; background-color: blue; color: white; &#125;
    .secondary &#123; background-color: gray; color: white; &#125;
    .danger &#123; background-color: red; color: white; &#125;
  &#96;&#93;
&#125;)
export class ButtonComponent &#123;
  &#64;Input() label: string = 'Bouton';
  &#64;Input() type: 'button' | 'submit' | 'reset' = 'button';
  &#64;Input() color: 'primary' | 'secondary' | 'danger' = 'primary';
  &#64;Input() disabled: boolean = false;
&#125;</pre
          >
          <h2>3. Utiliser le bouton dans un autre composant</h2>
          <p>Ajoute le composant dans une page ou un autre composant :</p>
          <pre class="tab">
&#60;app-button label="Envoyer" type="submit" color="primary"&#62;&#60;/app-button&#62;
&#60;app-button label="Annuler" color="secondary"&#62;&#60;/app-button&#62;
&#60;app-button label="Supprimer" color="danger" [disabled]="true"&#62;&#60;/app-button&#62;
</pre
          >
          <p>
            Cette méthode est simple, efficace et réutilisable dans tout le
            projet. 😊
          </p>
        </div>
      </div>
    </div>
    <!-- --------------------Fin Template pour afficher le code source---------------- -->
  `,
  styles: `
// -------------------------style pour afficher le code source----------------
pre,p,li{
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
export class ButtonCoursComponent {
  constructor() {}

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

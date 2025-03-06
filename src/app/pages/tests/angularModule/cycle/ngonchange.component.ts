import { EnfantNgOnChangeComponent } from './enfantngonchange.component';
import { FormsModule } from '@angular/forms';
import {
  Component,
  OnChanges,
  SimpleChanges,
  Input,
  viewChild,
  ElementRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ngonchanges',
  standalone: true,
  imports: [CommonModule, FormsModule, EnfantNgOnChangeComponent],
  template: `
    <div class="container mt-4">
      <h1>ngOnChanges() : Détecter les changements d'&#64;Input()</h1>
      <hr />
      <p>➡️ Déclenché à chaque fois qu’une propriété &#64;Input() change.</p>
      <p>
        ➡️ Utilisation principale : Réagir aux changements de valeurs envoyées
        par un parent.
      </p>
      <h2>Pourquoi utiliser ngOnChanges() ?</h2>

      <p>➡️ Si on veut réagir à des mises à jour dynamiques depuis le parent</p>
      <p>
        ➡️ Permet de voir les anciennes et nouvelles valeurs d’une propriété
      </p>

      <h2>
        Exemple : Un composant enfant qui détecte les changements de
        l’&#64;Input() reçu du parent
      </h2>
      <hr />
      <div class="border p-2 my-0">
        <h3>Composant Parent</h3>
        <input [(ngModel)]="message" class="form-control" />
        <app-child [message]="message"></app-child>
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
          import &#123; EnfantNgOnChangeComponent &#125; from "./enfantngonchange.component";
import &#123; FormsModule &#125; from "&#64;angular/forms";
import &#123; Component &#125; from "&#64;angular/core";
import &#123; CommonModule &#125; from "&#64;angular/common";

&#64;Component(&#123;
  selector: "app-ngonchanges",
  standalone: true,
  imports: [CommonModule, FormsModule, EnfantNgOnChangeComponent],
  template: &#96;
    &#60;h3&#62;Composant Parent&#60;/h3&#62;
    &#60;input [(ngModel)]="message" class="form-control" /&#62;
    &#60;app-child [message]="message"&#62;&#60;/app-child&#62;
  &#96;,
&#125;)
export class NgOnChangesComponent &#123;
  message: string = "";
&#125;</pre
          >
        </div>
        <!-- Composant C2 -->
        <div
          class="tab-pane fade show"
          id="c2"
          role="tabpanel"
          aria-labelledby="c2-tab"
          style="position: relative;"
        >
          <!-- Bouton de copie pour C2 -->
          <i (click)="copy2()" class="fas fa-copy"></i>
          <span class="confirm" *ngIf="clicked"
            >copied <i class="fas fa-check"></i>
          </span>
          <pre #tab1 class="tab fw-bold" ngNonBindable>
import &#123; Component, Input, OnChanges, SimpleChanges &#125; from '&#64;angular/core';

&#64;Component(&#123;
  selector: 'app-child',
  template: &#96;&#60;p&#62;Message reçu : &#123;&#123; message &#125;&#125;&#60;/p&#62;
             &#60;p *ngIf="previousMessage"&#62;Ancien message : &#123;&#123; previousMessage &#125;&#125;&#60;/p&#62;&#96;,
&#125;)
export class ChildComponent implements OnChanges &#123;
  &#64;Input() message!: string;
  previousMessage: string = '';

  ngOnChanges(changes: SimpleChanges) &#123;
    if (changes['message'] && !changes['message'].firstChange) &#123;
      this.previousMessage = changes['message'].previousValue;
    &#125;
  &#125;
&#125;</pre
          >
        </div>
      </div>
      <!-- --------------------Fin Template pour afficher le code source---------------- -->
    </div>
  `,

  styles: `
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
export class NgOnChangesComponent {
  message: string = '';

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

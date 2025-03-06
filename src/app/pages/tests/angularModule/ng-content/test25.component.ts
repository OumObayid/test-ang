import { CommonModule } from '@angular/common';
import { CommonEngine } from '@angular/ssr/node';
import { CardPropsComponent } from './cardProps.component';
import { Component, viewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardPropsComponent,CommonModule],
  template: `
    <div class="container">
      <h1>ng-content</h1>
      <hr />
      <h3>Dashboard</h3>
      <app-card-props>
        <h2>{{ user.name }}</h2>
        <h2>{{ user.firstname }}</h2>
        <p>{{ user.email }}</p>
      </app-card-props>
      <hr>
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
  selector: 'app-home',
  standalone: true,
  imports: [EnfantComponent],
  template: &#96;
    &#60;div class="container"&#62;
      &#60;h1&#62;ng-content&#60;/h1&#62;
      &#60;hr /&#62;
      &#60;h3&#62;Dashboard&#60;/h3&#62;
      &#60;app-enfant&#62;
        &#60;h2&#62;&#123;&#123; user.name &#125;&#125;&#60;/h2&#62;
        &#60;h2&#62;&#123;&#123; user.firstname &#125;&#125;&#60;/h2&#62;
        &#60;p&#62;&#123;&#123; user.email &#125;&#125;&#60;/p&#62;
      &#60;/app-enfant&#62;

    &#60;/div&#62;
  &#96;,
&#125;)
export class AppComponent &#123;
  user: any = &#123;
    id: 1,
    name: 'John Doe',
    username: 'johndoe',
    email: 'john&#64;example.com',
  &#125;;
&#125;</pre>
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
import &#123; Component &#125; from '&#64;angular/core';

&#64;Component(&#123;
  selector: 'app-enfant',
  standalone: true,
  template: &#96;
    &#60;div class="simple-card my-3">
      &#60;ng-content />
    &#60;/div>
  &#96;,
  styles: &#96;
    .simple-card &#123;
      padding: 16px;
      border: 1px solid #ccc;
      border-radius: 10px;
      background-color:#fbf7ff
    &#125;
  &#96;,
&#125;)
export class EnfantComponent &#123;&#125;


          </pre>

        </div>
      </div>
<!-- --------------------Fin Template pour afficher le code source---------------- -->

      <hr>
      <div class=" mt-4">
        ****************************************<span class="fs-2">cours</span
        >*************************************************
      </div>
      <pre>
L'équivalent de &#60;ng-content&#62; en Angular pour React est props.children,
une fonctionnalité intégrée de React qui permet de passer du contenu personnalisé (ou des sous-composants) à un composant.
&#60;ng-content&#62; est utilisé uniquement dans un composant enfant pour permettre au composant parent d'injecter
(ou de projeter) du contenu personnalisé à l'intérieur du composant enfant.
Il agit comme un "emplacement réservé" dans le template du composant enfant où le contenu fourni par le composant parent sera rendu.

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
             `
})
export class Test25Component {
  user: any = {
    id: 1,
    name: 'John Doe',
    username: 'johndoe',
    email: 'john@example.com',
  };
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

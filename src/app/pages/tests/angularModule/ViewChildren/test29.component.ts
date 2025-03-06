import { CommonModule } from '@angular/common';
import { Enfant29Component } from './enfant29.component';
import { Component, viewChild, viewChildren, ElementRef } from '@angular/core';
import { User } from '../../../../interfaces/user';

@Component({
  selector: 'app-test29',
  imports:[CommonModule,Enfant29Component],
  standalone: true,
  template: `
    <div class="container">
      <h1>viewChildren : Accéder aux composants enfants</h1>
      <hr />
      <div class="p-2 border">
        <h3>Parent</h3>

        <!-- Utilisation de *ngFor pour afficher chaque composant enfant -->
        @for (user of users; track user.id) {
        <div class="p-2 border my-2">
          <h3>Enfant</h3>
          <app-enfant29 [propsUser]="user"></app-enfant29>
        </div>
        }@empty { Aucun utilisateur trouvé }

        <button class="btn btn-success mt-3 me-3" (click)="colorCardAllUsers()">
          Mettre en évidence tous les utilisateurs
        </button>
        <button class="btn btn-danger mt-3" (click)="initializeAllUsers()">
          Réinitialiser
        </button>
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
import &#123; Enfant29Component &#125; from './enfant29.component';
import &#123; Component, viewChildren &#125; from '&#64;angular/core';
import &#123; User &#125; from '../../../interfaces/user';

&#64;Component(&#123;
  selector: 'app-test29',
  standalone: true,
  imports: [Enfant29Component],
  template: &#96;
    &#60;div class="container"&#62;
      &#60;h1&#62;viewChildren : Accéder aux composants enfants&#60;/h1&#62;
      &#60;hr /&#62;
      &#60;div class="p-2 border"&#62;
        &#60;h3&#62;Parent&#60;/h3&#62;

        &#60;!-- Utilisation de *ngFor pour afficher chaque composant enfant --&#62;
        &#64;for (user of users; track user.id) &#123;
        &#60;div class="p-2 border my-2"&#62;
          &#60;h3&#62;Enfant&#60;/h3&#62;
          &#60;app-enfant29 [propsUser]="user"&#62;&#60;/app-enfant29&#62;
        &#60;/div&#62;
        &#125;&#64;empty &#123; Aucun utilisateur trouvé &#125;

        &#60;button class="btn btn-success mt-3 me-3" (click)="colorCardAllUsers()"&#62;
          Mettre en évidence tous les utilisateurs
        &#60;/button&#62;
        &#60;button class="btn btn-danger mt-3" (click)="initializeAllUsers()"&#62;
          Réinitialiser
        &#60;/button&#62;
      &#60;/div&#62;
    &#60;/div&#62;
  &#96;,
&#125;)
export class Test29Component &#123;
  users: User[] = [
    &#123;
      id: '1',
      firstname: 'John',
      lastname: 'Doe',
      email: 'john&#64;example.com',
      tel: '',
      address: '',
    &#125;,
    &#123;
      id: '2',
      firstname: 'kain',
      lastname: 'adam',
      email: 'kain&#64;example.com',
      tel: '',
      address: '',
    &#125;,
  ];

  // Récupération des enfants via la nouvelle API viewChildren, il retourne un tableau
  userCards = viewChildren(Enfant29Component);

  // Méthode pour mettre en évidence tous les utilisateurs
  colorCardAllUsers() &#123;
    const cards = this.userCards();
    console.log(' this.userCards() :', this.userCards());
    cards.forEach((card) =&#62; &#123;
      card.colorCardUser(); // Appel d'une méthode publique de l'enfant

    &#125;);
  &#125;
  initializeAllUsers() &#123;
    const cards = this.userCards();
    cards.forEach((card) =&#62; &#123;
      card.initialize(); // Appel d'une méthode publique de l'enfant
    &#125;);
  &#125;
&#125;</pre>
        </div>
          <!-- Composant C2 -->
          <div
          class="tab-pane fade show "
          id="c2"
          role="tabpanel"
          aria-labelledby="c2-tab"
          style="position: relative;"
        >
          <!-- Bouton de copie pour C1 -->
          <i (click)="copy2()" class="fas fa-copy"></i>
          <span class="confirm" *ngIf="clicked"
            >copied <i class="fas fa-check"></i>
          </span>
          <pre #tab2 class="tab fw-bold" ngNonBindable>
import &#123; Component, Input, viewChild, ElementRef &#125; from '&#64;angular/core';
import &#123; User &#125; from '../../../interfaces/user';

&#64;Component(&#123;
  selector: 'app-enfant29',
  standalone: true,
  template: &#96;
    &#60;div #card class="border p-3 mb-2"&#62;
      &#60;h3&#62;&#123;&#123; propsUser.firstname &#125;&#125; &#123;&#123; propsUser.lastname &#125;&#125;&#60;/h3&#62;
      &#60;p&#62;Email : &#123;&#123; propsUser.email &#125;&#125;&#60;/p&#62;
    &#60;/div&#62;
  &#96;,
&#125;)
export class Enfant29Component &#123;
  &#64;Input() propsUser!: User;
  card = viewChild&#60;ElementRef&#62;('card');

  // Méthode pour mettre en évidence un utilisateur
  colorCardUser() &#123;
    const element = this.card(); // Accède à l'élément DOM correspondant
    if (element) &#123;
      element.nativeElement.style.backgroundColor = 'yellow'; // Applique un style via ViewChild
    &#125;
  &#125;
  initialize() &#123;
    const element = this.card(); // Accède à l'élément DOM correspondant
    if (element) &#123;
      element.nativeElement.style.backgroundColor = ''; // Applique un style via ViewChild
    &#125;
  &#125;
&#125;</pre>
        </div>
      </div>
      <!-- --------------------Fin Template pour afficher le code source---------------- -->
      <div class=" mt-4">
        ****************************************<span class="fs-2">cours</span
        >*************************************************
      </div>
      <pre>
Il sert à accéder à des enfants ainsi à leurs propriétés et leurs méthodes
La méthode ViewChildren(Enfant29Component) retourne un QueryList&#60;Enfant29Component&#62;, qui représente une liste dynamique de tous les enfants de type Enfant29Component.
Vous pouvez utiliser cette liste pour interagir avec les composants enfants dans le parent.

<strong>syntaxe:</strong>
Pour récupérer des enfants via la nouvelle viewChildren,
<strong class="text-danger">userCards = viewChildren(Enfant29Component);</strong>
userCards est une liste d'enfants du type Enfant29Component, nous avons deux enfants dans la template.

<strong>utilisation:</strong>
viewChildren() retourne un signal tableau. On accède aux propriétés et aux méthodes des méthodes des enfants en parcourant le tableau:
<strong class="text-danger">
const cards = this.userCards();
console.log(' this.userCards() :',  this.userCards());
cards.forEach((card) => &#123;
card....; // Acceder à une méthode ou une propriété publique de l'enfant
&#125;);
</strong>

      </pre>
    </div>
  `,
styles: `
// -------------------------style pour afficher le code source----------------
pre{
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
         `

})
export class Test29Component {
  users: User[] = [
    {
      id: '1',
      firstname: 'John',
      lastname: 'Doe',
      email: 'john@example.com',
      tel: '',
      address: '',
    },
    {
      id: '2',
      firstname: 'kain',
      lastname: 'adam',
      email: 'kain@example.com',
      tel: '',
      address: '',
    },
  ];

  // Récupération des enfants via la nouvelle API viewChildren, il retourne un tableau
  userCards = viewChildren(Enfant29Component);

  // Méthode pour mettre en évidence tous les utilisateurs
  colorCardAllUsers() {
    const cards = this.userCards();
    console.log(' this.userCards() :', this.userCards());
    cards.forEach((card) => {
      card.colorCardUser(); // Appel d'une méthode publique de l'enfant

    });
  }
  initializeAllUsers() {
    const cards = this.userCards();
    cards.forEach((card) => {
      card.initialize(); // Appel d'une méthode publique de l'enfant
    });
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

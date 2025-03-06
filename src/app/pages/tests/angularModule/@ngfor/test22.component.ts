import { CommonModule } from '@angular/common';
import { Component, viewChild, ElementRef } from '@angular/core';

export interface User {
  id: number;
  name: string;
  username?: string;
  email: string;
  phone?: string;
}

@Component({
  selector: 'app-users',
  imports: [CommonModule],
  template: `
    <div class="container">
      <h1>&#64;for....&#64;empty... / *ngFor...</h1>
      <hr />
      <h2>Liste des utilisateurs</h2>
      <div class="card p-3">
        <h4>version ancienne:</h4>
        <div *ngFor="let user of users">{{ user.name }} ({{ user.email }})</div>
      </div>

      <br />
      <div class="card p-3">
        <h4>version recente:</h4>
        @for (user of users; track user.id;) {
        <div>{{ user.name }} {{ user.email }}</div>
        } @empty {
        <p>Aucun utilisateur trouvé</p>
        }
      </div>
      <br />
      <div class="card p-3">
        <h4>Utiliser des variables dans le bloc &#64;for:</h4>
        <p>
          <strong class="text-danger">{{ users.length }}</strong> utilisateurs
          au total
        </p>
        @for (user of users; track user.id) {

        <div
          [style.background-color]="$even ? '#f9f9f9' : '#e9e9e9'"
          class="p-2 mb-1"
        >
          <strong>#{{ $index + 1 }}</strong
          >: {{ user.name }} ({{ user.email }})
          <div *ngIf="$first" class="text-primary">Premier utilisateur</div>
          <div *ngIf="$last" class="text-danger">Dernier utilisateur</div>
          <div>Index: {{ $index }}, Pair: {{ $even }}, Impair: {{ $odd }}</div>
        </div>

        } @empty {
        <p class="text-muted">Aucun utilisateur trouvé</p>
        }
      </div>
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

export interface User &#123;
  id: number;
  name: string;
  username?:string;
  email: string;
  phone?: string;
&#125;

&#64;Component(&#123; selector: 'app-users',
imports: [CommonModule],
template: &#96;
&#60;div class="container"&#62;
  &#60;h1&#62;&#64;for....&#64;empty... / *ngFor...&#60;/h1&#62;
  &#60;hr /&#62;
  &#60;h2&#62;Liste des utilisateurs&#60;/h2&#62;
  &#60;div class="card p-3"&#62;
    &#60;h4&#62;version ancienne:&#60;/h4&#62;
    &#60;div *ngFor="let user of users"&#62;&#123;&#123; user.name &#125;&#125; (&#123;&#123; user.email &#125;&#125;)&#60;/div&#62;
  &#60;/div&#62;

  &#60;br /&#62;
  &#60;div class="card p-3"&#62;
    &#60;h4&#62;version recente:&#60;/h4&#62;
    &#64;for (user of users; track user.id;) &#123;
    &#60;div&#62;&#123;&#123; user.name &#125;&#125; &#123;&#123; user.email &#125;&#125;&#60;/div&#62;
    &#125; &#64;empty &#123;
    &#60;p&#62;Aucun utilisateur trouvé&#60;/p&#62;
    &#125;
  &#60;/div&#62;
  &#60;br /&#62;
  &#60;div class="card p-3"&#62;
    &#60;h4&#62;Utiliser des variables dans le bloc &#64;for:&#60;/h4&#62;
    &#60;p&#62;
      &#60;strong class="text-danger"&#62;&#123;&#123; users.length &#125;&#125;&#60;/strong&#62; utilisateurs au
      total
    &#60;/p&#62;
    &#64;for (user of users; track user.id) &#123;

    &#60;div
      [style.background-color]="$even ? '#f9f9f9' : '#e9e9e9'"
      class="p-2 mb-1"
    &#62;
      &#60;strong&#62;#&#123;&#123; $index + 1 &#125;&#125;&#60;/strong&#62;: &#123;&#123; user.name &#125;&#125; (&#123;&#123; user.email &#125;&#125;)
      &#60;div *ngIf="$first" class="text-primary"&#62;Premier utilisateur&#60;/div&#62;
      &#60;div *ngIf="$last" class="text-danger"&#62;Dernier utilisateur&#60;/div&#62;
      &#60;div&#62;Index: &#123;&#123; $index &#125;&#125;, Pair: &#123;&#123; $even &#125;&#125;, Impair: &#123;&#123; $odd &#125;&#125;&#60;/div&#62;
    &#60;/div&#62;

    &#125; &#64;empty &#123;
    &#60;p class="text-muted"&#62;Aucun utilisateur trouvé&#60;/p&#62;
    &#125;
  &#60;/div&#62;
&#60;/div&#62;
&#96;,
  styles: [
    &#96;
      h2 &#123;
        color: #2c3e50;
      &#125;
      .text-primary &#123;
        font-size: 0.9rem;
      &#125;
      .text-danger &#123;
        font-size: 0.9rem;
      &#125;
      .text-muted &#123;
        font-style: italic;
      &#125;
    &#96;,
  ],
&#125;)
export class test22Component &#123;
  users: User[] = [
    &#123; id: 1, name: 'Alice', username: 'alice123', email: 'alice&#64;example.com' &#125;,
    &#123; id: 2, name: 'Bob', username: 'bob456', email: 'bob&#64;example.com' &#125;,
    &#123;
      id: 3,
      name: 'Charlie',
      username: 'charlie789',
      email: 'charlie&#64;example.com',
    &#125;,
  ];
&#125;


        </pre
          >
        </div>
      </div>
      <!-- ---------------Fin Template pour afficher le code source---------------- -->
      <hr />
      <!-- --------------------Template pour afficher le cours---------------- -->

      <div class=" mt-4">
        ****************************************<span class="fs-2">cours</span
        >*************************************************
      </div>
      <pre>
Le bloc &#64;for est utilisé pour itérer sur des collections, comme des listes ou des tableaux. La syntaxe générale ressemble à cela :
angular-html.

<strong>syntaxe:</strong>
&#64;for (user of users; track user.id) &#123;
  // Votre code ici
&#125;
&#64;empty &#123;
Aucun utilisateur trouvé
&#125;

variable: représente l'élément courant de la collection lors de l'itération.
collection : la collection sur laquelle vous voulez itérer.
track: indique à Angular comment suivre les éléments de la collection.
Cela permet à Angular de mettre à jour correctement les éléments de la liste lorsqu'ils changent.
&#64;empty: est utilisé pour afficher un contenu alternatif si la collection est vide.
Toutes les variables particulières commencent par $ et sont réservées pour les blocs &#64;for.

<strong>Voici d'autres exemples de variables spéciales :</strong>
$index : l'index de l'élément courant dans la collection.
$first : true si l'élément courant est le premier de la collection.
$last : true si l'élément courant est le dernier de la collection.
$even : true si l'index de l'élément courant est pair.
$odd : true si l'index de l'élément courant est impair.
$count : le nombre total d'éléments dans la collection.
      </pre>
    </div>
  `,
  // -------------------------style pour afficher le code source----------------
  styles: `
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
        background-color:#f8f9fa;
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
      `,
  // -------------------------style pour afficher le code source----------------
})
export class test22Component {
  users: User[] = [
    { id: 1, name: 'Alice', username: 'alice123', email: 'alice@example.com' },
    { id: 2, name: 'Bob', username: 'bob456', email: 'bob@example.com' },
    {
      id: 3,
      name: 'Charlie',
      username: 'charlie789',
      email: 'charlie@example.com',
    },
  ];

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

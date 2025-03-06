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
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <h1>&#64;if / *ngIf</h1>
      <hr />
      <h3>Détails de l'utilisateur</h3>
      <div class="card p-4">
        <h4 class="fw-bolder">Version récente:</h4>
        @if (user) {
        <div>
          <h3>{{ user.name }}</h3>
          <p>Email: {{ user.email }}</p>
        </div>
        } @else {
        <p>Aucun utilisateur sélectionné</p>
        }
      </div>
      <div class="card p-4 mt-4">
        <h4 class="fw-bolder">Version ancienne:</h4>

        <div *ngIf="user; else noUser">
          <h3>{{ user.name }}</h3>
          <p>Email: {{ user.email }}</p>
        </div>
        <ng-template #noUser>
          <p>Aucun utilisateur sélectionné</p>
        </ng-template>
      </div>
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
  username?: string;
  email: string;
  phone?: string;
&#125;

&#64;Component(&#123;
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: &#96;
    &#60;div class="container"&#62;
      &#60;h1&#62;&#64;if / *ngIf&#60;/h1&#62;
      &#60;hr /&#62;
      &#60;h3&#62;Détails de l'utilisateur&#60;/h3&#62;
      &#60;div class="card p-4"&#62;
        &#60;h4 class="fw-bolder"&#62;Version récente:&#60;/h4&#62;
        &#64;if (user) &#123;
        &#60;div&#62;
          &#60;h3&#62;&#123;&#123; user.name &#125;&#125;&#60;/h3&#62;
          &#60;p&#62;Email: &#123;&#123; user.email &#125;&#125;&#60;/p&#62;
        &#60;/div&#62;
        &#125; &#64;else &#123;
        &#60;p&#62;Aucun utilisateur sélectionné&#60;/p&#62;
        &#125;
      &#60;/div&#62;
      &#60;div class="card p-4 mt-4"&#62;
        &#60;h4 class="fw-bolder"&#62;Version ancienne:&#60;/h4&#62;

        &#60;div *ngIf="user; else noUser"&#62;
          &#60;h3&#62;&#123;&#123; user.name &#125;&#125;&#60;/h3&#62;
          &#60;p&#62;Email: &#123;&#123; user.email &#125;&#125;&#60;/p&#62;
        &#60;/div&#62;
        &#60;ng-template #noUser&#62;
          &#60;p&#62;Aucun utilisateur sélectionné&#60;/p&#62;
        &#60;/ng-template&#62;
        &#60;/div&#62;
  &#96;,
&#125;)
export class AppComponent &#123;
  user: User | null = &#123;
    id: 1,
    name: 'Alice',
    username: 'alice123',
    email: 'alice&#64;example.com',
  &#125;;
&#125;</pre
          >
        </div>
      </div>
<!-- --------------------Fin Template pour afficher le code source---------------- -->
<hr />
<!-- --------------------Template pour afficher le cours---------------- -->
      <div class=" mt-4">
        ****************************************<span class="fs-2">cours</span
        >*************************************************
      </div>
      <pre>
<strong>Syntaxe:</strong>
&#64;if (condition) &#123;
  // Code à exécuter si la condition est vraie
&#125;

<strong>Conditions multiples avec &#64;else if :</strong>
&#64;if (user.role === 'admin') &#123;
  // Code  à exécuter si la condition est vraie
&#125; &#64;else if (user.role === 'manager') &#123;
  // Code à exécuter si la condition est vraie
&#125; &#64;else &#123;
  // Code à exécuter si la condition est vraie
&#125;
      </pre>
      <!-- --------------------Fin Template pour afficher le cours---------------- -->

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
export class Test23Component {
  user: User | null = {
    id: 1,
    name: 'Alice',
    username: 'alice123',
    email: 'alice@example.com',
  };

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



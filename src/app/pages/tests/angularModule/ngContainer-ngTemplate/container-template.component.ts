import { CommonModule } from '@angular/common';
import { Component, viewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-container-template',
  imports: [CommonModule],
  template: `
    <div class="container">
      <h1>ng-container / ng-template</h1>
      <hr />
      <!-- Bouton pour basculer entre connecté/déconnecté -->
      <button class="btn btn-success" (click)="toggleLogin()">
        {{ isLoggedIn ? 'Se déconnecter' : 'Se connecter' }}
      </button>

      <!-- Affichage conditionnel avec ngIf et ng-template -->
      <ng-container *ngIf="isLoggedIn; else notLoggedIn">
        <h3>Bienvenue, utilisateur connecté !</h3>
      </ng-container>

      <ng-template #notLoggedIn>
        <h3>Vous êtes déconnecté. Veuillez vous connecter.</h3>
      </ng-template>
      <!-- @if (isLoggedIn){
      <h3>Bienvenue, utilisateur connecté !</h3>
      } @else {
      <h3>Vous êtes déconnecté. Veuillez vous connecter.</h3>
      } -->
      <hr />

      <!-- Liste d'éléments avec *ngFor -->
      <h4>Liste des éléments :</h4>
      <button class="btn btn-secondary mb-3" (click)="toggleList()">
        {{ isListVisible ? 'Masquer la liste' : 'Afficher la liste' }}
      </button>

      <ng-container *ngIf="isListVisible; else emptyList">
        <ul>
          <li
            *ngFor="
              let item of items;
              index as i;
              first as isFirst;
              last as isLast
            "
          >
            {{ i + 1 }}. {{ item }}
            <span *ngIf="isFirst">(Premier)</span>
            <span *ngIf="isLast">(Dernier)</span>
          </li>
        </ul>
      </ng-container>

      <ng-template #emptyList>
        <p>La liste est masquée.</p>
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
import &#123; CommonModule &#125; from '&#64;angular/common';
import &#123; Component &#125; from '&#64;angular/core';

&#64;Component(&#123; selector: 'app-container-template',
imports:[CommonModule],
template: &#96;
&#60;div class="container"&#62;
  &#60;h1&#62;ng-container / ng-template&#60;/h1&#62;
  &#60;hr /&#62;
  &#60;!-- Bouton pour basculer entre connecté/déconnecté --&#62;
  &#60;button class="btn btn-success" (click)="toggleLogin()"&#62;
    &#123;&#123; isLoggedIn ? 'Se déconnecter' : 'Se connecter' &#125;&#125;
  &#60;/button&#62;

  &#60;!-- Affichage conditionnel avec ngIf et ng-template --&#62;
  &#60;ng-container *ngIf="isLoggedIn; else notLoggedIn"&#62;
    &#60;h3&#62;Bienvenue, utilisateur connecté !&#60;/h3&#62;
  &#60;/ng-container&#62;

  &#60;ng-template #notLoggedIn&#62;
    &#60;h3&#62;Vous êtes déconnecté. Veuillez vous connecter.&#60;/h3&#62;
  &#60;/ng-template&#62;

  &#60;hr /&#62;

  &#60;!-- Liste d'éléments avec *ngFor --&#62;
  &#60;h4&#62;Liste des éléments :&#60;/h4&#62;
  &#60;button class="btn btn-secondary mb-3" (click)="toggleList()"&#62;
    &#123;&#123; isListVisible ? 'Masquer la liste' : 'Afficher la liste' &#125;&#125;
  &#60;/button&#62;

  &#60;ng-container *ngIf="isListVisible; else emptyList"&#62;
    &#60;ul&#62;
      &#60;li
        *ngFor="
              let item of items;
              index as i;
              first as isFirst;
              last as isLast
            "
      &#62;
        &#123;&#123; i + 1 &#125;&#125;. &#123;&#123; item &#125;&#125;
        &#60;span *ngIf="isFirst"&#62;(Premier)&#60;/span&#62;
        &#60;span *ngIf="isLast"&#62;(Dernier)&#60;/span&#62;
      &#60;/li&#62;
    &#60;/ul&#62;
  &#60;/ng-container&#62;

  &#60;ng-template #emptyList&#62;
    &#60;p&#62;La liste est masquée.&#60;/p&#62;
  &#60;/ng-template&#62;
&#60;/div&#62;
&#96;,
&#125;)

export class ContainerTemplateComponent &#123;

isLoggedIn: boolean = false; // Pour basculer l'état connecté/déconnecté
items: string[] = ['Item1', 'Item 2', 'Item 3']; // Liste d'éléments
isListVisible: boolean = true; //Pour afficher ou masquer la liste

toggleLogin() &#123;
  this.isLoggedIn =!this.isLoggedIn;
&#125;

toggleList() &#123;
  this.isListVisible = !this.isListVisible;
&#125;

&#125;</pre>
        </div>
      </div>
      <hr>
<!-- --------------------Fin Template pour afficher le code source---------------- -->

      <div class=" mt-4">
        ****************************************<span class="fs-2">cours</span
        >*************************************************
      </div>
      <pre>
<strong>ng-container :</strong>
Permet de grouper plusieurs éléments sans ajouter d'élément DOM supplémentaire.
Utilisé ici pour conditionnellement afficher le contenu basé sur isLoggedIn et isListVisible.

<strong>ng-template :</strong>
Définit un bloc de contenu réutilisable, qui peut être rendu de manière conditionnelle ou dynamique.
Utilisé ici avec #notLoggedIn et #emptyList.
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
export class ContainerTemplateComponent {
  isLoggedIn: boolean = false; // Pour basculer l'état connecté/déconnecté
  items: string[] = ['Item 1', 'Item 2', 'Item 3']; // Liste d'éléments
  isListVisible: boolean = true; // Pour afficher ou masquer la liste

  toggleLogin() {
    this.isLoggedIn = !this.isLoggedIn;
  }

  toggleList() {
    this.isListVisible = !this.isListVisible;
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

  // ----------------------Fin ts pour afficher le code source--------------------
}

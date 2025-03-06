import { CommonModule } from '@angular/common';
import { LoginLayoutComponent } from './loginLayout.component';
import { Component, OnInit, viewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-layout-cours',
  imports: [LoginLayoutComponent, CommonModule],
  template: `
    <h1>📌 Créer un layout réutilisable</h1>
    <hr />
    <p>
      Ceci est un composant login utilisant un layout avec la méthode de
      ng-content et &#64;Input
    </p>
    <hr />
    <app-login-layout></app-login-layout>

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
          Composant Layout
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
          Composant Login
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
          Démarche à suivre
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
        <pre #tab1 class="tab" ngNonBindable>
import &#123; Component, Input &#125; from '&#64;angular/core';

&#64;Component(&#123;
  selector: 'app-layout-shared',
  template: &#96;
    &#60;div
      class="auth-container container-fluid d-flex
      justify-content-center align-items-center bg-warning-subtle"
    &#62;
      &#60;div
        class="card shadow-lg p-4 bg-light"
        style="max-width: 400px; width: 100%;"
      &#62;
        &#60;h2 class="text-center text-primary"&#62;&#123;&#123; title &#125;&#125;&#60;/h2&#62;
        &#60;ng-content&#62;&#60;/ng-content&#62;
        &#60;!-- Contenu dynamique (Login/Register) --&#62;
      &#60;/div&#62;
    &#60;/div&#62;
  &#96;,
  styles: &#96;
.auth-container &#123;
  width:70%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 83vh;
  background-color: #f4f4f4;
&#125;

.auth-card &#123;
  width: 350px;
  padding: 20px;
  background: white;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  text-align: center;
&#125;

  &#96;,
&#125;)
export class layoutSharedComponent &#123;
  &#64;Input() title: string = 'Authentification';
&#125;</pre
        >
      </div>
      <!-- Composant C2 -->
      <div
        class="tab-pane fade show "
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
        <pre #tab2 class="tab" ngNonBindable>
import &#123; layoutSharedComponent &#125; from './layoutShared.component';
import &#123; Component, OnInit &#125; from '&#64;angular/core';

&#64;Component(&#123;
  selector: 'app-login-layout',
  imports: [layoutSharedComponent],
  template: &#96;
    &#60;app-layout-shared title="Connexion"&#62;
      &#60;form class="p-4 rounded shadow bg-white"&#62;
        &#60;div class="mb-3"&#62;
          &#60;label for="email" class="form-label"&#62;Email&#60;/label&#62;
          &#60;input
            type="email"
            class="form-control"
            id="email"
            placeholder="Entrez votre email"
            required
          /&#62;
        &#60;/div&#62;

        &#60;div class="mb-3"&#62;
          &#60;label for="password" class="form-label"&#62;Mot de passe&#60;/label&#62;
          &#60;input
            type="password"
            class="form-control"
            id="password"
            placeholder="Entrez votre mot de passe"
            required
          /&#62;
        &#60;/div&#62;

        &#60;button type="submit" class="btn btn-warning w-100"&#62;
          Se connecter
        &#60;/button&#62;
      &#60;/form&#62;
    &#60;/app-layout-shared&#62;
  &#96;,
  styles: &#96;

  &#96;,
&#125;)
export class LoginLayoutComponent &#123;&#125;</pre
        >
      </div>
      <!-- Composant C3 -->
      <div
        class="tab-pane fade show "
        id="c3"
        role="tabpanel"
        aria-labelledby="c1-tab"
        style="position: relative;"
      >
        <div #tab3 class="bg-white p-3 border " ngNonBindable>
          <p>
            Pour créer une template réutilisable en Angular (ex : pour Login,
            Register, etc.), la meilleure approche est d'utiliser un layout
            component qui servira de base à plusieurs pages.
          </p>
          <h2>1. Créer un composant de layout</h2>
          <p>Dans le terminal :</p>
          <pre class="tab">
ng generate component shared/auth-layout
      </pre>
          <h2>2. Modifier le fichier auth-layout.component.html</h2>
          <p>
            Ce composant servira de template général pour toutes les pages
            d'authentification :
          </p>
          (voir code source du layout)
          <p>
            On ajoute une propriété dynamique title pour personnaliser le titre
            de la page, pour le passer en props dans le layout
          </p>
          <pre class="tab">
  &#64;Input() title: string = 'Authentification';
      </pre>
          <h2>3. Créer les pages Login et Register</h2>
          <p>
            Ici, on se contente du login seulement pour voir une démonstration
          </p>
          <p>voir code source du login</p>
          <h2>4. Tester dans le navigateur</h2>
        </div>
      </div>
    </div>
    <!-- --------------------Fin Template pour afficher le code source---------------- -->
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
         .tab,tabx {
           background-color: #f8f9fa;
           padding: 15px;
           border: 1px solid #ddd;
           border-radius: 5px;
           overflow-x: auto;
           font-family: monospace;
           max-width:100%;
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
export class LayoutCoursComponent {
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

  // ----------------------Fin ts pour afficher le code source--------------------
}

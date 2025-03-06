import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, viewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { setActiveUser } from '../../../../ngrx/data.slice';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container">
      <h1>Système de connexion</h1>
      <hr />
      <div class="row justify-content-center">
      <span class="text-center">utilisateur: admin</span>
      <span class="text-center">password: admin</span>
        <div class="col-md-4">
          <div class="card shadow">
            <div class="card-header text-center bg-primary text-white">
              <h4>Connexion</h4>
            </div>
            <div class="card-body">
              <form (ngSubmit)="onLogin()" #loginForm="ngForm">
                <!-- Nom d'utilisateur -->
                <div class="mb-3">
                  <label for="username" class="form-label"
                    >Nom d'utilisateur</label
                  >
                  <input
                    type="text"
                    id="username"
                    name="username"
                    [(ngModel)]="username"
                    class="form-control"
                    required
                  />
                  <div
                    *ngIf="loginForm.submitted && !username"
                    class="text-danger small mt-1"
                  >
                    Veuillez entrer votre nom d'utilisateur.
                  </div>
                </div>

                <!-- Mot de passe -->
                <div class="mb-3">
                  <label for="password" class="form-label">Mot de passe</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    [(ngModel)]="password"
                    class="form-control"
                    required
                  />
                  <div
                    *ngIf="loginForm.submitted && !password"
                    class="text-danger small mt-1"
                  >
                    Veuillez entrer votre mot de passe.
                  </div>
                </div>

                <!-- Message d'erreur -->
                <div *ngIf="errorMessage" class="alert alert-danger py-1">
                  {{ errorMessage }}
                </div>

                <!-- Bouton de connexion -->
                <div class="d-grid">
                  <button
                    type="submit"
                    class="btn btn-success"
                    [disabled]="!loginForm.valid"
                  >
                    Se connecter
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
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
            aria-selected="false"
          >
          Composant navbar
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
import &#123; FormsModule &#125; from '&#64;angular/forms';
import &#123; CommonModule &#125; from '&#64;angular/common';
import &#123; Component &#125; from '&#64;angular/core';
import &#123; Router &#125; from '&#64;angular/router';
import &#123; Store &#125; from '&#64;ngrx/store';
import &#123; setActiveUser &#125; from '../../../ngrx/data.slice';

&#64;Component(&#123;
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  template: &#96;
    &#60;div class="container"&#62;
      &#60;h1&#62;Système de connexion&#60;/h1&#62;
      &#60;hr /&#62;
      &#60;div class="row justify-content-center"&#62;
        &#60;div class="col-md-4"&#62;
          &#60;div class="card shadow"&#62;
            &#60;div class="card-header text-center bg-primary text-white"&#62;
              &#60;h4&#62;Connexion&#60;/h4&#62;
            &#60;/div&#62;
            &#60;div class="card-body"&#62;
              &#60;form (ngSubmit)="onLogin()" #loginForm="ngForm"&#62;
                &#60;!-- Nom d'utilisateur --&#62;
                &#60;div class="mb-3"&#62;
                  &#60;label for="username" class="form-label"
                    &#62;Nom d'utilisateur&#60;/label
                  &#62;
                  &#60;input
                    type="text"
                    id="username"
                    name="username"
                    [(ngModel)]="username"
                    class="form-control"
                    required
                  /&#62;
                  &#60;div
                    *ngIf="loginForm.submitted && !username"
                    class="text-danger small mt-1"
                  &#62;
                    Veuillez entrer votre nom d'utilisateur.
                  &#60;/div&#62;
                &#60;/div&#62;

                &#60;!-- Mot de passe --&#62;
                &#60;div class="mb-3"&#62;
                  &#60;label for="password" class="form-label"&#62;Mot de passe&#60;/label&#62;
                  &#60;input
                    type="password"
                    id="password"
                    name="password"
                    [(ngModel)]="password"
                    class="form-control"
                    required
                  /&#62;
                  &#60;div
                    *ngIf="loginForm.submitted && !password"
                    class="text-danger small mt-1"
                  &#62;
                    Veuillez entrer votre mot de passe.
                  &#60;/div&#62;
                &#60;/div&#62;

                &#60;!-- Message d'erreur --&#62;
                &#60;div *ngIf="errorMessage" class="alert alert-danger py-1"&#62;
                  &#123;&#123; errorMessage &#125;&#125;
                &#60;/div&#62;

                &#60;!-- Bouton de connexion --&#62;
                &#60;div class="d-grid"&#62;
                  &#60;button
                    type="submit"
                    class="btn btn-success"
                    [disabled]="!loginForm.valid"
                  &#62;
                    Se connecter
                  &#60;/button&#62;
                &#60;/div&#62;
              &#60;/form&#62;
            &#60;/div&#62;
          &#60;/div&#62;
        &#60;/div&#62;
      &#60;/div&#62;
    &#60;/div&#62;
  &#96;,
  styles: &#96;&#96;,
&#125;)
export class LoginComponent &#123;

  constructor(private router: Router, private store: Store) &#123;&#125;

  username = '';
  password = '';
  errorMessage = '';

  onLogin() &#123;
    if (this.username === 'admin' && this.password === 'password') &#123;
      this.store.dispatch(setActiveUser());
      this.router.navigate(['/dashboard']); // Redirige vers le tableau de bord
    &#125; else &#123;
      this.errorMessage = 'Nom d’utilisateur ou mot de passe incorrect.';
    &#125;
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
import &#123; Store &#125; from '&#64;ngrx/store';
import &#123; CommonModule &#125; from '&#64;angular/common';
import &#123; Router, RouterLink &#125; from '&#64;angular/router';
import &#123; Component, OnInit, signal &#125; from '&#64;angular/core';
import &#123; removeActiveUser, selectIsLoggedIn &#125; from '../../ngrx/data.slice';

&#64;Component(&#123;
  standalone: true,
  imports: &#91;RouterLink, CommonModule&#93;,
  selector: 'app-headertest',
  template: &#96;
    &#60;nav
      style="background-color: black;"
      class="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3 p-2"
    &#62;
      &#60;a
        *ngIf="!isloggedIn()"
        &#91;ngClass&#93;="&#123; active: router.url === '/login' &#125;"
        routerLink="/login"
        &#62;se connecter
      &#60;/a&#62;
      &#60;span
        *ngIf="isloggedIn()"
        class="logout"
        style="cursor: pointer;"
        (click)="lougout()"
        &#62;se deconnecter
      &#60;/span&#62;
      &#60;a
        *ngIf="isloggedIn()"
        &#91;ngClass&#93;="&#123; active: router.url === '/dashboard' &#125;"
        routerLink="/dashboard"
        &#62;dashboard&#60;/a
      &#62;
    &#60;/nav&#62;
  &#96;,
  styles: &#91;
    &#96;
      a,
      .logout &#123;
        text-decoration: none; /* Supprime le soulignement */
        background-color: #3498db; /* Couleur de fond par défaut */
        color: white; /* Couleur du texte */
        padding: 5px; /* Espacement interne pour un aspect bouton */
        border-radius: 5px; /* Coins arrondis */
        display: inline-block; /* S'assure que les liens respectent le padding */
        transition: background-color 0.3s ease; /* Transition fluide sur le survol */
      &#125;

      a:hover,
      .logout:hover &#123;
        background-color: #2ecc71; /* Couleur de fond au survol */
      &#125;

      .active &#123;
        color: rgb(182, 180, 180) !important; /* Couleur du texte actif */
        font-weight: 600 !important;
      &#125;
    &#96;,
  &#93;,
&#125;)
export class HeadertestComponent implements OnInit &#123;
  constructor(public router: Router, private store: Store) &#123;&#125;
  isloggedIn = signal(false);
  ngOnInit() &#123;
    this.store
      .select(selectIsLoggedIn)
      .subscribe((islog) =&#62; this.isloggedIn.set(islog));
  &#125;
  lougout() &#123;
    this.isloggedIn.set(false);
    this.store.dispatch(removeActiveUser());
    this.router.navigate(&#91;'/login'&#93;);
  &#125;
&#125;</pre>
        </div>
      </div>
<!-- --------------------Fin Template pour afficher le code source---------------- -->

      <span class=" mt-5">
        ______________________________________________________________<span
          class="fs-2"
          >cours</span
        >
        ______________________________________________________________
      </span>
      <pre>

<strong>Pour se connecter:</strong>  via un evenement (click) dans un formulaire on fait appel a une action dans ngrx:
<strong class="text-danger">this.store.dispatch(setActiveUser());</strong>

<strong>Pour se déconnecter:</strong>  via un evenement (click) dans le navbar on fait appel a une action dans ngrx:
<strong class="text-danger">this.store.dispatch(removeActiveUser());</strong>

<strong>Pour afficher/masquer dans le navbar</strong>  les menus: se connecter,se déconnecter,dashboard,
on vois l'état de isloggedIn dans le code suivant dans le navbar:
<strong class="text-danger">
isloggedIn = signal(false);
ngOnInit() &#123;
this.store
.select(selectIsLoggedIn)
.subscribe((islog) => this.isloggedIn.set(islog));
&#125;</strong>

et grâce à la valeur de isloggedIn on peut afficher/masquer : les menus: se connecter,se déconnecter,dashboard,
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
export class LoginComponent {

  constructor(private router: Router, private store: Store) {}

  username = '';
  password = '';
  errorMessage = '';

  onLogin() {
    if (this.username === 'admin' && this.password === 'password') {
      this.store.dispatch(setActiveUser());
      this.router.navigate(['/dashboard']); // Redirige vers le tableau de bord
    } else {
      this.errorMessage = 'Nom d’utilisateur ou mot de passe incorrect.';
    }
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

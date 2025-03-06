import { CommonModule } from '@angular/common';
import { Component, viewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-guard',
  imports: [CommonModule],
  template: `
    <div class="container">
      <h1>Route Guards: Protéger les Pages</h1>
      <hr />
      <p>
        Les Route Guards permettent d’empêcher l’accès à certaines pages (ex:
        page admin).
      </p>
      <h2>📌 Exemple: Bloquer l’accès aux utilisateurs non connectés:</h2>
      <h3>🔹 1. Création du Guard (auth.guard.ts) :</h3>
      <pre class="tab">
import &#123; inject &#125; from '&#64;angular/core';
import &#123; CanActivateFn, Router &#125; from '&#64;angular/router';

export const authGuard: CanActivateFn = () =&#62; &#123;
  const isAuthenticated = localStorage.getItem('token'); // Simule une connexion
  const router = inject(Router);

  if (!isAuthenticated) &#123;
    router.navigate(['/login']);
    return false;
  &#125;
  return true;
&#125;;</pre
      >
      <h3>🔹 2. Application du Guard à une route (app.routes.ts) :</h3>
      <pre class="tab">
&#123; path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] &#125;
</pre
      >

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
            fichier guard
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
            fichier route
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
import &#123; CanActivateFn &#125; from '&#64;angular/router';
import &#123; inject &#125; from '&#64;angular/core';
import &#123; Router &#125; from '&#64;angular/router';
import &#123; Store &#125; from '&#64;ngrx/store';
import &#123; selectIsLoggedIn &#125; from '../ngrx/data.slice';

export const authGuard: CanActivateFn = () => &#123;

  const router = inject(Router);
  const store = inject(Store);
  // Vérifiez si l'utilisateur est connecté (par exemple, via un token)
  // const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  let isLoggedIn :boolean=false;
  store.select(selectIsLoggedIn).subscribe(islog=>isLoggedIn=islog)
  if (isLoggedIn) &#123;
    return true; // Autorise l'accès
  &#125; else &#123;
    // Redirige l'utilisateur vers la page de connexion
    router.navigate(['/login']);
    return false; // Bloque l'accès
  &#125;
&#125;;</pre
          >
        </div>
        <!-- Composant C2 -->
        <div
          class="tab-pane fade show  "
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
import &#123; Routes &#125; from '&#64;angular/router';
import &#123; authGuard &#125; from './guards/auth.guard';
import &#123; DashboardComponent &#125; from './pages/dashboard/dashboard.component';

export const routes: Routes = [
    //guard
    &#123; path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] &#125;,
  ];
</pre
          >
        </div>
      </div>
      <!-- --------------------Fin Template pour afficher le code source---------------- -->
      <div>
        ____________________________________________________________________________<span
          class="fs-2"
          >cours</span
        >____________________________________________________________________________

        <pre style="font-size:14px">

Un Guard sur Angular est une fonctionnalité qui vous permet de contrôler l'accès à des routes spécifiques dans votre application.
Vous pouvez utiliser des guards pour exécuter certaines vérifications ou actions avant de permettre l'accès à une route,
par exemple pour vérifier si l'utilisateur est authentifié ou a les droits d'accès appropriés.

<strong>1. Création de la page de guard:</strong>
<span class="text-danger">commande: ng generate guard guards/guard</span>

<strong>2. Code de base de la page de guard:</strong>
<span class="text-danger">import &#123; CanActivateFn &#125; from '&#64;angular/router';

export const authGuard: CanActivateFn = () => &#123;
//logique pour retourner true ou  false.
true permet l'accès à la page protégé par ce guard.
false ne le permet pas
&#125;;</span>

<strong>3. Utilisation de guard dans le fichier app.route.ts:</strong>
pour protéger page dashboard:
&#123;path: 'dashboard', component: DashboardComponent, <span class="text-danger">canActivate: [authGuard]</span>,&#125;,
</pre>
      </div>
    </div>
  `,
  styles: `
  // -------------------------style pour afficher le code source----------------
        pre,p{
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
export class RouteGuardComponent {
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

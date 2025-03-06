import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, ViewChild, effect, signal, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { removeActiveUser, selectIsLoggedIn } from '../../ngrx/data.slice';

@Component({
  selector: 'app-headertest',
  imports: [CommonModule, RouterLink],
  template: `
<nav class="navbar navbar-expand-lg navbar-dark bg-dark px-5">
  <div class="container-fluid">
    <!-- Bouton pour le mode mobile -->
    <button
      class="navbar-toggler custom-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- Liens de navigation -->
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav w-100 d-flex flex-lg-row flex-column">
        <!-- Home à gauche en mode bureau -->
        <li class="nav-item me-auto">
          <a
            class="nav-link py-2"
            [ngClass]="{ active: router.url === '/' }"
            routerLink="/"
          >
            Home
          </a>
        </li>

        <!-- Menus à droite en mode bureau | Affichage vertical en mobile -->
        <ng-container *ngFor="let menu of mainMenus">
          <li class="nav-item border-top border-secondary d-lg-none"></li>
          <li class="nav-item">
            <a
              class="nav-link py-2"
              [class.active]="menu === activeMenu"
              (click)="selectMenu(menu); closeNavbar()"
            >
              {{ menu }}
            </a>
          </li>
        </ng-container>

        <!-- Connexion / Déconnexion -->
        <li class="nav-item border-top border-secondary d-lg-none"></li>
        <li class="nav-item">
          <a
            class="nav-link py-2"
            *ngIf="!isloggedIn()"
            [ngClass]="{ active: router.url === '/exemple-de-protection' }"
            routerLink="/exemple-de-protection"
          >
            Se connecter
          </a>
        </li>

        <li class="nav-item border-top border-secondary d-lg-none"></li>
        <li class="nav-item">
          <a
            class="nav-link py-2"
            *ngIf="isloggedIn()"
            style="cursor: pointer"
            (click)="lougout(); closeNavbar()"
          >
            Se déconnecter
          </a>
        </li>

        <li class="nav-item border-top border-secondary d-lg-none"></li>
        <li class="nav-item">
          <a
            class="nav-link py-2"
            *ngIf="isloggedIn()"
            [ngClass]="{ active: router.url === '/dashboard' }"
            routerLink="/dashboard"
          >
            Dashboard
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>




  `,
  styles: `

.custom-toggler .navbar-toggler-icon {
  width: 20px;  /* Réduit la largeur */
  height: 20px; /* Réduit la hauteur */
}

  @media (min-width: 768px){
    nav{
    position: fixed;
    top:0;
     left: 0;
    }
  }
  nav{

    width:100%;
    z-index:1000;
  }
  .nav-link {
    cursor: pointer;
  }
  .nav-link.active {
    color: #cbae0b !important;
  }
  `,
})
export class HeadertestComponent {
  constructor(
    public router: Router,
    private route: ActivatedRoute,
    private store: Store
  ) {
    // Déclaration d'un effet qui observe les changements du signal store
    effect(() => {
      this.store
        .select(selectIsLoggedIn)
        .subscribe((islog) => this.isloggedIn.set(islog));
    });
  }
  //pour la connexion
  isloggedIn = signal(false);

  @Output() menuSelected = new EventEmitter<string>();
  mainMenus = ['Angular', 'React.js' , 'Laravel','Node.js', 'Wordpress', 'Déploiement'];
  activeMenu: string = 'Angular'; // Angular actif par défaut

  ngOnInit() {
    //pour la connexion
    this.store
      .select(selectIsLoggedIn)
      .subscribe((islog) => this.isloggedIn.set(islog));
    this.detectActiveMenu();
  }

  selectMenu(menu: string) {
    this.activeMenu = menu;
    this.menuSelected.emit(menu);
    this.router.navigate([this.normalizeUrl(menu)]);
  }

  detectActiveMenu() {
    this.route.url.subscribe(() => {
      let currentUrl = this.router.url.split('/')[1]; // Récupère la première partie de l'URL

      if (!currentUrl) {
        // Si l'URL est vide (page d'accueil), rediriger vers Angular
        this.router.navigate(['/']);
        this.activeMenu = 'Angular';
        return;
      }

      const matchedMenu = this.mainMenus.find(
        (menu) => this.normalizeUrl(menu) === currentUrl
      );

      if (matchedMenu) {
        this.activeMenu = matchedMenu;
      }
    });
  }

  normalizeUrl(text: string): string {
    return text
      .toLowerCase()
      .normalize('NFD') // Supprime les accents
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/\s+/g, '-') // Remplace les espaces par des tirets
      .replace(/'/g, '-'); // Remplace les apostrophes par des tirets
  }

  //pour la connexion
  lougout() {
    this.isloggedIn.set(false);
    this.store.dispatch(removeActiveUser());
    this.router.navigate(['/exemple-de-protection']);

  }

  //navbar mode mobile

  // Méthode pour fermer le navbar en mode mobile
  closeNavbar() {
  const navbar = document.getElementById('navbarNav');
  navbar?.classList.remove('show');

  }
}

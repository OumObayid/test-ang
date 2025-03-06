import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, effect, signal } from '@angular/core';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { removeActiveUser, selectIsLoggedIn } from '../../ngrx/data.slice';

@Component({
  selector: 'app-headertest',
  imports: [CommonModule, RouterLink],
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-5">
      <div class="navbar-nav d-flex justify-content-between w-100">
        <a class="nav-link"
          [ngClass]="{ active: router.url === '/' }"
          routerLink="/"
          >Home</a>
        <span class="d-flex">
          <a class="nav-link"
            *ngFor="let menu of mainMenus"
            [class.active]="menu === activeMenu"
            (click)="selectMenu(menu)"
          >
            {{ menu }}
          </a>
          <a class="nav-link"
            *ngIf="!isloggedIn()"
            [ngClass]="{ active: router.url === '/exemple-de-protection' }"
            routerLink="/exemple-de-protection"
            >se connecter
          </a>
          <a class="nav-link"
            *ngIf="isloggedIn()"

            style="cursor: pointer;"
            (click)="lougout()"
          >
            se deconnecter
          </a>
          <a class="nav-link"
            *ngIf="isloggedIn()"
            [ngClass]="{ active: router.url === '/dashboard' }"
            routerLink="/dashboard"
            >dashboard</a>
        </span>
      </div>
    </nav>
  `,
  styles: `
  nav{
    position: fixed;
    top:0;
    left: 0;
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
}

import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {
  RouterLink,
  RouterModule,
  ActivatedRoute,
  Router,
} from '@angular/router';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink],
  template: `
    <div class="sidebar" *ngIf="selectedMenu">
      <div class="accordion" id="menuAccordion">
        <div
          *ngFor="let item of menuItems[selectedMenu]; let i = index"
          class="accordion-item"
        >
          <h2 class="accordion-header" id="heading{{ i }}">
            <button
              class="accordion-button"
              [class.collapsed]="showed"
              type="button"
              (click)="toggleSubmenu(item)"
              data-bs-toggle="collapse"
              [attr.data-bs-target]="'#collapse' + i"
              aria-expanded="false"
              [attr.aria-controls]="'collapse' + i"
            >
              {{ item }}
            </button>
          </h2>
          <div
            [id]="'collapse' + i"
            class="accordion-collapse collapse"
            [class.show]="item === 'Node.js' || false"
            [attr.aria-labelledby]="'heading' + i"
            data-bs-parent="#menuAccordion"
          >
            <div class="accordion-body">
              <div class="list-group">
                <a
                  *ngFor="let sub of subMenus[selectedMenu][item]"
                  [routerLink]="['/', formatRoute(sub)]"
                  class="list-group-item list-group-item-action"
                >
                  {{ sub }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: `
.sidebar  {
  background-color: #f8f9fa;
  border-right: 1px solid #ddd;
}
.accordion-header{
  margin-bottom:0 ;
}
.accordion-button {
  background-color:#b39b18 !important;
  color: white !important;
  padding:5px;
  font-size:14px;
}
.accordion-button:hover{
  background-color:#d4b507 !important;
}

.accordion-button:not(.collapsed) {
  background-color:#d4b507 !important;
  border:none !important;
}
.accordion-button:focus,
.accordion-button:active {
  box-shadow: none !important;
  border: none !important;
  outline: none !important;
}
.list-group-item {
  cursor: pointer;
  padding: 8px 4px;
}
.list-group-item:hover {
  background-color: #f1f1f1;
}
.accordion-body{
  padding: 0 !important;
}
.accordion-button::after {
  background-size:10px 20px !important;
}
  `,
})
export class SidebarComponent implements OnInit,OnDestroy{
  constructor(private router: Router, private route: ActivatedRoute) {}

  @Input() selectedMenu!: string;
  openedSubmenu: string | null = null;
  menuItems: any = {
    Angular: [
      'data binding',
      'Routing',
      'Les cycles de vie',
      'Services et Resolver',
      'Les classes',
      'Les styles',
      'Les pipes',
      'Control Flow',
      'Les signaux',
      'Input et Output',
      'ng-content',
      'ng-container - ng-template',
      'Viewchild',
      'Viewchildren',
      'ContentChild',
      'Les formulaires',
      'Composants réutilisables',
      'Ngrx',
      'Rxjs',
      'Angulaire et api rest',
      'Deploiment'
    ],
    Laravel: [
      'Introduction et Pré-requis',
      'Gestion de la BdD',
      'Développement',
      'Fonctionnalités Avancées',
      'Déploiement et Optimisation',
      'Optimisation et Sécurité',
      'Déploiement',
    ],
    'Node.js': ['Node.js'],
    'React.js': [
      'Introduction à React.js',
      'Composants et Props',
      'État et gestion de l\'état',
      'Gestion des événements',
      'Le Hook useEffect',
      'Routage avec React Router',
      'Gestion des formulaires',
      "Context et gestion de l\'état",
      'Hooks Avancés',
      'Tests avec React',
      'Déploiement',
    ],
    Wordpress: [
      'Introduction à WordPress',
      'Création et Personnalisation',
      'E-commerce, SEO, Sécurité',
      'Développement WordPress',
      'Déploiement et Maintenance',
      'Formation Complete'
    ],
    Déploiement: [
      'VPS',
      'Cloud Managé',
      'Cloud dédié',
    ],
  };
  subMenus: any = {
    Angular: {
      'data binding': ['data binding'],
      Routing: [
        'Introduction au Routing',
        'Routes avec des Paramètres',
        'Route avec Paramètres de requête',
        'Redirections et Pages 404',
        'Route Guards Protéger les Pages',
        'Exemple de protection',
        'Chargement de Modules avec Lazy Loading',
      ],
      'Les cycles de vie': [
        'NgOnInit',
        'NgOnChanges',
        'ngAfterViewInit',
        'ngOnDestroy',
      ],
      'Services et Resolver': ['Les services', 'Les resolvers'],
      'Les classes': [
        'Liaison conditionnelle',
        'Liaison une chaîne de caractères',
        'Liaison avec un tableau',
        'Liaison avec un objet',
        'Combinaison des approches',
      ],
      'Les styles': [
        "Liaison d'une propriété",
        'Liaison avec unités',
        'Liaison multiple',
        'Liaison à un objet',
        'Approches en combinaison',
      ],
      'Les pipes': ['Les pipes'],
      'Control Flow': ['@if', '@for', '@switch'],
      'Les signaux': [
        'signal et computed',
        'signal et effect',
        'Les model',
        'Les signaux et leurs méthodes',
      ],
      'Input et Output': ['les inputs', 'les outputs'],
      'ng-content': ['projection avec ng-content'],
      'ng-container - ng-template': ['ng-container - ng-template'],
      Viewchild: [
        'Accéder à un élément du DOM',
        'Accéder à un composant enfant',
        'ViewChild avec ng-template',
      ],
      Viewchildren: [
        'accéder à plusieurs éléments',
        'Accéder aux composants enfants',
      ],
      ContentChild: [
        "Accéder aux éléments enfants d'un composant",
        'Accéder à un composant enfant dans la projection de contenu',
      ],
      'Les formulaires': [
        'ngForm dans ngSubmit',
        'Utiliser ViewChild pour ngForm',
        'FormGroup et FormControl',
      ],
      'Composants réutilisables': ['Créer un boutton', 'Créer un layout'],
      Ngrx: ['les states et les reducers'],
      Rxjs: [
        'Les observables',
        'Interval',
        'Ajax',
        'Http',
        'Les operateurs de création',
        'Les opérateurs de transformation',
        'Les opérateurs de filter',
        'Les opérateurs de combine',
        'Les opérateurs utilitaires',
      ],
      'Angulaire et api rest': [
        'Crud nodejs mongodb',
        'Crud firebase',
        'Crud json',
      ],
      'Deploiment':['Angular sur github', 'Angular sur hébergeur']
    },


    'React.js': {
      'Introduction à React.js': [
        "Qu'est-ce que React.js",
        'Installation de React.js',
        'Concepts clés',
      ],
      'Composants et Props': ['Création de Composants','Props','Composition de Composants'],
      'État et gestion de l\'état': ['useState Hook','État dans les composants de classe','Gestion d\'état complexe'],
      'Gestion des événements': ['Gestion d\'événements','Liens entre les événements et l\'état'],
      'Le Hook useEffect': ['Cycle de vie dans React','Effectuer des appels API'],
      'Routage avec React Router': ['Installation et configuration de React Router','Création de routes','Gestion des redirections et des liens actifs'],
      'Gestion des formulaires': ['Formulaires contrôlés','Validation de formulaire'],
      'Context et gestion de l\'état': ['Introduction au Context API','Utilisation du Context pour gérer l\'état global'],
      'Hooks Avancés': ['useReducer','Custom Hooks','UseMemo et useCallback'],
      'Tests avec React':['Introduction aux tests en React','Tests unitaires et tests d\'intégration'],
      'Déploiement':['Réact sur Github','Réact sur Hébergeur','Réact avec Netlify','Réact avec Vercel']
    },
    Laravel: {
      'Introduction et Pré-requis': [
        "C'est quoi Laravel",
        'Pré-requis techniques',
        'Installation et Decouverte',
      ],
      'Gestion de la BdD': [
        'Configuration de la dbase',
        'Création des migrations',
        'Création des modèles',
        'Création des factorys et des seeders',
        'Manipuler les données avec Eloquent',
      ],
      'Développement': [
        'Routes et Contrôleurs',
        'Vues et Blade',
        'Formulaires et Validation',
      ],
      'Fonctionnalités Avancées': [
        'Relations entre les modèles',
        'Utilisation des Observers',
        'Utilisation des Policies et Gates',
        'Gestion des Evénements et Listeners',
        'Les Jobs et les Queues',
        'Les Task Scheduling',
        'Envoi Emails et notifications',
      ],
      'Optimisation et Sécurité': [
        'Optimisation',
        'Sécurité',
      ],
      'Déploiement': [
        'Laravel sur Hebergeur',
      ],
    },
    'Node.js': {
      'Node.js': [
        'Introduction à Node.js',
        'le JavaScript côté serveur',
        'Lire et écrire des fichiers avec fs',
        'Le serveur HTTP en Node.js',
        'Introduction à Express.js',
        'Interagir avec une dbase',
        'Mini API avec Node.js et Express',
      ],
    },

    Wordpress: {
      'Introduction à WordPress': [
        "C'est quoi WordPress",
        'Installation de WordPress',
        'Découverte de l interface',
      ],
      'Création et Personnalisation': [
        'Gestion des contenus',
        'Gestion des menus',
        'Gestion des blogs',
        'Gestion des pages',
        'Gestion des widgets',
        'Thèmes WordPress',
        'Gestion des medias',
        'Plugins WordPress',
        'Editeur de blocs',
      ],
      'E-commerce, SEO, Sécurité': [
        'Création d une boutique',
        'Optimisation SEO',
        ' Sécurisation et optimisation',
      ],
      'Développement WordPress': [
        'Développement d un thème',
        'Création d un plugin',
        'WordPress et API REST',
      ],
      'Déploiement et Maintenance': [
        'Migration d un site WordPress',
        'Hébergement et mise en ligne',
        'Maintenance et mises à jour',
      ],
      'Formation Complete':['Formation Complete']
    },
    Déploiement: {
      VPS: [
        'deployement vps API Node.js',
        'deployement vps Laravel Nginx-Apache',
        'deployement vps Full Stack sur VPS',
      ],
      'Cloud Managé': ['deployer une api node.js mongodb'],
      'Cloud dédié': [
        'deployement cloud Laravel Heroku',
        'deployement cloud Expressjs Railway',
        'deployement cloud Firebase Functions',
        'deployement cloud Supabase',
      ],
    },
  };
  ngOnInit() {
    this.router.events.subscribe(() => {
      this.expandSubMenu();
    });
    this.expandSubMenu();
  }
  expandSubMenu() {
    const currentUrl = this.router.url.split('/').pop() || ''; // Utilisez 'this.router.url' directement
    for (const item in this.subMenus[this.selectedMenu]) {
      if (
        this.subMenus[this.selectedMenu][item].some(
          (sub: string) => this.formatRoute(sub) === currentUrl
        )
      ) {
        this.openedSubmenu = item;
        break;
      }
    }
  }

  toggleSubmenu(item: string) {
    this.openedSubmenu = this.openedSubmenu === item ? null : item;
  }

  formatRoute(sub: string): string {
    return sub
      .toLowerCase()
      .normalize('NFD') // Décompose les caractères accentués
      .replace(/[\u0300-\u036f]/g, '') // Supprime les accents
      .replace(/'/g, '-') // remplace les apostrophes par des tirets
      .replace(/l'/g, 'l-') // remplace les apostrophes par des tirets
      .replace(/d'/g, 'd-') // remplace les apostrophes par des tirets
      .replace(/\s+/g, '-'); // Remplace les espaces par des tirets
  }
  showed:string="true"
  ngOnDestroy(): void {
this.showed="false";

  }
}

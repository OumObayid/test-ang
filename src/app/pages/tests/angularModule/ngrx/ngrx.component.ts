import { CategoriesService } from './../../../../services/http/apiphp/categories/categories.service';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Component, OnInit, viewChild, ElementRef } from '@angular/core';
import { addCategories, selectCategories } from '../../../../ngrx/data.slice';
import { Categorie } from '../../../../interfaces/categorie';

@Component({
  selector: 'app-ngrx',
  imports: [CommonModule],
  template: `
    <div class="container mt-3">
      <h1>Ngrx: stoquer et récuperer </h1>
      <button class="btn btn-success" (click)="showCategories()">
        Afficher tous les categories
      </button>
      @if (categories.length>0) {
      <ul class="mt-3">
        @for (category of categories; track $index) {
        <li>{{ category.nom }}</li>
        }
      </ul>
      } @if (categories.length === 0 && hasError){
      <div class="alert alert-danger ">
        Une erreur est survenue lors de la récupération des catégories.
      </div>
      } @if (categories.length === 0 && !hasError && isClicked){
      <div class="alert alert-danger ">Aucune catégorie</div>
      }
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
            data.slice.ts
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
            aria-selected="false"
          >
            store.ts
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
import &#123; Store &#125; from '&#64;ngrx/store';
import &#123; CategoriesService &#125; from './../../../../services/categories-http/categoriesHttp.service';
import &#123; Component, OnInit &#125; from '&#64;angular/core';
import &#123; addCategories, selectCategories &#125; from '../../../../ngrx/data.slice';
import &#123; Categorie &#125; from '../../../../interfaces/categorie';

&#64;Component(&#123;
  selector: 'app-ngrx',
  imports: [CommonModule],
  template: &#96;
    &#60;div class="container mt-3"&#62;
      &#60;h1&#62;ngrx: select et dispatch&#60;/h1&#62;
      &#60;button class="btn btn-success" (click)="showCategories()"&#62;
        Afficher tous les categories
      &#60;/button&#62;
      &#64;if (categories.length&#62;0) &#123;
      &#60;ul class="mt-3"&#62;
        &#64;for (category of categories; track $index) &#123;
        &#60;li&#62;&#123;&#123; category.nom &#125;&#125;&#60;/li&#62;
        &#125;
      &#60;/ul&#62;
      &#125; &#64;if (categories.length === 0 && hasError)&#123;
      &#60;div class="alert alert-danger "&#62;
        Une erreur est survenue lors de la récupération des catégories.
      &#60;/div&#62;
      &#125; &#64;if (categories.length === 0 && !hasError && isClicked)&#123;
      &#60;div class="alert alert-danger "&#62;Aucune catégorie&#60;/div&#62;
      &#125;
      &#60;hr /&#62;
    &#60;/div&#62;
  &#96;,
&#125;)
export class NgrxComponent implements OnInit &#123;
  constructor(
    private CategoriesService: CategoriesService,
    private store: Store
  ) &#123;&#125;
  categories: Categorie[] = [];
  hasError: boolean = false
  isClicked: boolean = false;

  ngOnInit(): void &#123;
    this.fetchCategories();
  &#125;
  fetchCategories() &#123;
    this.CategoriesService
      .getCategories()
      .subscribe(&#123;
        next: (response) =&#62; &#123;
          if (response?.success) &#123;
            this.store.dispatch(addCategories(response.dataCat || []))
          &#125; else &#123;
            console.log(response.message);
          &#125;
        &#125;,
        error: (err) =&#62; &#123;
          console.error('Erreur :', err);
          this.hasError = true;
        &#125;,
      &#125;

      );
  &#125;
  showCategories() &#123;
    this.store
      .select(selectCategories)
      .subscribe((categories) =&#62; (this.categories = categories));
    this.isClicked = true;
  &#125;

&#125;</pre
          >
        </div>

        <!-- Composant C2 -->
        <div
          class="tab-pane fade"
          id="c2"
          role="tabpanel"
          aria-labelledby="c2-tab"
          style="position: relative;"
        >
          <!-- Bouton de copie pour C2 -->
          <i (click)="copy2()" class="fas fa-copy"></i>
          <span class="confirm" *ngIf="clicked"
            >copied <i class="fas fa-check"></i
          ></span>

          <pre #tab2 class="tab fw-bold" ngNonBindable>
import &#123;
  createAction,
  createReducer,
  on,
  createFeatureSelector,
  createSelector,
&#125; from '&#64;ngrx/store';
import &#123; Categorie &#125; from '../interfaces/categorie';
import &#123; Product &#125; from '../interfaces/product';

// Interface pour l'état global
export interface DataState &#123;
  categories: Categorie[];
  products: Product[];
  isLoggedIn: boolean;
&#125;

// État initial
const initialState: DataState = &#123;
  categories: [],
  products: [],
  isLoggedIn: typeof window !== 'undefined' && localStorage.getItem('isLoggedIn') === 'true',
&#125;;

// -----------------------Actions-------------------------------
//categories
export const addCategories = createAction(
  '[Categories] Add Categories',
  (payload: Categorie[]) => (&#123; payload &#125;)
);
//products
export const addProducts = createAction(
  '[Products] Add Categories', // Nom de l'action
  (payload: Product[]) => (&#123; payload &#125;) // Type de données associées à l'action:paylod
);
//isLoggedIn
export const setActiveUser = createAction('[Auth] Set Active User'); //pas de paylod
export const removeActiveUser = createAction('[Auth] Remove Active User'); //pas de paylod

// ----------------------Reducers-------------------------------
export const dataReducer = createReducer(
  initialState,
  // categories
  on(addCategories, (state, &#123; payload &#125;) => (&#123;
    ...state,
    categories: payload,
  &#125;)),
  // products
  on(addProducts, (state, &#123; payload &#125;) => (&#123;
    ...state,
    products: payload,
  &#125;)),
  on(setActiveUser, (state) => &#123;
    // Mettre à jour localStorage
    if (typeof window !== 'undefined') &#123;
      localStorage.setItem('isLoggedIn', 'true');
    &#125;
    return &#123; ...state, isLoggedIn: true &#125;;
  &#125;),
  on(removeActiveUser, (state) => &#123;
    // Supprimer l'état de localStorage
    if (typeof window !== 'undefined') &#123;
      localStorage.removeItem('isLoggedIn');
    &#125;
    return &#123; ...state, isLoggedIn: false &#125;;
  &#125;)
);

// Sélecteurs
export const selectDataState = createFeatureSelector&#123;DataState&#125;('data');

export const selectCategories = createSelector(
  selectDataState,
  (state) => state.categories
);
export const selectProducts = createSelector(
  selectDataState,
  (state) => state.products
);
export const selectIsLoggedIn = createSelector(
  selectDataState,
  (state) => state.isLoggedIn
);

          </pre>

        </div>

        <!-- Composant C3 -->
        <div
          class="tab-pane fade"
          id="c3"
          role="tabpanel"
          aria-labelledby="c3-tab"
          style="position: relative;"
        >
          <!-- Bouton de copie pour C31 -->
          <i (click)="copy3()" class="fas fa-copy"></i>
          <span class="confirm" *ngIf="clicked"
            >copied <i class="fas fa-check"></i>
          </span>
          <pre #tab3 class="tab fw-bold" ngNonBindable>
import &#123; provideStore &#125; from '&#64;ngrx/store';
import &#123; dataReducer &#125; from './data.slice';

export const appStore = provideStore(&#123;
  data: dataReducer,
&#125;);</pre
          >
        </div>
      </div>
      <!-- --------------------Fin Template pour afficher le code source---------------- -->
      <hr />
      <div>
        ****************************************<span class="fs-2"
          >Explication</span
        >*************************************************
        <pre>
<strong>Démarche à suivre:</strong>
1. installer ngrx: npm install &#64;ngrx/store
2. creer le fichier reducer et le store
3. ajouter appStore dans app.config.ts
       </pre>
      </div>
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
export class NgrxComponent implements OnInit {
  constructor(
    private categoriesService: CategoriesService,
    private store: Store
  ) {}
  categories: Categorie[] = [];
  hasError: boolean = false;
  isClicked: boolean = false;

  ngOnInit(): void {
    // appel de la fonction fetchCategories
    this.fetchCategories();
  }
  //recuperation des données de l'api et stockage dans ngrx
  fetchCategories() {
    this.categoriesService.getCategories().subscribe({
      next: (response) => {
        if (response?.success) {
          this.store.dispatch(addCategories(response.dataCat || []));
        } else {
          console.log(response.message);
        }
      },
      error: (err) => {
        console.error('Erreur :', err);
        this.hasError = true;
      },
    });
  }

  //recuperation des données de ngrx, cette fonction est appelée lorsqu'on clique sur le bouton
  showCategories() {
    this.store
      .select(selectCategories)
      .subscribe((categoriesngrx) => (this.categories = categoriesngrx));
    this.isClicked = true;
  }
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
  copy3() {
    const element = this.infoTab3()?.nativeElement;
    if (element) navigator.clipboard.writeText(element.textContent);
    this.clicked = true;
    setTimeout(() => {
      this.clicked = false;
    }, 1500);
  }
  // ----------------------Fin ts pour afficher le code source--------------------
}

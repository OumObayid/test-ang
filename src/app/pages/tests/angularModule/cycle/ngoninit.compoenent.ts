import { Component, OnInit, viewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ngoninit',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container mt-4">
      <h1>ngOnInit() : Exécuter du code au chargement</h1>
      <hr>
      <p>➡️ Déclenché une seule fois après l'initialisation du composant.</p>
      <p>➡️ Utilisation principale : récupérer des données (ex: via une API) ou initialiser des variables.</p>
      <h2> Pourquoi utiliser ngOnInit() au lieu du constructeur ?</h2>
      <p>➡️ Le constructeur sert à initialiser la classe</p>
      <p>➡️ ngOnInit() est appelé quand Angular a terminé d’initialiser le composant</p>
      <hr>
      <h2>Exemple : Chargement d’une liste d’utilisateurs depuis une API</h2>

      <ul class="list-group" *ngIf="users.length > 0">
        <li
          class="list-group-item d-flex justify-content-between align-items-center"
          *ngFor="let user of users"
        >
          <span>
            <strong>{{ user.name }}</strong> - {{ user.email }}
          </span>
          <span class="badge bg-info rounded-pill">ID: {{ user.id }}</span>
        </li>
      </ul>

      <div *ngIf="loading" class="text-center mt-3">
        <div class="spinner-border text-warning"></div>
        <p class="mt-2">Chargement en cours...</p>
      </div><br>

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
import &#123; Component, OnInit &#125; from '&#64;angular/core';
import &#123; CommonModule &#125; from '&#64;angular/common';
import &#123; HttpClient &#125; from '&#64;angular/common/http';

&#64;Component(&#123;
  selector: 'app-ngoninit',
  standalone: true,
  imports: [CommonModule],
  template: &#96;
    &#60;div class="container mt-4"&#62;
      &#60;h2 class="text-primary"&#62;Liste des utilisateurs&#60;/h2&#62;

      &#60;ul class="list-group" *ngIf="users.length &#62; 0"&#62;
        &#60;li
          class="list-group-item d-flex justify-content-between align-items-center"
          *ngFor="let user of users"
        &#62;
          &#60;span&#62;
            &#60;strong&#62;&#123;&#123; user.name &#125;&#125;&#60;/strong&#62; - &#123;&#123; user.email &#125;&#125;
          &#60;/span&#62;
          &#60;span class="badge bg-info rounded-pill"&#62;ID: &#123;&#123; user.id &#125;&#125;&#60;/span&#62;
        &#60;/li&#62;
      &#60;/ul&#62;

      &#60;div *ngIf="loading" class="text-center mt-3"&#62;
        &#60;div class="spinner-border text-warning"&#62;&#60;/div&#62;
        &#60;p class="mt-2"&#62;Chargement en cours...&#60;/p&#62;
      &#60;/div&#62;
    &#60;/div&#62;
  &#96;,
&#125;)
export class NgOnInitComponent implements OnInit &#123;
  users: any[] = [];
  loading = true; // Indicateur de chargement

  constructor(private http: HttpClient) &#123;&#125;

  ngOnInit() &#123;
    this.fetchUsers();
  &#125;

  fetchUsers() &#123;
    this.http.get&#60;any[]&#62;('https://jsonplaceholder.typicode.com/users').subscribe(&#123;
      next: (data) =&#62; &#123;
        this.users = data;
        this.loading = false;
      &#125;,
      error: (error) =&#62; &#123;
        console.error('Erreur lors du chargement des utilisateurs', error);
        this.loading = false;
      &#125;,
    &#125;);
  &#125;
&#125;</pre>
        </div>
      </div>
      <div class=" mt-4">
        ****************************************<span class="fs-2">cours</span
        >*************************************************
      </div>
      <pre >
        .......
      </pre>
<!-- --------------------Fin Template pour afficher le code source---------------- -->

    </div>
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
export class NgOnInitComponent implements OnInit {
  users: any[] = [];
  loading = true; // Indicateur de chargement

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/users').subscribe({
      next: (data) => {
        this.users = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des utilisateurs', error);
        this.loading = false;
      },
    });
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

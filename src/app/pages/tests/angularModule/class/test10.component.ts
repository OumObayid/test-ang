import { CommonModule } from '@angular/common';
import { Component, viewChild, ElementRef } from '@angular/core';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <h1>
        <strong>Les Class Bindings dans Angular:</strong> Liaison conditionnelle
        d'une classe
      </h1>
      <h3>User Information</h3>
      <div [class.active]="isUserActive">
        <strong>Name:</strong> {{ user.name }} <br />
        <strong>Username:</strong> {{ user.username }} <br />
        <strong>Email:</strong> {{ user.email }}
      </div>

      <button class="btn btn-success mt-2" (click)="toggleUserStatus()">
        {{ isUserActive ? 'Deactivate User' : 'Activate User' }}
      </button>
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
import &#123; Component &#125; from '&#64;angular/core';

interface User &#123;
  id: number;
  name: string;
  username: string;
  email: string;
&#125;

&#64;Component(&#123;
  selector: 'app-root',
  standalone: true,
  template: &#96;
    &#60;div class="container"&#62;
      &#60;h1&#62;&#60;strong&#62;Les Class Bindings dans Angular:&#60;/strong&#62; Liaison conditionnelle d'une classe&#60;/h1&#62;
      &#60;h3&#62;User Information&#60;/h3&#62;
      &#60;div [class.active]="isUserActive"&#62;
        &#60;strong&#62;Name:&#60;/strong&#62; &#123;&#123; user.name &#125;&#125; &#60;br /&#62;
        &#60;strong&#62;Username:&#60;/strong&#62; &#123;&#123; user.username &#125;&#125; &#60;br /&#62;
        &#60;strong&#62;Email:&#60;/strong&#62; &#123;&#123; user.email &#125;&#125;
      &#60;/div&#62;

      &#60;button class="btn btn-success mt-2" (click)="toggleUserStatus()"&#62;
        &#123;&#123; isUserActive ? 'Deactivate User' : 'Activate User' &#125;&#125;
      &#60;/button&#62;
      &#62;
    &#60;/div&#62;
  &#96;,
  styles: [
    &#96;
      .active &#123;
        background-color: #d4edda;
        border: 1px solid #c3e6cb;
        padding: 8px;
        margin-bottom: 8px;
      &#125;

    &#96;,
  ],
&#125;)
export class AppComponent &#123;
  user: User = &#123;
    id: 1,
    name: 'John Doe',
    username: 'johndoe',
    email: 'john&#64;example.com',
  &#125;;

  isUserActive = true;

  toggleUserStatus(): void &#123;
    this.isUserActive = !this.isUserActive;
  &#125;
&#125;</pre
          >
        </div>
      </div>
      <!-- --------------------Fin Template pour afficher le code source---------------- -->
      <hr />
      <!-- --------------------Template pour afficher le cours---------------- -->

      <div class=" mt-4">
        ______________________________________________________________
        <span class="fs-2">cours</span>
        ______________________________________________________________
      </div>
      <pre>
La façon la plus simple de lier une classe est d'utiliser la syntaxe:
<strong class="text-danger">[class.nom-classe]="condition"</strong>.
cette condition peut etre <span class="text-danger">true</span> ou <span class="text-danger">false</span> ou un variable boolean</pre>
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
export class Test10Component {
  user: User = {
    id: 1,
    name: 'John Doe',
    username: 'johndoe',
    email: 'john@example.com',
  };

  isUserActive = true;

  toggleUserStatus(): void {
    this.isUserActive = !this.isUserActive;
  }

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

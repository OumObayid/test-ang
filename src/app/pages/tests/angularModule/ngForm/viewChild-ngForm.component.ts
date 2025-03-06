import { CommonModule } from '@angular/common';
import { Component, viewChild, ViewChild, ElementRef } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <div class="container">
      <h1>ngForm: Utiliser ViewChild</h1>
      <hr />
      <form #loginForm="ngForm" (ngSubmit)="onSubmit()">
        <div class="mb-3">
          <label for="username">Username</label>
          <input
            class="form-control "
            type="text"
            name="username"
            #username="ngModel"
            ngModel
            required
          />
          <div *ngIf="username.invalid && username.touched" class="error">
            Username is required.
          </div>
        </div>
        <div class="mb-3">
          <label for="password">Password</label>
          <input
            class="form-control "
            type="password"
            name="password"
            ngModel
            required
            #password="ngModel"
            [class.is-invalid]="password.invalid && password.touched"
          />
          <div *ngIf="password.invalid && password.touched" class="error">
            Password is required.
          </div>
        </div>
        <button
          class="btn btn-success mb-3"
          type="submit"
          [disabled]="!loginForm.valid"
        >
          Login
        </button>
        <p *ngIf="isvisible">
          <strong>username:</strong> {{ loginForm.value.username }}
          <strong>password:</strong>
          {{ loginForm.value.password }}
        </p>
      </form>
      <hr>
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
          ngForm avec viewChild
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
import &#123; Component, ViewChild &#125; from '&#64;angular/core';
import &#123; NgForm, FormsModule &#125; from '&#64;angular/forms';

&#64;Component(&#123;
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: &#96;
    &#60;div class="container"&#62;
      &#60;h1&#62;ngForm: Utiliser ViewChild&#60;/h1&#62;
      &#60;hr /&#62;
      &#60;form #loginForm="ngForm" (ngSubmit)="onSubmit()"&#62;
        &#60;div class="mb-3"&#62;
          &#60;label for="username"&#62;Username&#60;/label&#62;
          &#60;input
            class="form-control "
            type="text"
            name="username"
            #username="ngModel"
            ngModel
            required
          /&#62;
          &#60;div *ngIf="username.invalid && username.touched" class="error"&#62;
            Username is required.
          &#60;/div&#62;
        &#60;/div&#62;
        &#60;div class="mb-3"&#62;
          &#60;label for="password"&#62;Password&#60;/label&#62;
          &#60;input
            class="form-control "
            type="password"
            name="password"
            ngModel
            required
            #password="ngModel"
            [class.is-invalid]="password.invalid && password.touched"
          /&#62;
          &#60;div *ngIf="password.invalid && password.touched" class="error"&#62;
            Password is required.
          &#60;/div&#62;
        &#60;/div&#62;
        &#60;button
          class="btn btn-success mb-3"
          type="submit"
          [disabled]="!loginForm.valid"
        &#62;
          Login
        &#60;/button&#62;
        &#60;p *ngIf="isvisible"&#62;
          &#60;strong&#62;username:&#60;/strong&#62; &#123;&#123; loginForm.value.username &#125;&#125;
          &#60;strong&#62;password:&#60;/strong&#62;
          &#123;&#123; loginForm.value.password &#125;&#125;
        &#60;/p&#62;
      &#60;/form&#62;
    &#60;/div&#62;
  &#96;,
&#125;)
export class ViewchildNgFormComponent &#123;
  &#64;ViewChild('loginForm') loginForm!: NgForm;
  isvisible: boolean = false;
  onSubmit() &#123;
    console.log(this.loginForm.value);
    this.isvisible = true;
  &#125;
&#125;</pre>
        </div>
      </div>
      <!-- --------------------Fin Template pour afficher le code source---------------- -->
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
export class ViewchildNgFormComponent {
  @ViewChild('loginForm') loginForm!: NgForm;
  isvisible: boolean = false;
  onSubmit() {
    console.log(this.loginForm.value);
    this.isvisible = true;
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

  // ----------------------Fin ts pour afficher le code source--------------------
}

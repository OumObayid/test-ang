import { CommonModule } from '@angular/common';
import { Component, viewChild, ElementRef } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ngForm',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <div class="container">
      <h1>ngForm: Passer ngForm dans ngSubmit dans le template</h1>
      <hr />
      <form #loginForm="ngForm" (ngSubmit)="onSubmit(loginForm)">
        <!-- Champ pour le nom d'utilisateur -->
        <div class="mb-3">
          <label for="username">Username</label>

          <input
            class="form-control "
            type="text"
            id="username"
            name="username"
            ngModel
            required
            #username="ngModel"
            [class.is-invalid]="username.invalid && username.touched"
          />
          <div *ngIf="username.invalid && username.touched" class="error">
            Username is required.
          </div>
        </div>
        <!-- Champ pour l'email' -->
        <div class="mb-3">
          <label for="email">Email</label>
          <input
            class="form-control "
            type="email"
            id="email"
            name="email"
            ngModel
            required
            #email="ngModel"
            [class.is-invalid]="email.invalid && email.touched"
          />
          <div *ngIf="email.errors?.['required'] && email.touched" class="error text-danger">Email is required.</div>
          <div *ngIf="email.errors?.['email'] && email.touched" class="error text-danger">Email invalid.</div>
        </div>
        <!-- Champ pour le mot de passe -->
        <div class="mb-3">
          <label for="password">Password</label>
          <input
            class="form-control "
            type="password"
            id="password"
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

        <!-- Bouton de soumission -->
        <button
          class="btn btn-success"
          type="submit"
          [disabled]="!loginForm.valid"
        >
          Login
        </button>
      </form>

      <!-- Affichage des données soumises -->
      <div *ngIf="submittedData" class="mt-3">
        <h3>Submitted Data</h3>
        <p><strong>Username:</strong> {{ submittedData.username }}</p>
        <p><strong>Username:</strong> {{ submittedData.email }}</p>
        <p><strong>Password:</strong> {{ submittedData.password }}</p>
      </div>
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
            ngForm dans ngSubmit
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
import &#123; Component &#125; from '&#64;angular/core';
import &#123; NgForm, FormsModule &#125; from '&#64;angular/forms';

&#64;Component(&#123;
  selector: 'app-ngForm',
  standalone: true,
  imports: [FormsModule],
  template: &#96;
  &#60;div class="container"&#62;
      &#60;h1&#62;ngForm: Passer ngForm dans ngSubmit dans le template&#60;/h1&#62;
      &#60;hr /&#62;
      &#60;form #loginForm="ngForm" (ngSubmit)="onSubmit(loginForm)"&#62;
      &#60;!-- Champ pour le nom d'utilisateur --&#62;
      &#60;div class="mb-3"&#62;
        &#60;label for="username"&#62;Username&#60;/label&#62;
        &#60;input
        class="form-control "
          type="text"
          id="username"
          name="username"
          ngModel
          required
          #username="ngModel"
          [class.is-invalid]="username.invalid && username.touched"
        /&#62;
        &#60;div *ngIf="username.invalid && username.touched" class="error"&#62;
          Username is required.
        &#60;/div&#62;
      &#60;/div&#62;

      &#60;!-- Champ pour l'email' --&#62;
      &#60;div class="mb-3"&#62;
        &#60;label for="email"&#62;Email&#60;/label&#62;
        &#60;input
          class="form-control "
          type="email"
          id="email"
          name="email"
          ngModel
          required
          #email="ngModel"
          [class.is-invalid]="email.invalid && email.touched"
        /&#62;
        &#60;div *ngIf="email.errors?.['required'] && email.touched" class="error text-danger"&#62;Email is required.&#60;/div&#62;
        &#60;div *ngIf="email.errors?.['email'] && email.touched" class="error text-danger"&#62;Email invalid.&#60;/div&#62;
      &#60;/div&#62;

      &#60;!-- Champ pour le mot de passe --&#62;
      &#60;div class="mb-3"&#62;
        &#60;label for="password"&#62;Password&#60;/label&#62;
        &#60;input
        class="form-control "
          type="password"
          id="password"
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

      &#60;!-- Bouton de soumission --&#62;
      &#60;button class="btn btn-success" type="submit" [disabled]="!loginForm.valid"&#62;Login&#60;/button&#62;
    &#60;/form&#62;
    <!-- Affichage des données soumises -->
    &#60;div *ngIf="submittedData" class="mt-3"&#62;
        &#60;h3&#62;Submitted Data&#60;/h3&#62;
        &#60;p&#62;&#60;strong&#62;Username:&#60;/strong&#62; {{ submittedData.username }}&#60;/p&#62;
        &#60;p&#62;&#60;strong&#62;Username:&#60;/strong&#62; {{ submittedData.email }}&#60;/p&#62;
        &#60;p&#62;&#60;strong&#62;Password:&#60;/strong&#62; {{ submittedData.password }}&#60;/p&#62;
      &#60;/div&#62;
  &#60;/div&#62;
  &#96;
&#125;)
export class NgFormComponent &#123;
submittedData: &#123; username: string; email:string, password: string  &#125; | null = null;

onSubmit(form: NgForm) &#123;
  this.submittedData = form.value; // Stocker les données du formulaire
  form.reset(); // Réinitialiser le formulaire après soumission si nécessaire
&#125;
&#125;</pre
          >
        </div>
      </div>
      <!-- --------------------Fin Template pour afficher le code source---------------- -->
      <hr />
      <div class=" mt-4">
        ****************************************<span class="fs-2">cours</span
        >*************************************************
      </div>
      <pre>
<strong>Explications des ajustements :</strong>
1. #loginForm="ngForm" : Permet d'accéder à l'état du formulaire (comme valid, dirty, etc.) dans le template.

2. Validation visuelle :
Ajout de #username="ngModel" et #password="ngModel" pour vérifier individuellement l'état des champs.
Classe conditionnelle is-invalid pour afficher un style rouge en cas de champ invalide.

3. Messages d'erreur :
Un message clair est affiché si un champ requis est vide après interaction (touched).

4. Désactivation du bouton de soumission :
Le bouton est désactivé si le formulaire n'est pas valide (!loginForm.valid).

5. Style : Un style minimal a été ajouté pour améliorer l'expérience utilisateur.

<strong>Fonctionnement attendu :</strong>
1. L'utilisateur doit remplir les champs username et password.
2. Si les champs sont vides ou non valides, un message d'erreur s'affiche sous le champ correspondant.
3. Le bouton "Login" est désactivé tant que tous les champs ne sont pas valides.
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
           `,
})
export class NgFormComponent {
  submittedData: { username: string; email:string, password: string } | null = null;

  onSubmit(form: NgForm) {
    this.submittedData = form.value; // Stocker les données du formulaire
    console.log('form.value :', form.value);
    form.reset(); // Réinitialiser le formulaire après soumission si nécessaire
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

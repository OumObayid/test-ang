import { CommonModule } from '@angular/common';
import { Component, viewChild, ElementRef } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-formcontrolgroup',
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  template: `
    <div class="container mt-5">
      <h2 class="text-center mb-4">
        Exemple complet : FormGroup et FormControl
      </h2>

      <!-- Formulaire principal -->
      <form
        [formGroup]="myForm"
        (ngSubmit)="onSubmit()"
        class="p-4 border rounded bg-light"
      >
        <!-- Champ Nom -->
        <div class="mb-3">
          <label for="name" class="form-label">Nom :</label>
          <input
            id="name"
            formControlName="name"
            class="form-control"
            placeholder="Entrez votre nom"
          />
          <!-- Gestion des erreurs -->
          <div *ngIf="name.invalid && name.touched" class="text-danger mt-1">
            <span *ngIf="name.errors?.['required']">Le nom est requis.</span>
            <span *ngIf="name.errors?.['minlength']"
              >Minimum 3 caractères.</span
            >
          </div>
        </div>

        <!-- Champ Email -->
        <div class="mb-3">
          <label for="email" class="form-label">Email :</label>
          <input
            id="email"
            formControlName="email"
            class="form-control"
            placeholder="Entrez votre email"
          />
          <!-- Gestion des erreurs -->
          <div *ngIf="email.invalid && email.touched" class="text-danger mt-1">
            <span *ngIf="email.errors?.['required']">L'email est requis.</span>
            <span *ngIf="email.errors?.['email']"
              >Format d'email invalide.</span
            >
          </div>
        </div>

        <!-- Champ Mot de Passe -->
        <div class="mb-3">
          <label for="password" class="form-label">Mot de passe :</label>
          <input
            id="password"
            type="password"
            formControlName="password"
            class="form-control"
            placeholder="Entrez votre mot de passe"
          />
          <!-- Gestion des erreurs -->
          <div
            *ngIf="password.invalid && password.touched"
            class="text-danger mt-1"
          >
            <span *ngIf="password.errors?.['required']"
              >Mot de passe requis.</span
            >
            <span *ngIf="password.errors?.['minlength']"
              >Minimum 6 caractères.</span
            >
          </div>
        </div>

        <!-- Champ indépendant avec FormControl -->
        <div class="mb-3">
          <label for="independentControl" class="form-label"
            >Champ indépendant :</label
          >
          <input
            id="independentControl"
            [formControl]="control"
            class="form-control"
            placeholder="Champ indépendant (non inclus dans le FormGroup)"
          />
          <!-- Gestion des erreurs -->
          <div
            *ngIf="control.invalid && control.touched"
            class="text-danger mt-1"
          >
            <span *ngIf="control.errors?.['required']"
              >Ce champ est requis.</span
            >
          </div>
        </div>

        <!-- Checkbox actif -->
        <div class="form-check mb-3">
          <input
            type="checkbox"
            formControlName="isActive"
            class="form-check-input"
            id="isActive"
          />
          <label for="isActive" class="form-check-label"
            >Activer l'utilisateur</label
          >
        </div>

        <!-- Boutons -->
        <div class="d-flex justify-content-between">
          <button
            type="submit"
            class="btn btn-success"
            [disabled]="myForm.invalid || control.invalid"
          >
            Soumettre
          </button>
          <button type="button" class="btn btn-secondary" (click)="resetForm()">
            Réinitialiser
          </button>
        </div>
      </form>
      <!-- Résultats -->
      <div class="mt-4">
        <h3>Valeurs actuelles du formulaire :</h3>
        <pre class="bg-light p-3 rounded border">{{ myForm.value | json }}</pre>
        <h3>Valeur du champ indépendant :</h3>
        <span *ngIf="control.value" class="bg-light p-3 my-3 rounded border">{{
          control.value
        }}</span>
      </div>
      <!-- Liste dynamique des compétences -->
      <div class="mb-1">
        <label for="skills" class="form-label">Compétences :</label>
        <ul class="list-group mb-2">
          <li
            *ngFor="let skill of skills; let i = index"
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            {{ skill }}
            <button
              type="button"
              class="btn btn-sm btn-danger"
              (click)="removeSkill(i)"
            >
              Supprimer
            </button>
          </li>
        </ul>
      </div>
      <div class="d-flex">
        <input
          type="text"
          class="form-control me-2"
          placeholder="Nouvelle compétence"
          [(ngModel)]="newSkill"
        />
        <button type="button" class="btn btn-success" (click)="addSkill()">
          Ajouter
        </button>
      </div>
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
import &#123; CommonModule &#125; from '&#64;angular/common';
import &#123; Component &#125; from '&#64;angular/core';
import &#123;
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
  FormsModule,
&#125; from '&#64;angular/forms';

&#64;Component(&#123;
  selector: 'app-formcontrolgroup',
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  template: &#96;
    &#60;div class="container mt-5"&#62;
      &#60;h2 class="text-center mb-4"&#62;
        Exemple complet : FormGroup et FormControl
      &#60;/h2&#62;

      &#60;!-- Formulaire principal --&#62;
      &#60;form
        [formGroup]="myForm"
        (ngSubmit)="onSubmit()"
        class="p-4 border rounded bg-light"
      &#62;
        &#60;!-- Champ Nom --&#62;
        &#60;div class="mb-3"&#62;
          &#60;label for="name" class="form-label"&#62;Nom :&#60;/label&#62;
          &#60;input
            id="name"
            formControlName="name"
            class="form-control"
            placeholder="Entrez votre nom"
          /&#62;
          &#60;!-- Gestion des erreurs --&#62;
          &#60;div *ngIf="name.invalid && name.touched" class="text-danger mt-1"&#62;
            &#60;span *ngIf="name.errors?.['required']"&#62;Le nom est requis.&#60;/span&#62;
            &#60;span *ngIf="name.errors?.['minlength']"
              &#62;Minimum 3 caractères.&#60;/span
            &#62;
          &#60;/div&#62;
        &#60;/div&#62;

        &#60;!-- Champ Email --&#62;
        &#60;div class="mb-3"&#62;
          &#60;label for="email" class="form-label"&#62;Email :&#60;/label&#62;
          &#60;input
            id="email"
            formControlName="email"
            class="form-control"
            placeholder="Entrez votre email"
          /&#62;
          &#60;!-- Gestion des erreurs --&#62;
          &#60;div *ngIf="email.invalid && email.touched" class="text-danger mt-1"&#62;
            &#60;span *ngIf="email.errors?.['required']"&#62;L'email est requis.&#60;/span&#62;
            &#60;span *ngIf="email.errors?.['email']"
              &#62;Format d'email invalide.&#60;/span
            &#62;
          &#60;/div&#62;
        &#60;/div&#62;

        &#60;!-- Champ Mot de Passe --&#62;
        &#60;div class="mb-3"&#62;
          &#60;label for="password" class="form-label"&#62;Mot de passe :&#60;/label&#62;
          &#60;input
            id="password"
            type="password"
            formControlName="password"
            class="form-control"
            placeholder="Entrez votre mot de passe"
          /&#62;
          &#60;!-- Gestion des erreurs --&#62;
          &#60;div
            *ngIf="password.invalid && password.touched"
            class="text-danger mt-1"
          &#62;
            &#60;span *ngIf="password.errors?.['required']"
              &#62;Mot de passe requis.&#60;/span
            &#62;
            &#60;span *ngIf="password.errors?.['minlength']"
              &#62;Minimum 6 caractères.&#60;/span
            &#62;
          &#60;/div&#62;
        &#60;/div&#62;

        &#60;!-- Champ indépendant avec FormControl --&#62;
        &#60;div class="mb-3"&#62;
          &#60;label for="independentControl" class="form-label"
            &#62;Champ indépendant :&#60;/label
          &#62;
          &#60;input
            id="independentControl"
            [formControl]="control"
            class="form-control"
            placeholder="Champ indépendant (non inclus dans le FormGroup)"
          /&#62;
          &#60;!-- Gestion des erreurs --&#62;
          &#60;div
            *ngIf="control.invalid && control.touched"
            class="text-danger mt-1"
          &#62;
            &#60;span *ngIf="control.errors?.['required']"
              &#62;Ce champ est requis.&#60;/span
            &#62;
          &#60;/div&#62;
        &#60;/div&#62;

        &#60;!-- Checkbox actif --&#62;
        &#60;div class="form-check mb-3"&#62;
          &#60;input
            type="checkbox"
            formControlName="isActive"
            class="form-check-input"
            id="isActive"
          /&#62;
          &#60;label for="isActive" class="form-check-label"
            &#62;Activer l'utilisateur&#60;/label
          &#62;
        &#60;/div&#62;

        &#60;!-- Boutons --&#62;
        &#60;div class="d-flex justify-content-between"&#62;
          &#60;button
            type="submit"
            class="btn btn-success"
            [disabled]="myForm.invalid || control.invalid"
          &#62;
            Soumettre
          &#60;/button&#62;
          &#60;button type="button" class="btn btn-secondary" (click)="resetForm()"&#62;
            Réinitialiser
          &#60;/button&#62;
        &#60;/div&#62;
      &#60;/form&#62;
      &#60;!-- Résultats --&#62;
      &#60;div class="mt-4"&#62;
        &#60;h3&#62;Valeurs actuelles du formulaire :&#60;/h3&#62;
        &#60;pre class="bg-light p-3 rounded border"&#62;&#123;&#123; myForm.value | json &#125;&#125;&#60;/pre&#62;
        &#60;h3&#62;Valeur du champ indépendant :&#60;/h3&#62;
        &#60;span *ngIf="control.value" class="bg-light p-3 my-3 rounded border"&#62;&#123;&#123;
          control.value
        &#125;&#125;&#60;/span&#62;
      &#60;/div&#62;
      &#60;!-- Liste dynamique des compétences --&#62;
      &#60;div class="mb-1"&#62;
        &#60;label for="skills" class="form-label"&#62;Compétences :&#60;/label&#62;
        &#60;ul class="list-group mb-2"&#62;
          &#60;li
            *ngFor="let skill of skills; let i = index"
            class="list-group-item d-flex justify-content-between align-items-center"
          &#62;
            &#123;&#123; skill &#125;&#125;
            &#60;button
              type="button"
              class="btn btn-sm btn-danger"
              (click)="removeSkill(i)"
            &#62;
              Supprimer
            &#60;/button&#62;
          &#60;/li&#62;
        &#60;/ul&#62;
      &#60;/div&#62;
      &#60;div class="d-flex"&#62;
        &#60;input
          type="text"
          class="form-control me-2"
          placeholder="Nouvelle compétence"
          [(ngModel)]="newSkill"
        /&#62;
        &#60;button type="button" class="btn btn-success" (click)="addSkill()"&#62;
          Ajouter
        &#60;/button&#62;
      &#60;/div&#62;
    &#60;/div&#62;
  &#96;,
  styles: [],
&#125;)
export class FormcontrolgroupComponent &#123;
  // Définition du FormGroup avec ses contrôles enfants
  myForm = new FormGroup(&#123;
    name: new FormControl('', [Validators.required, Validators.minLength(3)]), // Champ requis avec longueur min.
    email: new FormControl('', [Validators.required, Validators.email]), // Email valide requis.
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]), // Mot de passe avec longueur min.
    isActive: new FormControl(false), // Checkbox avec valeur booléenne.
  &#125;);

  // FormControl indépendant (pas lié au FormGroup)
  control: FormControl = new FormControl('', [Validators.required]);

  // Champs pour gérer les compétences
  skills: string[] = []; // Tableau des compétences
  newSkill: string = ''; // Champ pour la saisie d'une nouvelle compétence

  // Getter pour simplifier l'accès aux contrôles dans le template
  get name() &#123;
    return this.myForm.get('name')!;
  &#125;
  get email() &#123;
    return this.myForm.get('email')!;
  &#125;
  get password() &#123;
    return this.myForm.get('password')!;
  &#125;

  // Fonction appelée lors de la soumission du formulaire
  onSubmit() &#123;
    console.log('Formulaire soumis :', this.myForm.value);
    console.log('Valeur du champ indépendant :', this.control.value);
  &#125;

  // Réinitialisation du formulaire
  resetForm() &#123;
    this.myForm.reset(); // Réinitialise les champs du FormGroup
    this.control.reset(); // Réinitialise le champ indépendant
    this.skills = []; // Vide la liste des compétences
  &#125;

  // Ajouter une nouvelle compétence
  addSkill() &#123;
    if (this.newSkill.trim()) &#123;
      console.log('newSkill :', this.newSkill);

      console.log('newSkill :', this.newSkill);
      this.skills.push(this.newSkill.trim());
      console.log('skills :', this.skills);
      this.newSkill = ''; // Vide le champ de saisie
    &#125;
  &#125;

  // Supprimer une compétence par son index
  removeSkill(index: number) &#123;
    this.skills.splice(index, 1);
  &#125;
&#125;

          </pre>
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
                 `
})
export class FormcontrolgroupComponent {
  // Définition du FormGroup avec ses contrôles enfants
  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]), // Champ requis avec longueur min.
    email: new FormControl('', [Validators.required, Validators.email]), // Email valide requis.
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]), // Mot de passe avec longueur min.
    isActive: new FormControl(false), // Checkbox avec valeur booléenne.
  });

  // FormControl indépendant (pas lié au FormGroup)
  control: FormControl = new FormControl('', [Validators.required]);

  // Champs pour gérer les compétences
  skills: string[] = []; // Tableau des compétences
  newSkill: string = ''; // Champ pour la saisie d'une nouvelle compétence

  // Getter pour simplifier l'accès aux contrôles dans le template
  get name() {
    return this.myForm.get('name')!;
  }
  get email() {
    return this.myForm.get('email')!;
  }
  get password() {
    return this.myForm.get('password')!;
  }

  // Fonction appelée lors de la soumission du formulaire
  onSubmit() {
    console.log('Formulaire soumis :', this.myForm.value);
    console.log('Valeur du champ indépendant :', this.control.value);
  }

  // Réinitialisation du formulaire
  resetForm() {
    this.myForm.reset(); // Réinitialise les champs du FormGroup
    this.control.reset(); // Réinitialise le champ indépendant
    this.skills = []; // Vide la liste des compétences
  }

  // Ajouter une nouvelle compétence
  addSkill() {
    if (this.newSkill.trim()) {
      console.log('newSkill :', this.newSkill);

      console.log('newSkill :', this.newSkill);
      this.skills.push(this.newSkill.trim());
      console.log('skills :', this.skills);
      this.newSkill = ''; // Vide le champ de saisie
    }
  }

  // Supprimer une compétence par son index
  removeSkill(index: number) {
    this.skills.splice(index, 1);
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

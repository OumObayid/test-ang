import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, model, viewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports:[FormsModule,CommonModule],
  template: `
    <div class="container">
      <h1>model() pour du double data-binding</h1>
      <hr>
      <input class="form-control w-25" [value]="username()" (input)="updateUsername($event)" placeholder="Entrez votre nom d'utilisateur">
      <div class="my-2">Nom d'utilisateur actuel : {{ username() }}</div>
      <button class="btn btn-success" (click)="clearUsername()">Effacer</button>
      <!-- --------------------Template pour afficher le code source---------------- -->
    <!-- Nav Tabs -->
    <ul class="nav nav-tabs mt-5" id="codeTabs" role="tablist">
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
import &#123; FormsModule &#125; from '&#64;angular/forms';
import &#123; Component, model &#125; from '&#64;angular/core';

&#64;Component(&#123;
  selector: 'app-user-form',
  standalone: true,
  imports:[FormsModule,CommonModule],
  template: &#96;
    &#60;div class="container"&#62;
      &#60;h1&#62;model() pour du double data-binding&#60;/h1&#62;
      &#60;hr&#62;
      &#60;input class="form-control w-25" [value]="username()" (input)="updateUsername($event)" placeholder="Entrez votre nom d'utilisateur"&#62;
      &#60;div class="my-2"&#62;Nom d'utilisateur actuel : &#123;&#123; username() &#125;&#125;&#60;/div&#62;
      &#60;button class="btn btn-success" (click)="clearUsername()"&#62;Effacer&#60;/button&#62;
    &#60;/div&#62;
  &#96;,
&#125;)
export class Test8Component &#123;
  username = model(''); // Modèle pour le double data-binding
  // Méthode pour mettre à jour le modèle
  updateUsername(event: Event): void &#123;
    const input = event.target as HTMLInputElement; // Typage explicite
    this.username.set(input.value);
  &#125;

  // Méthode pour effacer le contenu du champ
  clearUsername(): void &#123;
    this.username.set(''); // Réinitialise le signal lié au modèle
  &#125;
&#125;</pre>
        </div>
      </div>
      <!-- --------------------Fin Template pour afficher le code source---------------- -->
      <div class=" mt-4">
        ****************************************<span class="fs-2">cours</span
        >*************************************************
      </div>
      <pre >
Dans cet exemple, l'utilisation de model() met en avant une nouvelle manière de gérer le double data-binding <br> dans Angular. Voici une explication détaillée des différentes parties de cet exemple :

<strong>1. pour la gestion des signaux :</strong>
model() est une fonction qui agit comme un signal dans Angular (concept introduit dans Angular 16).
Un signal est une donnée réactive qui peut être lue ou mise à jour. Ici, username est un signal initialisé à une valeur vide ('').

<strong>2. Double Data-Binding via model():</strong>
Le double data-binding signifie que les modifications dans le champ de saisie sont reflétées automatiquement dans le modèle et vice-versa.
Dans le template :
[value]="username()" : Le champ d'entrée affiche la valeur actuelle du signal username.
(input)="updateUsername($event)" : À chaque saisie utilisateur, la méthode updateUsername met à jour le signal username.
Dans le modèle (classe TypeScript) :
username.set(value) : Met à jour la valeur du signal.

<strong>3. Gestion des interactions :</strong>
Méthode updateUsername:
Extrait la valeur de l'entrée utilisateur depuis l'événement input et met à jour le signal.
Méthode clearUsername:
Réinitialise le signal username à une chaîne vide ('').

<strong>4. Affichage Réactif avec username():</strong>
Dans le template, {{ username() }} permet d'afficher dynamiquement la valeur actuelle du signal.
Toute mise à jour de username entraîne automatiquement la mise à jour de l'affichage.
      </pre>
      <hr>
      <pre>
Bref cours sur model() et signaux dans Angular
<strong>1. Introduction aux Signaux dans Angular :</strong>
Les signaux sont un nouveau mécanisme réactif introduit à partir d'Angular 16. Ils simplifient la gestion de l'état et du data-binding.
Un signal est une valeur observable qui peut être lue (par un appel comme signal()) ou mise à jour (par set()).

<strong>2. Créer un signal avec model() :</strong>
model() est une fonction spécifique qui agit comme un signal réactif pour des cas pratiques comme le double data-binding.
Syntaxe : const mySignal = model(initialValue);
initialValue : La valeur initiale du signal.

<strong>3. Utilisation des Signaux :</strong>
Lecture de la valeur : Appelez la fonction, par exemple mySignal().
Mise à jour de la valeur : Utilisez mySignal.set(newValue).
Réactivité : Les signaux déclenchent automatiquement la mise à jour de tout élément ou expression qui les utilise dans un template.

<strong>4. Avantages des Signaux :</strong>
Réactivité simplifiée : Plus besoin de gestion complexe comme dans RxJS (pas de subscribe()).
Optimisation des performances : Angular suit les signaux directement, sans zone.js.
Simplification du double data-binding : Avec model(), il devient facile de synchroniser l'interface utilisateur avec le modèle.</pre>
    </div>
  `,
  styles: `
  // -------------------------style pour afficher le code source----------------
  pre{
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
export class Test8Component {
  username = model(''); // Modèle pour le double data-binding
  // Méthode pour mettre à jour le modèle
  updateUsername(event: Event): void {
    const input = event.target as HTMLInputElement; // Typage explicite
    this.username.set(input.value);
  }

  // Méthode pour effacer le contenu du champ
  clearUsername(): void {
    this.username.set(''); // Réinitialise le signal lié au modèle
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

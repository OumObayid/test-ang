import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, signal, viewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports:[FormsModule,CommonModule],
  template: `
    <div class="container">
      <h1>Difference entre les deux methodes set() et update() d'un signal</h1>
      <hr>
      <div class="mt-3 border p-3">
        <h4>Exemple 1 : Compteur</h4>
        <p>Compteur : {{ counter() }}</p>
        <button class="btn btn-danger" (click)="resetCounter()">
          Réinitialiser
        </button>
        <button class="btn btn-success mx-3" (click)="incrementCounter()">
          Incrémenter
        </button>
      </div>

      <div class="mt-3 border p-3">
        <h4>Exemple 2 : Nom</h4>
        <p>
          Nom :
          <input type="text" [(ngModel)]="nom"  />
        </p>
        <button class="btn btn-danger" (click)="resetNom()">
          Réinitialiser
        </button>
        <button class="btn btn-success mx-3" (click)="capitaliseNom()">
          Capitaliser
        </button>
        <button class="btn btn-success mx-3" (click)="upperCaseNom()">
          Mettre au majuscule
        </button>
        <button class="btn btn-success mx-3" (click)="lowerCaseNom()">
          Mettre au minuscule
        </button>
      </div>

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
          @if (clicked) {
          <span class="confirm">copied <i class="fas fa-check"></i>
          </span>
        }
          <pre #tab1 class="tab fw-bold" ngNonBindable>
import &#123; FormsModule &#125; from '&#64;angular/forms';
import &#123; Component, signal &#125; from '&#64;angular/core';

&#64;Component(&#123;
  selector: 'app-counter',
  imports:[FormsModule],
  template: &#96;
    &#60;div class="container"&#62;
      &#60;h1&#62;Difference entre les deux methodes set() et update() d'un signal&#60;/h1&#62;
      &#60;hr&#62;
      &#60;div class="mt-3 border p-3"&#62;
        &#60;h4&#62;Exemple 1 : Compteur&#60;/h4&#62;
        &#60;p&#62;Compteur : &#123;&#123; counter() &#125;&#125;&#60;/p&#62;
        &#60;button class="btn btn-danger" (click)="resetCounter()"&#62;
          Réinitialiser
        &#60;/button&#62;
        &#60;button class="btn btn-success mx-3" (click)="incrementCounter()"&#62;
          Incrémenter
        &#60;/button&#62;
      &#60;/div&#62;

      &#60;div class="mt-3 border p-3"&#62;
        &#60;h4&#62;Exemple 2 : Nom&#60;/h4&#62;
        &#60;p&#62;
          Nom :
          &#60;input type="text" [(ngModel)]="nom"  /&#62;
        &#60;/p&#62;
        &#60;button class="btn btn-danger" (click)="resetNom()"&#62;
          Réinitialiser
        &#60;/button&#62;
        &#60;button class="btn btn-success mx-3" (click)="capitaliseNom()"&#62;
          Capitaliser
        &#60;/button&#62;
        &#60;button class="btn btn-success mx-3" (click)="upperCaseNom()"&#62;
          Mettre au majuscule
        &#60;/button&#62;
        &#60;button class="btn btn-success mx-3" (click)="lowerCaseNom()"&#62;
          Mettre au minuscule
        &#60;/button&#62;
      &#60;/div&#62;
    &#60;/div&#62;
  &#96;,
&#125;)
export class Test9Component &#123;
  counter = signal(0); // Signal pour le compteur
  nom = signal(''); // Signal pour le champ texte

  // Méthodes pour le compteur
  resetCounter() &#123;
    this.counter.set(0); // Réinitialise la valeur à 0
  &#125;

  incrementCounter() &#123;
    this.counter.update((value) =&#62; value + 1); // Incrémente la valeur actuelle de 1
  &#125;

  resetNom() &#123;
    this.nom.set(''); // Réinitialise le nom à une chaîne vide
  &#125;

  capitaliseNom() &#123;
    this.nom.update(
      (currentValue) =&#62; currentValue.charAt(0).toUpperCase() + currentValue.slice(1).toLowerCase()
    ); // Capitalise le nom
  &#125;

  upperCaseNom() &#123;
    this.nom.update(
      (currentValue) =&#62; currentValue.toUpperCase()
    ); // Capitalise le nom
  &#125;

  lowerCaseNom() &#123;
    this.nom.update(
      (currentValue) =&#62; currentValue.toLowerCase()
    ); // Capitalise le nom
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
<strong>1. set():</strong>
Description : La méthode set() permet de remplacer directement la valeur actuelle

du signal par une nouvelle valeur.
Usage : Idéal pour mettre à jour la valeur du signal lorsqu'on connaît la nouvelle valeur exacte.

Exemple :
const username = model('John'); // Signal initialisé à "John"
username.set('Doe'); // La valeur est maintenant "Doe"
console.log(username()); // Résultat : "Doe"

<strong>2. update():</strong>
Description : La méthode update() prend une fonction en paramètre, qui reçoit la valeur
actuelle <br> du signal et retourne la nouvelle valeur après une transformation.
Usage : Utile pour mettre à jour la valeur existante en fonction de sa valeur actuelle,
sans avoir à la lire ou à la modifier manuellement.

Exemple :
const counter = model(0); // Signal initialisé à 0
counter.update(value => value + 1); // Incrémente la valeur actuelle de 1
console.log(counter()); // Résultat : 1
counter.update(value => value * 2); // Multiplie la valeur actuelle par 2
console.log(counter()); // Résultat : 2</pre>
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
export class Test9Component {
  counter = signal(0); // Signal pour le compteur
  nom = signal(''); // Signal pour le champ texte

  // Méthodes pour le compteur
  resetCounter() {
    this.counter.set(0); // Réinitialise la valeur à 0
  }

  incrementCounter() {
    this.counter.update((value) => value + 1); // Incrémente la valeur actuelle de 1
  }



  resetNom() {
    this.nom.set(''); // Réinitialise le nom à une chaîne vide
  }

  capitaliseNom() {
    this.nom.update(
      (currentValue) => currentValue.charAt(0).toUpperCase() + currentValue.slice(1).toLowerCase()
    ); // Capitalise le nom
  }
  upperCaseNom() {
    this.nom.update(
      (currentValue) => currentValue.toUpperCase()
    ); // Capitalise le nom
  }
  lowerCaseNom() {
    this.nom.update(
      (currentValue) => currentValue.toLowerCase()
    ); // Capitalise le nom
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



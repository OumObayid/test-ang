import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
//utilisation de signal et computed()
import { Component, computed, signal, viewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-price-calculator',
  imports:[CommonModule,FormsModule],
  template: `
    <div class="container">
      <h1>Les signaux et computed()</h1>
      <hr />
      <label>Prix :</label>
      <input class="me-4" [(ngModel)]="price" type="text">
      <label>Quantité :</label>
      <input [(ngModel)]="quantity" type="text">

      <h3 class="mt-3">
        Total avec computed: <span class="text-danger me-3 "> {{ totalWithComputed() }}</span>
        <span style="font-size:14px;"
          >(avec computed le total se met à jour chaque fois que le signal
          quantity change)</span
        >
      </h3>
      <h3>
        Total sans computed :
        <span class="text-danger me-3">{{ totalWitoutComputed }} </span
        ><span style="font-size:14px;"
          >(sans computed le total ne se met pas à jour si le signal quantity
          change)</span
        >
      </h3>
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
import &#123; FormsModule &#125; from "&#64;angular/forms";
import &#123; CommonModule &#125; from "&#64;angular/common";
import &#123; Component, computed, signal &#125; from "&#64;angular/core";

&#64;Component(&#123;
  selector: "app-root",
  imports: [CommonModule, FormsModule],
  template: &#96;
    &#60;div class="container"&#62;
      &#60;h1&#62;Les signaux et computed()&#60;/h1&#62;
      &#60;hr /&#62;
      &#60;label&#62;Prix :&#60;/label&#62;
      &#60;input class="me-4" [(ngModel)]="price" type="text" /&#62;
      &#60;label&#62;Quantité :&#60;/label&#62;
      &#60;input [(ngModel)]="quantity" type="text" /&#62;

      &#60;h3 class="mt-3"&#62;
        Total avec computed:
        &#60;span class="text-danger me-3 "&#62; &#123; totalWithComputed() &#125;&#125;&#60;/span&#62;
        &#60;span style="font-size:14px;"
          &#62;(avec computed le total se met à jour chaque fois que le signal
          quantity change)&#60;/span
        &#62;
      &#60;/h3&#62;
      &#60;h3&#62;
        Total sans computed :
        &#60;span class="text-danger me-3"&#62;&#123; totalWitoutComputed &#125;&#125; &#60;/span
        &#62;&#60;span style="font-size:14px;"
          &#62;(sans computed le total ne se met pas à jour si le signal quantity
          change)&#60;/span
        &#62;
      &#60;/h3&#62;
    &#60;/div&#62;
  &#96;,
&#125;)
export class AppComponent &#123;
  price = signal(100); // Prix unitaire
  quantity = signal(1); // Quantité
  totalWithComputed = computed(() =&#62; this.price() * this.quantity()); // Calcul automatique
  totalWitoutComputed = this.price() * this.quantity();
&#125;</pre>
        </div>


      </div>
<!-- --------------------Fin Template pour afficher le code source---------------- -->

      <div class=" mt-5">
        ****************************************<span class="fs-2">cours</span
        >*************************************************
      </div>
      <p>les signaux sont comme les states dans react.</p>
      <p>Voici quelques utilisations courantes des signaux :</p>

      <p>
        <strong>Gestion des états :</strong> Les signaux peuvent être utilisés
        pour représenter l'état d'un composant ou d'une fonctionnalité
        spécifique. Lorsqu'un signal est mis à jour, les parties de
        l'application qui dépendent de ce signal peuvent être notifiées et
        réagir en conséquence.
      </p>

      <p>
        <strong>Déclenchement d'effets :</strong> Les signaux peuvent être
        utilisés pour déclencher des effets ou des actions spécifiques
        lorsqu'une valeur change. Par exemple, vous pouvez définir un effet qui
        s'exécute chaque fois qu'un signal particulier est mis à jour, ce qui
        permet de réaliser des actions supplémentaires telles que l'envoi de
        données à un serveur ou la mise à jour de l'interface utilisateur.
      </p>

      <p>
        <strong>Gestion des dépendances :</strong> Les signaux permettent de
        définir des dépendances entre différentes valeurs réactives. Lorsqu'un
        signal sur lequel dépend un autre signal est mis à jour, cela déclenche
        automatiquement la mise à jour des signaux dépendants.
      </p>

      <p>
        <strong>Calcul de valeurs dérivées :</strong> Les signaux peuvent être
        utilisés pour calculer des valeurs dérivées basées sur d'autres signaux.
        Par exemple, vous pouvez définir un signal qui représente la somme de
        deux autres signaux, et chaque fois que les signaux d'origine sont mis à
        jour, le signal calculé est automatiquement mis à jour.
      </p>
      <br />
      <p>
        <strong>1. Création d'un signal:</strong>
      </p>

      <p>
        import &#123; signal &#125; from &#39;&#64; angular/core&#39;;<br />
        const count = signal(0); // Un signal initialisé avec 0
      </p>
      <p>
        <strong> 2. Lecture de la valeur d'un signal:</strong>
      </p>
      <p>
        Pour accéder à la valeur actuelle d'un signal, utilisez son appel comme
        une fonction.<br />
        console.log(count()); // Affiche la valeur actuelle du signal
      </p>
      <p>
        <strong> 3. Mise à jour de la valeur d'un signal :</strong>
      </p>
      <p>
        Il existe plusieurs façons de mettre à jour un signal :<br /><br />
        a. set() : Remplace la valeur actuelle.<br />
        count.set(5); // Change la valeur à 5<br /><br />
        b. update() : Met à jour la valeur qui depend de la valeur actuelle en utilisant une fonction.<br />
        count.update(currentValue => currentValue + 1); // Incrémente la valeur<br /><br />
        c. mutate() : Modifie la valeur directement (utile pour les
        objets/collections).<br />
      </p>
      <pre>
const items = signal&lt;string[]&gt;([]);<br />
items.mutate(list => list.push('nouvel élément'));
      </pre>

      <p>
        <strong> 4. Utilisation dans des composants avec computed </strong>
      </p>
      <pre>
Rôle principal de computed():
Créer des valeurs dérivées : Il dérive une nouvelle valeur en fonction d'autres signaux ou valeurs.
Réactivité automatique : Si les signaux utilisés changent, computed() recalculera automatiquement la nouvelle valeur.

const count = signal(2);
const doubleCount = computed(() => count() * 2);
console.log(doubleCount()); // Affiche 4
count.set(3);
console.log(doubleCount()); // Affiche 6
      </pre
      >

      <p>
        <strong> 5. Utilisation avec des objets:</strong>
      </p>
      Un signal peut contenir un objet ou un tableau, et vous pouvez le mettre à
      jour de manière réactive.<br />

      <pre>
const user = signal(&#123; name: 'Alice', age: 25 &#125;);
//Mise à jour avec set:
user.set(&#123; name: 'Bob', age: 30 &#125;);
// Mise à jour partielle avec update
user.update(u => (&#123; ...u, age: u.age + 1 &#125;));
// Accès à une propriété spécifique
console.log(user().name); // Affiche "Bob"

</pre
      >

      .<br />
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
export class Test4Component {
  price = signal(100); // Prix unitaire
  quantity = signal(1); // Quantité
  totalWithComputed = computed(() => this.price() * this.quantity()); // Calcul automatique
  totalWitoutComputed = this.price() * this.quantity();
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

import { CommonModule } from '@angular/common';
import { ElementRef } from '@angular/core';
// binding
import { Component, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test1',
  imports: [FormsModule, CommonModule], // pour utiliser ngModel
  template: `
    <div class="container">
      <h1>les bindings</h1>
      <hr />
      <h2>{{ productName }}</h2>
      <!-- Interpolation -->
      <button class="btn btn-success me-4" (click)="addToCart()">
        Ajouter au panier
      </button>
      <!-- Event binding -->
      <input [(ngModel)]="quantity" type="number" />
      <!-- Two-way binding -->
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
import &#123; FormsModule &#125; from '&#64;angular/forms';

&#64;Component(&#123;
  selector: 'app-root',
  imports: [FormsModule], // pour utiliser ngModel
  template: &#96; &#60;div class="container"&#62;
    &#60;h1&#62;les bindings&#60;/h1&#62;
    &#60;hr /&#62;
    &#60;h2&#62;&#123;&#123; productName &#125;&#125;&#60;/h2&#62;
    &#60;!-- Interpolation --&#62;
    &#60;button class="btn btn-success me-4" (click)="addToCart()"&#62;
      Ajouter au panier
    &#60;/button&#62;
    &#60;!-- Event binding --&#62;
    &#60;input [(ngModel)]="quantity" type="number" /&#62;
    &#60;!-- Two-way binding --&#62;
&#96;
&#125;)
export class appComponent &#123;
productName: string = 'produit 1';
quantity: number = 1;
message = &#96;$&#123;this.quantity&#125; $&#123;this.productName&#125;(s) ajouté(s) au panier.&#96;;
addToCart() &#123;
alert(&#96;$&#123;this.quantity&#125; $&#123;this.productName&#125;(s) ajouté(s) au panier.&#96;);
&#125;
&#125;
        </pre
          >
        </div>
      </div>
      <!-- --------------------Fin Template pour afficher le code source---------------- -->
      <hr />
      <!-- --------------------Template pour afficher le cours---------------- -->

      <div class=" mt-5">
        <span class="fs-2">cours</span>

      </div>
      <pre ngNonBindable class="tab"><code>
<strong class="fs-6">Interpolation :</strong>
L’interpolation permet d’afficher une valeur dans le template.
Pour cela, on utilise la syntaxe &#123;&#123; &#125;.
<div class="p-2" style="background-color:#edeef3">&#64;Component(&#123;
  template: &#96;
    &#60;p&#62;Mon nom est &#123;&#123; name &#125;&#60;/p&#62;
    &#60;p&#62;&#123;&#123; copyright &#125;&#60;/p&#62;
  &#96;
&#125;)
export class AppComponent &#123;
  name = 'Emeline';
  copyright = &#96;Bonjour Angular, $&#123;new Date().getFullYear()&#125;&#96;
&#125;</div>

<strong class="fs-6">Property binding :</strong>
Le property binding permet de lier une propriété d’un élément HTML à une valeur dans le composant. Pour cela, on utilise la syntaxe [ ].

<div class="p-2" style="background-color:#edeef3">&#64;Component(&#123;
  template: &#96;
    &#60;button [disabled]="isDisabled"&#62;Mon bouton&#60;/button&#62;
    &#60;img [src]="image" /&#62;
  &#96;
&#125;)
export class AppComponent &#123;
  isDisabled = true;
  image = 'https://angular.io/assets/images/logos/angular/angular.png';
&#125;</div>

<strong class="fs-6">Event binding :</strong>
<p>L’event binding permet de lier un événement d’un élément HTML à une méthode dans le composant. Pour cela, on utilise la syntaxe ( ). Il existe beaucoup d’événements comme click, change, input, keyup, keydown, mouseover, mouseout, focus, blur, etc.</p>

<div class="p-2" style="background-color:#edeef3">&#64;Component(&#123;
  template: &#96;
    &#60;button (click)="alert('Bonjour Angular!')"&#62;Alert&#60;/button&#62;
  &#96;
&#125;)
export class AppComponent &#123;
  alert(message: string) &#123;
    window.alert(message);
  &#125;
&#125;</div>

<strong class="fs-6">Two-way binding :</strong>
<p>Le two-way binding est une fonctionnalité qui crée une connexion bidirectionnelle entre un élément HTML et un composant. Cela signifie que toute modification apportée à l’élément est reflétée dans le composant, et vice-versa. Pour réaliser cette liaison, on utilise la syntaxe [( )].</p>

<div class="p-2" style="background-color:#edeef3">&#64;Component(&#123;
  template: &#96;
    &#60;input type="text" [(ngModel)]="name" /&#62;
    &#60;p&#62;Mon nom est &#123; &#123; name &#125; &#125;&#60;/p&#62;
  &#96;
&#125;)
export class AppComponent &#123;
  name = 'Emeline';
&#125;</div>

<p class="wrap">Ici, si l’utilisateur écrit dans l’input, cela modifiera
  la propriété name et ce changement sera reflété automatiquement
  dans &#123; &#123; name &#125; &#125;.</p>
</code></pre>
      <pre ngNonBindable class="tab"><code>
<strong class="fs-6">Résumé des bindings :</strong>
    <table class="my-0 table table-bordered table-striped">
          <thead>
            <tr>
              <th>Type de Binding</th>
              <th>Syntaxe</th>
              <th>Exemple</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Interpolation</strong></td>
              <td>&#123;&#123; expression &#125;&#125;</td>
              <td>&lt;p&gt;&#123;&#123; title &#125;&#125;&lt;/p&gt;</td>
            </tr>
            <tr>
              <td><strong>Property Binding</strong></td>
              <td>[property]="value"</td>
              <td>&lt;img [src]="imageUrl" /&gt;</td>
            </tr>
            <tr>
              <td><strong>Event Binding</strong></td>
              <td>(event)="handler()"</td>
              <td>&lt;button (click)="onClick()"&gt;Clique&lt;/button&gt;</td>
            </tr>
            <tr>
              <td><strong>Two-Way Binding</strong></td>
              <td>[(ngModel)]="value"</td>
              <td>&lt;input [(ngModel)]="name" /&gt;</td>
            </tr>
            <tr>
              <td><strong>Class Binding</strong></td>
              <td>[class.className]</td>
              <td>&lt;div [class.active]="isActive"&gt;&lt;/div&gt;</td>
            </tr>
            <tr>
              <td><strong>Style Binding</strong></td>
              <td>[style.property]</td>
              <td>&lt;div [style.color]="color"&gt;&lt;/div&gt;</td>
            </tr>
          </tbody>
        </table>

<strong class="fs-6">Résumé rapide : </strong>
  <table class="table table-bordered table-striped">
  <thead style="background-color: black; color: white;">
    <tr>
      <th scope="col">Concept</th>
      <th scope="col">Syntaxe</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Unidirectionnel</td>
      <td><code>{{}}</code> ou <code>[]</code></td>
    </tr>
    <tr>
      <td>Événements</td>
      <td><code>()</code></td>
    </tr>
    <tr>
      <td>Bidirectionnel</td>
      <td><code>[()]</code> (pour synchroniser les données entre le composant et le DOM)</td>
    </tr>
  </tbody>
</table>
</code> </pre>
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
      pre, code {
  white-space: pre-wrap; /* Permet le retour à la ligne */
  word-wrap: break-word; /* Coupe le texte si nécessaire */
  overflow-x: auto; /* Ajoute un scroll horizontal si besoin */
  max-width: 100%; /* Empêche le dépassement */
}

table {
  width: 100%; /* Assure que les tableaux ne dépassent pas */
}

.p-2 {
  overflow-x: auto; /* Ajoute un scroll horizontal pour les blocs de code */
}
      .active {
        background-color:#eef06f !important; /* Couleur de l'onglet actif */
     border-color: grey; /* Couleur de la bordure pour l'onglet actif */
   }
      h3 {
        margin-top: 20px;
      }
      `,
  // -------------------------Fin style pour afficher le code source----------------
})
export class Test1Component {
  productName: string = 'produit 1';
  quantity: number = 1;
  message = `${this.quantity} ${this.productName}(s) ajouté(s) au panier.`;
  addToCart() {
    alert(`${this.quantity} ${this.productName}(s) ajouté(s) au panier.`);
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

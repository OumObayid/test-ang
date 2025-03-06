import { ReversePipe } from './reversePipe.component';
import { CommonModule } from '@angular/common';
import { Component, viewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [CommonModule, ReversePipe],
  template: `
    <div class="container">
      <h1>Les pipes</h1>
      <hr />
      <p>
        <strong class="fs-6 text-danger">C'est quoi un Pipe ?</strong><br />
        Un pipe dans Angular est un moyen simple de transformer, formater ou
        filtrer une valeur dans votre template.
        <br />
        Lorsque vous utilisez un pipe dans un template, vous le faites suivre
        d’une barre verticale (|) et du nom du pipe. Vous pouvez également
        passer des arguments aux pipes.
      </p>
      <h4 class="fs-6 fw-bold text-danger mt-4">Date Pipe :</h4>
      <p>Transforme une date en une chaîne formatée.</p>
      <p>Original Date: {{ currentDate }}</p>
      <p>Short Date: {{ currentDate | date : 'short' }}</p>
      <p>Full Date: {{ currentDate | date : 'fullDate' }}</p>
      <p>Custom Format: {{ currentDate | date : 'dd/MM/yyyy HH:mm' }}</p>
      <h4 class="fs-6 fw-bold text-danger mt-4">
        Uppercase and Lowercase Pipes
      </h4>
      <p>Transforme une chaîne en majuscules ou en minuscules.</p>
      <br />
      <p>Original Text: {{ sampleText }}</p>
      <p>Uppercase: {{ sampleText | uppercase }}</p>
      <p>Lowercase: {{ sampleText | lowercase }}</p>
      <h4 class="fs-6 fw-bold text-danger mt-4">Currency Pipe :</h4>
      <p>
        Transforme un nombre en une chaîne de devise, en utilisant le symbole de
        devise configuré par défaut pour la locale en cours.
      </p>
      <br />
      <p>Original Amount: {{ amount }}</p>
      <p>USD: {{ amount | currency : 'USD' }}</p>
      <p>EUR: {{ amount | currency : 'EUR' }}</p>
      <p>
        Custom Currency (INR):
        {{ amount | currency : 'INR' : 'symbol' : '1.2-2' }}
      </p>
      <h4 class="fs-6 fw-bold text-danger mt-4">Percent Pipe :</h4>
      <p>
        Transforme un nombre en une chaîne de pourcentage, multiplié par 100.
      </p>
      <br />
      <p>Original Fraction: {{ fraction }}</p>
      <p>Percentage: {{ fraction | percent }}</p>
      <h4 class="fs-6 fw-bold text-danger mt-4">Number Pipe :</h4>
      <p>transforme un nombre en une chaîne de caractères formatée, en suivant des règles de localisation pour la représentation des nombres décimaux, des milliers, et permettant de définir le nombre de chiffres avant et après la virgule.</p>
      <p>Original Number: {{ bigNumber }}</p>
      <p>Formatted: {{ bigNumber | number : '1.1-2' }}</p>
      <h4 class="fs-6 fw-bold text-danger mt-4">JSON Pipe :</h4>
      <p>Transforme une valeur en une chaîne JSON.</p>
      <p>Object as JSON: {{ user | json }}</p>
      <h4 class="fs-6 fw-bold text-danger mt-4">SlicePipe :</h4>
      <p>Crée un sous-ensemble d’un tableau ou d’une chaîne.</p>
      <p>Original tableau: [1, 2, 3, 4, 5]</p>
      <p>tableau sliced : {{ [1, 2, 3, 4, 5] | slice:1:3 }}</p>
      <h4 class="fs-6 fw-bold text-danger mt-4">AsyncPipe :</h4>
      <p>Va subscribe à un Observable et renvoyer la dernière valeur qu’il a émise. Lors de la destruction du composant, le pipe va unsubscribe automatiquement.</p>
      <p>syntaxe:&#123; &#123; observable$ | async &#125; &#125;</p>
      <h4 class="fs-6 fw-bold text-danger mt-4">Custom Pipes (Example) :</h4>
      <p>En plus des pipes intégrés, Angular vous permet également de créer vos propres pipes personnalisés. Pour ce faire, vous pouvez utiliser le décorateur &#64;Pipe() pour définir un nouveau pipe et implémenter l’interface PipeTransform.</p>
      <p>Original Number: {{ sampleText }}</p>
      <p>Reversed Text: {{ sampleText | reverse }}</p>
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
            Pipe reverse
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
import &#123; ReversePipe &#125; from "./reversePipe.component";
import &#123; CommonModule &#125; from "&#64;angular/common";
import &#123; Component &#125; from "&#64;angular/core";

&#64;Component(&#123;
  selector: "app-pipes-example",
  imports: [CommonModule, ReversePipe],
  template: &#96;
    &#60;div class="container"&#62;
      &#60;h1&#62;Les pipes&#60;/h1&#62;
      &#60;hr /&#62;
      &#60;h4 class="text-danger mt-5"&#62;Date Pipe&#60;/h4&#62;
      &#60;p&#62;Original Date: &#123;&#123; currentDate &#125;&#125;&#60;/p&#62;
      &#60;p&#62;Short Date: &#123;&#123; currentDate | date : "short" &#125;&#125;&#60;/p&#62;
      &#60;p&#62;Full Date: &#123;&#123; currentDate | date : "fullDate" &#125;&#125;&#60;/p&#62;
      &#60;p&#62;Custom Format: &#123;&#123; currentDate | date : "dd/MM/yyyy HH:mm" &#125;&#125;&#60;/p&#62;
      &#60;h4 class="text-danger mt-5"&#62;Uppercase and Lowercase Pipes&#60;/h4&#62;
      &#60;p&#62;Original Text: &#123;&#123; sampleText &#125;&#125;&#60;/p&#62;
      &#60;p&#62;Uppercase: &#123;&#123; sampleText | uppercase &#125;&#125;&#60;/p&#62;
      &#60;p&#62;Lowercase: &#123;&#123; sampleText | lowercase &#125;&#125;&#60;/p&#62;
      &#60;h4 class="text-danger mt-5"&#62;Currency Pipe&#60;/h4&#62;
      &#60;p&#62;Original Amount: &#123;&#123; amount &#125;&#125;&#60;/p&#62;
      &#60;p&#62;USD: &#123;&#123; amount | currency : "USD" &#125;&#125;&#60;/p&#62;
      &#60;p&#62;EUR: &#123;&#123; amount | currency : "EUR" &#125;&#125;&#60;/p&#62;
      &#60;p&#62;
        Custom Currency (INR):
        &#123;&#123; amount | currency : "INR" : "symbol" : "1.2-2" &#125;&#125;
      &#60;/p&#62;
      &#60;h4 class="text-danger mt-5"&#62;Percent Pipe&#60;/h4&#62;
      &#60;p&#62;Original Fraction: &#123;&#123; fraction &#125;&#125;&#60;/p&#62;
      &#60;p&#62;Percentage: &#123;&#123; fraction | percent &#125;&#125;&#60;/p&#62;
      &#60;h4 class="text-danger mt-5"&#62;Number Pipe&#60;/h4&#62;
      &#60;p&#62;Original Number: &#123;&#123; bigNumber &#125;&#125;&#60;/p&#62;
      &#60;p&#62;Formatted: &#123;&#123; bigNumber | number : "1.1-2" &#125;&#125;&#60;/p&#62;
      &#60;h4 class="text-danger mt-5"&#62;JSON Pipe&#60;/h4&#62;
      &#60;p&#62;Object as JSON: &#123;&#123; user | json &#125;&#125;&#60;/p&#62;
      &#60;h4 class="text-danger mt-5"&#62;Custom Pipes (Example)&#60;/h4&#62;
      &#60;p&#62;Original Number: &#123;&#123; sampleText &#125;&#125;&#60;/p&#62;
      &#60;p&#62;Reversed Text: &#123;&#123; sampleText | reverse &#125;&#125;&#60;/p&#62;
    &#60;/div&#62;
  &#96;,
  styles: [
    &#96;
      .container &#123;
        font-family: Arial, sans-serif;
      &#125;
      h2,
      h4 &#123;
        margin-top: 20px;
      &#125;
      p &#123;
        margin-bottom: 10px;
      &#125;
    &#96;,
  ],
&#125;)
export class AppComponent &#123;
  currentDate = new Date(); // Date actuelle
  sampleText = "Angular Pipes Example"; // Texte d'exemple
  amount = 12345.678; // Montant pour les pipes currency et number
  fraction = 0.678; // Fraction pour percent pipe
  bigNumber = 987654321.123; // Grand nombre pour number pipe
  user = &#123; name: "John Doe", age: 30, email: "john.doe&#64;example.com" &#125;; // Objet pour JSON pipe
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
import &#123; Pipe, PipeTransform &#125; from '&#64;angular/core';

&#64;Pipe(&#123;
  name: 'reverse'
&#125;)
export class ReversePipe implements PipeTransform &#123;
  transform(value: string): string &#123;
    return value.split(' ').reverse().join(' ');
  &#125;
&#125;</pre
          >
        </div>
      </div>
      <!-- --------------------Fin Template pour afficher le code source---------------- -->
    </div>
  `,
  styles: [
    `
      .container {
        font-family: Arial, sans-serif;
      }
      h2,
      h4 {
        margin-top: 20px;
      }
      p {
        margin-bottom: 10px;
        font-size: 16px;
      }
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

      i.fa-copy:hover {
        color: #aaacad;
        transform: scale(1.2); /* Effet d'agrandissement au survol */
        cursor: pointer; /* Change le curseur pour indiquer une action cliquable */
      }
      .confirm {
        position: absolute;
        top: 30px;
        right: 60px;
        color: grey;
        font-weight: bold;
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
        background-color: #eef06f !important; /* Couleur de l'onglet actif */
        border-color: grey; /* Couleur de la bordure pour l'onglet actif */
      }
      h3 {
        margin-top: 20px;
      }
      // -------------------------Fin style pour afficher le code source----------------
    `,
  ],
})
export class Test21Component {
  currentDate = new Date(); // Date actuelle
  sampleText = 'Angular Pipes Example'; // Texte d'exemple
  amount = 12345.678; // Montant pour les pipes currency et number
  fraction = 0.678; // Fraction pour percent pipe
  bigNumber = 987654321.123; // Grand nombre pour number pipe
  user = { name: 'John Doe', age: 30, email: 'john.doe@example.com' }; // Objet pour JSON pipe

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

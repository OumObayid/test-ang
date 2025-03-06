import { CommonModule } from '@angular/common';
import { Component, viewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule], // pour utiliser ngModel
  template: `
    <div class="container">
      <h1>l'observable interval()</h1>
      <hr />
      <button class="btn btn-success" (click)="startTimer()">Démarrer</button>
      <button class="btn btn-danger mx-4" (click)="stopTimer()">Arrêter</button>
      <button class="btn btn-success" (click)="resetTimer()">
        Réinitialiser
      </button>
      <div class="my-3 fs-5  ">
        Minuterie: <span class="text-danger">{{ time }}</span>
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
import &#123; CommonModule &#125; from "&#64;angular/common";
import &#123; Component &#125; from "&#64;angular/core";
import &#123; FormsModule &#125; from "&#64;angular/forms";
import &#123; interval, Subscription &#125; from "rxjs";

&#64;Component(&#123;
  selector: "app-root",
  imports: [FormsModule, CommonModule], // pour utiliser ngModel
  template: &#96;
    &#60;div class="container"&#62;
      &#60;h1&#62;l'observable interval()&#60;/h1&#62;
      &#60;hr /&#62;
      &#60;button class="btn btn-success" (click)="startTimer()"&#62;Démarrer&#60;/button&#62;
      &#60;button class="btn btn-danger mx-4" (click)="stopTimer()"&#62;Arrêter&#60;/button&#62;
      &#60;button class="btn btn-success" (click)="resetTimer()"&#62;
        Réinitialiser
      &#60;/button&#62;
      &#60;div class="my-3 fs-5  "&#62;
        Minuterie: &#60;span class="text-danger"&#62;&#123;&#123; time &#125;&#125;&#60;/span&#62;
      &#60;/div&#62;
      &#60;span class=" mt-5"&#62;
        ****************************************&#60;span class="fs-2"&#62;cours&#60;/span
        &#62;*************************************************
      &#60;/span&#62;
      &#60;h2&#62;Résumé rapide sur interval&#60;/h2&#62;
      &#60;p&#62;
        La fonction interval() est une fonction d'RxJS utilisée pour créer un
        observable qui émet une séquence infinie de nombres à intervalles
        réguliers.
      &#60;/p&#62;
      &#60;p&#62;&#60;strong&#62;Syntaxe :&#60;/strong&#62;&#60;/p&#62;
      interval(delay)
      &#60;p&#62;
        Par exemple, interval(1000) émettra une valeur toutes les 1000 ms (1
        seconde).&#60;br /&#62;
        interval(delay).subscribe(value=&#62;votre code ici en fonction de value)
      &#60;/p&#62;
      &#60;p&#62;&#60;strong&#62;Résumé :&#60;/strong&#62;&#60;/p&#62;
      &#60;ul&#62;
        &#60;li&#62;
          interval() crée un observable qui émet une valeur à intervalle
          régulier, commençant à partir de zéro.
        &#60;/li&#62;
        &#60;li&#62;
          Il est souvent utilisé pour créer des timers ou des flux de données
          répétitifs à des intervalles fixes.
        &#60;/li&#62;
      &#60;/ul&#62;
    &#60;/div&#62;
  &#96;,
&#125;)
export class AppComponent &#123;
  time: number = 0;
  private timerSubscription: Subscription | null = null;

  startTimer() &#123;
    this.stopTimer();
    const timer$ = interval(1000);
    this.timerSubscription = timer$.subscribe((value) =&#62; &#123;
      this.time = value;
    &#125;);
  &#125;

  stopTimer() &#123;
    if (this.timerSubscription) &#123;
      this.timerSubscription.unsubscribe();
      this.timerSubscription = null;
    &#125;
  &#125;

  resetTimer() &#123;
    this.stopTimer();
    this.time = 0;
  &#125;
&#125;</pre
          >
        </div>
      </div>
      <!-- --------------------Fin Template pour afficher le code source---------------- -->

      <hr />
      <span class=" mt-5">
        ****************************************<span class="fs-2">cours</span
        >*************************************************
      </span>
      <h2>Résumé rapide sur interval</h2>
      <p>
        La fonction interval() est une fonction d'RxJS utilisée pour créer un
        observable qui émet une séquence infinie de nombres à intervalles
        réguliers.
      </p>
      <p><strong>Syntaxe :</strong></p>
      interval(delay)
      <p>
        Par exemple, interval(1000) émettra une valeur toutes les 1000 ms (1
        seconde).<br />
        <strong class="text-danger"
          >interval(delay).subscribe(value=>votre code ici en fonction de
          value)</strong
        >
      </p>
      <p><strong>Résumé :</strong></p>
      <ul>
        <li>
          interval() crée un observable qui émet une valeur à intervalle
          régulier, commençant à partir de zéro.
        </li>
        <li>
          Il est souvent utilisé pour créer des timers ou des flux de données
          répétitifs à des intervalles fixes.
        </li>
      </ul>
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
export class Test2Component {
  time: number = 0;
  // private timerSubscription: Subscription | null = null;
  timerSubscription:any;
  startTimer() {
    this.stopTimer();
    this.timerSubscription = interval(1000).subscribe(
      value => this.time = value
    );
  }

  stopTimer() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
      // this.timerSubscription = null;
    }
  }

  resetTimer() {
    this.stopTimer();
    this.time = 0;
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

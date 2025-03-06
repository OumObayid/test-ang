import { Component, OnDestroy, viewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clock',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container mt-4">
      <h1>ngOnDestroy()</h1>
      <hr />
      <h2 class="text-primary">Horloge en temps réel</h2>
      <div class="text-center">
        <div class="display-4 my-3">{{ currentTime }}</div>
        <button class="btn btn-danger" (click)="stopClock()">
          Arrêter l'horloge
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
          <span class="confirm" *ngIf="clicked"
            >copied <i class="fas fa-check"></i>
          </span>
          <pre #tab1 class="tab fw-bold" ngNonBindable>
import &#123; Component, OnDestroy &#125; from '&#64;angular/core';
import &#123; CommonModule &#125; from '&#64;angular/common';

&#64;Component(&#123;
  selector: 'app-clock',
  standalone: true,
  imports: [CommonModule],
  template: &#96;
    &#60;div class="container text-center mt-4"&#62;
      &#60;h2 class="text-primary"&#62;Horloge en temps réel&#60;/h2&#62;
      &#60;div class="display-4 my-3"&#62;&#123;&#123; currentTime &#125;&#125;&#60;/div&#62;
      &#60;button class="btn btn-danger" (click)="stopClock()"&#62;Arrêter l'horloge&#60;/button&#62;
    &#60;/div&#62;
  &#96;
&#125;)
export class NgOnDestroyComponent implements OnDestroy &#123;
  currentTime: string = new Date().toLocaleTimeString();
  private intervalId: any;

  constructor() &#123;
    // Démarrer l'horloge qui met à jour l'heure chaque seconde
    this.intervalId = setInterval(() =&#62; &#123;
      this.currentTime = new Date().toLocaleTimeString();
    &#125;, 1000);
  &#125;

  stopClock() &#123;
    if (this.intervalId) &#123;
      clearInterval(this.intervalId);
      console.log('Horloge arrêtée');
    &#125;
  &#125;

  ngOnDestroy() &#123;
    // Nettoyage de l'intervalle pour éviter les fuites de mémoire
    if (this.intervalId) &#123;
      clearInterval(this.intervalId);
      console.log('ngOnDestroy: Horloge nettoyée');
    &#125;
  &#125;
&#125;</pre
          >
        </div>
      </div>
      <div class=" mt-4">
        ****************************************<span class="fs-2">cours</span
        >*************************************************
      </div>
      <pre>
        .......
      </pre
      >
      <!-- --------------------Fin Template pour afficher le code source---------------- -->
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
           `,
})
export class NgOnDestroyComponent implements OnDestroy {
  currentTime: string = new Date().toLocaleTimeString();
  private intervalId: any;

  constructor() {
    // Démarrer l'horloge qui met à jour l'heure chaque seconde
    this.intervalId = setInterval(() => {
      this.currentTime = new Date().toLocaleTimeString();
    }, 1000);
  }

  stopClock() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      console.log('Horloge arrêtée');
    }
  }

  ngOnDestroy() {
    // Nettoyage de l'intervalle pour éviter les fuites de mémoire
    if (this.intervalId) {
      clearInterval(this.intervalId);
      console.log('ngOnDestroy: Horloge nettoyée');
    }
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

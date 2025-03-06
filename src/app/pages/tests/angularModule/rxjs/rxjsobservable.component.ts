import { CommonModule } from '@angular/common';
import { Component, viewChild, ElementRef } from '@angular/core';
import { Observable, take } from 'rxjs';

@Component({
  selector: 'app-observable',
  imports: [CommonModule],
  template: `
    <div class="container">
      <h1>
        <strong>Les observables: créer, subscribe, unsubscribe</strong>
      </h1>
      <hr />
      <div>Compteur: {{ compteur }}</div>
      <button class="btn btn-success m-4" (click)="sabonner()">
        Démarrer le compteur
      </button>
      <button class="btn btn-danger" (click)="sedesabonner()">
        Arrêter le compteur
      </button>
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
import &#123; Component &#125; from '&#64;angular/core';
import &#123; Observable, take &#125; from 'rxjs';

&#64;Component(&#123;
  selector: 'app-observable',
  template: &#96;
    &#60;div class="container"&#62;
      &#60;h1&#62;
        &#60;strong&#62;Les observables: créer, subscribe, unsubscribe&#60;/strong&#62;
      &#60;/h1&#62;
      &#60;hr /&#62;
      &#60;div&#62;Compteur: &#123; &#123; compteur &#125; &#125;&#60;/div&#62;
      &#60;button class="btn btn-success me-4" (click)="sabonner()"&#62;
        Démarrer le compteur
      &#60;/button&#62;
      &#60;button class="btn btn-danger" (click)="sedesabonner()"&#62;
        Arrêter le compteur
      &#60;/button&#62;
    &#60;/div&#62;
  &#96;,
  styles: [],
&#125;)
export class RxjsbservableComponent &#123;
  compteur: number = 0;

  // Créer un observable
  monObservable = new Observable&#60;number&#62;((observer) =&#62; &#123;
    let count = 0;
    const intervalId = setInterval(() =&#62; &#123;
      observer.next(count);
      count++;
    &#125;, 1000);

    // Nettoyage quand l'observable est complété ou arrêté
    return () =&#62; clearInterval(intervalId);
  &#125;);

  subscription: any;
   // Souscrire à l'observable
  sabonner() &#123;
    if (!this.subscription || this.subscription.closed) &#123;
      this.subscription = this.monObservable.subscribe(&#123;
        next: (value) =&#62; (this.compteur = value), // Affectation correcte
        error: (err) =&#62; console.error('Erreur:', err), // Affichage de l'erreur
        complete: () =&#62; console.log('Observable complété.'), // Affichage du message de complétion
      &#125;);
      //ou tout simplement:
      // this.subscription = this.monObservable.subscribe((value) =&#62; this.compteur = value);
    &#125;
  &#125;

  // Se désabonner de l'observable
  sedesabonner() &#123;
    if (this.subscription) &#123;
      this.subscription.unsubscribe();
      console.log('Désabonné.');
    &#125;
  &#125;

  // Nettoyage lors de la destruction du composant
  ngOnDestroy() &#123;
    this.sedesabonner();
  &#125;
&#125;</pre
          >
        </div>
      </div>
      <div class="mt-4">
        ****************************************<span class="fs-2">cours</span>
        ****************************************
      </div>
      <pre>
<strong class="fs-6 text-danger">C'est quoi RxJS ?</strong>
RxJS permet de faire de la programmation réactive dans Angular.

RxJS nous apporte la notion d’Observable et d’operators. Un Observable est un flux
d’évènements sur lequel on peut s’abonner pour réagir à chaque fois qu’un évènement passe.
Les operators permettent de manipuler les évènements des Observable
pour les transformer, les combiner, les filtrer, etc.

Le flux des Observable sont, par défaut, fermés. Cela signifie que si on ne s’abonne pas
à un Observable, on ne recevra pas les évènements.

Dans Angular, RxJS est beaucoup utilisé :

Dans les requêtes HTTP
Dans la manipulation des routes
Dans les formulaires
Et autres

<strong class="fs-6 text-danger">Créer et lire les données d’un Observable :</strong>
Il existe beaucoup d’opérateurs pour créer des Observable, interval en est un exemple
 et émet un nombre dans un intervalle de temps donné.

<div class="tab">&#64;Component(&#123;
  template: &#96;
    &#60;p&#62;Counter: &#123; &#123;counter$ | async&#125; &#125;&#60;/p&#62;
  &#96;
&#125;)
export class MyComponent &#123;
  counter$ = interval(1000);
&#125;</div>
Ici, counter$ est un Observable qui émet un nombre toutes les secondes.
Pour afficher la valeur de counter$, il faut utiliser le pipe async qui permet
de souscrire à l’Observable et de se désabonner automatiquement lorsque le composant est détruit.

<strong class="fs-6 text-danger">Créer une valeur dérivée d’un Observable:</strong>
<div class="tab">&#64;Component(&#123;
  template: &#96;
    &#60;p&#62;Counter: &#123; &#123;counter$ | async&#125; &#125;&#60;/p&#62;
    &#60;p&#62;Double Counter: &#123; &#123;doubleCounter$ | async&#125; &#125;&#60;/p&#62;
  &#96;
&#125;)
export class MyComponent &#123;
  counter$ = interval(1000);
  doubleCounter$ = this.counter$.pipe(
    map(value =&#62; value * 2));
&#125;</div>
Ici, doubleCounter$ est un Observable qui émet un nombre toutes les secondes,
mais qui est le double de counter$. Grâce à l’opérateur map, on transforme
la valeur de counter$ avant qu’elle soit émise par doubleCounter$.
      </pre>
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
               pre{
          font-size:15px;
         }
      // -------------------------Fin style pour afficher le code source----------------
               `,
})
export class RxjsbservableComponent {
  compteur: number = 0;

  // Créer un observable
  monObservable = new Observable<number>((observer) => {
    let count = 0;
    const intervalId = setInterval(() => {
      observer.next(count);
      count++;
    }, 1000);

    // Nettoyage quand l'observable est complété ou arrêté
    return () => clearInterval(intervalId);
  });

  subscription: any;
  // Souscrire à l'observable
  sabonner() {
    if (!this.subscription || this.subscription.closed) {
      this.subscription = this.monObservable.subscribe({
        next: (value) => (this.compteur = value), // Affectation correcte
        error: (err) => console.error('Erreur:', err), // Affichage de l'erreur
        complete: () => console.log('Observable complété.'), // Affichage du message de complétion
      });
      //ou tout simplement:
      // this.subscription = this.monObservable.subscribe((value) => this.compteur = value);
    }
  }

  // Se désabonner de l'observable
  sedesabonner() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      console.log('Désabonné.');
    }
  }

  // Nettoyage lors de la destruction du composant
  ngOnDestroy() {
    this.sedesabonner();
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

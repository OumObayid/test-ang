import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  delay,
  delayWhen,
  finalize,
  of,
  repeat,
  Subscription,
  tap,
  timeInterval,
  timeout,
  timer,
} from 'rxjs';

@Component({
  selector: 'app-rxjs-combiner',
  imports: [CommonModule],
  template: `
    <div class="container">
      <h2>Opérateurs utilitaires RxJS</h2>
      <div class="btn-group flex-wrap">
        <button class="btn btn-secondary me-2 mb-2 rounded" (click)="useTap()">
          Tap (afficher valeur)
        </button>
        <button
          class="btn btn-secondary me-2 mb-2 rounded"
          (click)="useDelay()"
        >
          Delay (2s)
        </button>
        <button
          class="btn btn-secondary me-2 mb-2 rounded"
          (click)="useDelayWhen()"
        >
          DelayWhen (3s)
        </button>
        <button
          class="btn btn-secondary me-2 mb-2 rounded"
          (click)="useTimeInterval()"
        >
          TimeInterval
        </button>
        <button
          class="btn btn-secondary me-2 mb-2 rounded"
          (click)="useTimeout()"
        >
          Timeout (500ms)
        </button>
        <!-- <button
          class="btn btn-secondary me-2 mb-2 rounded"
          (click)="useToPromise()"
        >
          ToPromise
        </button> -->
        <button
          class="btn btn-secondary me-2 mb-2 rounded"
          (click)="useRepeat()"
        >
          Repeat (2x)
        </button>
        <button
          class="btn btn-secondary me-2 mb-2 rounded"
          (click)="useFinalize()"
        >
          Finalize
        </button>
      </div>
      @if (utilisation){
      <p class="mt-3"><strong>Utilisation:</strong> {{ utilisation }}</p>
      } @if (code){
      <div>
        <strong class="mt-4 ">Code:</strong>
        <pre class="fw-bold text-danger">{{ code }}</pre>
      </div>

      } @if ( results.length > 0){
      <strong class="mt-3">Résultats :</strong>
      <ul>
        <li *ngFor="let item of results">{{ item }}</li>
      </ul>
      }
    </div>
  `,
})
export class RxjsUtilitairesComponent {
  results: string[] = [];
  subscription: Subscription | null = null;
  code: string = '';
  utilisation: string = '';

  resetResults() {
    this.results = [];
    this.subscription?.unsubscribe(); // Désabonner l'observable précédent
  }
  // -------------------Utilisation de chaque opérateur utilitaires Rx:
  // 1️⃣ **tap** - Ajoute des effets secondaires sans modifier les valeurs.
  useTap() {
    this.resetResults();
    this.subscription = of(1, 2, 3, 4, 5)
      .pipe(tap((x) => console.log(`Valeur passée par tap: ${x}`)))
      .subscribe((value) => this.results.push(value.toString()));

    this.utilisation =
      'tap permet d’exécuter une action sans modifier les données.';
    this.code = `of(1, 2, 3, 4, 5)
    .pipe(tap(x => console.log(\`Valeur: \${x}\`)))
    .subscribe(value => this.results.push(value.toString()));`;
  }

  // 2️⃣ **delay** - Décale l’émission des valeurs d’un délai spécifique.
  useDelay() {
    this.resetResults();
    this.subscription = of('A', 'B', 'C')
      .pipe(delay(2000)) // 2 secondes de retard
      .subscribe((value) => this.results.push(value));

    this.utilisation =
      'delay retarde l’émission des valeurs de la durée spécifiée.';
    this.code = `of('A', 'B', 'C')
    .pipe(delay(2000))
    .subscribe(value => this.results.push(value));`;
  }

  // 3️⃣ **delayWhen** - Ajoute un délai dynamique basé sur un observable.
  useDelayWhen() {
    this.resetResults();
    this.subscription = of('X', 'Y', 'Z')
      .pipe(delayWhen(() => timer(3000))) // Retarde chaque valeur de 3 secondes
      .subscribe((value) => this.results.push(value));

    this.utilisation =
      'delayWhen retarde l’émission en fonction d’un autre observable.';
    this.code = `of('X', 'Y', 'Z')
    .pipe(delayWhen(() => timer(3000)))
    .subscribe(value => this.results.push(value));`;
  }

  // 4️⃣ **timeInterval** - Émet le temps entre les émissions successives.
  useTimeInterval() {
    this.resetResults();
    this.subscription = of(1, 2, 3)
      .pipe(timeInterval()) // Temps écoulé entre les émissions
      .subscribe((value) =>
        this.results.push(`Intervalle: ${value.interval}ms`)
      );

    this.utilisation =
      'timeInterval permet d’obtenir le temps entre chaque émission.';
    this.code = `of(1, 2, 3)
    .pipe(timeInterval())
    .subscribe(value => this.results.push(\`Intervalle: \${value.interval}ms\`));`;
  }

  // 5️⃣ **timeout** - Termine l'observable après un délai si aucune émission ne se produit.
  useTimeout() {
    this.resetResults();
    this.subscription = of('A', 'B', 'C')
      .pipe(timeout(500)) // Si aucune émission dans 500ms, émet une erreur
      .subscribe((value) => this.results.push(value));

    this.utilisation =
      'timeout termine l’observable après un certain délai sans émission.';
    this.code = `of('A', 'B', 'C')
    .pipe(timeout(500))
    .subscribe(value => this.results.push(value));`;
  }

  // 6️⃣ **toPromise** (RxJS 6-) - Convertit un observable en promesse.
  // useToPromise() {
  //   this.resetResults();
  //   this.subscription = of(1, 2, 3)
  //     .pipe(toPromise())
  //     .then((value) => this.results.push(value.toString()));

  //   this.utilisation = 'toPromise permet de convertir un observable en promesse.';
  //   this.code = `of(1, 2, 3)
  //     .toPromise()
  //     .then(value => this.results.push(value.toString()));`;
  // }

  // 7️⃣ **repeat** - Répète l'émission d'un observable un certain nombre de fois.
  useRepeat() {
    this.resetResults();
    this.subscription = of(1, 2, 3)
      .pipe(repeat(2)) // Répète l’émission 2 fois
      .subscribe((value) => this.results.push(value.toString()));

    this.utilisation =
      'repeat permet de répéter l’émission d’un observable plusieurs fois.';
    this.code = `of(1, 2, 3)
    .pipe(repeat(2))
    .subscribe(value => this.results.push(value.toString()));`;
  }

  // 8️⃣ **finalize** - Exécute un nettoyage ou une action lorsque l’observable est terminé.
  useFinalize() {
    this.resetResults();
    this.subscription = of(1, 2, 3)
      .pipe(finalize(() => this.results.push('Finalisation!')))
      .subscribe((value) => this.results.push(value.toString()));

    this.utilisation =
      'finalize exécute une action de nettoyage après la fin de l’observable.';
    this.code = `of(1, 2, 3)
    .pipe(finalize(() => this.results.push('Finalisation!')))
    .subscribe(value => this.results.push(value.toString()));`;
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe(); // Nettoyer l'abonnement en quittant le composant
  }
}

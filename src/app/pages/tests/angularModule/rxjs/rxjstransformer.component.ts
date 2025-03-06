import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  of,
  interval,
  range,
  EMPTY,
  materialize,
  dematerialize,
  NextNotification,
  ErrorNotification,
  Subscription,
  from,
} from 'rxjs';
import {
  map,
  scan,
  reduce,
  flatMap,
  bufferTime,
  bufferCount,
  buffer,
  bufferToggle,
  bufferWhen,
  window,
  windowCount,
  windowTime,
  windowToggle,
  windowWhen,
  concatMap,
  exhaustMap,
  expand,
  groupBy,
  pairwise,
  toArray,
  take,
  delay,
} from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-transformation',
  imports: [CommonModule],
  template: `
    <div class="container">
      <h2>Opérateurs de transformation RxJS</h2>
      <div class="btn-group flex-wrap">
        <button class="btn btn-secondary me-2 mb-2 rounded" (click)="useMap()">
          map
        </button>
        <button class="btn btn-secondary me-2 mb-2 rounded" (click)="useScan()">
          scan
        </button>
        <button
          class="btn btn-secondary me-2 mb-2 rounded"
          (click)="useReduce()"
        >
          reduce
        </button>
        <button
          class="btn btn-secondary me-2 mb-2 rounded"
          (click)="useFlatMap()"
        >
          flatMap
        </button>
        <button
          class="btn btn-secondary me-2 mb-2 rounded"
          (click)="useBufferTime()"
        >
          bufferTime
        </button>
        <button
          class="btn btn-secondary me-2 mb-2 rounded"
          (click)="useBufferCount()"
        >
          bufferCount
        </button>
        <button
          class="btn btn-secondary me-2 mb-2 rounded"
          (click)="useBuffer()"
        >
          buffer
        </button>
        <button
          class="btn btn-secondary me-2 mb-2 rounded"
          (click)="useBufferToggle()"
        >
          bufferToggle
        </button>
        <button
          class="btn btn-secondary me-2 mb-2 rounded"
          (click)="useBufferWhen()"
        >
          bufferWhen
        </button>
        <button
          class="btn btn-secondary me-2 mb-2 rounded"
          (click)="useWindow()"
        >
          window
        </button>
        <button
          class="btn btn-secondary me-2 mb-2 rounded"
          (click)="useWindowCount()"
        >
          windowCount
        </button>
        <button
          class="btn btn-secondary me-2 mb-2 rounded"
          (click)="useWindowTime()"
        >
          windowTime
        </button>
        <button
          class="btn btn-secondary me-2 mb-2 rounded"
          (click)="useConcatMap()"
        >
          concatMap
        </button>
        <button
          class="btn btn-secondary me-2 mb-2 rounded"
          (click)="useExhaustMap()"
        >
          exhaustMap
        </button>
        <button
          class="btn btn-secondary me-2 mb-2 rounded"
          (click)="useExpand()"
        >
          expand
        </button>
        <button
          class="btn btn-secondary me-2 mb-2 rounded"
          (click)="useGroupBy()"
        >
          groupBy
        </button>
        <button
          class="btn btn-secondary me-2 mb-2 rounded"
          (click)="usePairwise()"
        >
          pairwise
        </button>
        <button
          class="btn btn-secondary me-2 mb-2 rounded"
          (click)="useMaterialize()"
        >
          materialize
        </button>
        <button
          class="btn btn-secondary me-2 mb-2 rounded"
          (click)="useDematerialize()"
        >
          dematerialize
        </button>
        <button
          class="btn btn-secondary me-2 mb-2 rounded"
          (click)="useToArray()"
        >
          toArray
        </button>
      </div>
      @if (utilisation){
      <p class="mt-3"><strong>Utilisation:</strong> {{ utilisation }}</p>
      } @if (code){
      <div><strong class="mt-4 ">Code:</strong> <pre class="fw-bold text-danger">{{ code }}</pre></div>

      } @if ( results.length > 0){
      <strong class="mt-3">Résultats :</strong>
      <ul>
        <li *ngFor="let item of results">{{ item }}</li>
      </ul>
      }
    </div>
  `,
})
export class RxjsTransformationComponent {
  results: string[] = [];
  subscription: Subscription | null = null;
  code: string = '';
  utilisation: string = '';

  resetResults() {
    this.results = [];
    this.subscription?.unsubscribe(); // Désabonner l'observable précédent
  }
  // -------------------Utilisation de chaque opérateur de transformation Rx:

  // map : Transformation simple de valeurs
  useMap() {
    this.resetResults();
    this.subscription = of(1, 2, 3, 4)
      .pipe(map((x) => x * 10))
      .subscribe((value) => this.results.push(value.toString()));
    this.utilisation =
    'map est une opération de base de RxJS qui permet de transformer les éléments émis par un observable en utilisant une fonction de transformation donnée';
    this.code = 
    `of(1, 2, 3, 4).pipe(map(x => x * 10))
      .subscribe(value => this.results.push(value.toString()));}`;
  }

  // scan : Accumule les valeurs comme reduce, mais émet à chaque étape
  useScan() {
    this.resetResults();
    this.subscription = from([1, 2, 3, 4])
      .pipe(scan((acc, curr) => acc + curr, 0))
      .subscribe((value) => this.results.push(value.toString()));
    this.utilisation =
    'scan accumule les valeurs comme reduce, mais émet à chaque étape';
    this.code = 
    `from([1, 2, 3, 4])
      .pipe(scan((acc, curr) => acc + curr, 0))
      .subscribe((value) => this.results.push(value.toString()));`;
  }

  // reduce : Accumule les valeurs et n'émet qu'une fois le calcul terminé
  useReduce() {
    this.resetResults();
    this.subscription = from([1, 2, 3, 4])
      .pipe(reduce((acc, curr) => acc + curr, 0))
      .subscribe((value) => this.results.push(value.toString()));
    this.utilisation =
    'reduce accumule les valeurs et n émet qu une fois le calcul terminé';
    this.code = 
    `from([1, 2, 3, 4])
      .pipe(reduce((acc, curr) => acc + curr, 0))
      .subscribe((value) => this.results.push(value.toString()));`;
  }

  // flatMap : Aplatissement d'observables imbriqués
  useFlatMap() {
    this.resetResults();
    this.subscription = of(1, 2, 3)
      .pipe(flatMap((x) => of(`Valeur ${x * 2}`)))
      .subscribe((value) => this.results.push(value));
    this.utilisation = 
    'flatMap Aplatissement d observables imbriqués';
    this.code = 
    `of(1, 2, 3)
      .pipe(flatMap(x => of(\`Valeur \${x * 2}\`)))
      .subscribe(value => this.results.push(value));`;
  }

  // bufferTime : Regroupe les valeurs sur une période de temps
  useBufferTime() {
    this.resetResults();
    this.subscription = interval(500)
      .pipe(bufferTime(2000), take(5))
      .subscribe((value) => this.results.push(JSON.stringify(value)));
    this.utilisation =
    'bufferTime Regroupe les valeurs sur une période de temps';
    this.code = 
    `interval(500)
      .pipe(bufferTime(2000), take(5))
      .subscribe(value => this.results.push(JSON.stringify(value)));`;
  }

  // bufferCount : Regroupe les valeurs par lot de 3
  useBufferCount() {
    this.resetResults();
    this.subscription = interval(500)
      .pipe(bufferCount(3), take(5))
      .subscribe((value) => this.results.push(JSON.stringify(value)));
    this.utilisation = 
    'bufferCount Regroupe les valeurs par lot de 3';
    this.code = 
    `interval(500)
      .pipe(bufferCount(3), take(5))
      .subscribe(value => this.results.push(JSON.stringify(value)));`;
  }

  // buffer : Stocke les valeurs jusqu'à déclenchement d'un second observable
  useBuffer() {
    this.resetResults();
    const sub = interval(2000);
    this.subscription = interval(500)
      .pipe(buffer(sub), take(5))
      .subscribe((value) => this.results.push(JSON.stringify(value)));
    this.utilisation =
    'buffer Stocke les valeurs jusqu à déclenchement d un second observable';
    this.code = 
    `const sub = interval(2000);
    interval(500)
      .pipe(buffer(sub), take(5))
      .subscribe((value) => this.results.push(JSON.stringify(value)));`;
  }

  // bufferToggle : Active/désactive le buffer avec deux observables
  useBufferToggle() {
    this.resetResults();
    const sub = interval(2000);
    const closingFn = () => interval(1000);
    this.subscription= interval(500)
      .pipe(bufferToggle(sub, closingFn), take(5))
      .subscribe((value) => this.results.push(JSON.stringify(value)));
    this.utilisation =
    'bufferToggle Active/désactive le buffer avec deux observables';
    this.code = 
    `const sub = interval(2000);
    const closingFn = () => interval(1000);
    interval(500)
      .pipe(bufferToggle(sub, closingFn), take(5))
      .subscribe((value) => this.results.push(JSON.stringify(value)));`;
  }

  // bufferWhen : Regroupe les valeurs jusqu'à ce qu'un observable émette
  useBufferWhen() {
    this.resetResults();
    this.subscription = interval(500)
      .pipe(
        bufferWhen(() => interval(2000)),
        take(5)
      )
      .subscribe((value) => this.results.push(JSON.stringify(value)));
    this.utilisation =
    'bufferWhen Regroupe les valeurs jusqu à ce qu un observable émette';
    this.code = 
    `interval(500)
      .pipe(bufferWhen(() => interval(2000)), take(5))
      .subscribe(value => this.results.push(JSON.stringify(value)));`;
  }

  // window : Stocke les valeurs dans des sous-observables
  useWindow() {
    this.resetResults();
    this.subscription = interval(500)
      .pipe(window(interval(2000)), take(5))
      .subscribe((windowObs) =>
        windowObs.subscribe((value) => this.results.push(value.toString()))
      );
    this.utilisation =
    'window Stocke les valeurs dans des sous-observables';
    this.code = 
    `interval(500)
      .pipe(window(interval(2000)), take(5))
      .subscribe(windowObs =>
        windowObs.subscribe(value => this.results.push(value.toString())));`;
  }

  // windowCount : Divise en fenêtres de 3 valeurs
  useWindowCount() {
    this.resetResults();
    this.subscription = interval(500)
      .pipe(windowCount(3), take(5))
      .subscribe((windowObs) =>
        windowObs.subscribe((value) => this.results.push(value.toString()))
      );
    this.utilisation =
    'windowCount Divise en fenêtres de 3 valeurs';
    this.code = 
    `interval(500)
      .pipe(windowCount(3), take(5))
      .subscribe(windowObs =>
        windowObs.subscribe(value => this.results.push(value.toString())));`;
  }

  // windowTime : Stocke les valeurs par période
  useWindowTime() {
    this.resetResults();
    this.subscription = interval(500)
      .pipe(windowTime(2000), take(5))
      .subscribe((windowObs) =>
        windowObs.subscribe((value) => this.results.push(value.toString()))
      );
    this.utilisation = 
    'windowTime Stocke les valeurs par période';
    this.code = 
    `interval(500)
      .pipe(windowTime(2000), take(5))
      .subscribe(windowObs =>
        windowObs.subscribe(value => this.results.push(value.toString())));`;
  }

  // concatMap : Exécute les observables un par un dans l'ordre
  useConcatMap() {
    this.resetResults();
    this.subscription = from([1, 2, 3])
      .pipe(concatMap((x) => of(`Concat ${x}`).pipe(delay(1000))))
      .subscribe((value) => this.results.push(value));
    this.utilisation =
    'concatMap Exécute les observables un par un dans l ordre';
    this.code = 
    `from([1, 2, 3])
    .pipe(concatMap(x => of(\`Concat \${x}\`).pipe(delay(1000)))
    .subscribe(value => this.results.push(value));`;
  }

  // exhaustMap : Ignore les nouveaux observables si un est déjà actif
  useExhaustMap() {
    this.resetResults();
    this.subscription = from([1, 2, 3])
      .pipe(exhaustMap((x) => of(`Exhaust ${x}`).pipe(delay(1000))))
      .subscribe((value) => this.results.push(value));
    this.utilisation =
    'exhaustMap Ignore les nouveaux observables si un est déjà actif';
    this.code = 
    `from([1, 2, 3])
      .pipe(exhaustMap(x => of(\`Exhaust \${x}\`).pipe(delay(1000)))
      .subscribe(value => this.results.push(value));`;
  }

  // expand : Émet récursivement une valeur
  useExpand() {
    this.resetResults();
    this.subscription = of(2)
      .pipe(
        expand((x) => (x < 50 ? of(x * 2) : EMPTY)),
        take(10)
      )
      .subscribe((value) => this.results.push(value.toString()));
    this.utilisation =
    'expand Émet récursivement une valeur';
    this.code = 
    `of(2)
      .pipe(
        expand(x => (x < 50 ? of(x * 2) : EMPTY)),
        take(10)
      )
      .subscribe(value => this.results.push(value.toString()));`;
  }

  // groupBy : Regroupe les valeurs selon une clé
  useGroupBy() {
    this.resetResults();
    this.subscription = from([
      { id: 1, category: 'A' },
      { id: 2, category: 'B' },
      { id: 3, category: 'A' },
      { id: 4, category: 'B' },
    ])
      .pipe(groupBy((item) => item.category))
      .subscribe((group) =>
        group.subscribe((value) => this.results.push(JSON.stringify(value)))
      );
    this.utilisation = 
    'groupBy Regroupe les valeurs selon une clé';
    this.code = 
    `from([
      { id: 1, category: 'A' },
      { id: 2, category: 'B' },
      { id: 3, category: 'A' },
      { id: 4, category: 'B' },
    ])
      .pipe(groupBy(item => item.category))
      .subscribe(group =>
        group.subscribe(value => this.results.push(JSON.stringify(value)));`;
  }

  // pairwise : Émet les valeurs par paire successive
  usePairwise() {
    this.resetResults();
    this.subscription = interval(1000)
      .pipe(pairwise(), take(5))
      .subscribe((value) => this.results.push(JSON.stringify(value)));
    this.utilisation =
    'pairwise Émet les valeurs par paire successive';
    this.code = 
    `interval(1000)
      .pipe(pairwise(), take(5))
      .subscribe(value => this.results.push(JSON.stringify(value)));`;
  }

  // materialize : Convertit les notifications en objets
  useMaterialize() {
    this.resetResults();
    this.subscription = of(1, 2, 3)
      .pipe(materialize())
      .subscribe((value) => this.results.push(JSON.stringify(value)));
    this.utilisation = 
    'materialize Convertit les notifications en objets';
    this.code = 
    `of(1, 2, 3)
      .pipe(materialize())
      .subscribe(value => this.results.push(JSON.stringify(value)));`;
  }

  // dematerialize : Convertit les objets de notifications en valeurs
  useDematerialize() {
    const notifA: NextNotification<string> = { kind: 'N', value: 'A' };
    const notifB: NextNotification<string> = { kind: 'N', value: 'B' };
    const notifE: ErrorNotification = {
      kind: 'E',
      error: new TypeError('x.toUpperCase is not a function'),
    };
    const materialized = of(notifA, notifB, notifE);
    const upperCase = materialized.pipe(dematerialize());
    upperCase.subscribe({
      next: (x) => this.results.push(x),
      error: (e) => console.error(e),
    });
    this.utilisation =
    'dematerialize Convertit les objets de notifications en valeurs';
    this.code = 
    `const notifA: NextNotification<string> = { kind: 'N', value: 'A' };
    const notifB: NextNotification<string> = { kind: 'N', value: 'B' };
    const notifE: ErrorNotification = {
      kind: 'E',
      error: new TypeError('x.toUpperCase is not a function'),
    };
    const materialized = of(notifA, notifB, notifE);
    const upperCase = materialized.pipe(dematerialize());
    upperCase.subscribe({
      next: (x) => this.results.push(x),
      error: (e) => console.error(e),
    });`;
 
  }

  // toArray : Regroupe toutes les valeurs en un tableau
  useToArray() {
    this.resetResults();
    this.subscription = range(1, 10)
      .pipe(toArray())
      .subscribe((value) => this.results.push(JSON.stringify(value)));
    this.utilisation = 
    'toArray Regroupe toutes les valeurs en un tableau';
    this.code = 
    `range(1, 10)
      .pipe(toArray())
      .subscribe(value => this.results.push(JSON.stringify(value)));`;
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe(); // Nettoyer l'abonnement en quittant le composant
  }
}

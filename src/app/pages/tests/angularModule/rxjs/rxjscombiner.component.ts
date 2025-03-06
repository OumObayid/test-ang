import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  combineLatest,
  combineLatestAll,
  combineLatestWith,
  concat,
  concatAll,
  forkJoin,
  from,
  interval,
  map,
  mergeMap,
  of,
  race,
  Subscription,
  switchMap,
  take,
  withLatestFrom,
  zip,
} from 'rxjs';

@Component({
  selector: 'app-rxjs-combiner',
  imports: [CommonModule],
  template: `
    <div class="container">
      <h2>Opérateurs de combiner RxJS</h2>
      <div class="btn-group flex-wrap">
        <button
          class="btn btn-secondary me-2 mb-2 rounded"
          (click)="useMergeMap()"
        >
          mergeMap - Transformation parallèle
        </button>

        <button
          class="btn btn-secondary me-2 mb-2 rounded"
          (click)="useSwitchMap()"
        >
          switchMap - Annulation et remplacement
        </button>

        <button
          class="btn btn-secondary me-2 mb-2 rounded"
          (click)="useCombineLatest()"
        >
          combineLatest - Combine les observables
        </button>

        <button
          class="btn btn-secondary me-2 mb-2 rounded"
          (click)="useCombineLatestWith()"
        >
          combineLatestWith - Combine avec un autre observable
        </button>

        <button
          class="btn btn-secondary me-2 mb-2 rounded"
          (click)="useCombineLatestAll()"
        >
          combineLatestAll - Combine les résultats de plusieurs observables
        </button>

        <button class="btn btn-secondary me-2 mb-2 rounded" (click)="useZip()">
          zip - Synchronisation d'observables
        </button>

        <button
          class="btn btn-secondary me-2 mb-2 rounded"
          (click)="useWithLatestFrom()"
        >
          withLatestFrom - Dernière valeur d’un observable
        </button>

        <button
          class="btn btn-secondary me-2 mb-2 rounded"
          (click)="useForkJoin()"
        >
          forkJoin - Attendre la fin de tous les observables
        </button>

        <button
          class="btn btn-secondary me-2 mb-2 rounded"
          (click)="useConcat()"
        >
          concat - Exécuter les observables en séquence
        </button>

        <button
          class="btn btn-secondary me-2 mb-2 rounded"
          (click)="useConcatAll()"
        >
          concatAll - Aplatir un observable en série
        </button>

        <button class="btn btn-secondary me-2 mb-2 rounded" (click)="useRace()">
          race - Premier observable à émettre gagne
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
export class RxjsCombinerComponent {
  results: string[] = [];
  subscription: Subscription | null = null;
  code: string = '';
  utilisation: string = '';

  resetResults() {
    this.results = [];
    this.subscription?.unsubscribe(); // Désabonner l'observable précédent
  }
  // -------------------Utilisation de chaque opérateur de combiner Rx:

  useMergeMap() {
    this.resetResults();
    this.subscription = from([1, 2, 3])
      .pipe(
        mergeMap((x) =>
          interval(500).pipe(
            take(3),
            map((y) => `Source: ${x}, Valeur: ${y}`)
          )
        )
      )
      .subscribe((value) => this.results.push(value));

    this.utilisation =
      'mergeMap transforme chaque valeur en un Observable et fusionne les résultats.';
    this.code = `from([1, 2, 3])
      .pipe(mergeMap(x => interval(500).pipe(take(3), map(y => \`Source: \${x}, Valeur: \${y}\`))))
      .subscribe(value => this.results.push(value));`;
  }
  useSwitchMap() {
    this.resetResults();
    this.subscription = from([1, 2, 3])
      .pipe(
        switchMap((x) =>
          interval(500).pipe(
            take(3),
            map((y) => `Source: ${x}, Valeur: ${y}`)
          )
        )
      )
      .subscribe((value) => this.results.push(value));

    this.utilisation =
      'switchMap annule l’ancien observable dès qu’un nouveau arrive.';
    this.code = `from([1, 2, 3])
      .pipe(switchMap(x => interval(500).pipe(take(3), map(y => \`Source: \${x}, Valeur: \${y}\`))))
      .subscribe(value => this.results.push(value));`;
  }

  useCombineLatest() {
    this.resetResults();
    this.subscription = combineLatest([
      interval(1000).pipe(take(5)),
      interval(1500).pipe(take(5)),
    ]).subscribe(([val1, val2]) => this.results.push(`1: ${val1}, 2: ${val2}`));

    this.utilisation =
      'combineLatest combine les dernières valeurs émises par plusieurs observables.';
    this.code = `combineLatest([
      interval(1000).pipe(take(5)),
      interval(1500).pipe(take(5))
    ]).subscribe(([val1, val2]) => this.results.push(\`1: \${val1}, 2: \${val2}\`));`;
  }

  useCombineLatestWith() {
    this.resetResults();
    this.subscription = interval(1000)
      .pipe(take(5), combineLatestWith(interval(1500).pipe(take(5))))
      .subscribe(([val1, val2]) => this.results.push(`1: ${val1}, 2: ${val2}`));

    this.utilisation =
      'combineLatestWith est une version de combineLatest appliquée à un observable.';
    this.code = `interval(1000).pipe(
      take(5),
      combineLatestWith(interval(1500).pipe(take(5)))
    ).subscribe(([val1, val2]) => this.results.push(\`1: \${val1}, 2: \${val2}\`));`;
  }

  useCombineLatestAll() {
    this.resetResults();
    this.subscription = from([
      interval(1000).pipe(take(3)),
      interval(1500).pipe(take(3)),
    ])
      .pipe(combineLatestAll())
      .subscribe((value) => this.results.push(JSON.stringify(value)));

    this.utilisation =
      'combineLatestAll prend un observable de plusieurs observables et combine leurs dernières valeurs.';
    this.code = `from([
      interval(1000).pipe(take(3)),
      interval(1500).pipe(take(3))
    ]).pipe(combineLatestAll())
    .subscribe(value => this.results.push(JSON.stringify(value)));`;
  }

  useZip() {
    this.resetResults();
    this.subscription = zip(
      interval(1000).pipe(take(5)),
      interval(1500).pipe(take(5))
    ).subscribe(([val1, val2]) => this.results.push(`1: ${val1}, 2: ${val2}`));

    this.utilisation = 'zip prend les valeurs dans l’ordre et les associe.';
    this.code = `zip(
      interval(1000).pipe(take(5)),
      interval(1500).pipe(take(5))
    ).subscribe(([val1, val2]) => this.results.push(\`1: \${val1}, 2: \${val2}\`));`;
  }

  useWithLatestFrom() {
    this.resetResults();
    this.subscription = interval(1000)
      .pipe(take(5), withLatestFrom(interval(1500).pipe(take(5))))
      .subscribe(([val1, val2]) => this.results.push(`1: ${val1}, 2: ${val2}`));

    this.utilisation =
      'withLatestFrom récupère la dernière valeur d’un autre observable.';
    this.code = `interval(1000).pipe(
      take(5),
      withLatestFrom(interval(1500).pipe(take(5)))
    ).subscribe(([val1, val2]) => this.results.push(\`1: \${val1}, 2: \${val2}\`));`;
  }

  useForkJoin() {
    this.resetResults();
    this.subscription = forkJoin({
      a: interval(1000).pipe(take(3)),
      b: interval(1500).pipe(take(2)),
    }).subscribe((value) => this.results.push(JSON.stringify(value)));

    this.utilisation =
      'forkJoin attend la complétion de tous les observables avant d’émettre.';
    this.code = `forkJoin({
      a: interval(1000).pipe(take(3)),
      b: interval(1500).pipe(take(2))
    }).subscribe(value => this.results.push(JSON.stringify(value)));`;
  }

  useConcat() {
    this.resetResults();
    this.subscription = concat(
      of('A', 'B', 'C'),
      interval(1000).pipe(take(3))
    ).subscribe((value) => this.results.push(value.toString()));

    this.utilisation = 'concat exécute les observables séquentiellement.';
    this.code = `concat(
      of('A', 'B', 'C'),
      interval(1000).pipe(take(3))
    ).subscribe(value => this.results.push(value.toString()));`;
  }

  useConcatAll() {
    this.resetResults();
    this.subscription = of(
      interval(1000).pipe(take(3)),
      interval(500).pipe(take(3))
    )
      .pipe(concatAll())
      .subscribe((value) => this.results.push(value.toString()));

    this.utilisation =
      'concatAll aplatit les observables en les exécutant séquentiellement.';
    this.code = `of(
      interval(1000).pipe(take(3)),
      interval(500).pipe(take(3))
    ).pipe(concatAll()).subscribe(value => this.results.push(value.toString()));`;
  }

  useRace() {
    this.resetResults();
    this.subscription = race(
      interval(500).pipe(
        map((x) => `A: ${x}`),
        take(5)
      ),
      interval(1000).pipe(
        map((x) => `B: ${x}`),
        take(5)
      )
    ).subscribe((value) => this.results.push(value));

    this.utilisation =
      'race sélectionne le premier observable à émettre et ignore les autres.';
    this.code = `race(
      interval(500).pipe(map(x => \`A: \${x}\`), take(5)),
      interval(1000).pipe(map(x => \`B: \${x}\`), take(5))
    ).subscribe(value => this.results.push(value));`;
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe(); // Nettoyer l'abonnement en quittant le composant
  }
}

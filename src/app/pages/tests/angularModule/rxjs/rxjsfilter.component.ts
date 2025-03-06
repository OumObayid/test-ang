import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  auditTime,
  debounceTime,
  distinct,
  distinctUntilChanged,
  distinctUntilKeyChanged,
  filter,
  find,
  findIndex,
  first,
  interval,
  last,
  of,
  skip,
  skipWhile,
  Subscription,
  take,
  takeUntil,
  takeWhile,
  throttleTime,
  timer,
} from 'rxjs';

@Component({
  selector: 'app-rxjs-filter',
  imports: [CommonModule],
  template: `
    <div class="container">
      <h2>Opérateurs de filter RxJS</h2>
      <div class="btn-group flex-wrap">
        <button
          class="btn btn-secondary me-2 mb-2 rounded"
          (click)="useFirst()"
        >
          first
        </button>
        <button class="btn btn-secondary me-2 mb-2 rounded" (click)="useLast()">
          last
        </button>
        <button
          class="btn btn-secondary me-2 mb-2 rounded"
          (click)="useFilter()"
        >
          filtrer les paires
        </button>
        <button class="btn btn-secondary me-2 mb-2 rounded" (click)="useFind()">
          find x if x*x=4
        </button>
        <button
          class="btn btn-secondary me-2 mb-2 rounded"
          (click)="useFindIndex()"
        >
          find if x>25
        </button>

        <button class="btn btn-secondary me-2 mb-2 rounded" (click)="useTake()">
          Take first 3 values
        </button>

        <button
          class="btn btn-secondary me-2 mb-2 rounded"
          (click)="useTakeUntil()"
        >
          Take until 2 seconds pass
        </button>

        <button
          class="btn btn-secondary me-2 mb-2 rounded"
          (click)="useTakeWhile()"
        >
          Take while x < 4
        </button>

        <button
          class="btn btn-secondary me-2 mb-2 rounded"
          (click)="useDistinct()"
        >
          Distinct values
        </button>

        <button
          class="btn btn-secondary me-2 mb-2 rounded"
          (click)="useDistinctUntilKeyChanged()"
        >
          Distinct by key 'id'
        </button>

        <button
          class="btn btn-secondary me-2 mb-2 rounded"
          (click)="useDistinctUntilChanged()"
        >
          Distinct consecutive values
        </button>

        <button
          class="btn btn-secondary me-2 mb-2 rounded"
          (click)="useDebounceTime()"
        >
          Debounce time (1s delay)
        </button>

        <button
          class="btn btn-secondary me-2 mb-2 rounded"
          (click)="useThrottleTime()"
        >
          Throttle time (1s interval)
        </button>

        <button
          class="btn btn-secondary me-2 mb-2 rounded"
          (click)="useAuditTime()"
        >
          Audit time (1s delay)
        </button>

        <button class="btn btn-secondary me-2 mb-2 rounded" (click)="useSkip()">
          Skip first 2 values
        </button>

        <button
          class="btn btn-secondary me-2 mb-2 rounded"
          (click)="useSkipWhile()"
        >
          Skip while x < 3
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
export class RxjsFilterComponent {
  results: string[] = [];
  subscription: Subscription | null = null;
  code: string = '';
  utilisation: string = '';

  resetResults() {
    this.results = [];
    this.subscription?.unsubscribe(); // Désabonner l'observable précédent
  }
  // -------------------Utilisation de chaque opérateur de filter Rx:

  // first : donne le premier élément
  useFirst() {
    this.resetResults();
    this.subscription = of(1, 2, 3, 4)
      .pipe(first())
      .subscribe((value) => this.results.push(value.toString()));
    this.utilisation =
      'first est une opération de base de RxJS qui permet de prendre le premier élément émis par un observable';
    this.code = `of(1, 2, 3, 4)
      .pipe(first())
      .subscribe((value) => this.results.push(value.toString()));}`;
  }

  // first : donne le dernier élément
  useLast() {
    this.resetResults();
    this.subscription = of(1, 2, 3, 4)
      .pipe(last())
      .subscribe((value) => this.results.push(value.toString()));
    this.utilisation =
      'last est une opération de base de RxJS qui permet de prendre le dernier élément émis par un observable.';
    this.code = `of(1, 2, 3, 4)
      .pipe(last())
      .subscribe((value) => this.results.push(value.toString()));}`;
  }

  // filter : donne les élément emit par un observable qui répondent au condition de filter
  useFilter() {
    this.resetResults();
    this.subscription = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
      .pipe(filter((x) => x % 2 === 0))
      .subscribe((value) => this.results.push(value.toString()));
    this.utilisation =
      'filter est une opération de base de RxJS qui permet de filtrer les éléments émis par un observable';
    this.code = `of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
      .pipe(filter(x => x % 2 === 0))
      .subscribe((value) => this.results.push(value.toString()));}`;
  }

  // find : donne les élément emit par un observable qui répondent au condition de find()
  useFind() {
    this.resetResults();
    this.subscription = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
      .pipe(find((x) => x * x === 4))
      .subscribe((value) => {
        if (value !== undefined && value !== null) {
          this.results.push(value.toString());
        }
      });
    this.utilisation =
      "find prend en paramètre une fonction de prédicat qui sera utilisée pour trouver l'élément souhaité dans la séquence d'éléments observés. Notez que la méthode find() ne retournera qu'une seule valeur, même si plusieurs valeurs correspondent au prédicat. Si vous souhaitez trouver tous les éléments correspondant au prédicat, vous pouvez utiliser la méthode filter() à la place.";
    this.code = `of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
      .pipe(find(x => x*x === 4))
      .subscribe((value) => this.results.push(value.toString()));}`;
  }

  useFindIndex() {
    this.resetResults();
    this.subscription = of(10, 20, 30, 40, 50)
      .pipe(findIndex((x) => x > 25))
      .subscribe((value) => this.results.push(value.toString()));

    this.utilisation =
      'findIndex retourne l’index du premier élément qui satisfait la condition.';
    this.code = `of(10, 20, 30, 40, 50)
      .pipe(findIndex(x => x > 25))
      .subscribe((value) => this.results.push(value.toString()));`;
  }

  useTake() {
    this.resetResults();
    this.subscription = of(1, 2, 3, 4, 5)
      .pipe(take(3))
      .subscribe((value) => this.results.push(value.toString()));

    this.utilisation =
      'take permet de limiter le nombre d’éléments émis par un observable.';
    this.code = `of(1, 2, 3, 4, 5)
      .pipe(take(3))
      .subscribe((value) => this.results.push(value.toString()));`;
  }

  useTakeUntil() {
    this.resetResults();
    const stop$ = timer(2000);
    this.subscription = interval(500)
      .pipe(takeUntil(stop$))
      .subscribe((value) => this.results.push(value.toString()));

    this.utilisation =
      'takeUntil permet d’émettre des valeurs jusqu’à ce qu’un autre observable émette.';
    this.code = `const stop$ = timer(2000);
    interval(500)
      .pipe(takeUntil(stop$))
      .subscribe((value) => this.results.push(value.toString()));`;
  }

  useTakeWhile() {
    this.resetResults();
    this.subscription = of(1, 2, 3, 4, 5)
      .pipe(takeWhile((x) => x < 4))
      .subscribe((value) => this.results.push(value.toString()));

    this.utilisation =
      'takeWhile émet les valeurs tant qu’une condition est respectée.';
    this.code = `of(1, 2, 3, 4, 5)
      .pipe(takeWhile(x => x < 4))
      .subscribe((value) => this.results.push(value.toString()));`;
  }

  useDistinct() {
    this.resetResults();
    this.subscription = of(1, 2, 2, 3, 4, 4, 5)
      .pipe(distinct())
      .subscribe((value) => this.results.push(value.toString()));

    this.utilisation =
      'distinct filtre les valeurs répétées et ne garde que les uniques.';
    this.code = `of(1, 2, 2, 3, 4, 4, 5)
      .pipe(distinct())
      .subscribe((value) => this.results.push(value.toString()));`;
  }

  useDistinctUntilKeyChanged() {
    this.resetResults();
    this.subscription = of(
      { id: 1, name: 'A' },
      { id: 2, name: 'B' },
      { id: 2, name: 'C' },
      { id: 3, name: 'D' }
    )
      .pipe(distinctUntilKeyChanged('id'))
      .subscribe((value) => this.results.push(JSON.stringify(value)));

    this.utilisation =
      'distinctUntilKeyChanged filtre les éléments en fonction d’une clé donnée.';
    this.code = `of(
      { id: 1, name: 'A' },
      { id: 2, name: 'B' },
      { id: 2, name: 'C' },
      { id: 3, name: 'D' }
    )
      .pipe(distinctUntilKeyChanged('id'))
      .subscribe((value) => this.results.push(JSON.stringify(value)));`;
  }

  useDistinctUntilChanged() {
    this.resetResults();
    this.subscription = of(1, 1, 2, 2, 3, 3, 4, 5, 5)
      .pipe(distinctUntilChanged())
      .subscribe((value) => this.results.push(value.toString()));

    this.utilisation =
      'distinctUntilChanged ignore les valeurs consécutives identiques.';
    this.code = `of(1, 1, 2, 2, 3, 3, 4, 5, 5)
      .pipe(distinctUntilChanged())
      .subscribe((value) => this.results.push(value.toString()));`;
  }

  useDebounceTime() {
    this.resetResults();
    this.subscription = interval(300).pipe(
      debounceTime(500), // Débouncer plus court pour voir plus de valeurs
      take(10) // Arrêter après 10 valeurs pour éviter une attente infinie
    ).subscribe(value => this.results.push(value.toString()));


    this.utilisation =
      'debounceTime retarde l’émission des valeurs pour éviter les événements inutiles.';
    this.code = `interval(300)
      .pipe(debounceTime(500)/ Débouncer plus court pour voir plus de valeurs
      ,take(10)// Arrêter après 10 valeurs pour éviter une attente infinie
      ).subscribe((value) => this.results.push(value.toString()));`;
  }

  useThrottleTime() {
    this.resetResults();
    this.subscription = interval(300)
      .pipe(throttleTime(1000))
      .subscribe((value) => this.results.push(value.toString()));

    this.utilisation =
      'throttleTime limite la fréquence d’émission des valeurs.';
    this.code = `interval(300)
      .pipe(throttleTime(1000))
      .subscribe((value) => this.results.push(value.toString()));`;
  }

  useAuditTime() {
    this.resetResults();
    this.subscription = interval(300)
      .pipe(auditTime(1000))
      .subscribe((value) => this.results.push(value.toString()));

    this.utilisation =
      'auditTime émet la dernière valeur reçue après un certain délai.';
    this.code = `interval(300)
      .pipe(auditTime(1000))
      .subscribe((value) => this.results.push(value.toString()));`;
  }

  useSkip() {
    this.resetResults();
    this.subscription = of(1, 2, 3, 4, 5)
      .pipe(skip(2))
      .subscribe((value) => this.results.push(value.toString()));

    this.utilisation = 'skip ignore les premières valeurs émises.';
    this.code = `of(1, 2, 3, 4, 5)
      .pipe(skip(2))
      .subscribe((value) => this.results.push(value.toString()));`;
  }

  useSkipWhile() {
    this.resetResults();
    this.subscription = of(1, 2, 3, 4, 5)
      .pipe(skipWhile((x) => x < 3))
      .subscribe((value) => this.results.push(value.toString()));

    this.utilisation =
      'skipWhile ignore les valeurs tant qu’une condition est vraie.';
    this.code = `of(1, 2, 3, 4, 5)
      .pipe(skipWhile(x => x < 3))
      .subscribe((value) => this.results.push(value.toString()));`;
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe(); // Nettoyer l'abonnement en quittant le composant
  }
}

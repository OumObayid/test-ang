import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import {
  of,
  interval,
  timer,
  defer,
  merge,
  range,
  Subscription,
  from,
  fromEvent,
} from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { concatMap, map, take } from 'rxjs/operators';

@Component({
  selector: 'app-creation-operators',
  imports: [CommonModule],
  template: `
    <div class="container mt-4">
      <h1>RxJS : Opérateurs de Création</h1>
      <hr />
      <button class="btn btn-success me-2" (click)="useOf()">of()</button>
      <button class="btn btn-success me-2" (click)="useFrom()">from()</button>
      <button class="btn btn-success me-2" (click)="useInterval()">
        interval()
      </button>
      <button class="btn btn-success me-2" (click)="useTimer()">timer()</button>
      <button class="btn btn-success me-2" (click)="useFromEvent()">
        fromEvent()
      </button>
      <button class="btn btn-success me-2" (click)="useAjax()">ajax()</button>
      <button class="btn btn-success me-2" (click)="useDefer()">defer()</button>
      <button class="btn btn-success me-2" (click)="useMerge()">merge()</button>
      <button class="btn btn-success me-2" (click)="useRange()">range()</button>
      @if (utilisation){
      <p class="mt-3"><strong>Utilisation:</strong> {{ utilisation }}</p>
      }
      @if (code){
      <div><strong class="mt-4 ">Code:</strong> <pre style="font-size:14px">{{ code }}</pre></div>

      }
      @if ( results.length > 0){
      <strong class="mt-3">Résultats :</strong>
      <ul>
        <li *ngFor="let item of results">{{ item }}</li>
      </ul>
      }
    </div>
  `,

})
export class RxjscreationComponent implements OnDestroy {
  results: string[] = [];
  subscription: Subscription | null = null;
  code: string = '';
  utilisation: string = '';

// Fonction pour réinitialiser les résultats et désabonner l'observable
  resetResults() {
    this.results = [];
    this.subscription?.unsubscribe(); // Désabonner l'observable précédent
  }

  // Utilisation de of pour émettre des valeurs
  useOf() {
    this.resetResults();
    this.subscription = of(1, 2, 3, 4, 5)
    .subscribe((value) =>
      this.results.push(value.toString())
    );

    // //pour ralentir le flux de données
    // this.subscription = of(1, 2, 3, 4, 5)
    //   .pipe(concatMap((value) => interval(1000).pipe(() => of(value)))) // Émet une valeur toutes les 1s
    //   .subscribe((value) => {
    //     console.log(value.toString());
    //     this.results.push(value.toString());
    //   });

    this.utilisation = 'Utilisation de of pour émettre des valeurs';
    this.code = `
    of(1, 2, 3, 4, 5).subscribe(value => this.results.push(value.toString()));`;
  }

  // Utilisation de from pour émettre des valeurs d'un tableau
  useFrom() {
    this.resetResults();
    this.subscription = from([10, 20, 30, 40, 50]).subscribe((value) =>
      this.results.push(value.toString())
    );
    this.utilisation =
      "Utilisation de from pour émettre des valeurs d'un tableau";
    this.code = `
    from([10, 20, 30, 40, 50]).subscribe((value) =>
      this.results.push(value.toString())
    );`;
  }

  // Utilisation de interval pour déclencher un événement à intervalles régul
  useInterval() {
    this.resetResults();
    this.subscription = interval(1000)
      .pipe(take(5))
      .subscribe((value) => this.results.push(value.toString()));
    this.utilisation =
      'Utilisation de interval pour déclencher un événement à intervalles réguliers';
    this.code = `
    interval(1000).pipe(take(5)).subscribe((value) => this.results.push(value.toString()));`;
  }

  // Utilisation de timer pour déclencher un événement après un délai
  useTimer() {
    this.resetResults();
    this.subscription = timer(5000, 1000)
      .pipe(take(5))
      .subscribe((value) => this.results.push(value.toString()));
    this.utilisation =
      'Utilisation de timer pour déclencher un événement après un délai';
    this.code = `
    timer(3000, 1000).pipe(take(5))
    .subscribe((value) => this.results.push(value.toString()));`;
  }

  // Utilisation de fromEvent pour écouter un événement
  useFromEvent() {
    this.resetResults();
    this.subscription = fromEvent(document, 'click').subscribe((value) =>
     { this.results.push('Click détecté !')
      console.log(value.target);
     }
    );
    this.utilisation = 'Utilisation de fromEvent pour écouter un événement';
    this.code = `
    fromEvent(document, 'click').subscribe(() =>
      this.results.push('Click détecté !')
    );`;
  }

  // Utilisation de l'opérateur ajax pour effectuer une requête HTTP
  useAjax() {
    this.resetResults();
    ajax('https://jsonplaceholder.typicode.com/todos/1')
    .pipe(map((res) => JSON.stringify(res.response))) //parser la réponse en JSON
      .subscribe((value) => this.results.push(value));
    this.utilisation =
      "Utilisation de l'opérateur ajax pour effectuer une requête HTTP";
    this.code = `
    ajax('https://jsonplaceholder.typicode.com/todos/1')
    .pipe(map((res) => JSON.stringify(res.response)))
    .subscribe((value) => this.results.push(value));`;
  }

  // Utilisation de defer pour exécuter une fonction de manière asynchrone
  useDefer() {
    this.resetResults();
    defer(() => (Math.random() > 0.5 ? of('Succès') : of('Échec'))).subscribe(
      (value) => this.results.push(value)
    );
    this.utilisation =
      'Utilisation de defer pour exécuter une fonction de manière asynchrone';
    this.code = `
    defer(() => (Math.random() > 0.5 ? of('Succès') : of('Échec'))).subscribe((value) => this.results.push(value));`;
  }

  // Utilisation de merge pour fusionner plusieurs observables
  useMerge() {
    this.resetResults();
    const obs1$ = interval(2000).pipe(
      map((v) => `A${v}`),
      take(3)
    );
    const obs2$ = interval(1000).pipe(
      map((v) => `B${v}`),
      take(5)
    );
    this.subscription = merge(obs1$, obs2$).subscribe((value) =>
      this.results.push(value)
    );
    this.utilisation =
      'Utilisation de merge pour fusionner plusieurs observables';
    this.code = `
    const obs1$ = interval(2000).pipe(
      map((v) => 'A' + v),
      take(3)
    );
    const obs2$ = interval(1000).pipe(
      map((v) => 'B' + v),
      take(5)
    );
    merge(obs1$, obs2$).subscribe((value) =>
      this.results.push(value)
    );`;
  }

  // Utilisation de range pour émettre une séquence de nombres
  useRange() {
    this.resetResults();
    range(1, 10).subscribe((value) => this.results.push(value.toString()));
    this.utilisation =
      'Utilisation de range pour émettre une séquence de nombres';
    this.code = `
    range(1, 10).subscribe((value) => this.results.push(value.toString()));`;
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe(); // Nettoyer l'abonnement en quittant le composant
  }
}

import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectIsLoggedIn } from '../ngrx/data.slice';
import { first, map } from 'rxjs';

export const authGuard2: CanActivateFn = () => {
  const router = inject(Router);
  const store = inject(Store);


  return store.select(selectIsLoggedIn).pipe(
    first(), // On prend la première valeur émise et on termine l'observable
    map(isLoggedIn => {
      if (isLoggedIn) {
        router.navigate(['/dashboard']); // Redirection AVANT d'afficher `login`
        return false; // Bloque l'accès à login
      }

      return true; // Autorise l'accès si non connecté
    })
  );

};

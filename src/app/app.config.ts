import { FormsModule } from '@angular/forms';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { provideStoreDevtools } from '@ngrx/store-devtools'; // Importer les DevTools
import { provideToastr } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { appStore } from './ngrx/store';
import { environment } from '../environments/environment';
import { initializeApp } from 'firebase/app';
import { provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';


export const appConfig: ApplicationConfig = {
  providers: [
     // Ajout de la configuration Firebase
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()), // Fournit le module Firestore
    provideHttpClient(withFetch()),
    appStore,
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideStoreDevtools({ maxAge: 25 }), // Configuration des DevTools
    provideAnimations(), // Pour activer les animations nécessaires
    provideToastr({
      positionClass: 'toast-top-right', // Position des toasts
      timeOut: 3000, // Durée en ms
      preventDuplicates: true, // Empêche les duplications
      closeButton: true, // Affiche un bouton de fermeture
    }), provideAnimationsAsync(),
  ],
};

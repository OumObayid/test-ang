import { RouterLink } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-deployement-accueil',
  imports: [RouterLink],
  template: `

<div class="body row d-flex flex-wrap align-items-stretch">
  <!-- Bloc texte -->
  <div class="col-md-6 col-12 p-2 d-flex align-items-center">
    <div class="p-3 text-center w-100">
      <h1>🚀 Introduction au Déploiement</h1>
      <p class="lead">
        Le déploiement consiste à rendre une application ou un service
        disponible pour les utilisateurs finaux sur un serveur ou une
        infrastructure cloud.
      </p>
      <a routerLink="/deployement-github-reactjs" class="btn btn-primary">
        Commencer 🚀
      </a>
    </div>
  </div>

  <!-- Bloc image -->
  <div class="col-md-6 col-12 p-2">
    <div class="h-100 d-flex align-items-center justify-content-center">
      <img
        src="https://cdn-icons-png.flaticon.com/512/1508/1508878.png"
        alt="Déploiement"
        class="img-fluid w-75 h-75 "
      />
    </div>
  </div>
</div>


`
,

styles: `

 .btn {
   margin-top: 10px;
 }
   `,
})
export class DeployementAccueilComponent {}

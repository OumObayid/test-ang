import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-wordpressaccueil',
  imports: [RouterLink],
  template: `
    <div class="body container pt-5">
      <div class="row d-flex flex-wrap pt-4">
        <div class="col-md-6 col-12 p-2">
          <div class="p-3 text-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo4B5zgEv0loIsiaa8pD9-5HgrR5bg84cEPw&s"
              alt="WordPress Logo"
            />
            <p class="lead">
              Le système de gestion de contenu (CMS) le plus populaire pour
              créer des sites web facilement.
            </p>
            <a routerLink="/c-est-quoi-wordpress" class="btn btn-primary"
              >Commencer 🚀</a
            >
          </div>
        </div>
        <div class="col-md-6 col-12 p-2">
          <iframe
            class="w-100 frameVideo"
            src="https://www.youtube.com/embed/tO3g7JSH-Gk"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          >
          </iframe>
        </div>
      </div>
    </div>
  `,
  styles: `
@media (min-width: 768px) {
  .frameVideo {
    height: 200px;
  }
}
@media (min-width: 768px) {
  .frameVideo {
      height: 280px;
    }
}
img {
   max-width: 80px;
   margin-bottom: 10px;
 }

 .btn {
   margin-top: 10px;
 }
   `,
})
export class WordpressAccueilComponent {
  constructor() {}
}

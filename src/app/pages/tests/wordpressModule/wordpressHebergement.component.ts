import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wordpressHebergement',
  template: `
  <h1>🌐 Hebergement du site Wordpress : </h1>
  <hr>
  <div class="justify-content-center" style="display: flex;  flex-wrap: wrap; gap: 20px;">
    <div style="text-align: center;">
        <iframe width="450" height="255"
                src="https://www.youtube.com/embed/3vN20w5q9Lc"
                title="Création d'un thème WordPress"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
        </iframe>
        <p>mettre en ligne son site WordPress</p>
    </div>
    <div style="text-align: center;">
        <iframe width="450" height="255"
                src="https://www.youtube.com/embed/xQgqUygX-Zo"
                title="Création d'un thème WordPress"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
        </iframe>
        <p>Hébergeur + Nom de domaine gratuitement sans pub</p>
    </div>
</div>

  `,
  styles: [``]
})
export class WordpressHebergementComponent  {

}



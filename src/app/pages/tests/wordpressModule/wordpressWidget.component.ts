import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wordpress-Blog',
  template: `
  <h1>🧩 Gestion des des widgets : </h1>
  <hr>
  <div class="justify-content-center" style="display: flex;  flex-wrap: wrap; gap: 20px;">
    <div style="text-align: center;">
        <iframe width="600" height="340"
                src="https://www.youtube.com/embed/bGOCXBZFmrU"
                title="Création d'un thème WordPress"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
        </iframe>
    </div>
</div>

  `,
  styles: [``]
})
export class WordpressWidgetComponent  {

}



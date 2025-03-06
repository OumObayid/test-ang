import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wordpressDecouverte',
  template: `
  <h1>🖥️ Découverte de l'interface de WordPress : </h1>
  <hr>
  <div class="justify-content-center" style="display: flex;  flex-wrap: wrap; gap: 20px;">
    <div style="text-align: center;">
        <iframe width="600" height="340"
                src="https://www.youtube.com/embed/BIVPSzBSbf0"
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
export class WordpressDecouverteComponent  {

}



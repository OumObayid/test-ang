import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wordpressMaintenance',
  template: `
<h1>🔧 Maintenance et mise à jour de wordpress : </h1>
<hr>
  <div class="justify-content-center" style="display: flex;  flex-wrap: wrap; gap: 20px;">
    <div style="text-align: center;">
        <iframe width="450" height="255"
                src="https://www.youtube.com/embed/Fel5i5MJYhU"
                title="Création d'un thème WordPress"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
        </iframe>
        <p>Les mises à jour et la maintenance</p>
    </div>
    <div style="text-align: center;">
        <iframe width="450" height="255"
                src="https://www.youtube.com/embed/ewp4McaN0OY"
                title="Création d'un thème WordPress"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
        </iframe>
        <p>Créez une magnifique PAGE DE MAINTENANCE </p>
    </div>
</div>

  `,
  styles: [``]
})
export class WordpressMaintenanceComponent  {

}



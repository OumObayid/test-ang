import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  template: `
    <div class="container mt-4">
      <h1 class="text-center mb-4">Hebergement d'un site angulaire et d'une api php mysql </h1>
<hr>
<a href="http://shopoum.atwebpages.com/" target="_blank">http://shopoum.atwebpages.com</a>
      <!-- Boutons pour sélectionner la vidéo -->
      <div class="text-center mb-3">
        <button class="btn btn-success mx-2" (click)="selectVideo(0)">
          Étape 1
        </button>
        <button class="btn btn-success mx-2" (click)="selectVideo(1)">
          Étape 2
        </button>
        <button class="btn btn-success mx-2" (click)="selectVideo(2)">
          Étape 3
        </button>
      </div>

      <!-- Player vidéo -->
      <div class="video-container text-center mb-3">
        <iframe
          [src]="sanitizedVideoUrl"
          width="800"
          height="450"
          frameborder="0"
          allowfullscreen
          class="rounded shadow"
        ></iframe>
      </div>
    </div>
  `,
  styles: `
.video-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  font-size: 1.1rem;
}
  `,
})
export class AngularDeplHebergeurComponent implements OnInit {
  constructor(private sanitizer: DomSanitizer) {
    this.sanitizedVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl('');
  }
  // Liste des IDs de vidéos Google Drive
  videoIds: string[] = [
    '1qz1RQsylVI5_WDenecYzDMdkqRUlm6fq', // Étape 1
    '18qpXT5Nh5v7OKR4_KRyYC__P8Z_g8O8G', // Étape 2
    '1EUZUnQdcAf9wJMt6lHX8R1uN8Ep7P4lw', // Étape 3
  ];

  // URL sécurisée de la vidéo sélectionnée
  sanitizedVideoUrl: SafeResourceUrl;

  ngOnInit() {
    this.selectVideo(0); // Par défaut, afficher la première vidéo
  }

  // Changer de vidéo en fonction du bouton cliqué
  selectVideo(index: number) {
    const videoUrl = `https://drive.google.com/file/d/${this.videoIds[index]}/preview`;
    this.sanitizedVideoUrl =
      this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl);
  }
}




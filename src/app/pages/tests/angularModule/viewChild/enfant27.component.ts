import { Component, ElementRef, viewChild, ViewChild } from '@angular/core';

@Component({
  selector: 'app-enfant27',
  standalone: true,
  template: `
    <div class="border p-3">
      <h3>Enfant</h3>
      <div class=" d-flex justify-content-center">
        <div
          #childContent
          class="p-3 border w-25"
          style="background-color: lightyellow;"
        >
          Contenu initial du composant enfant.
        </div>
      </div>
    </div>
  `,
})
export class Enfant27Component {
  // Accéder à l'élément DOM interne
  @ViewChild('childContent') childContent!: ElementRef;
 
  // Méthode publique pour afficher une alerte
  showAlert() {
    alert('Méthode appelée depuis le parent !');
  }

  // Méthode publique pour modifier le contenu texte
  changeText(newText: string) {
    this.childContent.nativeElement.innerHTML = newText;
  }
}

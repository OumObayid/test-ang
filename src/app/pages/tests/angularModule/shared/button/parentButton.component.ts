import { ButtonSharedComponent } from './buttonShared.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-parent',
  imports: [ButtonSharedComponent],
  template: `
    <div class="border p-2">
      <h2>Composant utilisant le bouton réutilisable</h2>
      <div class="border p-2">
        <h3>Boutons réutilisables</h3>
        <div class="d-flex">
      <app-button-shared
        label="Envoyer"
        type="submit"
        color="primary"
      ></app-button-shared>
      <app-button-shared label="Annuler" color="secondary"></app-button-shared>
      <app-button-shared
        label="Supprimer"
        color="danger"
        [disabled]="true"
      ></app-button-shared></div></div>
    </div>
  `,
  styles: `

  `,
})
export class ParentButtonComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

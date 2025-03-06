import { Component, ContentChild, contentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-enfant30',
  standalone: true,
  template: `

      <div class="border p-3">
        <h3>Enfant</h3>
        <ng-content />
        <div>Titre de la carte : <span class="text-danger fw-bold">{{ title()?.nativeElement.textContent }}</span></div>
      </div>

  `,
})
export class Enfant30Component {
  title = contentChild<ElementRef>('cardTitle'); // c'est un signal
  // ou
  // @ContentChild('cardTitle') title!: ElementRef;//ce n'est pas un signal
}

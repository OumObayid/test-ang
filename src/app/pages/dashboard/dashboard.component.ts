import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [],
  template: `
<div>dashboard</div>
<p class="text-center">Cette page est protégé par un guard</p>
<p class="text-center">Veuillez se deconnecter et se connecter pour tester</p>
  `,
  styles: ``
})
export class DashboardComponent {

}

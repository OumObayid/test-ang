import { SidebarComponent } from './pages//tests/sidebar.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeadertestComponent } from './pages/tests/headertest.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [
    HeadertestComponent,
    SidebarComponent,
    FooterComponent,
    RouterOutlet,
  ],
  template: `
    <app-headertest (menuSelected)="onMenuSelected($event)"></app-headertest>

    <div class="container-fluid px-0">
      <div class="row gx-0 bod">
        <div class="sidebar col-12 col-md-3 col-lg-2 p-0 m-0">
          <app-sidebar [selectedMenu]="selectedMenu"></app-sidebar>
        </div>
        <div class="col-12 col-md-9 col-lg-10 p-3">
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
    <app-footer></app-footer>
  `,
  styles: `

/* Conteneur principal */
@media (min-width: 768px){
  .container-fluid {
  margin-top: 50px; /* Évite que le sidebar soit masqué par le nav */
  margin-bottom: 50px; /* Évite que le sidebar soit masqué par le footer */
  }
}
.container-fluid {
  display: flex;
}
.bod {
  width:100%;
  background-color: #f8f9fa;
  height: calc(100vh - 100px); /* Ajustement total */
  overflow-y: auto;
}

  `,
})
export class AppComponent {
  selectedMenu: string = 'Angular';

  onMenuSelected(menu: string) {
    this.selectedMenu = menu;
  }
}

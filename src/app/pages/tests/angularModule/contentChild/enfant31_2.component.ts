import { Component } from '@angular/core';

@Component({
  selector: 'app-enfant31_2',
  standalone: true,
  template: `
    <div>
      <span class="badge">
        {{status?'En ligne':'Hors ligne' }}
      </span>
    </div>
  `,
  styles: `
   .badge {
     padding: 4px 8px;
     background-color: #4CAF50;
     color: white;
     border-radius: 4px;
   }
 `,
})
export class Enfant31_2Component {
  status:boolean = true;


}

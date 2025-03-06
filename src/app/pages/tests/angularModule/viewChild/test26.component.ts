import { CommonModule } from '@angular/common';
import { Component, ElementRef, viewChild } from '@angular/core';
import { User } from '../../../../interfaces/user';

@Component({
  selector: 'app-test26',
  imports:[CommonModule],
  template: `
    <div class="container">
      <h1>viewChild: accéder à un élément du DOM</h1>
      <hr />
      <div class="rounded-3 border p-3" #userInfo>aucune information</div>
      <button class="btn btn-success mt-3 me-3" (click)="afficherNom()">
        Afficher son nom
      </button>
      <button class="btn btn-success mt-3 me-3" (click)="afficherEmail()">
        Afficher son email
      </button>
      <button class="btn btn-danger mt-3" (click)="initialise()">
        Réinitialiser
      </button>

      <!-- ----------------code--------------- -->
      <!-- Nav Tabs -->
      <ul class="nav nav-tabs mt-3" id="codeTabs" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="c1-tab"
            data-bs-toggle="tab"
            data-bs-target="#c1"
            type="button"
            role="tab"
            aria-controls="c1"
            aria-selected="true"
          >
           Code viewChild Component
          </button>
        </li>
      </ul>

      <!-- Tab Content -->
      <div class="tab-content " id="codeTabsContent" style="position: relative;">
        <!-- Composant C1 -->
        <div
          class="tab-pane fade show active "
          id="c1"
          role="tabpanel"
          aria-labelledby="c1-tab"
          style="position: relative;"
        >
          <!-- Bouton de copie pour C1 -->
          <i (click)="copy1()" class="fas fa-copy"></i>
          <span class="confirm" *ngIf="clicked"
            >copied <i class="fas fa-check"></i>
          </span>
          <pre #tab1 class="tab fw-bold" ngNonBindable>
import &#123; Component, ElementRef, viewChild &#125; from '&#64;angular/core';
import &#123; User &#125; from '../../../interfaces/user';

&#64;Component(&#123;
  selector: 'app-parent',
  template: &#96;
 &#60;div class="container"&#62;
      &#60;h1&#62;viewChild: accéder à un élément du DOM&#60;/h1&#62;
      &#60;hr /&#62;
      &#60;div class="rounded-3 border p-3" #userInfo&#62;aucune information&#60;/div&#62;
      &#60;button class="btn btn-success mt-3 me-3" (click)="afficherNom()"&#62;
        Afficher son nom
      &#60;/button&#62;
      &#60;button class="btn btn-success mt-3 me-3" (click)="afficherEmail()"&#62;
        Afficher son email
      &#60;/button&#62;
      &#60;button class="btn btn-danger mt-3" (click)="initialise()"&#62;
        Réinitialiser
      &#60;/button&#62;
 &#60;/div&#62;
 &#96;,
&#125;)

export class ParentComponent &#123;
  user: User = &#123;
    id: '1',
    firstname: 'John ',
    lastname: 'Doe',
    email: 'john&#64;example.com',
    tel: '',
    address: '',
  &#125;;

  infoElement = viewChild&#60;ElementRef&#62;('userInfo');

  // Utilisation de ViewChild pour appliquer un style à l'élément DOM ciblé
  afficherNom() &#123;
    const element = this.infoElement(); // Accède à l'élément DOM correspondant
    if (element) &#123;
      element.nativeElement.style.backgroundColor = 'red'; // Applique un style via ViewChild
      element.nativeElement.textContent = this.user.firstname; // Applique un style via ViewChild
    &#125;
  &#125;
  afficherEmail() &#123;
    const element = this.infoElement(); // Accède à l'élément DOM correspondant
    if (element) &#123;
      element.nativeElement.style.backgroundColor = 'yellow'; // Applique un style via ViewChild

      element.nativeElement.textContent = this.user.email;
    &#125;
  &#125;
  // Réinitialisation du style de l'élément DOM via ViewChild
  initialise() &#123;
    const element = this.infoElement(); // Accède à l'élément DOM correspondant
    if (element) &#123;
      element.nativeElement.style.backgroundColor = ''; // Réinitialise le style via ViewChild
      element.nativeElement.textContent = 'aucune information';
    &#125;
  &#125;
&#125;

          </pre
          >
        </div>

      </div>
      <!-- ----------------Fin code--------------- -->

      <div class=" mt-4">
        ****************************************<span class="fs-2">cours</span
        >*************************************************
      </div>
      <pre>
<strong>ViewChild :</strong>
C'est comme useRef dans react.
Permet d'accéder à un élément DOM ou un composant enfant dans le template à l'aide d'une référence locale.
Dans ce cas, la propriété infoElement pointe vers l'élément avec la référence locale #userInfo.
La fonction viewChild() <span class="fw-bolder">retourne un signal</span>, ce qui signifie que sa valeur sera automatiquement mise à jour si l'élément change dans le DOM

<strong>Syntaxe :</strong>
&#60;div #userInfo&#62;...&#60;/div&#62;
<span class="text-danger fw-bold"> infoElement = viewChild&#60;ElementRef&#60;HTMLElement&#62;&#62;('userInfo');</span>
et pour l'utiliser il faut ajouter les () car c'est un signal: <span class="text-danger fw-bold">this.infoElement()</span>
ou
<span class="text-danger fw-bold">&#64;ViewChild('userInfo') infoElement!: ElementRef;</span>
et pour l'utiliser on l'utilise sans ():<span class="text-danger fw-bold">this.infoElement</span>

<strong>Utilisation dans les méthodes :</strong>
afficherNom() : Utilise viewChild pour modifier le style CSS de l'élément DOM (changement de la couleur de fond) et pour modifier le contenu
initialise() : Utilise viewChild pour réinitialiser le style appliqué précédemment.
      </pre>
    </div>
  `,
  styles: `
  pre{
          font-size:15px;
         }
.fa-check  {
    color: grey;
  }

  i.fa-copy {
    cursor: pointer;
    color: grey;
    font-size: 20px;
    position: absolute;
    top: 20px;
    right: 20px;
    transition: color 0.5s ease, transform 0.3s ease;
    display: inline-block;
    padding: 10px;
  }

    i.fa-copy:hover{
      color:#aaacad;
    transform: scale(1.2); /* Effet d'agrandissement au survol */
    cursor: pointer; /* Change le curseur pour indiquer une action cliquable */
    }
    .confirm{
      position: absolute;
      top: 30px;
      right: 60px;
      color:grey;
            font-weight:bold;
    }
     .tab {
       background-color: #f8f9fa;
       padding: 15px;
       border: 1px solid #ddd;
       border-radius: 5px;
       overflow-x: auto;
       font-family: monospace;
     }
     .active {
    background-color: #f8f9fa !important; /* Couleur de l'onglet actif */
    border-color: grey; /* Couleur de la bordure pour l'onglet actif */
  }
     h3 {
       margin-top: 20px;
     }
     `,
})
export class Test26Component {
  user: User = {
    id: '1',
    firstname: 'John ',
    lastname: 'Doe',
    email: 'john@example.com',
    tel: '',
    address: '',
  };

  infoTab1 = viewChild<ElementRef>('tab1');
  infoTab2 = viewChild<ElementRef>('tab2');
  clicked: boolean = false;

  copy1() {
    const element = this.infoTab1()?.nativeElement;
    if (element) navigator.clipboard.writeText(element.textContent);
    this.clicked = true;
    setTimeout(() => {
      this.clicked = false;
    }, 1500);
  }

  // Déclare un ViewChild pour accéder à l'élément DOM avec la référence locale #userInfo.
  // `viewChild` est utilisé pour lier une référence locale dans le template
  // à une propriété dans la classe TypeScript. Ici, nous accédons à l'élément `div` identifié par #userInfo.
  infoElement = viewChild<ElementRef>('userInfo');
  // ou
  // @ViewChild('userInfo') infoElement!: ElementRef;
  // et pour l'utiliser on l'utilise sans ():infoElement

  // Utilisation de ViewChild pour appliquer un style à l'élément DOM ciblé
  afficherNom() {
    const element = this.infoElement(); // Accède à l'élément DOM correspondant
    if (element) {
      element.nativeElement.style.backgroundColor = 'red'; // Applique un style via ViewChild
      element.nativeElement.textContent = this.user.firstname; // Applique un style via ViewChild
    }
  }
  afficherEmail() {
    const element = this.infoElement(); // Accède à l'élément DOM correspondant
    if (element) {
      element.nativeElement.style.backgroundColor = 'yellow'; // Applique un style via ViewChild

      element.nativeElement.textContent = this.user.email;
    }
  }
  // Réinitialisation du style de l'élément DOM via ViewChild
  initialise() {
    const element = this.infoElement(); // Accède à l'élément DOM correspondant
    if (element) {
      element.nativeElement.style.backgroundColor = ''; // Réinitialise le style via ViewChild
      element.nativeElement.textContent = 'aucune information';
    }
  }
}

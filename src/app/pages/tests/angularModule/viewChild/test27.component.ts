import { Enfant27Component } from './enfant27.component';
import { Component, viewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-card',
  imports: [Enfant27Component, CommonModule], // Importation nécessaire pour inclure le composant enfant
  template: `
    <div class="container">
      <h1>viewChild: accéder à un composant enfant</h1>
      <hr />
      <div class="border p-3">
        <h3>Parent</h3>
        <button class="btn btn-success  me-3" (click)="callChildMethod()">
          Appeler méthode enfant
        </button>
        <button class="btn btn-secondary me-3" (click)="changeChildText()">
          Changer le texte de l'element de l'enfant</button
        ><br /><br />
        <button
          class="btn btn-secondary  me-3"
          (click)="changeStyleChildElmnt()"
        >
          Changer le style de l'element de l'enfant
        </button>
        <button class="btn btn-secondary" (click)="animElmntChild()">
          faire bouger l'element de l'enfant
        </button>
        <hr />
        <!-- Inclusion du composant enfant avec une référence -->
        <app-enfant27 #child></app-enfant27>
      </div>
      <hr />

      <!-------------------- code  ------------------------->
      <!-- Nav Tabs -->
      <ul class="nav nav-tabs" id="codeTabs" role="tablist">
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
          viewChild Parent
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="c2-tab"
            data-bs-toggle="tab"
            data-bs-target="#c2"
            type="button"
            role="tab"
            aria-controls="c2"
            aria-selected="false"
          >
          viewChild Enfant
          </button>
        </li>
      </ul>

      <!-- Tab Content -->
      <div class="tab-content fw-bold" id="codeTabsContent" style="position: relative;">
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
          <pre #tab1 class="tab" ngNonBindable>
import &#123; EnfantComponent &#125; from './enfant.component';
import &#123; Component, viewChild &#125; from '&#64;angular/core';

&#64;Component(&#123;
  selector: 'app-parent',
  standalone: true,
  imports: &#91;EnfantComponent&#93;, // Importation nécessaire pour inclure le composant enfant
  template: &#96;
    &#60;div class="container"&#62;
      &#60;h1&#62;viewChild: accéder à un composant enfant&#60;/h1&#62;
      &#60;hr /&#62;
      &#60;div class="border p-3"&#62;
        &#60;h3&#62;Parent&#60;/h3&#62;
        &#60;button class="btn btn-success me-3" (click)="callChildMethod()"&#62;
          Appeler méthode enfant
        &#60;/button&#62;
        &#60;button class="btn btn-secondary me-3" (click)="changeChildText()"&#62;
          Changer le texte de l'élément de l'enfant
        &#60;/button&#62;
        &#60;br /&#62;&#60;br /&#62;
        &#60;button class="btn btn-secondary me-3" (click)="changeStyleChildElmnt()"&#62;
          Changer le style de l'élément de l'enfant
        &#60;/button&#62;
        &#60;button class="btn btn-secondary" (click)="animElmntChild()"&#62;
          Faire bouger l'élément de l'enfant
        &#60;/button&#62;
        &#60;hr /&#62;
        &#60;!-- Inclusion du composant enfant avec une référence --&#62;
        &#60;app-enfant #child&#62;&#60;/app-enfant&#62;
      &#60;/div&#62;
    &#60;/div&#62;
  &#96;,
&#125;)
export class ParentComponent &#123;
  // Accès au composant enfant
  childComponent = viewChild&#60;EnfantComponent&#62;('child');

  // Méthode pour appeler une méthode du composant enfant
  callChildMethod() &#123;
    const child = this.childComponent();
    child?.showAlert();
  &#125;

  // Changer le texte de l'enfant
  changeChildText() &#123;
    const child = this.childComponent();
    child?.changeText(
      '&#60;span class="text-danger"&#62;Texte mis à jour depuis le parent !&#60;/span&#62;'
    );
  &#125;

  // Changer le style de l'enfant
  changeStyleChildElmnt() &#123;
    const child = this.childComponent();
    const element = child?.childContent.nativeElement;
    if (element) &#123;
      element.style.backgroundColor = 'lightblue';
      element.style.color = 'white';
      element.style.padding = '20px';
      element.style.border = '2px solid blue';
      element.style.borderRadius = '10px';
    &#125;
  &#125;

  // Animer l'élément de l'enfant
  animElmntChild() &#123;
    const child = this.childComponent();
    const element = child?.childContent.nativeElement;

    let position = 0;
    let direction = 1;

    const animationInterval = setInterval(() =&#62; &#123;
      position += direction * 5;
      element.style.transform = &#96;translateX($&#123;position&#125;px)&#96;;

      if (position &#62;= 100 || position &#60;= -100) direction *= -1;
    &#125;, 30);

    setTimeout(() =&#62; &#123;
      clearInterval(animationInterval);
      element.style.transform = 'translateX(0)';
    &#125;, 5000);
  &#125;
&#125;
    </pre
          >
        </div>

        <!-- Composant C2 -->
        <div
          class="tab-pane fade"
          id="c2"
          role="tabpanel"
          aria-labelledby="c2-tab"
          style="position: relative;"
        >
          <!-- Bouton de copie pour C2 -->
          <i (click)="copy2()" class="fas fa-copy"></i>
          <span class="confirm" *ngIf="clicked"
            >copied <i class="fas fa-check"></i
          ></span>

          <pre #tab2 class="tab" ngNonBindable>
import &#123; Component, ElementRef, ViewChild &#125; from '&#64;angular/core';

&#64;Component(&#123;
  selector: 'app-enfant',
  standalone: true,
  template: &#96;
    &#60;div class="border p-3"&#62;
      &#60;h3&#62;Enfant&#60;/h3&#62;
      &#60;div class="d-flex justify-content-center"&#62;
        &#60;div
          #childContent
          class="p-3 border w-25"
          style="background-color: lightyellow;"
        &#62;
          Contenu initial du composant enfant.
        &#60;/div&#62;
      &#60;/div&#62;
    &#60;/div&#62;
  &#96;,
&#125;)
export class EnfantComponent &#123;
  &#64;ViewChild('childContent') childContent!: ElementRef;

  showAlert() &#123;
    alert('Méthode appelée depuis le parent !');
  &#125;

  changeText(newText: string) &#123;
    this.childContent.nativeElement.innerHTML = newText;
  &#125;
&#125;
    </pre
          >
        </div>
      </div>

      <!--------------------fin code  ---------------------->
      <hr />

      <!-------------------- cour ------------------------>

      <div class=" mt-4">
        ****************************************<span class="fs-2">cours</span
        >*************************************************
      </div>
      <pre>

Vous pouvez aussi accéder à un composant enfant, ainsi à ses propriétés et ses méthodes et ses elements dom.

<span class="fw-bold">Dans le dom du parent:</span>
Pour cela il faut integrer le composant et le referencier avec un #:
<span class="text-danger fw-bold">&#60;app-enfant #child&#62;&#60;/app-enfant&#62;</span>

<span class="fw-bold">Dans le ts du parent:</span>
<span class="text-danger fw-bold">childComponent = viewChild&#60;EnfantComponent&#62;('child');</span>
ou tout simplement:
<span class="text-danger fw-bold">childComponent = viewChild(EnfantComponent);</span>

<span class="fw-bold">Utilisation de l'element:</span>
childComponent est un signal, on l'utiliser avec des parenthèses: <span class="text-danger fw-bold">this.childComponent()</span>
     </pre>
      <!--------------------fin cour ---------------------->

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
     background-color:#f8f9fa;
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
export class Test27Component {
  // Accès au composant enfant
  childComponent = viewChild<Enfant27Component>('child');
  compteur: number = 0;

  infoTab1 = viewChild<ElementRef>('tab1');
  infoTab2 = viewChild<ElementRef>('tab2');
  clicked: boolean = false;

  // Appeler une méthode du composant enfant
  callChildMethod() {
    const child = this.childComponent();
    // if (child) child.showAlert();
    child?.showAlert();
  }
  // Changer le texte d'un élément dans le composant enfant
  changeChildText() {
    const child = this.childComponent();
    child?.changeText(
      '<span class="text-danger">Texte mis à jour depuis le parent !</span>'
    );
  }
  // Changer le style d'un élément dans le composant enfant
  changeStyleChildElmnt() {
    const child = this.childComponent();
    if (child) {
      const element = child.childContent.nativeElement; // Vérifie si l'élément DOM est accessible
      element.style.backgroundColor = 'lightblue';
      element.style.color = 'white';
      element.style.padding = '20px';
      element.style.border = '2px solid blue';
      element.style.borderRadius = '10px';
    }
  }
  //animer l'élément du child
  animElmntChild() {
    const child = this.childComponent();
    const element = child?.childContent.nativeElement; // Vérifie si l'élément DOM est accessible

    let position = 0; // Position initiale
    let direction = 1; // 1 pour aller à droite, -1 pour aller à gauche

    const animationInterval = setInterval(() => {
      // Modifie la position
      position += direction * 5; // Ajustez la vitesse en modifiant '5'

      // Met à jour la position horizontale avec `transform`
      element.style.transform = `translateX(${position}px)`;

      // Inverse la direction si les limites sont atteintes
      if (position >= 100 || position <= -100) {
        direction *= -1; // Change la direction
      }
    }, 30); // Intervalle de temps (30ms par itération)

    // Stoppe l'animation après un certain temps (facultatif)

    setTimeout(() => {
      clearInterval(animationInterval);
      element.style.transform = 'translateX(0)'; // Réinitialise à la position d'origine
    }, 5000); // Animation pendant 5 secondes
  }

  copy1() {
    const element = this.infoTab1()?.nativeElement;
    if (element) navigator.clipboard.writeText(element.textContent);
    this.clicked = true;

    setTimeout(() => {
      this.clicked = false;
    }, 1500);
  }
  copy2() {
    const element = this.infoTab2()?.nativeElement;
    if (element) navigator.clipboard.writeText(element.textContent);
    this.clicked = true;
    setTimeout(() => {
      this.clicked = false;
    }, 1500);
  }
}

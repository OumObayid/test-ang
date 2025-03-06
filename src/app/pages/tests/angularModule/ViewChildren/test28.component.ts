import { CommonModule } from '@angular/common';
import { Component, viewChildren, ElementRef, viewChild } from '@angular/core';

@Component({
  selector: 'app-test28',
  imports:[CommonModule],
  standalone: true,
  template: `
    <div class="container">
      <h1>
        ViewChildren():accéder à plusieurs éléments d'un composant
      </h1>
      <hr/>
      <p class="p-2" #paragraph>Premier paragraphe</p>
      <p class="p-2" #paragraph>Deuxième paragraphe</p>
      <p class="p-2" #paragraph>Troisième paragraphe</p>
      <button class="btn btn-success mx-3" (click)="showParagraphs()">
        Mettre en evidence les paragraphes
      </button>
      <button class="btn btn-success" (click)="reinitialise()">
        Réinitialiser les paragraphes
      </button>

<!-- --------------------Template pour afficher le code source---------------- -->
    <!-- Nav Tabs -->
    <ul class="nav nav-tabs mt-5" id="codeTabs" role="tablist">
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
          Composant Parent
          </button>
        </li>
      </ul>

      <!-- Tab Content -->
      <div class="tab-content" id="codeTabsContent" style="position: relative;">
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
import &#123; Component, viewChildren, ElementRef &#125; from '&#64;angular/core';

&#64;Component(&#123;
  selector: 'app-test28',
  standalone: true,
  template: &#96;
    &#60;div class="container"&#62;
      &#60;h1&#62;
        ViewChildren():accéder à plusieurs éléments d'un composant
      &#60;/h1&#62;
      &#60;hr/&#62;
      &#60;p class="p-2" #paragraph&#62;Premier paragraphe&#60;/p&#62;
      &#60;p class="p-2" #paragraph&#62;Deuxième paragraphe&#60;/p&#62;
      &#60;p class="p-2" #paragraph&#62;Troisième paragraphe&#60;/p&#62;
      &#60;button class="btn btn-success mx-3" (click)="showParagraphs()"&#62;
        Mettre en evidence les paragraphes
      &#60;/button&#62;
      &#60;button class="btn btn-success" (click)="reinitialise()"&#62;
        Réinitialiser les paragraphes
      &#60;/button&#62;
    &#60;/div&#62;
  &#96;,
&#125;)
export class Test28Component &#123;
  // Récupère tous les éléments avec la référence #paragraph
  paragraphs = viewChildren&#60;ElementRef&#62;('paragraph');

  showParagraphs() &#123;
    // Modifie la background de chaque paragraphe
    this.paragraphs().forEach((p) =&#62; &#123;
      p.nativeElement.style.backgroundColor = '#ffc09f';
    &#125;);
  &#125;
  reinitialise() &#123;
    this.paragraphs().forEach((p) =&#62; &#123;
      p.nativeElement.style.backgroundColor = '';
    &#125;);
  &#125;
&#125;</pre>
        </div>
      </div>
      <!-- --------------------Fin Template pour afficher le code source---------------- -->
      <div class=" mt-4">
        ****************************************<span class="fs-2">cours</span
        >*************************************************
      </div>
      <pre>
viewChildren() est un signal pour accéder à plusieurs éléments enfants d'un composant.
La fonction viewChildren() retourne un signal contenant un tableau d'ElementRef.
Pour accéder aux éléments, il faut utiliser les parenthèses () pour obtenir la valeur du signal.

<strong>Comment ça marche:</strong>

  - dans la template referencier les elements du dom :
  &#60;p class="p-2" #paragraph&#62;Premier paragraphe&#60;/p&#62;
  &#60;p class="p-2" #paragraph&#62;Deuxième paragraphe&#60;/p&#62;
  &#60;p class="p-2" #paragraph&#62;Troisième paragraphe&#60;/p&#62;

  - dans ts:Récupérer tous les éléments avec la référence #paragraph
  <strong class="text-danger">paragraphs = viewChildren&#60;ElementRef&#62;('paragraph');</strong>

  - utilisation:
  <strong class="text-danger">this.paragraphs().forEach((p) => &#123;
  p.nativeElement....
  &#125;);
  </strong>
      </pre>
    </div>
  `,
styles: `
// -------------------------style pour afficher le code source----------------
pre{
  font-size:15px;
 }
.fa-check {
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
        background-color:#eef06f !important; /* Couleur de l'onglet actif */
        border-color: grey; /* Couleur de la bordure pour l'onglet actif */
      }
         h3 {
           margin-top: 20px;
         }
// -------------------------Fin style pour afficher le code source----------------
         `
})
export class Test28Component {
  // Récupère tous les éléments avec la référence #paragraph
  paragraphs = viewChildren<ElementRef>('paragraph');

  showParagraphs() {
    // Modifie la background de chaque paragraphe
    this.paragraphs().forEach((p) => {
      p.nativeElement.style.backgroundColor = '#ffc09f';
    });
  }
  reinitialise() {
    this.paragraphs().forEach((p) => {
      p.nativeElement.style.backgroundColor = '';
    });
  }
  // ----------------------ts pour afficher le code source--------------------
  infoTab1 = viewChild<ElementRef>('tab1');
  clicked: boolean = false;
  copy1() {
    const element = this.infoTab1()?.nativeElement;
    if (element) navigator.clipboard.writeText(element.textContent);
    this.clicked = true;
    setTimeout(() => {
      this.clicked = false;
    }, 1500);
  }

// ----------------------Fin ts pour afficher le code source--------------------


}

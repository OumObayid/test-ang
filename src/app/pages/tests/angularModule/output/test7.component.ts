import { CommonModule } from '@angular/common';
import { Enfant7Component } from './enfant7.component';
import { Component, viewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-test7',
  imports: [Enfant7Component,CommonModule],
  template: `
    <div class="container">
      <h1>&#64;Output()</h1>
      <hr />
      <div class="border p-3">
        <h3 class="text-success">Partie Parent</h3>
        <div class="border p-3 mb-3">
          <h3 class="text-success">Partie Enfant</h3>
          <app-enfant7
            (dataSent)="receiveData($event)"
            (message)="receiveMessage($event)"
          ></app-enfant7>
        </div>

        <div class="border ps-3 mb-3">
          <p>
            Message reçu de mon fils :<span class="text-danger fs-4">{{
              mess
            }}</span>
          </p>
          <p class="text-success fs-5">{{ message }}</p>
        </div>
      </div>
      <hr>
      <hr>
         <!-- --------------------Template pour afficher le code source---------------- -->
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
              Composant Parent
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
              Composant Enfant
            </button>
          </li>
        </ul>

        <!-- Tab Content -->
        <div
          class="tab-content"
          id="codeTabsContent"
          style="position: relative;"
        >
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
import &#123; EnfantComponent &#125; from "./enfant.component";
import &#123; Component &#125; from "&#64;angular/core";

&#64;Component(&#123;
  selector: "app-root",
  imports: [EnfantComponent],
  template: &#96;
    &#60;div class="container"&#62;
      &#60;h1&#62;&#64;Output()&#60;/h1&#62;
      &#60;hr /&#62;
      &#60;div class="border p-3"&#62;
        &#60;h3 class="text-success"&#62;Partie Parent&#60;/h3&#62;
        &#60;div class="border p-3 mb-3"&#62;
          &#60;h3 class="text-success"&#62;Partie Enfant&#60;/h3&#62;
          &#60;app-enfant
            (dataSent)="receiveData($event)"
            (message)="receiveMessage($event)"
          &#62;&#60;/app-enfant&#62;
        &#60;/div&#62;

        &#60;div class="border ps-3 mb-3"&#62;
          &#60;p&#62;
            Message reçu de mon fils :&#60;span class="text-danger fs-4"&#62;&#123;&#123;
              mess
            &#125;&#125;&#60;/span&#62;
          &#60;/p&#62;
          &#60;p class="text-success fs-5"&#62;&#123;&#123; message &#125;&#125;&#60;/p&#62;
        &#60;/div&#62;
      &#60;/div&#62;
    &#60;/div&#62;
  &#96;,
&#125;)
export class AppComponent &#123;
  message: string = "";
  mess: string = "";

  receiveData(data: string) &#123;
    this.message = data;
  &#125;
  receiveMessage(data: string) &#123;
    this.mess = data;
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

            <pre #tab2 class="tab fw-bold" ngNonBindable>
import &#123; FormsModule &#125; from '&#64;angular/forms';
import &#123; CommonModule &#125; from '&#64;angular/common';
import &#123; Component, Output, EventEmitter &#125; from '&#64;angular/core';

&#64;Component(&#123;
  imports: [CommonModule, FormsModule],
  selector: 'app-enfant',
  template: &#96;
    &#60;input
      style="width:300px;"
      placeholder="Envoie un message à ton père ici"
      class="form-control  my-3"
      type="text"
      (input)="handleChange($event)"
    /&#62;
    &#60;button class="btn btn-success" (click)="sendMessage()"&#62;
      Dis bonjour à papa
    &#60;/button&#62;
  &#96;,
&#125;)
export class EnfantComponent &#123;
  &#64;Output() dataSent = new EventEmitter&#60;string&#62;();
  &#64;Output() message = new EventEmitter&#60;string&#62;();

  sendMessage() &#123;
    this.dataSent.emit('Bonjour Papa !');
  &#125;
  handleChange(event: Event) &#123;
    const target = event.target as HTMLTextAreaElement;
    this.message.emit(target.value);
  &#125;
&#125;

          </pre
            >
          </div>
        </div>
        <!-- --------------------Fin Template pour afficher le code source---------------- -->

      <div>
        ****************************************<span class="fs-2">cours</span
        >*************************************************
      </div>
      <pre>
<strong>1. &#64;Output():</strong>
Utilisé dans le Child Component pour définir une propriété qui sera un EventEmitter.
Cette propriété sert de canal pour émettre des données ou des événements vers le parent.
&#64;Output() eventName = new EventEmitter&lt;Type&gt;();

<strong>2. EventEmitter:</strong>
Une classe d'Angular qui permet d'émettre des événements personnalisés avec ou sans données:
&#64;Output() dataSent = new EventEmitter&lt;string&gt;();

<strong>3. Méthode emit():</strong>
Appelée dans le Child Component pour déclencher un événement et transmettre des données au parent.
Syntaxe : this.eventName.emit(data)
exemple: this.dataSent.emit('Message à transmettre au parent');

<strong>4. Écouteur d'événement dans le Parent:</strong>
Le parent utilise l'attribut (eventName) dans le template pour écouter l'événement émis par le child.
Syntaxe : (eventName)="methodToHandleEvent($event)"
exemple:
&lt;app-child (dataSent)="handleData($event)">&lt;/app-child>

<strong>5. Paramètre $event:</strong>
Représente les données transmises par emit() depuis le Child Component.
Accessible dans la méthode appelée par le parent.
handleData($event: string) &#123;
  console.log('Données reçues du Child :', $event);
  &#125;</pre>
    </div>
  `,
  styles: `
       // -------------------------style pour afficher le code source----------------
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
               background-color:#eef06f !important; /* Couleur de l'onglet actif */
               border-color: grey; /* Couleur de la bordure pour l'onglet actif */
             }
                h3 {
                  margin-top: 20px;
                }
                pre{
          font-size:15px;
         }
       // -------------------------Fin style pour afficher le code source----------------
       `,
})
export class Test7Component {
  message: string = '';
  mess: string = '';

  receiveData(data: string) {
    this.message = data;
  }
  receiveMessage(data: string) {
    this.mess = data;
  }
  // ----------------------ts pour afficher le code source--------------------
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
  copy2() {
    const element = this.infoTab2()?.nativeElement;
    if (element) navigator.clipboard.writeText(element.textContent);
    this.clicked = true;
    setTimeout(() => {
      this.clicked = false;
    }, 1500);
  }
  // ----------------------Fin ts pour afficher le code source--------------------
}

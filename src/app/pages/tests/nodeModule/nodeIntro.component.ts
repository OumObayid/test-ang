import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-node-intro',
  template: `
    <div class="container mt-5">
    <h1 class="text-center">🚀 Introduction à Node.js</h1>

    <!-- Section 1 : Qu'est-ce que Node.js ? -->
    <div class="card my-3">
        <div class="card-body">
            <h2 class="card-title">💡 Qu'est-ce que Node.js ?</h2>
            <p class="card-text">
                Node.js est un environnement d’exécution JavaScript qui permet
                d’exécuter du code en dehors d’un navigateur. Il utilise le moteur
                V8 de Google Chrome pour interpréter le JavaScript.
            </p>
            <p class="card-text">
                <strong>Pourquoi Node.js ?</strong>
            </p>
            <ul>
                <li>Il est rapide grâce à son moteur JavaScript V8.</li>
                <li>Il est basé sur un modèle asynchrone et non bloquant.</li>
                <li>Il permet de créer des applications backend puissantes.</li>
            </ul>
        </div>
    </div>

    <!-- Section 2 : Installation -->
    <div class="card my-3">
        <div class="card-body">
            <h2 class="card-title">⬇️ Installation de Node.js</h2>
            <p class="card-text">Pour installer Node.js, suivez ces étapes :</p>
            <ol>
                <li>
                    Rendez-vous sur le site officiel :
                    <a href="https://nodejs.org" target="_blank">https://nodejs.org</a>
                </li>
                <li>Téléchargez la version LTS (Long-Term Support).</li>
                <li>Installez-le en suivant les instructions.</li>
            </ol>
            <p class="card-text">Vérifiez l’installation avec ces commandes :</p>
            <div class="bg-light p-3 mb-3" style="font-size: 1.2em; border-radius: 5px;">
                <pre><code>node -v</code></pre>
            </div>
            <div class="bg-light p-3 mb-3" style="font-size: 1.2em; border-radius: 5px;">
                <pre><code>npm -v</code></pre>
            </div>
        </div>
    </div>

    <!-- Section 3 : Exécuter un script Node.js -->
    <div class="card my-3">
        <div class="card-body">
            <h2 class="card-title">💻 Exécuter un script Node.js</h2>
            <p class="card-text">
                Créez un fichier <code>app.js</code> et écrivez ce code :
            </p>
            <div class="bg-light p-3 mb-3" style="font-size: 1.2em; border-radius: 5px;">
                <pre><code>console.log("Hello, Node.js !");</code></pre>
            </div>
            <p class="card-text">Ensuite, exécutez-le dans le terminal :</p>
            <div class="bg-light p-3 mb-3" style="font-size: 1.2em; border-radius: 5px;">
                <pre><code>node app.js</code></pre>
            </div>
            <p class="card-text">Le terminal affichera :</p>
            <div class="bg-light p-3 mb-3" style="font-size: 1.2em; border-radius: 5px;">
                <pre><code>Hello, Node.js !</code></pre>
            </div>
        </div>
    </div>
</div>

  `,
  styles: [``],
})
export class NodeIntroComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

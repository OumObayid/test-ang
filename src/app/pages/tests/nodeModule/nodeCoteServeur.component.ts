import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-javascript-serveur',
  template: `
  <div class="container mt-5">
    <h1 class="text-center">
        🌐 Node.js : Le JavaScript côté serveur
    </h1>

    <!-- Section 1 : Pourquoi utiliser JavaScript côté serveur ? -->
    <div class="card my-3">
        <div class="card-body">
            <h2 class="card-title">
                🤔 Pourquoi utiliser JavaScript côté serveur ?
            </h2>
            <p class="card-text">
                JavaScript est traditionnellement utilisé côté client, mais avec Node.js, il peut maintenant être utilisé côté serveur.
                Voici quelques raisons pour lesquelles JavaScript côté serveur est avantageux :
            </p>
            <ul>
                <li><strong>Unification du langage :</strong> Utiliser le même langage sur le front-end et le back-end facilite le développement.</li>
                <li><strong>Grande communauté :</strong> JavaScript a une énorme communauté avec de nombreuses bibliothèques et frameworks.</li>
                <li><strong>Asynchrone par nature :</strong> Node.js utilise des appels non bloquants et des événements, ce qui le rend très efficace pour les applications en temps réel.</li>
            </ul>
        </div>
    </div>

    <!-- Section 2 : Fonctionnement de Node.js côté serveur -->
    <div class="card my-3">
        <div class="card-body">
            <h2 class="card-title">
                ⚙️ Fonctionnement de Node.js côté serveur
            </h2>
            <p class="card-text">
                Node.js repose sur un modèle basé sur des événements et un modèle non bloquant. Cela signifie qu'il peut gérer de multiples connexions simultanées sans être ralenti par des processus bloquants.
            </p>
            <p class="card-text">
                Cela permet à Node.js d'être particulièrement performant dans des applications comme les serveurs web ou les systèmes de messagerie en temps réel.
            </p>
            <p class="card-text">
                Voici les concepts clés :
            </p>
            <ul>
                <li><strong>Single-threaded :</strong> Node.js utilise un seul thread pour exécuter le code JavaScript, mais il gère les événements de manière asynchrone, ce qui permet de traiter de nombreuses requêtes sans bloquer le programme.</li>
                <li><strong>Event Loop :</strong> L'Event Loop permet de gérer les événements (par exemple, les requêtes HTTP) et de les exécuter de manière non bloquante.</li>
            </ul>
        </div>
    </div>

    <!-- Section 3 : Créer un serveur HTTP avec Node.js -->
    <div class="card my-3">
        <div class="card-body">
            <h2 class="card-title">
                🖥️ Créer un serveur HTTP avec Node.js
            </h2>
            <p class="card-text">
                Pour créer un serveur HTTP simple avec Node.js, vous pouvez utiliser le module natif <code>http</code>.
            </p>
            <p class="card-text">
                Voici un exemple de code pour créer un serveur HTTP qui répond aux requêtes avec un message "Hello, World!" :
            </p>
            <div class="bg-light p-3 mb-3" style="font-size: 1.2em; border-radius: 5px;">
                <pre><code>
const http = require('http');

const server = http.createServer((req, res) => &#123;
  res.writeHead(200, &#123; 'Content-Type': 'text/plain' &#125;);
  res.end('Hello, World!');
&#125;);

server.listen(3000, () => &#123;
  console.log('Server running at http://localhost:3000');
&#125;);
                </code></pre>
            </div>
            <p class="card-text">
                Ce code crée un serveur qui écoute les requêtes sur le port 3000 et répond avec "Hello, World!".
                Pour tester ce serveur, ouvrez votre navigateur et accédez à <code>http://localhost:3000</code>.
            </p>
        </div>
    </div>
</div>

`,
  styles: [``]
})
export class NodeCoteServeurComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}


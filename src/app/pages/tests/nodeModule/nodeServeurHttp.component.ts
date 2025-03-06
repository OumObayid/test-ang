import { Component } from '@angular/core';

@Component({
  selector: 'app-node-serveur-http',
  template: `
<div class="container mt-5">
    <h1 class="text-center">🖥️ Créer un serveur HTTP avec Node.js</h1>

    <!-- Section 1 : Introduction -->
    <div class="card my-3">
        <div class="card-body">
            <h2 class="card-title">🌐 Introduction</h2>
            <p class="card-text">
                Node.js permet de créer des serveurs web légers et rapides. Un serveur HTTP permet de traiter les requêtes des utilisateurs et de leur renvoyer des réponses, comme une page web ou des données JSON.
            </p>
            <p class="card-text">
                Node.js utilise son module natif <code>http</code> pour créer un serveur HTTP. Ce module permet d'écouter des requêtes et de renvoyer des réponses à l'utilisateur.
            </p>
        </div>
    </div>

    <!-- Section 2 : Créer un serveur HTTP basique -->
    <div class="card my-3">
        <div class="card-body">
            <h2 class="card-title">🖥️ Créer un serveur HTTP simple</h2>
            <p class="card-text">
                Pour créer un serveur HTTP avec Node.js, nous allons utiliser le module <code>http</code> natif.
            </p>
            <p class="card-text">
                Voici un exemple de code pour créer un serveur qui répond avec "Hello, World!" à chaque requête HTTP :
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
                Ce code crée un serveur qui écoute sur le port 3000 et renvoie "Hello, World!" à chaque requête.
                Vous pouvez tester cela en ouvrant votre navigateur et en accédant à <code>http://localhost:3000</code>.
            </p>
        </div>
    </div>

    <!-- Section 3 : Explication du code -->
    <div class="card my-3">
        <div class="card-body">
            <h2 class="card-title">🔍 Explication du code</h2>
            <p class="card-text">
                Analysons le code pour mieux comprendre son fonctionnement :
            </p>
            <ul>
                <li><strong>const http = require('http');</strong> : Cette ligne importe le module natif <code>http</code>, qui permet de créer un serveur HTTP.</li>
                <li><strong>http.createServer</strong> : Cette méthode crée un serveur HTTP. Elle prend une fonction de rappel avec deux arguments : <code>req</code> (la requête) et <code>res</code> (la réponse).</li>
                <li><strong>res.writeHead(200, &#123; 'Content-Type': 'text/plain' &#125;);</strong> : Cela envoie un code de statut HTTP 200 (OK) et définit le type de contenu comme texte brut.</li>
                <li><strong>res.end('Hello, World!');</strong> : Cela envoie le message "Hello, World!" au client et termine la réponse.</li>
                <li><strong>server.listen(3000, () => &#123; ... &#125;);</strong> : Cela fait en sorte que le serveur écoute sur le port 3000. Lorsque le serveur est prêt, il affiche un message dans la console.</li>
            </ul>
        </div>
    </div>

    <!-- Section 4 : Tester le serveur -->
    <div class="card my-3">
        <div class="card-body">
            <h2 class="card-title">🔧 Tester le serveur</h2>
            <p class="card-text">
                Pour tester ce serveur, procédez comme suit :
            </p>
            <ol>
                <li>Ouvrez un terminal et placez-vous dans le répertoire de votre fichier <code>server.js</code>.</li>
                <li>Exécutez la commande suivante : <code>node server.js</code></li>
                <li>Ouvrez votre navigateur et allez à l'adresse <code>http://localhost:3000</code>. Vous devriez voir "Hello, World!" affiché.</li>
            </ol>
        </div>
    </div>
</div>

  `,
  styles: [``]
})
export class NodeServeurHttpComponent {

}


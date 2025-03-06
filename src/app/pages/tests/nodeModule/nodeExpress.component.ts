import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-node-express',
  template: `
<div class="container mt-5">
  <h1 class="text-center">🚀 Introduction à Express.js</h1>

  <!-- Section 1 : Qu'est-ce qu'Express.js ? -->
  <div class="card my-3">
    <div class="card-body">
      <h2 class="card-title">💡 Qu'est-ce qu'Express.js ?</h2>
      <p class="card-text">
        Express.js est un framework web minimaliste pour Node.js qui facilite la
        création d'applications web et d'APIs.
      </p>
      <p class="card-text">
        Il est populaire en raison de sa simplicité, de sa flexibilité et de son
        extensibilité. Avec Express, vous pouvez gérer les requêtes HTTP, les
        réponses, les middlewares, et beaucoup d'autres fonctionnalités pour
        construire des applications web robustes.
      </p>
    </div>
  </div>

  <!-- Section 2 : Installation d'Express.js -->
  <div class="card my-3">
    <div class="card-body">
      <h2 class="card-title">⬇️ Installation d'Express.js</h2>
      <p class="card-text">
        Pour utiliser Express.js, vous devez d'abord l'installer. Suivez ces
        étapes :
      </p>
      <ol>
        <li>
          Assurez-vous d'avoir Node.js installé sur votre machine (si ce n'est
          pas déjà fait).
        </li>
        <li>Créez un projet Node.js avec <code>npm init</code>.</li>
        <li>Installez Express avec la commande suivante :</li>
      </ol>
      <div
        class="bg-light p-3 mb-3"
        style="font-size: 1.2em; border-radius: 5px"
      >
        <pre><code>npm install express</code></pre>
      </div>
      <p class="card-text">
        Cela ajoutera Express à votre projet dans le fichier
        <code>package.json</code>.
      </p>
    </div>
  </div>

  <!-- Section 3 : Créer un serveur avec Express.js -->
  <div class="card my-3">
    <div class="card-body">
      <h2 class="card-title">🖥️ Créer un serveur avec Express.js</h2>
      <p class="card-text">
        Une fois Express installé, vous pouvez l'utiliser pour créer un serveur
        web.
      </p>
      <p class="card-text">
        Voici un exemple de code pour créer un serveur Express qui répond avec
        "Hello, Express!" à chaque requête :
      </p>
      <div
        class="bg-light p-3 mb-3"
        style="font-size: 1.2em; border-radius: 5px"
      >
        <pre><code>
const express = require('express');
const app = express();

app.get('/', (req, res) => &#123;
    res.send('Hello, Express!');
&#125;);

app.listen(3000, () => &#123;
    console.log('Server running at http://localhost:3000');
&#125;);
                </code></pre>
      </div>
      <p class="card-text">
        Ce code crée un serveur Express qui écoute les requêtes HTTP sur le port
        3000 et renvoie "Hello, Express!" à chaque requête sur la route racine
        <code>/</code>.
      </p>
      <p class="card-text">
        Testez cela en ouvrant votre navigateur et en accédant à
        <code>http://localhost:3000</code>.
      </p>
    </div>
  </div>

  <!-- Section 4 : Explication du code -->
  <div class="card my-3">
    <div class="card-body">
      <h2 class="card-title">🔍 Explication du code</h2>
      <p class="card-text">
        Analysons le code pour mieux comprendre son fonctionnement :
      </p>
      <ul>
        <li>
          <strong>const express = require('express');</strong> : Cette ligne
          importe le module Express.
        </li>
        <li>
          <strong>const app = express();</strong> : Nous créons une instance de
          l'application Express.
        </li>
        <li>
          <strong>app.get('/', (req, res) => &#123; ... &#125;);</strong> :
          Cette ligne définit une route HTTP GET pour la route racine
          <code>/</code> et répond avec "Hello, Express!".
        </li>
        <li>
          <strong>app.listen(3000, () => &#123; ... &#125;);</strong> : Cela
          fait en sorte que le serveur écoute sur le port 3000 et affiche un
          message dans la console lorsque le serveur est prêt.
        </li>
      </ul>
    </div>
  </div>

  <!-- Section 5 : Tester le serveur Express -->
  <div class="card my-3">
    <div class="card-body">
      <h2 class="card-title">🔧 Tester le serveur Express</h2>
      <p class="card-text">Pour tester le serveur Express :</p>
      <ol>
        <li>
          Ouvrez un terminal et placez-vous dans le répertoire de votre projet.
        </li>
        <li>
          Exécutez la commande suivante : <code>node app.js</code> (ou le nom de
          votre fichier contenant le code).
        </li>
        <li>
          Ouvrez votre navigateur et accédez à
          <code>http://localhost:3000</code>. Vous devriez voir "Hello,
          Express!" s'afficher.
        </li>
      </ol>
    </div>
  </div>
</div>

  `,
  styles: [``]
})
export class NodeExpressComponent  {

}

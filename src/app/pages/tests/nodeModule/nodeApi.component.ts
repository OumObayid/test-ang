import { Component } from '@angular/core';

@Component({
  selector: 'app-node-api',
  template: `
<div class="container mt-5">
    <h1 class="text-center">🚀 Mini API avec Node.js et Express.js</h1>

    <!-- Section 1 : Introduction -->
    <div class="card my-3">
      <div class="card-body">
        <h2 class="card-title">💡 Introduction</h2>
        <p class="card-text">
          Dans cette section, nous allons créer une mini API avec Node.js et Express.js. Cette API permettra d'effectuer des opérations CRUD (Créer, Lire, Mettre à jour, Supprimer) sur des utilisateurs stockés dans une base de données MySQL.
        </p>
      </div>
    </div>

    <!-- Section 2 : Installation des dépendances -->
    <div class="card my-3">
      <div class="card-body">
        <h2 class="card-title">⬇️ Installation des dépendances</h2>
        <p class="card-text">
          Pour commencer, vous devez installer Node.js et Express. Voici comment procéder :
        </p>
        <div class="bg-light p-3 rounded">
          <pre><code class="fs-6">npm init -y</code></pre>
          <pre><code class="fs-6">npm install express mysql</code></pre>
        </div>
      </div>
    </div>

    <!-- Section 3 : Création du serveur -->
    <div class="card my-3">
      <div class="card-body">
        <h2 class="card-title">🖥️ Création du serveur avec Express</h2>
        <p class="card-text">
          Maintenant, nous allons créer un serveur avec Express.js qui interagit avec une base de données MySQL. Voici le fichier <code>app.js</code> :
        </p>
        <div class="bg-light p-3 rounded">
          <pre><code class="fs-6">
  const express = require('express');
  const mysql = require('mysql');

  const app = express();

  const db = mysql.createConnection(&#123;
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'my_database' // Remplacez par votre base de données
  &#125;);

  db.connect((err) => &#123;
    if (err) &#123;
      console.error('Erreur de connexion à la base de données:', err);
      return;
    &#125;
    console.log('Connecté à la base de données');
  &#125;);

  app.use(express.json());
          </code></pre>
        </div>
      </div>
    </div>

    <!-- Section 4 : Routes API CRUD -->
    <div class="card my-3">
      <div class="card-body">
        <h2 class="card-title">📡 Routes API CRUD</h2>
        <p class="card-text">
          Nous allons maintenant ajouter les routes pour effectuer des opérations CRUD sur les utilisateurs.
        </p>

        <!-- Créer un utilisateur -->
        <h3>Ajouter un utilisateur</h3>
        <div class="bg-light p-3 rounded">
          <pre><code class="fs-6">
  app.post('/users', (req, res) => &#123;
    const &#123; name, age &#125; = req.body;
    const user = &#123; name, age &#125;;
    db.query('INSERT INTO users SET ?', user, (err, result) => &#123;
      if (err) &#123;
        res.status(500)
        .json(&#123; message: 'Erreur lors de l\'ajout de l\'utilisateur', error: err &#125;);
      &#125; else &#123;
        res.status(201)
        .json(&#123; message: 'Utilisateur ajouté', userId: result.insertId &#125;);
      &#125;
    &#125;);
  &#125;);
          </code></pre>
        </div>

        <!-- Lire tous les utilisateurs -->
        <h3>Récupérer tous les utilisateurs</h3>
        <div class="bg-light p-3 rounded">
          <pre><code class="fs-6">
  app.get('/users', (req, res) => &#123;
    db.query('SELECT * FROM users', (err, results) => &#123;
      if (err) &#123;
        res.status(500)
        .json(&#123; message: 'Erreur de récupération des utilisateurs', error: err &#125;);
      &#125; else &#123;
        res.status(200).json(results);
      &#125;
    &#125;);
  &#125;);
          </code></pre>
        </div>

        <!-- Mettre à jour un utilisateur -->
        <h3>Mettre à jour un utilisateur</h3>
        <div class="bg-light p-3 rounded">
          <pre><code class="fs-6">
  app.put('/users/:id', (req, res) => &#123;
    const &#123; id &#125; = req.params;
    const &#123; name, age &#125; = req.body;
    const updatedUser = &#123; name, age &#125;;

    db.query('UPDATE users SET ? WHERE id = ?', [updatedUser, id], (err, result) => &#123;
      if (err) &#123;
        res.status(500)
        .json(&#123; message: 'Erreur lors de la mise à jour de l\'utilisateur', error: err &#125;);
      &#125; else &#123;
        res.status(200)
        .json(&#123; message: 'Utilisateur mis à jour', affectedRows: result.affectedRows &#125;);
      &#125;
    &#125;);
  &#125;);
          </code></pre>
        </div>

        <!-- Supprimer un utilisateur -->
        <h3>Supprimer un utilisateur</h3>
        <div class="bg-light p-3 rounded">
          <pre><code class="fs-6">
  app.delete('/users/:id', (req, res) => &#123;
    const &#123; id &#125; = req.params;
    db.query('DELETE FROM users WHERE id = ?', [id], (err, result) => &#123;
      if (err) &#123;
        res.status(500)
        .json(&#123; message: 'Erreur lors de la suppression de l\'utilisateur', error: err &#125;);
      &#125; else &#123;
        res.status(200)
        .json(&#123; message: 'Utilisateur supprimé', affectedRows: result.affectedRows &#125;);
      &#125;
    &#125;);
  &#125;);
          </code></pre>
        </div>
      </div>
    </div>

    <!-- Section 5 : Tester l'API -->
    <div class="card my-3">
      <div class="card-body">
        <h2 class="card-title">🧪 Tester l'API</h2>
        <p class="card-text">
          Vous pouvez tester cette API à l'aide de l'outil **Postman** ou **curl** dans votre terminal.
        </p>

        <h3>Ajouter un utilisateur</h3>
        <div class="bg-light p-3 rounded">
          <pre><code class="fs-6">
  curl -X POST http://localhost:3000/users -H "Content-Type: application/json"
       -d '&#123;"name": "John", "age": 30&#125;'
          </code></pre>
        </div>

        <h3>Récupérer tous les utilisateurs</h3>
        <div class="bg-light p-3 rounded">
          <pre><code class="fs-6">
  curl http://localhost:3000/users
          </code></pre>
        </div>

        <h3>Mettre à jour un utilisateur</h3>
        <div class="bg-light p-3 rounded">
          <pre><code class="fs-6">
  curl -X PUT http://localhost:3000/users/1 -H "Content-Type: application/json"
       -d '&#123;"name": "John Updated", "age": 31&#125;'
          </code></pre>
        </div>

        <h3>Supprimer un utilisateur</h3>
        <div class="bg-light p-3 rounded">
          <pre><code class="fs-6">
  curl -X DELETE http://localhost:3000/users/1
          </code></pre>
        </div>
      </div>
    </div>

    <!-- Section 6 : Conclusion -->
    <div class="card my-3">
      <div class="card-body">
        <h2 class="card-title">🏁 Conclusion</h2>
        <p class="card-text">
          Vous avez maintenant créé une mini API avec Node.js et Express.js qui permet de gérer des utilisateurs dans une base de données MySQL. Vous pouvez ajouter, récupérer, mettre à jour et supprimer des utilisateurs via des requêtes HTTP.
        </p>
        <p class="card-text">
          Vous pouvez étendre cette API pour ajouter des fonctionnalités comme l'authentification, la validation des entrées, ou l'intégration avec d'autres bases de données.
        </p>
      </div>
    </div>
  </div>

  <!-- Ajouter le style CSS pour la gestion du défilement horizontal -->

  `,

})
export class NodeApiComponent  {

}


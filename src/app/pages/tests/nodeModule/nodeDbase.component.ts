import { Component } from '@angular/core';

@Component({
  selector: 'app-node-dbase',
  template: `
<div class="container mt-5">
    <h1 class="text-center">🚀 Interagir avec une Base de Données</h1>

    <!-- Section 1 : Introduction à l'interaction avec une base de données -->
    <div class="card my-3">
        <div class="card-body">
            <h2 class="card-title">💡 Introduction à l'interaction avec une base de données</h2>
            <p class="card-text">
                Dans cette étape, nous allons voir comment connecter une application Node.js/Express à une base de données pour stocker et récupérer des données.
            </p>
            <p class="card-text">
                Nous utiliserons le module <strong>MySQL</strong> pour connecter notre serveur à une base de données relationnelle. Cependant, vous pouvez utiliser d'autres bases de données comme MongoDB si vous préférez.
            </p>
        </div>
    </div>

    <!-- Section 2 : Installer MySQL et le module Node.js pour MySQL -->
    <div class="card my-3">
        <div class="card-body">
            <h2 class="card-title">⬇️ Installer MySQL et le module Node.js pour MySQL</h2>
            <p class="card-text">
                Tout d'abord, assurez-vous que MySQL est installé sur votre machine. Vous pouvez le télécharger depuis <a href="https://dev.mysql.com/downloads/installer/" target="_blank">ici</a>.
            </p>
            <p class="card-text">
                Ensuite, vous devez installer le module Node.js pour MySQL avec la commande suivante :
            </p>
            <div class="bg-light p-3 mb-3" style="font-size: 1.2em; border-radius: 5px;">
                <pre><code>npm install mysql</code></pre>
            </div>
            <p class="card-text">
                Cela va ajouter le module <code>mysql</code> à votre projet.
            </p>
        </div>
    </div>

    <!-- Section 3 : Créer une connexion à la base de données -->
    <div class="card my-3">
        <div class="card-body">
            <h2 class="card-title">🔗 Créer une connexion à la base de données</h2>
            <p class="card-text">
                Une fois que vous avez installé le module MySQL, vous pouvez établir une connexion à votre base de données en utilisant le code suivant :
            </p>
            <div class="bg-light p-3 mb-3" style="font-size: 1.2em; border-radius: 5px;">
                <pre><code>
const mysql = require('mysql');

const db = mysql.createConnection(&#123;
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'my_database'
&#125;);

db.connect((err) => &#123;
  if (err) &#123;
    console.error('Error connecting to the database: ', err);
    return;
  &#125;
  console.log('Connected to the database!');
&#125;);
                </code></pre>
            </div>
            <p class="card-text">
                Ce code se connecte à une base de données MySQL appelée <code>my_database</code>. Vous devrez remplacer les informations de connexion (<code>user</code>, <code>password</code>, etc.) en fonction de votre propre configuration.
            </p>
        </div>
    </div>

    <!-- Section 4 : Effectuer des requêtes SQL -->
    <div class="card my-3">
        <div class="card-body">
            <h2 class="card-title">🔍 Effectuer des requêtes SQL</h2>
            <p class="card-text">
                Une fois la connexion établie, vous pouvez exécuter des requêtes SQL pour interagir avec la base de données. Voici quelques exemples :
            </p>

            <!-- Exemple 1 : Sélectionner des données -->
            <p class="card-text">
                Sélectionner toutes les données d'une table :
            </p>
            <div class="bg-light p-3 mb-3" style="font-size: 1.2em; border-radius: 5px;">
                <pre><code>
db.query('SELECT * FROM users', (err, results) => &#123;
  if (err) throw err;
  console.log('Results: ', results);
&#125;);
                </code></pre>
            </div>

            <!-- Exemple 2 : Ajouter des données -->
            <p class="card-text">
                Ajouter une entrée dans la table <code>users</code> :
            </p>
            <div class="bg-light p-3 mb-3" style="font-size: 1.2em; border-radius: 5px;">
                <pre><code>
const user = &#123; name: 'John Doe', age: 30 &#125;;
db.query('INSERT INTO users SET ?', user, (err, results) => &#123;
  if (err) throw err;
  console.log('User added: ', results);
&#125;);
                </code></pre>
            </div>

            <!-- Exemple 3 : Mettre à jour des données -->
            <p class="card-text">
                Mettre à jour une entrée dans la table <code>users</code> :
            </p>
            <div class="bg-light p-3 mb-3" style="font-size: 1.2em; border-radius: 5px;">
                <pre><code>
const updatedUser = &#123; age: 31 &#125;;
db.query('UPDATE users SET ? WHERE name = ?', [updatedUser, 'John Doe'], (err, results) => &#123;
  if (err) throw err;
  console.log('User updated: ', results);
&#125;);
                </code></pre>
            </div>

            <!-- Exemple 4 : Supprimer des données -->
            <p class="card-text">
                Supprimer une entrée de la table <code>users</code> :
            </p>
            <div class="bg-light p-3 mb-3" style="font-size: 1.2em; border-radius: 5px;">
                <pre><code>
db.query('DELETE FROM users WHERE name = ?', ['John Doe'], (err, results) => &#123;
  if (err) throw err;
  console.log('User deleted: ', results);
&#125;);
                </code></pre>
            </div>
        </div>
    </div>

    <!-- Section 5 : Gérer les erreurs et fermer la connexion -->
    <div class="card my-3">
        <div class="card-body">
            <h2 class="card-title">⚠️ Gérer les erreurs et fermer la connexion</h2>
            <p class="card-text">
                Il est important de gérer les erreurs correctement lors de l'exécution des requêtes. Si une erreur survient, elle doit être traitée pour éviter que le serveur ne plante.
            </p>
            <p class="card-text">
                Pour fermer la connexion à la base de données, vous pouvez utiliser la méthode <code>db.end()</code> :
            </p>
            <div class="bg-light p-3 mb-3" style="font-size: 1.2em; border-radius: 5px;">
                <pre><code>
db.end((err) => &#123;
  if (err) throw err;
  console.log('Database connection closed!');
&#125;);
                </code></pre>
            </div>
        </div>
    </div>
</div>

  `,
  styles: [``]
})
export class nodeDbaseComponent  {

}


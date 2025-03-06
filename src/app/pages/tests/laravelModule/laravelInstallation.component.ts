import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-installation-laravel',
  template: `
    <h1>📌 Partie 1 : Introduction et Pré-requis</h1>
    <h2>🔹 Installation de Laravel</h2>
    <h3>🔸 Méthode 1 : Installer Laravel via Composer</h3>
<p>pour que l'installation passe bien, Fermez xamp, vscode, tuez avec le gestionnaire de tache: php.exe, php-cgi.exe, httpd.exe, mysqld.exe</p>
    <p>Exécutez la commande suivante pour installer Laravel globalement :</p>
    <pre class="tab">composer global require laravel/installer</pre>
    <p>Ensuite, pour créer un nouveau projet Laravel :</p>
    <pre class="tab">laravel new mon_projet</pre>
    <p>OU si vous n’avez pas installé Laravel globalement :</p>
    <pre class="tab">
composer create-project --prefer-dist laravel/laravel mon_projet</pre
    >
    <h3>🔸 Méthode 2 : Cloner un projet Laravel existant</h3>
    <p>Si vous travaillez sur un projet déjà existant, utilisez :</p>
    <pre class="tab">
git clone https://github.com/utilisateur/projet-laravel.git
cd projet-laravel
composer install</pre
    >

    <p>
      Ensuite, créez un fichier .env (ou dupliquez .env.example) et générez la
      clé d’application :
    </p>
    <pre class="tab">
cp .env.example .env
php artisan key:generate</pre
    >
    <h3>🔸 Lancer le serveur local de Laravel</h3>
    <p>
      Une fois l’installation terminée, démarrez le serveur de développement
      avec :
    </p>
    <pre class="tab">php artisan serve</pre>

    <p>Cela lancera le projet à l’adresse http://127.0.0.1:8000/.</p>

    <h2>🔹 Structure du projet Laravel</h2>
    <p>
      Une fois installé, Laravel génère une structure de fichiers organisée :
    </p>
    <ul>
      <li>📂 app/ → Contient les modèles et la logique métier</li>
      <li>📂 bootstrap/ → Démarrage de l’application</li>
      <li>
        📂 config/ → Fichiers de configuration (base de données, mail, cache,
        etc.)
      </li>
      <li>📂 database/ → Migrations, seeders et factories</li>
      <li>📂 public/ → Point d’entrée (index.php), fichiers CSS, JS, images</li>
      <li>📂 resources/ → Vues Blade, fichiers SCSS et JS (Frontend)</li>
      <li>📂 routes/ → Définition des routes web et API (web.php, api.php)</li>
      <li>
        📂 storage/ → Fichiers temporaires (logs, cache, fichiers uploadés)
      </li>
      <li>📂 tests/ → Tests unitaires et fonctionnels</li>
      <li>📂 vendor/ → Dépendances gérées par Composer</li>
    </ul>
  `,
  styles: `
  .tab,p,li{
    font-size:15px;
  }
.tab {
           background-color: #f8f9fa;
           padding: 15px;
           border: 1px solid #ddd;
           border-radius: 5px;
           overflow-x: auto;
           font-family: monospace;
         }
  `,
})
export class LaravelInstallationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

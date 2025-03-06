import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deployement-laravel',
  template: `
<h1>🚀 Déploiement de Laravel sur un Hébergement Mutualisé (Sans GitHub ni SSH)</h1>

<p>Ce guide explique comment déployer un projet Laravel sur un hébergement mutualisé, sans utiliser GitHub ni SSH.</p>

<div class="step">
    <h2>✅ 1. Préparer le Projet Laravel en Local</h2>
    <p>Avant d’envoyer Laravel sur l’hébergement, nous devons le préparer :</p>
    <ul>
        <li>Vérifiez que votre projet fonctionne bien en local.</li>
        <li>Dans le terminal, exécutez la commande suivante :</li>
    </ul>
    <code>composer install --optimize-autoloader --no-dev</code>
    <p>📌 Cela installe uniquement les dépendances nécessaires en production.</p>

    <h3>🔹 Création du fichier <code>.env.production</code></h3>
    <p>Copiez le fichier <code>.env</code> et renommez-le <code>.env.production</code>.</p>
    <p>Modifiez les informations de connexion à la base de données :</p>
    <code>
    APP_ENV=production<br>
    APP_DEBUG=false<br>
    APP_KEY=base64:VOTRE_CLE<br><br>

    DB_CONNECTION=mysql<br>
    DB_HOST=serveur_mysql_hebergeur<br>
    DB_PORT=3306<br>
    DB_DATABASE=nom_de_votre_base<br>
    DB_USERNAME=nom_utilisateur<br>
    DB_PASSWORD=mot_de_passe
    </code>
    <p>Ensuite, générez la clé d’application :</p>
    <code>php artisan key:generate --env=production</code>
</div>

<div class="step">
    <h2>✅ 2. Exporter la Base de Données</h2>
    <p>Nous devons maintenant exporter la base de données locale et l’importer sur le serveur.</p>
    <ol>
        <li>Ouvrez phpMyAdmin en local.</li>
        <li>Sélectionnez votre base de données.</li>
        <li>Cliquez sur <strong>Exporter</strong> &gt; <strong>Format SQL</strong> &gt; <strong>Exécuter</strong>.</li>
        <li>Allez sur phpMyAdmin de votre hébergeur et importez le fichier SQL.</li>
    </ol>
</div>

<div class="step">
    <h2>✅ 3. Transférer Laravel sur l’Hébergement avec FTP</h2>
    <p>Utilisez <strong>FileZilla</strong> pour envoyer les fichiers sur votre hébergement :</p>
    <ol>
        <li>Connectez-vous à votre hébergement FTP avec FileZilla.</li>
        <li>Accédez au dossier <code>/public_html</code> ou <code>/www</code>.</li>
        <li>Envoyez :
            <ul>
                <li>Le contenu du dossier <code>public</code> dans <code>/public_html</code>.</li>
                <li>Le reste du projet dans un dossier nommé <code>laravel</code>.</li>
            </ul>
        </li>
    </ol>
</div>

<div class="step">
    <h2>✅ 4. Modifier <code>index.php</code> pour Pointer vers Laravel</h2>
    <p>Dans <code>/public_html/index.php</code>, changez :</p>
    <code>
    require __DIR__.'/../bootstrap/autoload.php';<br>
    $app = require_once __DIR__.'/../bootstrap/app.php';
    </code>
    <p>👉 Modifiez pour pointer vers votre dossier Laravel :</p>
    <code>
    require __DIR__.'/../laravel/bootstrap/autoload.php';<br>
    $app = require_once __DIR__.'/../laravel/bootstrap/app.php';
    </code>
</div>

<div class="step">
    <h2>✅ 5. Configurer les Permissions des Fichiers</h2>
    <p>Certains fichiers doivent être accessibles en écriture :</p>
    <code>chmod -R 775 storage bootstrap/cache</code>
    <p>Si vous n’avez pas <strong>SSH</strong>, utilisez <strong>FileZilla</strong> :</p>
    <ul>
        <li>Clic droit sur <code>storage/</code> et <code>bootstrap/cache/</code>.</li>
        <li>Sélectionnez <strong>Permissions</strong> &gt; <strong>775</strong>.</li>
    </ul>
</div>

<div class="step">
    <h2>✅ 6. Finaliser le Déploiement</h2>
    <p>Maintenant, accédez à votre site : <code>https://votre-domaine.com</code></p>
    <p>Si vous voyez une erreur, activez temporairement le mode debug dans <code>.env.production</code> :</p>
    <code>APP_DEBUG=true</code>
    <p>Une fois que tout fonctionne, remettez <code>APP_DEBUG=false</code>.</p>
</div>

<div class="step">
    <h2>🎯 Conclusion</h2>
    <ul>
        <li>✅ Méthode simple sans GitHub ni SSH</li>
        <li>✅ Utilisation de FTP pour transférer les fichiers</li>
        <li>✅ Importation de la base de données avec phpMyAdmin</li>
        <li>✅ Configuration des permissions et du fichier <code>index.php</code></li>
    </ul>
    <p>🚀 <strong>Votre application Laravel est maintenant en ligne ! 🎉</strong></p>
</div>
  `,
  styles: `
 body {
            font-family: Arial, sans-serif;
            margin: 40px;
            line-height: 1.6;
        }
        h1, h2 {
            color: #2c3e50;
        }
        code {
            background-color: #f4f4f4;
            padding: 5px;
            border-radius: 5px;
            font-size:15px;
        }
        .step {
            margin-bottom: 20px;
            padding: 10px;
            background: #ecf0f1;
            border-left: 5px solid #3498db;
        }
  `,
})
export class LaravelDeployementComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

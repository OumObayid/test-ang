import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pre-requis-laravel',
  template:`
  <h1>📌 Partie 1 : Introduction et Pré-requis</h1>
<h2>🔹 2. Pré-requis techniques</h2>
<p>Pour commencer à utiliser Laravel, vous devez vous assurer que votre environnement de développement répond aux exigences techniques suivantes :</p>
<h3>🔸 Outils nécessaires:</h3>
<ul>
  <li>🛠 PHP (>= 8.0 recommandé) – Laravel fonctionne avec PHP, donc il est essentiel d’avoir une version récente.</li>
  <li>🛠 Composer – Un gestionnaire de dépendances pour PHP qui permet d’installer Laravel et ses bibliothèques.<br>
  - Télécharge et installe Composer depuis le site officiel(https://getcomposer.org/download/)<br>
  - Ajouter Composer à la variable d’environnement:<br>
  Ouvre l'explorateur de fichiers → Clique droit sur "Ce PC" → Propriétés
  Paramètres avancés du système → Variables d’environnement<br>
  Dans la section "Variables système", cherche "Path" → Édite<br>
  Ajoute le chemin de Composer, généralement :<br>
       C:\\ProgramData\\ComposerSetup\\bin ( à verifier )<br>
       ou<br>
       C:\\Program Files\\Composer ( à verifier )
  </li>
  <li>🛠 Base de données – MySQL, PostgreSQL ou SQLite (selon votre choix).</li>
  <li>🛠 Serveur web local – Laravel intègre un serveur interne (php artisan serve), mais vous pouvez aussi utiliser Apache ou Nginx.</li>
  <li>🛠 Un éditeur de code – VS Code, PHPStorm ou Sublime Text sont de bons choix.</li>
</ul>
<h3>🔸Vérifier votre environnement:</h3>
<p>Pour voir si PHP est installé :</p>
<pre class="tab">php -v</pre>
<p>Pour vérifier Composer :</p>
<pre class="tab">composer -V</pre>
<p>Pour vérifier MySQL :</p>
<pre class="tab">mysql --version</pre>
<p>Si un de ces outils manque, installez-les avant de continuer.</p>

  ` ,
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
  `
})
export class LaravelPrerequisComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}


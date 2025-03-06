import { Component } from '@angular/core';

@Component({
  selector: 'app-angular-depl-git',
  imports: [],
  template: `
    <h1>🚀 Déploiement d’une application Angular sur GitHub Pages</h1>
    <hr />
    <p>
      Dans ce cours, nous allons apprendre à déployer une application Angular
      sur GitHub Pages en quelques étapes.
    </p>
    <h2>📌 1. Prérequis</h2>
    <div>
      <p>Avant de commencer, assurez-vous d’avoir :</p>
      <p>✅ Un projet Angular prêt à être déployé.</p>
      <p>✅ Un compte GitHub avec un dépôt pour votre projet.</p>
      <p>✅ Node.js et Angular CLI installés sur votre machine.</p>
    </div>
    <h2>📌 2. Configurer Angular pour le déploiement</h2>
    <h4>🔹 Étape 1 : Installer angular-cli-ghpages</h4>
    <p>
      Ce package permet de déployer l’application directement sur GitHub Pages.
    </p>
    <pre class="tab">npm install -g angular-cli-ghpages</pre>
    <h4>🔹 Étape 2 : Construire l’application Angular</h4>
    <p>
      Avant de déployer, nous devons générer les fichiers optimisés pour la
      production.
    </p>
    <p>Exécutez cette commande :</p>
    <pre class="tab">
ng build --output-path=dist --base-href="/NOM_DU_REPO_GITHUB/"
</pre>
    <h4>📌 Explication :</h4>
    <p>
      --output-path=dist → Génère les fichiers de l’application dans le dossier
      dist/
    </p>
    <p>
      --base-href="/NOM_DU_REPO_GITHUB/" → Définit le chemin de base correct
      pour GitHub Pages.
    </p>
    <p>⚠️ Remplacez NOM_DU_REPO_GITHUB par le nom réel de votre dépôt.</p>
    <h2>📌 3. Déployer sur GitHub Pages</h2>
    <h4>🔹 Étape 3 : Initialiser Git dans votre projet</h4>
    <p>
      Si ce n’est pas encore fait, initialisez Git et ajoutez votre projet à un
      dépôt distant :
    </p>
    <pre class="tab">
git init
git remote add origin https://github.com/VOTRE_NOM_UTILISATEUR/NOM_DU_REPO_GITHUB.git
git add .
git commit -m "Déploiement initial"
git push -u origin main
</pre>
    <p>
      ⚠️ Remplacez VOTRE_NOM_UTILISATEUR et NOM_DU_REPO_GITHUB par vos
      informations.
    </p>
    <h4>🔹 Étape 4 : Déployer sur GitHub Pages</h4>
    <p>Utilisez la commande suivante pour publier l’application :</p>
    <pre class="tab">
npx angular-cli-ghpages --dir=dist
</pre>
    <p>📌 Explication :</p>
    <p>--dir=dist → Indique que les fichiers à déployer sont dans le dossier dist/.</p>
    <h2>📌 4. Activer GitHub Pages</h2>
    <ul>
      <li>Allez sur votre dépôt GitHub.
      </li>
      <li>Allez dans l’onglet "Settings" (Paramètres).
      </li>
      <li>Cliquez sur "Pages" dans la barre latérale gauche.
      </li>
      <li>Dans "Source", sélectionnez la branche gh-pages.
      </li>
      <li>Enregistrez et attendez quelques minutes.
      </li>
    </ul>
    <p>Votre application sera disponible à l’adresse :</p>
    <pre class="tab">https://VOTRE_NOM_UTILISATEUR.github.io/NOM_DU_REPO_GITHUB/
    </pre>
    <h2>📌 5. Tester et Mettre à Jour
    </h2>
    <p>Si vous modifiez votre application Angular, refaites simplement :</p>
    <pre class="tab">ng build --output-path=dist --base-href="/NOM_DU_REPO_GITHUB/"
npx angular-cli-ghpages --dir=dist
</pre>
<p>Vous pouvez ensuite rafraîchir la page GitHub Pages pour voir les changements.
</p>
  `,
  styles: `
   pre,p {
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
export class AngularDeplGithubComponent {}

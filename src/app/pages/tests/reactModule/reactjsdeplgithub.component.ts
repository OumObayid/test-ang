import { Component } from '@angular/core';

@Component({
  selector: 'app-reactjs',
  imports: [],
  template: `
    <h1>Déploiement d'une application React.js sur GitHub Pages</h1>
    <hr>
    <p>Dans ce cours, tu vas apprendre à déployer une application React.js sur
    GitHub Pages en suivant ces étapes :</p>
    <ul>
      <li>✅ Créer et configurer le projet React</li>
      <li>✅ Installer et configurer gh-pages</li>
      <li>✅ Déployer sur GitHub Pages</li>
      <li>✅ Mettre à jour le site après modification</li>
    </ul>
    <h2>1️⃣ Prérequis</h2>
    <p>Avant de commencer, assure-toi d’avoir :</p>
    <ul>
      <li>✅ Node.js installé</li>
      <li>✅ Git installé</li>
      <li>✅ Un compte GitHub</li>
      <li>✅ Une application React.js prête à être déployée</li>
    </ul>
    <h2>2️⃣ Créer un projet React (si tu n'en as pas encore)</h2>
    <p>Si tu n'as pas encore d'application React, crée-en une avec :</p>
    <pre class="tab">
npx create-react-app my-app
cd my-app
git init
</pre>
    <p>Ajoute ton projet sur GitHub :</p>
    <pre class="tab">
git remote add origin https://github.com/VOTRE_NOM_UTILISATEUR/NOM_DU_REPO.git
git add .
git commit -m "Initial commit"
git push -u origin main
</pre>
    <h2>3️⃣ Installer gh-pages</h2>
    <p>Dans ton projet React, installe le package gh-pages :</p>

    <pre class="tab">npm install gh-pages --save-dev</pre>
    <h2>4️⃣ Configurer package.json</h2>
    <p>Ajoute cette ligne en haut de package.json :</p>
    <pre class="tab">
"homepage": "https://VOTRE_NOM_UTILISATEUR.github.io/NOM_DU_REPO"
</pre>
    <p>Ensuite, modifie la section "scripts" :</p>
    <pre class="tab">
"scripts": &#123;
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
&#125;
</pre>
    <p>📌 Explication :</p>
    <ul>
      <li>"homepage" → Définit l'URL où ton site sera hébergé.</li>
      <li>"predeploy" → Génère les fichiers statiques dans build/.</li>
      <li>"deploy" → Envoie le dossier build/ sur GitHub Pages.</li>
    </ul>
    <h2>5️⃣ Déployer l'application</h2>
    <p>Exécute cette commande :</p>
    <pre class="tab">
npm run deploy
</pre>
    <p>Cela va :</p>
    <ul>
      <li>Générer le build de l’application (npm run build).</li>
      <li>Déployer sur GitHub Pages via la branche gh-pages.</li>
    </ul>

    <h2>6️⃣ Activer GitHub Pages</h2>
    <ul>
      <li>Va sur GitHub → "Settings" → "Pages"</li>
      <li>Dans "Source", sélectionne gh-pages</li>
      <li>Enregistre et attends quelques minutes</li>
      <li>Ton site sera disponible ici :</li>
    </ul>
    <pre class="tab">
https://VOTRE_NOM_UTILISATEUR.github.io/NOM_DU_REPO/
    </pre
    >
    <h2>7️⃣ Mettre à jour l’application</h2>
    <p>Chaque fois que tu fais une modification, exécute :</p>
    <pre class="tab">
npm run deploy
    </pre
    >
    <p>Cela mettra à jour ton site automatiquement.</p>
  `,
  styles: `
pre,p ,ul{
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
export class ReactjsDeplGithubComponent {}

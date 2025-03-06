import { Component } from '@angular/core';

@Component({
  selector: 'app-reactInstallation',
  template: `
<section>
  <h1>🚀 Installation de React.js</h1>
  <hr>
  <p style="font-size: 16px;">
    Pour commencer avec React.js, vous devez d'abord installer Node.js, qui inclut npm (Node Package Manager).
    Une fois Node.js installé, vous pouvez créer un projet React en utilisant l'une des méthodes suivantes.
  </p>

  <h2>⚙️ Installation via Create React App</h2>
  <p style="font-size: 16px;">
    Create React App est l'outil officiel pour créer une application React avec une configuration prête à l'emploi.
  </p>
  <pre style="background-color: #f4f4f4; padding: 10px; border-radius: 5px; font-size: 16px;">
    <code>
      npx create-react-app mon-projet
      cd mon-projet
      npm start
    </code>
  </pre>
  <p style="font-size: 16px;">
    Cette commande va générer un projet React et lancer un serveur de développement.
  </p>

  <h2>⚡ Installation avec Vite (Plus rapide)</h2>
  <p style="font-size: 16px;">
    Vite est un outil moderne qui permet de créer un projet React rapidement avec une configuration minimale.
  </p>
  <pre style="background-color: #f4f4f4; padding: 10px; border-radius: 5px; font-size: 16px;">
    <code>
      npm create vite&#64;latest mon-projet --template react
      cd mon-projet
      npm install
      npm run dev
    </code>
  </pre>
  <p style="font-size: 16px;">
    Cette méthode est recommandée pour une meilleure performance et un temps de démarrage réduit.
  </p>

  <h2>🛠 Vérification de l'installation</h2>
  <p style="font-size: 16px;">
    Après l'installation, ouvrez un navigateur et accédez à <strong>http://localhost:3000</strong> (ou le port spécifié) pour voir votre projet React en action.
  </p>

  <h2>🏁 Conclusion</h2>
  <p style="font-size: 16px;">
    Maintenant que vous avez installé React.js, vous pouvez commencer à développer votre première application.
    Dans la prochaine section, nous explorerons la structure d'un projet React et les fichiers principaux.
  </p>
</section>

  `,
  styles: [``]
})
export class ReactInstallationComponent  {

}


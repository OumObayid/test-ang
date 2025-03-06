import { Component } from '@angular/core';

@Component({
  selector: 'app-ReactQuoi',
  template: `
<section>
  <h1>🚀 Qu'est-ce que React.js ?</h1>
  <hr>
  <p style="font-size: 16px;">
    React.js est une bibliothèque JavaScript open-source développée par Facebook.
    Elle est utilisée pour créer des interfaces utilisateur interactives et dynamiques,
    principalement pour les applications web à page unique (SPA - Single Page Applications).
  </p>

  <h2>📜 Historique de React.js</h2>
  <p style="font-size: 16px;">
    React a été créé par Jordan Walke, un ingénieur de Facebook, et a été rendu public en 2013.
    Depuis, il est devenu l'un des outils les plus populaires pour le développement web moderne.
  </p>

  <h2>❓ Pourquoi utiliser React.js ?</h2>
  <ul style="font-size: 16px;">
    <li>🔄 <strong>Composants réutilisables :</strong> React permet de créer des composants indépendants et réutilisables.</li>
    <li>⚡ <strong>Virtual DOM :</strong> Il optimise les mises à jour de l'interface utilisateur en utilisant un DOM virtuel.</li>
    <li>🔀 <strong>Unidirectional Data Flow :</strong> La gestion des données est plus prévisible grâce au flux de données unidirectionnel.</li>
    <li>🌍 <strong>Écosystème riche :</strong> Il possède un large écosystème avec de nombreuses bibliothèques et outils complémentaires.</li>
  </ul>

  <h2>🔍 Principales caractéristiques de React.js</h2>
  <ul style="font-size: 16px;">
    <li>📝 <strong>JSX :</strong> Une syntaxe qui permet d'écrire du HTML directement dans JavaScript.</li>
    <li>🔧 <strong>Composants :</strong> Tout dans React est basé sur des composants réutilisables.</li>
    <li>📦 <strong>État (State) et Props :</strong> Gestion efficace des données et des interactions.</li>
    <li>⚙️ <strong>Hooks :</strong> Introduits avec React 16.8, ils permettent d'utiliser l'état et d'autres fonctionnalités dans les composants fonctionnels.</li>
  </ul>

  <h2>💻 Exemple de code React</h2>
  <pre style="background-color: #f4f4f4; padding: 10px; border-radius: 5px; font-size: 16px;">
    <code>
      import React from 'react';

      function App() &#123;
        return (
          &#60;div&#62;
            &#60;h1&#62;Bienvenue sur React&#60;/h1&#62;
            &#60;p&#62;Ceci est un exemple de composant React.&#60;/p&#62;
          &#60;/div&#62;
        );
      &#125;

      export default App;
    </code>
  </pre>

  <h2>🏁 Conclusion</h2>
  <p style="font-size: 16px;">
    React.js est une bibliothèque puissante et flexible qui simplifie le développement d'interfaces utilisateur modernes.
    Son approche basée sur les composants, son utilisation du Virtual DOM et son écosystème riche en font un choix idéal
    pour les développeurs web.
  </p>
</section>

  `,
  styles: [``]
})
export class ReactQuoiComponent  {

}


import { Component } from '@angular/core';

@Component({
  selector: 'app-reactTests',
  template: `
  <h1 style="font-size: 24px;">🎯 Introduction aux Tests React</h1>

<section>
    <h2 style="font-size: 20px;">💡 Pourquoi tester les composants React ?</h2>
    <p style="font-size: 16px;">
        Tester les composants React est essentiel pour garantir que votre code fonctionne correctement et que les mises à jour futures ne cassent pas des fonctionnalités existantes.
        React permet de tester les composants de manière isolée, ce qui permet d'améliorer la stabilité de votre application.
    </p>

    <h2 style="font-size: 20px;">🔎 Les différents types de tests</h2>
    <ul style="font-size: 16px;">
        <li><strong>Tests unitaires</strong> : Tester une petite unité fonctionnelle, comme un composant ou une fonction.</li>
        <li><strong>Tests d'intégration</strong> : Tester l'intégration de plusieurs composants ou d'une fonctionnalité complète.</li>
        <li><strong>Tests de bout en bout</strong> : Tester l'application dans son ensemble, du front-end au back-end.</li>
    </ul>

    <h2 style="font-size: 20px;">🚀 Outils pour les tests React</h2>
    <p style="font-size: 16px;">
        React dispose de plusieurs outils pour effectuer des tests, principalement **Jest** et **React Testing Library**.
    </p>
    <ul style="font-size: 16px;">
        <li><strong>Jest</strong> : Un framework de test populaire utilisé avec React. Il offre des fonctionnalités telles que les tests asynchrones, la simulation d'événements et la couverture de code.</li>
        <li><strong>React Testing Library</strong> : Une bibliothèque qui permet de tester les composants React de manière à se concentrer sur leur comportement, en simulant des interactions utilisateur.</li>
    </ul>

    <h2 style="font-size: 20px;">🔨 Installation des outils de test</h2>
    <p style="font-size: 16px;">
        Pour commencer à tester vos composants React, vous devez installer Jest et React Testing Library dans votre projet :
    </p>

    <pre style="font-size: 16px; background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
<code>
npm install --save-dev jest &#64;testing-library/react &#64;testing-library/jest-dom
</code></pre>

    <h2 style="font-size: 20px;">📖 Structure des tests</h2>
    <p style="font-size: 16px;">
        Les fichiers de test sont généralement placés dans un répertoire &#96;__tests__&#96; ou à côté des fichiers des composants, avec l'extension &#96;.test.js&#96; ou &#96;.spec.js&#96;.
        Exemple : &#96;MyComponent.test.js&#96;.
    </p>

    <h2 style="font-size: 20px;">🔧 Configuration de Jest</h2>
    <p style="font-size: 16px;">
        Par défaut, React crée une configuration de test de base pour vous. Si vous utilisez une configuration personnalisée de Jest, vous devrez peut-être modifier le fichier &#96;jest.config.js&#96; pour configurer le test.
    </p>

    <pre style="font-size: 16px; background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
<code>
// Exemple de fichier jest.config.js
module.exports = &#123;
  testEnvironment: "jsdom",
&#125;
</code></pre>

    <h2 style="font-size: 20px;">💡 Meilleures pratiques pour les tests React</h2>
    <ul style="font-size: 16px;">
        <li>✨ Testez le comportement de vos composants, pas leur implémentation interne.</li>
        <li>🎯 Rédigez des tests qui simulent des interactions utilisateur (clics, soumissions de formulaires, etc.).</li>
        <li>🔄 Essayez de maintenir vos tests indépendants des données externes (API, etc.).</li>
    </ul>

    <h2 style="font-size: 20px;">🔍 Conclusion</h2>
    <p style="font-size: 16px;">
        L'ajout de tests dans vos applications React permet de détecter plus tôt les bugs et d'améliorer la qualité du code.
        Utiliser Jest et React Testing Library simplifie l'écriture et l'exécution des tests.
    </p>
</section>

  `,
  styles: [``]
})
export class ReactTestsComponent  {

}


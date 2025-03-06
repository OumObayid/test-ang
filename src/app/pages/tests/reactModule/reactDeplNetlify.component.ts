import { Component } from '@angular/core';

@Component({
  selector: 'app-reactDeplNetlify',
  template: `
<h1 style="font-size: 24px;">🌐 Déploiement avec Netlify</h1>

<section>
    <h2 style="font-size: 20px;">🚀 Introduction à Netlify</h2>
    <p style="font-size: 16px;">
        Netlify est une plateforme de déploiement qui simplifie le processus de mise en ligne d'applications modernes, comme celles développées avec React.js.
        Elle offre une intégration continue (CI/CD), un hébergement rapide, et la possibilité de déployer directement depuis un dépôt GitHub ou GitLab.
    </p>

    <h2 style="font-size: 20px;">⚙️ Étapes de Déploiement sur Netlify</h2>
    <p style="font-size: 16px;">
        Pour déployer votre application React.js sur Netlify, suivez ces étapes :
    </p>

    <h3 style="font-size: 18px;">1. Préparer votre application React</h3>
    <p style="font-size: 16px;">
        Avant de déployer votre application, vous devez la préparer en créant une version optimisée pour la production.
        Utilisez la commande suivante pour générer les fichiers de production dans le dossier &#96;build&#96; :
    </p>

    <pre style="font-size: 16px; background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
<code>
npm run build
</code></pre>

    <h3 style="font-size: 18px;">2. Créer un compte sur Netlify</h3>
    <p style="font-size: 16px;">
        Allez sur <a href="https://www.netlify.com/" target="_blank" style="color: #0077cc;">Netlify</a> et créez un compte en utilisant votre compte GitHub ou en vous inscrivant directement.
        Une fois connecté, vous serez redirigé vers le tableau de bord de Netlify.
    </p>

    <h3 style="font-size: 18px;">3. Connecter votre dépôt GitHub (si nécessaire)</h3>
    <p style="font-size: 16px;">
        Si vous avez un dépôt GitHub contenant votre code, vous pouvez connecter directement votre dépôt à Netlify.
        Cela permet de déployer automatiquement les mises à jour de votre application à chaque modification du code.
    </p>

    <h3 style="font-size: 18px;">4. Déployer manuellement depuis votre dossier &#96;build&#96;</h3>
    <p style="font-size: 16px;">
        Si vous n'utilisez pas GitHub, vous pouvez également déployer votre application manuellement.
        Pour cela, il suffit de glisser et déposer le dossier &#96;build&#96; généré dans la fenêtre de déploiement de Netlify.
    </p>

    <h3 style="font-size: 18px;">5. Configuration de Netlify</h3>
    <p style="font-size: 16px;">
        Une fois votre code téléchargé, Netlify détectera automatiquement que vous avez une application React. Vous pouvez configurer les paramètres de déploiement en fonction de vos besoins.
        Généralement, pour React, les paramètres par défaut fonctionneront parfaitement :
    </p>

    <pre style="font-size: 16px; background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
<code>
Build command: npm run build
Publish directory: build
</code></pre>

    <h3 style="font-size: 18px;">6. Déploiement automatique</h3>
    <p style="font-size: 16px;">
        Si vous avez connecté votre dépôt GitHub, Netlify configurera un déploiement automatique.
        Chaque fois que vous poussez de nouvelles modifications dans votre dépôt, Netlify redéploiera automatiquement votre application.
    </p>

    <h2 style="font-size: 20px;">📦 Fonctionnalités supplémentaires</h2>
    <p style="font-size: 16px;">
        Netlify offre plusieurs fonctionnalités utiles pour vos applications :
    </p>
    <ul style="font-size: 16px;">
        <li>HTTPS gratuit avec un certificat SSL automatique.</li>
        <li>Fonction de gestion des domaines personnalisés.</li>
        <li>Redirections et réécritures d'URL pour la gestion des routes.</li>
        <li>Formulaires et gestion des soumissions de formulaires.</li>
    </ul>

    <h2 style="font-size: 20px;">🎉 Conclusion</h2>
    <p style="font-size: 16px;">
        Le déploiement avec Netlify est simple, rapide et puissant, surtout pour les applications React.
        En quelques étapes, vous pouvez mettre en ligne votre application et bénéficier d'un hébergement performant avec une intégration continue.
    </p>
</section>

  `,
  styles: [``]
})
export class ReactDeplNetlifyComponent  {

}


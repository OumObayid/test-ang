import { Component } from '@angular/core';

@Component({
  selector: 'app-reactCycle',
  template: `
<h1 style="font-size: 24px;">🚀 Le Hook useEffect: Cycle de Vie dans React</h1>

<section>
    <h2 style="font-size: 20px;">💡 Introduction au Hook useEffect</h2>
    <p style="font-size: 16px;">
        Le hook <code>useEffect</code> permet d'effectuer des effets secondaires dans vos composants React. Un effet secondaire peut être toute opération qui modifie l'état en dehors du processus de rendu du composant. Cela inclut des opérations telles que des appels API, la manipulation du DOM, ou la souscription à des flux de données. Le hook <code>useEffect</code> remplace l'utilisation des méthodes de cycle de vie des composants de classe comme <code>componentDidMount</code>, <code>componentDidUpdate</code> et <code>componentWillUnmount</code>.
    </p>

    <h3 style="font-size: 16px;">⚙️ Syntaxe du Hook useEffect</h3>
    <p style="font-size: 16px;">
        La syntaxe de base du hook <code>useEffect</code> est très simple. Il prend une fonction de rappel (callback) qui s'exécute après chaque rendu du composant, et un tableau de dépendances optionnel pour contrôler quand cet effet doit être déclenché.
    </p>
    <pre style="font-size: 16px; background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
<code>
import React, &#123; useState, useEffect &#125; from 'react';

function Example() &#123;
  const [count, setCount] = useState(0);

  useEffect(() => &#123;
    document.title = 'Vous avez cliqué ' + count + ' fois';
  &#125;, [count]);

  return (
    &#60;div&#62;
      &#60;h1&#62;Vous avez cliqué &#123;count&#125; fois&#60;/h1&#62;
      &#60;button onClick=&#123;() => setCount(count + 1)&#125;&#62;Cliquez ici&#60;/button&#62;
    &#60;/div&#62;
  &#125;

export default Example;
</code></pre>
    <p style="font-size: 16px;">
        Dans cet exemple, l'effet change le titre du document en fonction de l'état du compteur <code>count</code>. Le hook <code>useEffect</code> est déclenché après chaque rendu, mais uniquement lorsque <code>count</code> change grâce au tableau de dépendances.
    </p>

    <h3 style="font-size: 16px;">🖱️ Le Hook useEffect et le Cycle de Vie</h3>
    <p style="font-size: 16px;">
        Le hook <code>useEffect</code> peut être utilisé pour imiter les différents cycles de vie des composants de classe, comme le montage, la mise à jour, et le démontage du composant.
    </p>

    <h4 style="font-size: 16px;">🔄 Composant Monté: componentDidMount</h4>
    <p style="font-size: 16px;">
        Lorsque le tableau de dépendances est vide, l'effet ne se déclenche qu'une seule fois, après le premier rendu du composant. Cela ressemble au comportement de <code>componentDidMount</code> dans les composants de classe.
    </p>
    <pre style="font-size: 16px; background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
<code>
useEffect(() => &#123;
  // Code exécuté une fois après le premier rendu
  console.log('Composant monté');
&#125;, []);  // Le tableau vide signifie qu'il ne s'exécute qu'une fois
</code></pre>

    <h4 style="font-size: 16px;">🔄 Composant Mise à Jour: componentDidUpdate</h4>
    <p style="font-size: 16px;">
        Lorsque vous passez une liste de dépendances au hook <code>useEffect</code>, il sera appelé chaque fois qu'une des dépendances change. Cela imite le comportement de <code>componentDidUpdate</code> dans les composants de classe.
    </p>
    <pre style="font-size: 16px; background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
<code>
useEffect(() => &#123;
  // Code exécuté chaque fois que "count" change
  console.log('Composant mis à jour: ', count);
&#125;, [count]);  // Se déclenche lorsque "count" change
</code></pre>

    <h4 style="font-size: 16px;">🔄 Composant Démonté: componentWillUnmount</h4>
    <p style="font-size: 16px;">
        Si vous retournez une fonction de nettoyage dans <code>useEffect</code>, elle sera exécutée lorsque le composant sera démonté, ou avant que l'effet ne soit réexécuté lors du prochain rendu. Cela imite le comportement de <code>componentWillUnmount</code> dans les composants de classe.
    </p>
    <pre style="font-size: 16px; background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
<code>
useEffect(() => &#123;
  // Code exécuté lors du montage

  return () => &#123;
    // Code exécuté lors du démontage
    console.log('Composant démonté');
  &#125;
&#125;, []);  // Le tableau vide signifie qu'il se déclenche une seule fois
</code></pre>

    <h3 style="font-size: 16px;">⚡ Récapitulatif des Comportements de useEffect</h3>
    <ul style="font-size: 16px;">
        <li><strong>Avec un tableau vide:</strong> l'effet est exécuté une seule fois, après le premier rendu (équivalent à <code>componentDidMount</code>).</li>
        <li><strong>Avec des dépendances:</strong> l'effet est exécuté chaque fois qu'une des dépendances change (équivalent à <code>componentDidUpdate</code>).</li>
        <li><strong>Retourner une fonction de nettoyage:</strong> la fonction de nettoyage sera appelée lorsque le composant est démonté ou avant la réexécution de l'effet (équivalent à <code>componentWillUnmount</code>).</li>
    </ul>

    <h3 style="font-size: 16px;">🎯 Conclusion</h3>
    <p style="font-size: 16px;">
        Le hook <code>useEffect</code> est une fonctionnalité puissante de React qui remplace les méthodes de cycle de vie des composants de classe. Il vous permet de gérer des effets secondaires tels que les appels API, la manipulation du DOM, et la gestion des souscriptions, tout en contrôlant finement quand ces effets doivent être déclenchés. En maîtrisant <code>useEffect</code>, vous pouvez rendre vos composants plus efficaces et bien structurés.
    </p>
</section>

  `,
  styles: [``]
})
export class ReactCycleComponent  {

}


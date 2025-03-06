import { Component } from '@angular/core';

@Component({
  selector: 'app-reactUseState',
  template: `
  <h1 style="font-size: 24px;">🚀 useState Hook : Gérer l'État dans React</h1>
  <section>
  <h2 style="font-size: 20px;">💡 Introduction au useState</h2>
    <p style="font-size: 16px;">
        Le hook <code>useState</code> est l'un des hooks les plus utilisés dans React. Il permet de gérer l'état dans un composant fonctionnel, là où auparavant, cela était uniquement possible dans les composants de classe. Ce hook permet d'ajouter un état local à un composant fonctionnel.
    </p>
    <p style="font-size: 16px;">
        Le hook <code>useState</code> retourne une paire de valeurs :
        - La première valeur est l'état actuel.
        - La seconde valeur est une fonction qui permet de mettre à jour cet état.
    </p>

    <h3 style="font-size: 16px;">⚙️ Syntaxe du Hook useState</h3>
    <p style="font-size: 16px;">
        La syntaxe du hook <code>useState</code> est la suivante :
    </p>
    <pre style="font-size: 16px; background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
<code>
const &#91;state, setState&#93; = useState(initialValue);
</code></pre>

<p style="font-size: 16px;">
        - <code>state</code> : l'état actuel.
        - <code>setState</code> : la fonction pour mettre à jour cet état.
        - <code>initialValue</code> : la valeur initiale de l'état.
    </p>

    <h3 style="font-size: 16px;">📦 Exemple d'utilisation de useState</h3>
    <p style="font-size: 16px;">
        Voici un exemple simple où nous utilisons <code>useState</code> pour gérer l'état d'un compteur dans un composant React fonctionnel.
    </p>

    <pre style="font-size: 16px; background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
<code>
import React, &#123; useState &#125; from 'react';

function Counter() &#123;
  const &#91;count, setCount&#93; = useState(0);

  const increment = () => &#123;
    setCount(count + 1);
  &#125;

  return &#60;div&#62;
    &#60;h2&#62;Compteur: &#123;count&#125;&#60;/h2&#62;
    &#60;button onClick=&#123;increment&#125;&#62;Ajouter 1&#60;/button&#62;
  &#60;/div&#62;
&#125;

export default Counter;
</code></pre>
<p style="font-size: 16px;">
        Dans cet exemple, le compteur commence à 0, et chaque fois que le bouton est cliqué, la fonction <code>increment</code> met à jour l'état avec la nouvelle valeur du compteur.
    </p>

    <h3 style="font-size: 16px;">🧠 Gestion de l'État avec une Fonction de Mise à Jour</h3>
    <p style="font-size: 16px;">
        Il est important de noter que la fonction de mise à jour <code>setState</code> peut aussi recevoir une fonction plutôt qu'une valeur directe. Cela est particulièrement utile lorsque vous devez accéder à la valeur précédente de l'état pour effectuer des mises à jour basées sur celle-ci.
    </p>

    <pre style="font-size: 16px; background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
<code>
const &#91;count, setCount&#93; = useState(0);

const increment = () => &#123;
  setCount(prevCount => prevCount + 1);
&#125;
</code></pre>

<p style="font-size: 16px;">
        Dans cet exemple, nous utilisons une fonction qui prend la valeur précédente de l'état (<code>prevCount</code>) pour calculer la nouvelle valeur de l'état.
    </p>

    <h3 style="font-size: 16px;">🔄 Mise à Jour Asynchrone de l'État</h3>
    <p style="font-size: 16px;">
        Il est également important de comprendre que la mise à jour de l'état avec <code>setState</code> est asynchrone. Cela signifie que la valeur de l'état n'est pas immédiatement disponible après l'appel à <code>setState</code>. Si vous avez besoin de l'état mis à jour immédiatement après un changement, il peut être préférable d'utiliser un effet secondaire avec le hook <code>useEffect</code>.
    </p>

    <h3 style="font-size: 16px;">⚡ Mise à Jour de l'État avec plusieurs Hooks useState</h3>
    <p style="font-size: 16px;">
        Lorsque vous travaillez avec plusieurs morceaux d'état dans un même composant, vous pouvez utiliser plusieurs appels à <code>useState</code>. Chaque appel à <code>useState</code> gère un morceau d'état distinct.
    </p>


    <pre style="font-size: 16px; background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
<code>
function Form() &#123;
  const &#91;name, setName&#93; = useState('');
  const &#91;age, setAge&#93; = useState('');

  const handleSubmit = (event) => &#123;
    event.preventDefault();
    alert(&#96;Nom: $&#123;name&#125;, Âge: $&#123;age&#125;&#96;);
  &#125;

  return &#60;form onSubmit=&#123;handleSubmit&#125;&#62;
    &#60;input
      type="text"
      value=&#123;name&#125;
      onChange=&#123;(e) => setName(e.target.value)&#125;
      placeholder="Entrez votre nom"
    /&#62;
    &#60;input
      type="number"
      value=&#123;age&#125;
      onChange=&#123;(e) => setAge(e.target.value)&#125;
      placeholder="Entrez votre âge"
    /&#62;
    &#60;button type="submit"&#62;Envoyer&#60;/button&#62;
  &#60;/form&#62;
&#125;
</code></pre>
    <p style="font-size: 16px;">
        Dans cet exemple, nous avons deux morceaux d'état indépendants : <code>name</code> et <code>age</code>. Chacun est géré par un appel séparé à <code>useState</code>.
    </p>

    <h3 style="font-size: 16px;">🔧 Rappel : Le Hook useState est uniquement pour l'État Local</h3>
    <p style="font-size: 16px;">
        Le hook <code>useState</code> est destiné à gérer l'état local d'un composant. Si vous devez partager l'état entre plusieurs composants, vous pouvez utiliser des outils comme le <strong>Context API</strong> ou des bibliothèques comme <strong>Redux</strong> pour gérer l'état global.
    </p>

    <h3 style="font-size: 16px;">🎯 Conclusion</h3>
    <p style="font-size: 16px;">
        Le hook <code>useState</code> est essentiel pour gérer l'état dans les composants fonctionnels de React. En utilisant ce hook, vous pouvez créer des applications interactives qui réagissent aux actions de l'utilisateur. Il est simple à utiliser, mais puissant lorsqu'il est combiné avec d'autres hooks comme <code>useEffect</code> pour gérer des effets secondaires.
    </p>

  </section>
  `,
  styles: [``]
})
export class ReactUseStateComponent  {

}


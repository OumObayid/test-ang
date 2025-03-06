import { Component } from '@angular/core';

@Component({
  selector: 'app-reactEvenement',
  template: `
<h1 style="font-size: 24px;">🚀 Gestion des Événements dans React</h1>

<section>
    <h2 style="font-size: 20px;">💡 Introduction à la Gestion des Événements</h2>
    <p style="font-size: 16px;">
        Dans React, la gestion des événements est similaire à celle du DOM classique, mais avec quelques différences. React utilise son propre système d'événements basé sur un modèle de délégation d'événements. Ce modèle permet de gérer les événements à un niveau supérieur sans avoir à attacher des écouteurs d'événements à chaque élément individuellement.
    </p>
    <p style="font-size: 16px;">
        Les événements dans React sont gérés par un objet d'événement, et les noms des événements sont en camelCase (par exemple, <code>onClick</code>, <code>onChange</code> au lieu de <code>onclick</code>, <code>onchange</code>).
    </p>

    <h3 style="font-size: 16px;">🖱️ Ajouter un Gestionnaire d'Événements</h3>
    <p style="font-size: 16px;">
        Pour ajouter un gestionnaire d'événements à un élément dans React, vous utilisez la syntaxe JSX avec des attributs comme <code>onClick</code>, <code>onChange</code>, etc. Vous assignez un gestionnaire d'événements à cet attribut pour déclencher une fonction lorsque l'événement se produit.
    </p>
    <pre style="font-size: 16px; background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
<code>
import React, &#123; useState &#125; from 'react';

function ButtonClick() &#123;
  const [message, setMessage] = useState('');

  const handleClick = () => &#123;
    setMessage('Bouton cliqué!');
  &#125;

  return (
    &#60;div&#62;
      &#60;button onClick=&#123;handleClick&#125;&#62;Cliquez ici&#60;/button&#62;
      &#60;p&#62;&#123;message&#125;&#60;/p&#62;
    &#60;/div&#62;
  &#125;

export default ButtonClick;
</code></pre>
    <p style="font-size: 16px;">
        Dans cet exemple, un événement <code>onClick</code> est attaché à un bouton. Lorsqu'il est cliqué, il déclenche la fonction <code>handleClick</code>, qui met à jour l'état du message.
    </p>

    <h3 style="font-size: 16px;">⚙️ Passer des Paramètres aux Gestionnaires d'Événements</h3>
    <p style="font-size: 16px;">
        Parfois, vous voudrez passer des arguments ou des paramètres à vos gestionnaires d'événements. Pour ce faire, vous pouvez soit utiliser une fonction fléchée, soit appeler une fonction directement dans l'attribut de l'événement.
    </p>
    <pre style="font-size: 16px; background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
<code>
import React from 'react';

function GreetUser() &#123;
  const greet = (name) => &#123;
    alert('Bonjour, ' + name + '!');
  &#125;

  return (
    &#60;div&#62;
      &#60;button onClick=&#123;() => greet('Alice')&#125;&#62;Salut Alice&#60;/button&#62;
      &#60;button onClick=&#123;() => greet('Bob')&#125;&#62;Salut Bob&#60;/button&#62;
    &#60;/div&#62;
  &#125;

export default GreetUser;
</code></pre>
    <p style="font-size: 16px;">
        Ici, on utilise une fonction fléchée pour appeler le gestionnaire d'événements <code>greet()</code> avec un argument spécifique. Chaque bouton appelle <code>greet()</code> avec un nom différent.
    </p>

    <h3 style="font-size: 16px;">🧠 L'événement Synthétique de React</h3>
    <p style="font-size: 16px;">
        React crée un "système d'événements synthétiques" qui est une abstraction au-dessus du DOM natif. Cela permet à React d'unifier les événements sous un même format, indépendamment des différences entre les navigateurs. Par exemple, le gestionnaire d'événements React est automatiquement lié à l'événement natif, ce qui vous permet de travailler avec un même objet d'événement, quelle que soit la plateforme.
    </p>
    <p style="font-size: 16px;">
        L'objet événement dans React fonctionne de manière similaire à l'objet événement natif du DOM, mais il est normalisé. Vous pouvez accéder à l'objet événement dans votre gestionnaire d'événements en le passant en tant qu'argument.
    </p>
    <pre style="font-size: 16px; background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
<code>
import React from 'react';

function MouseEvent() &#123;
  const handleClick = (event) => &#123;
    console.log('Position de la souris: ' + event.clientX + ', ' + event.clientY);
  &#125;

  return (
    &#60;div onClick=&#123;handleClick&#125;&#62;
      Cliquez n'importe où sur cet élément
    &#60;/div&#62;
  &#125;

export default MouseEvent;
</code></pre>
    <p style="font-size: 16px;">
        Dans cet exemple, l'objet <code>event</code> contient des informations sur la position de la souris. Vous pouvez accéder à ses propriétés comme <code>clientX</code> et <code>clientY</code> pour connaître la position de l'événement.
    </p>

    <h3 style="font-size: 16px;">⚡ Empêcher le Comportement Par Défaut</h3>
    <p style="font-size: 16px;">
        Comme dans le DOM traditionnel, vous pouvez empêcher le comportement par défaut d'un événement en utilisant <code>event.preventDefault()</code>. Cela est particulièrement utile dans des cas comme les formulaires ou les liens.
    </p>
    <pre style="font-size: 16px; background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
<code>
import React, &#123; useState &#125; from 'react';

function PreventDefaultExample() &#123;
  const [text, setText] = useState('');

  const handleSubmit = (event) => &#123;
    event.preventDefault();
    alert('Formulaire soumis: ' + text);
  &#125;

  return (
    &#60;form onSubmit=&#123;handleSubmit&#125;&#62;
      &#60;input
        type="text"
        value=&#123;text&#125;
        onChange=&#123;(e) => setText(e.target.value)&#125;
      /&#62;
      &#60;button type="submit"&#62;Soumettre&#60;/button&#62;
    &#60;/form&#62;
  &#125;

export default PreventDefaultExample;
</code></pre>
    <p style="font-size: 16px;">
        Ici, l'appel à <code>event.preventDefault()</code> empêche le formulaire de se soumettre réellement, permettant d'exécuter une action personnalisée à la place.
    </p>

    <h3 style="font-size: 16px;">🔄 Gestion des Événements Asynchrones</h3>
    <p style="font-size: 16px;">
        Lorsqu'il s'agit d'événements asynchrones, comme lorsqu'on attend une réponse d'une API, vous devez gérer l'événement en conséquence. Vous pouvez utiliser des fonctions async/await pour gérer les appels asynchrones dans vos gestionnaires d'événements.
    </p>
    <pre style="font-size: 16px; background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
<code>
import React, &#123; useState &#125; from 'react';

function FetchDataOnClick() &#123;
  const [data, setData] = useState(null);

  const fetchData = async () => &#123;
    const response = await fetch('https://api.example.com/data');
    const result = await response.json();
    setData(result);
  &#125;

  return (
    &#60;div&#62;
      &#60;button onClick=&#123;fetchData&#125;&#62;Charger des données&#60;/button&#62;
      &#60;pre&#62;&#123;JSON.stringify(data, null, 2)&#125;&#60;/pre&#62;
    &#60;/div&#62;
  &#125;

export default FetchDataOnClick;
</code></pre>
    <p style="font-size: 16px;">
        Dans cet exemple, le gestionnaire d'événements <code>fetchData</code> est asynchrone, ce qui permet de récupérer des données depuis une API lorsque l'utilisateur clique sur un bouton.
    </p>

    <h3 style="font-size: 16px;">🎯 Conclusion</h3>
    <p style="font-size: 16px;">
        La gestion des événements dans React est une partie essentielle de l'interaction avec l'utilisateur. En utilisant les événements React, vous pouvez facilement gérer les actions utilisateur tout en conservant un flux de travail déclaratif et efficace. L'utilisation d'événements synthétiques, la gestion des événements asynchrones, et la possibilité de passer des paramètres personnalisés aux gestionnaires rendent React très puissant pour gérer les interactions complexes.
    </p>
</section>

  `,
  styles: [``]
})
export class ReactEvenementComponent  {

}


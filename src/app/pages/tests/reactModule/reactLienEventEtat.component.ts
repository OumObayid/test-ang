import { Component } from '@angular/core';

@Component({
  selector: 'app-reactLienEventEtat',
  template: `
<h1 style="font-size: 24px;">🚀 Liens entre les Événements et l'État dans React</h1>

<section>
    <h2 style="font-size: 20px;">💡 Introduction aux Liens entre Événements et État</h2>
    <p style="font-size: 16px;">
        Dans React, l'état et les événements sont souvent étroitement liés. L'état d'un composant définit son apparence, tandis que les événements, tels que les clics de bouton ou les entrées de texte, peuvent entraîner des modifications de cet état. Comprendre comment gérer ces interactions est essentiel pour créer des interfaces utilisateur dynamiques et réactives.
    </p>
    <p style="font-size: 16px;">
        Les événements utilisateur peuvent déclencher des modifications de l'état d'un composant. Par exemple, lorsqu'un utilisateur soumet un formulaire, vous pouvez utiliser cet événement pour mettre à jour l'état et afficher un message de succès. Ce lien entre les événements et l'état est fondamental dans React pour assurer que l'interface utilisateur reflète toujours les données les plus récentes.
    </p>

    <h3 style="font-size: 16px;">🖱️ Modifier l'État avec un Événement</h3>
    <p style="font-size: 16px;">
        La manière la plus simple de lier un événement à l'état est de modifier l'état directement dans le gestionnaire d'événements. Cela vous permet de mettre à jour l'interface utilisateur en réponse aux actions de l'utilisateur.
    </p>
    <pre style="font-size: 16px; background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
<code>
import React, &#123; useState &#125; from 'react';

function Counter() &#123;
  const [count, setCount] = useState(0);

  const increment = () => &#123;
    setCount(count + 1);
  &#125;

  return (
    &#60;div&#62;
      &#60;h1&#62;Compteur: &#123;count&#125;&#60;/h1&#62;
      &#60;button onClick=&#123;increment&#125;&#62;Incrémenter&#60;/button&#62;
    &#60;/div&#62;
  &#125;

export default Counter;
</code></pre>
    <p style="font-size: 16px;">
        Dans cet exemple, un événement <code>onClick</code> est attaché à un bouton. Lorsqu'il est cliqué, la fonction <code>increment</code> est appelée, ce qui met à jour l'état du compteur via <code>setCount</code>.
    </p>

    <h3 style="font-size: 16px;">⚙️ Lier un Formulaire à l'État</h3>
    <p style="font-size: 16px;">
        Les formulaires sont une autre situation courante où les événements et l'état sont liés. Vous pouvez suivre les modifications des champs de formulaire avec des événements comme <code>onChange</code> et mettre à jour l'état du composant en conséquence.
    </p>
    <pre style="font-size: 16px; background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
<code>
import React, &#123; useState &#125; from 'react';

function FormExample() &#123;
  const [name, setName] = useState('');

  const handleChange = (event) => &#123;
    setName(event.target.value);
  &#125;

  const handleSubmit = (event) => &#123;
    event.preventDefault();
    alert('Nom soumis: ' + name);
  &#125;

  return (
    &#60;form onSubmit=&#123;handleSubmit&#125;&#62;
      &#60;input
        type="text"
        value=&#123;name&#125;
        onChange=&#123;handleChange&#125;
        placeholder="Entrez votre nom"
      /&#62;
      &#60;button type="submit"&#62;Soumettre&#60;/button&#62;
    &#60;/form&#62;
  &#125;

export default FormExample;
</code></pre>
    <p style="font-size: 16px;">
        Ici, un événement <code>onChange</code> est utilisé pour suivre les modifications du champ de texte. Chaque fois que l'utilisateur tape quelque chose, l'état du champ <code>name</code> est mis à jour, ce qui permet de refléter la saisie de l'utilisateur dans l'interface.
    </p>

    <h3 style="font-size: 16px;">⚡ Modifier l'État à partir de la Valeur d'un Événement</h3>
    <p style="font-size: 16px;">
        Il est également possible de modifier l'état en fonction de la valeur d'un événement. Par exemple, vous pouvez avoir des formulaires ou des champs de texte où l'état du composant est directement mis à jour avec la valeur de l'événement.
    </p>
    <pre style="font-size: 16px; background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
<code>
import React, &#123; useState &#125; from 'react';

function TextInput() &#123;
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => &#123;
    setInputValue(event.target.value);
  &#125;

  return (
    &#60;div&#62;
      &#60;input
        type="text"
        value=&#123;inputValue&#125;
        onChange=&#123;handleChange&#125;
        placeholder="Tapez quelque chose"
      /&#62;
      &#60;p&#62;Vous avez écrit: &#123;inputValue&#125;&#60;/p&#62;
    &#60;/div&#62;
  &#125;

export default TextInput;
</code></pre>
    <p style="font-size: 16px;">
        Dans cet exemple, chaque fois que l'utilisateur tape quelque chose dans le champ de texte, l'état <code>inputValue</code> est mis à jour avec la valeur actuelle du champ.
    </p>

    <h3 style="font-size: 16px;">🔄 Interaction Asynchrone des Événements avec l'État</h3>
    <p style="font-size: 16px;">
        Lorsque les événements impliquent des actions asynchrones, comme la récupération de données depuis un serveur, vous pouvez également mettre à jour l'état après que l'opération asynchrone soit terminée. Utilisez des fonctions <code>async</code> et <code>await</code> pour gérer ces opérations dans vos gestionnaires d'événements.
    </p>
    <pre style="font-size: 16px; background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
<code>
import React, &#123; useState &#125; from 'react';

function FetchData() &#123;
  const [data, setData] = useState(null);

  const fetchData = async () => &#123;
    const response = await fetch('https://api.example.com/data');
    const result = await response.json();
    setData(result);
  &#125;

  return (
    &#60;div&#62;
      &#60;button onClick=&#123;fetchData&#125;&#62;Charger les données&#60;/button&#62;
      &#60;pre&#62;&#123;JSON.stringify(data, null, 2)&#125;&#60;/pre&#62;
    &#60;/div&#62;
  &#125;

export default FetchData;
</code></pre>
    <p style="font-size: 16px;">
        Lorsque l'utilisateur clique sur le bouton, la fonction <code>fetchData</code> est appelée, récupère des données depuis une API, puis met à jour l'état avec ces données. La mise à jour de l'état entraîne le rendu du composant avec les nouvelles informations.
    </p>

    <h3 style="font-size: 16px;">🎯 Conclusion</h3>
    <p style="font-size: 16px;">
        Lier les événements aux modifications d'état est une partie essentielle de la gestion des interactions utilisateur dans React. Lorsque l'état change en réponse aux événements, React met automatiquement à jour le rendu du composant pour refléter ces changements. En combinant la gestion des événements et l'état, vous pouvez créer des interfaces utilisateur dynamiques et réactives qui répondent rapidement aux actions de l'utilisateur.
    </p>
</section>

  `,
  styles: [``]
})
export class ReactLienEventEtatComponent  {

}


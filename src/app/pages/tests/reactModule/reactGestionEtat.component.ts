import { Component } from '@angular/core';

@Component({
  selector: 'app-reactGestionEtat',
  template: `
<h1 style="font-size: 24px;">🚀 Gestion d'État Complexe</h1>

<section>
    <h2 style="font-size: 20px;">💡 Introduction à la Gestion d'État Complexe</h2>
    <p style="font-size: 16px;">
        Lorsque vous travaillez avec React, la gestion d'état devient plus complexe lorsque vous devez gérer plusieurs états simultanément, ou lorsque l'état est un objet ou un tableau. Vous pouvez rencontrer des scénarios où l'état évolue en fonction de plusieurs valeurs ou même de plusieurs sources d'information.
    </p>
    <p style="font-size: 16px;">
        Dans ces cas, vous devrez combiner plusieurs hooks d'état ou bien gérer des objets ou des tableaux en tant qu'état pour faciliter la gestion de données multiples dans un seul composant.
    </p>

    <h3 style="font-size: 16px;">⚙️ Utilisation de plusieurs hooks useState</h3>
    <p style="font-size: 16px;">
        Vous pouvez utiliser plusieurs hooks <code>useState()</code> pour gérer plusieurs états dans un composant. Chaque hook d'état crée une variable d'état et une fonction de mise à jour correspondante. Cela peut être utile lorsqu'il existe plusieurs valeurs indépendantes à suivre.
    </p>
    <pre style="font-size: 16px; background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
<code>
import React, &#123; useState &#125; from 'react';

function ComplexState() &#123;
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  const increment = () => &#123;
    setCount(count + 1);
  &#125;

  const handleChange = (event) => &#123;
    setName(event.target.value);
  &#125;

  return (
    &#60;div&#62;
      &#60;h2&#62;Compteur: &#123;count&#125;&#60;/h2&#62;
      &#60;button onClick=&#123;increment&#125;&#62;Ajouter 1&#60;/button&#62;
      &#60;input
        type="text"
        value=&#123;name&#125;
        onChange=&#123;handleChange&#125;
        placeholder="Entrez votre nom"
      /&#62;
    &#60;/div&#62;
  &#125;

export default ComplexState;
</code></pre>
    <p style="font-size: 16px;">
        Dans cet exemple, nous avons deux états : <code>count</code> et <code>name</code>. Chaque état est géré indépendamment à l'aide de <code>useState()</code>.
    </p>

    <h3 style="font-size: 16px;">🛠️ Gestion d'un Objet comme État</h3>
    <p style="font-size: 16px;">
        Une autre approche courante consiste à utiliser un objet pour stocker plusieurs valeurs d'état. Par exemple, si vous avez plusieurs propriétés qui partagent un état commun, un objet peut être plus facile à gérer et à mettre à jour.
    </p>
    <pre style="font-size: 16px; background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
<code>
import React, &#123; useState &#125; from 'react';

function ComplexStateWithObject() &#123;
  const [state, setState] = useState(&#123;
    count: 0,
    name: ''
  &#125;);

  const increment = () => &#123;
    setState(prevState => &#123;
      return &#123; ...prevState, count: prevState.count + 1 &#125;;
    &#125;);
  &#125;

  const handleChange = (event) => &#123;
    setState(prevState => &#123;
      return &#123; ...prevState, name: event.target.value &#125;;
    &#125;);
  &#125;

  return (
    &#60;div&#62;
      &#60;h2&#62;Compteur: &#123;state.count&#125;&#60;/h2&#62;
      &#60;button onClick=&#123;increment&#125;&#62;Ajouter 1&#60;/button&#62;
      &#60;input
        type="text"
        value=&#123;state.name&#125;
        onChange=&#123;handleChange&#125;
        placeholder="Entrez votre nom"
      /&#62;
    &#60;/div&#62;
  &#125;

export default ComplexStateWithObject;
</code></pre>
    <p style="font-size: 16px;">
        Dans cet exemple, l'état est stocké dans un seul objet <code>state</code>. Nous utilisons la méthode <code>setState()</code> pour mettre à jour les propriétés individuelles de cet objet. Il est important de noter l'utilisation de la syntaxe <code>...prevState</code> pour préserver les autres propriétés de l'état.
    </p>

    <h3 style="font-size: 16px;">⚡ Mise à Jour d'États Immutables</h3>
    <p style="font-size: 16px;">
        Lors de la mise à jour d'objets ou de tableaux dans l'état, vous devez toujours veiller à ne pas modifier directement l'objet ou le tableau existant. React attend une nouvelle référence pour que l'état change, et les modifications directes de l'état peuvent ne pas déclencher un nouveau rendu.
    </p>
    <pre style="font-size: 16px; background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
<code>
// Mise à jour de l'état avec un tableau dans l'objet
setState(prevState => &#123;
  return &#123;
    ...prevState,
    items: [...prevState.items, newItem]
  &#125;;
&#125;);

// Mise à jour de l'état avec un objet dans un tableau
setState(prevState => &#123;
  return &#123;
    ...prevState,
    items: prevState.items.map(item =>
      item.id === id ? &#123; ...item, completed: true &#125; : item
    )
  &#125;;
&#125;);
</code></pre>

    <h3 style="font-size: 16px;">🧠 Gestion des États Complètes avec useReducer</h3>
    <p style="font-size: 16px;">
        Dans certains cas, surtout pour les applications avec des états complexes ou des actions multiples, vous pouvez vouloir utiliser le hook <code>useReducer()</code>. Ce hook est une alternative plus puissante à <code>useState()</code>, car il vous permet de gérer l'état de manière centralisée et d'utiliser des actions pour le modifier.
    </p>
    <pre style="font-size: 16px; background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
<code>
import React, &#123; useReducer &#125; from 'react';

const initialState = &#123;
  count: 0,
  name: ''
&#125;;

// Fonction reductrice pour gérer les actions
function reducer(state, action) &#123;
  switch (action.type) &#123;
    case 'increment':
      return &#123; ...state, count: state.count + 1 &#125;;
    case 'setName':
      return &#123; ...state, name: action.payload &#125;;
    default:
      return state;
  &#125;
&#125;

function ComplexStateWithReducer() &#123;
  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = () => dispatch(&#123; type: 'increment' &#125;);
  const handleChange = (event) => dispatch(&#123; type: 'setName', payload: event.target.value &#125;);

  return (
    &#60;div&#62;
      &#60;h2&#62;Compteur: &#123;state.count&#125;&#60;/h2&#62;
      &#60;button onClick=&#123;increment&#125;&#62;Ajouter 1&#60;/button&#62;
      &#60;input
        type="text"
        value=&#123;state.name&#125;
        onChange=&#123;handleChange&#125;
        placeholder="Entrez votre nom"
      /&#62;
    &#60;/div&#62;
  &#125;

export default ComplexStateWithReducer;
</code></pre>
    <p style="font-size: 16px;">
        Le hook <code>useReducer()</code> est particulièrement utile lorsque vous avez un état complexe qui nécessite plusieurs sous-valeurs ou lorsque l'état est manipulé par plusieurs actions. Il fournit une meilleure gestion de l'état centralisé.
    </p>

    <h3 style="font-size: 16px;">🎯 Conclusion</h3>
    <p style="font-size: 16px;">
        La gestion d'état complexe dans React peut être réalisée de différentes manières, en utilisant plusieurs hooks <code>useState()</code>, des objets ou des tableaux, ou même <code>useReducer()</code> pour des cas plus complexes. Il est important de bien structurer votre état pour le rendre plus facile à maintenir et à manipuler au fil du temps.
    </p>
</section>

  `,
  styles: [``]
})
export class ReactGestionEtatComponent  {

}


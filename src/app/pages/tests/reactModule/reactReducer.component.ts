import { Component } from '@angular/core';

@Component({
  selector: 'app-reactReducer',
  template: `
  <h1 style="font-size: 24px;">🚀 Le hook useReducer</h1>

<section>
    <h2 style="font-size: 20px;">💡 Introduction</h2>
    <p style="font-size: 16px;">
        Le hook <code>useReducer</code> est une alternative avancée à <code>useState</code> pour gérer des états complexes.
        Il est souvent utilisé lorsque la mise à jour de l'état implique plusieurs sous-états ou une logique conditionnelle plus développée.
    </p>

    <h2 style="font-size: 20px;">🔎 Pourquoi utiliser useReducer ?</h2>
    <p style="font-size: 16px;">
        <code>useReducer</code> est utile lorsque :
    </p>
    <ul style="font-size: 16px;">
        <li>🎯 L'état est composé de plusieurs valeurs imbriquées.</li>
        <li>🔄 Les transitions d'état suivent une logique conditionnelle stricte.</li>
        <li>♻️ On veut éviter de trop nombreuses re-rendus causés par <code>useState</code>.</li>
    </ul>

    <h2 style="font-size: 20px;">🆕 Syntaxe de useReducer</h2>
    <p style="font-size: 16px;">
        Le hook <code>useReducer</code> prend deux arguments :
    </p>
    <ul style="font-size: 16px;">
        <li>🛠️ Un **réducteur** (fonction qui applique une transformation d'état).</li>
        <li>🎭 Un **état initial**.</li>
    </ul>

    <pre style="font-size: 16px; background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
<code>
const &#123; state, dispatch &#125; = useReducer(reducer, initialState);
</code></pre>

    <h2 style="font-size: 20px;">🛠️ 1. Création du Reducer</h2>
    <p style="font-size: 16px;">
        Le **reducer** est une fonction qui reçoit l'état actuel et une action,
        puis retourne un **nouvel état** en fonction de cette action.
    </p>

    <pre style="font-size: 16px; background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
<code>
function reducer(state, action) &#123;
  switch (action.type) &#123;
    case "increment":
      return &#123; count: state.count + 1 &#125;;
    case "decrement":
      return &#123; count: state.count - 1 &#125;;
    default:
      return state;
  &#125;
&#125;
</code></pre>

    <h2 style="font-size: 20px;">🎯 2. Utilisation de useReducer</h2>
    <p style="font-size: 16px;">
        Nous utilisons <code>useReducer</code> pour gérer l'état d'un compteur.
    </p>

    <pre style="font-size: 16px; background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
<code>
import React, &#123; useReducer &#125; from 'react';

function Compteur() &#123;
  const [state, dispatch] = useReducer(reducer, &#123; count: 0 &#125;);

  return (
    &lt;div&gt;
      &lt;p&gt;Compteur: &#123;state.count&#125;&lt;/p&gt;
      &lt;button onClick=&#123;() =&gt; dispatch(&#123; type: "increment" &#125;)&#125;&gt; +1 &lt;/button&gt;
      &lt;button onClick=&#123;() =&gt; dispatch(&#123; type: "decrement" &#125;)&#125;&gt; -1 &lt;/button&gt;
    &lt;/div&gt;
  );
&#125;

export default Compteur;
</code></pre>

    <h2 style="font-size: 20px;">💡 Avantages de useReducer</h2>
    <ul style="font-size: 16px;">
        <li>✔️ Meilleure organisation des mises à jour d'état complexes.</li>
        <li>✔️ Regroupe la logique de mise à jour en une seule fonction (le reducer).</li>
        <li>✔️ Facilite la gestion des actions et transitions d'état.</li>
    </ul>

    <p style="font-size: 16px;">
        🚀 Maintenant que nous avons exploré <code>useReducer</code>, passons à l'étape suivante : **Custom Hooks** 🎯
    </p>
</section>

  `,
  styles: [``]
})
export class ReactReducerComponent  {

}


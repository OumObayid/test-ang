import { Component } from '@angular/core';

@Component({
  selector: 'app-reactCustumHook',
  template: `
  <h1 style="font-size: 24px;">🚀 Les Custom Hooks</h1>

<section>
    <h2 style="font-size: 20px;">💡 Introduction</h2>
    <p style="font-size: 16px;">
        Un **Custom Hook** est une fonction JavaScript qui utilise des hooks React et permet de réutiliser de la logique d’état
        dans plusieurs composants. Il suit la convention de nommage en commençant par **"use"**.
    </p>

    <h2 style="font-size: 20px;">🔎 Pourquoi utiliser les Custom Hooks ?</h2>
    <p style="font-size: 16px;">
        Les Custom Hooks sont utilisés pour :
    </p>
    <ul style="font-size: 16px;">
        <li>📦 Réutiliser la logique d'état dans plusieurs composants.</li>
        <li>🔄 Simplifier les composants en déléguant la gestion de l’état.</li>
        <li>♻️ Séparer les préoccupations (logique métier vs rendu UI).</li>
    </ul>

    <h2 style="font-size: 20px;">🆕 Création d'un Custom Hook</h2>
    <p style="font-size: 16px;">
        Voici un exemple de **Custom Hook** permettant de gérer un compteur.
    </p>

    <pre style="font-size: 16px; background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
<code>
import React, &#123; useState &#125; from "react";

function useCounter(initialValue = 0) &#123;
  const [count, setCount] = useState(initialValue);

  const increment = () =&gt; setCount(count + 1);
  const decrement = () =&gt; setCount(count - 1);
  const reset = () =&gt; setCount(initialValue);

  return &#123; count, increment, decrement, reset &#125;;
&#125;

export default useCounter;
</code></pre>

    <h2 style="font-size: 20px;">🛠️ Utilisation d'un Custom Hook</h2>
    <p style="font-size: 16px;">
        Maintenant, nous allons utiliser notre **Custom Hook** dans un composant React.
    </p>

    <pre style="font-size: 16px; background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
<code>
import React from "react";
import useCounter from "./useCounter";

function CounterComponent() &#123;
  const &#123; count, increment, decrement, reset &#125; = useCounter(0);

  return (
    &lt;div&gt;
      &lt;p&gt;Compteur: &#123;count&#125;&lt;/p&gt;
      &lt;button onClick=&#123;increment&#125;&gt; +1 &lt;/button&gt;
      &lt;button onClick=&#123;decrement&#125;&gt; -1 &lt;/button&gt;
      &lt;button onClick=&#123;reset&#125;&gt; Réinitialiser &lt;/button&gt;
    &lt;/div&gt;
  );
&#125;

export default CounterComponent;
</code></pre>

    <h2 style="font-size: 20px;">📌 Avantages des Custom Hooks</h2>
    <ul style="font-size: 16px;">
        <li>✔️ Permet de **factoriser** du code répétitif.</li>
        <li>✔️ Rend les composants **plus lisibles** et maintenables.</li>
        <li>✔️ Facilite la séparation entre **logique** et **affichage**.</li>
    </ul>

    <p style="font-size: 16px;">
        🚀 Maintenant que nous avons exploré les **Custom Hooks**, passons à l'étape suivante :
        **useMemo et useCallback** 🎯
    </p>
</section>

  `,
  styles: [``]
})
export class ReactCustumHookComponent  {

}


import { Component } from '@angular/core';

@Component({
  selector: 'app-reactMemoCallback',
  template: `
<h1 style="font-size: 24px;">🚀 useMemo et useCallback</h1>

<section>
    <h2 style="font-size: 20px;">💡 Introduction</h2>
    <p style="font-size: 16px;">
        Les hooks **useMemo** et **useCallback** sont utilisés pour optimiser les performances dans les composants React en mémorisant des valeurs ou des fonctions.
    </p>

    <h2 style="font-size: 20px;">🔎 Quand utiliser useMemo et useCallback ?</h2>
    <p style="font-size: 16px;">
        Ces hooks sont utilisés lorsque vous avez des calculs coûteux ou des fonctions qui ne doivent pas être recréées à chaque re-rendu.
    </p>

    <h2 style="font-size: 20px;">📌 useMemo</h2>
    <p style="font-size: 16px;">
        **useMemo** permet de mémoriser le résultat d'un calcul, évitant de recalculer une valeur à chaque re-rendu si les dépendances n'ont pas changé.
    </p>

    <pre style="font-size: 16px; background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
<code>
import React, &#123; useMemo &#125; from "react";

function ExpensiveComputationComponent() &#123;
  const computeExpensiveValue = (num) =&gt; &#123;
    console.log("Calcul coûteux");
    return num * 2;
  &#125;;

  const result = useMemo(() =&gt; computeExpensiveValue(10), [10]);

  return (
    &lt;div&gt;
      &lt;p&gt;Valeur calculée: &#123;result&#125;&lt;/p&gt;
    &lt;/div&gt;
  );
&#125;

export default ExpensiveComputationComponent;
</code></pre>

    <h2 style="font-size: 20px;">📌 useCallback</h2>
    <p style="font-size: 16px;">
        **useCallback** est similaire à **useMemo**, mais il est utilisé pour mémoriser des fonctions. Il est utile lorsque vous avez des fonctions passées en props à des composants enfants et que vous voulez éviter leur recréation à chaque re-rendu.
    </p>

    <pre style="font-size: 16px; background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
<code>
import React, &#123; useCallback, useState &#125; from "react";

function ButtonComponent() &#123;
  const [count, setCount] = useState(0);

  const increment = useCallback(() =&gt; setCount(count + 1), [count]);

  return (
    &lt;div&gt;
      &lt;p&gt;Compteur: &#123;count&#125;&lt;/p&gt;
      &lt;button onClick=&#123;increment&#125;&gt;Incrémenter&lt;/button&gt;
    &lt;/div&gt;
  );
&#125;

export default ButtonComponent;
</code></pre>

    <h2 style="font-size: 20px;">🔑 Différences entre useMemo et useCallback</h2>
    <ul style="font-size: 16px;">
        <li>🧮 **useMemo** est utilisé pour mémoriser des **valeurs calculées**.</li>
        <li>🔄 **useCallback** est utilisé pour mémoriser des **fonctions**.</li>
        <li>⚡ Les deux sont utilisés pour optimiser les performances en évitant les recalculs ou la recréation de fonctions inutiles.</li>
    </ul>

    <h2 style="font-size: 20px;">💡 Utilisation combinée</h2>
    <p style="font-size: 16px;">
        Vous pouvez utiliser les deux hooks dans un même composant pour optimiser les calculs et les fonctions, notamment dans des applications complexes avec des composants enfants qui dépendent de ces valeurs ou fonctions.
    </p>

    <pre style="font-size: 16px; background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
<code>
import React, &#123; useMemo, useCallback, useState &#125; from "react";

function ComplexComponent() &#123;
  const [count, setCount] = useState(0);

  const increment = useCallback(() =&gt; setCount(count + 1), [count]);

  const computeExpensiveValue = useMemo(() =&gt; count * 2, [count]);

  return (
    &lt;div&gt;
      &lt;p&gt;Valeur calculée: &#123;computeExpensiveValue&#125;&lt;/p&gt;
      &lt;button onClick=&#123;increment&#125;&gt;Incrémenter&lt;/button&gt;
    &lt;/div&gt;
  );
&#125;

export default ComplexComponent;
</code></pre>

    <h2 style="font-size: 20px;">🔨 Conclusion</h2>
    <p style="font-size: 16px;">
        **useMemo** et **useCallback** sont des hooks puissants pour optimiser les performances dans les applications React.
        Leur utilisation dans les bonnes situations peut considérablement améliorer la réactivité de votre application.
    </p>
</section>

  `,
  styles: [``]
})
export class ReactMemoCallbackComponent  {

}


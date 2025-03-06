import { Component } from '@angular/core';

@Component({
  selector: 'app-reactConcepts',
  template: `
<h1 style="font-size: 24px;">🚀 Concepts clés de React.js</h1>
<hr>

<section>
    <h2 style="font-size: 20px;">1️⃣ JSX (JavaScript XML)</h2>
    <p style="font-size: 16px;">
        JSX est un langage de syntaxe utilisé par React pour décrire l'interface utilisateur. Il ressemble à du HTML, mais il est en réalité du JavaScript.
    </p>
    <h3 style="font-size: 16px;">Syntaxe de JSX</h3>
    <p style="font-size: 16px;">
        JSX permet de combiner JavaScript et HTML dans un même fichier. Exemple :
    </p>
    <pre style="font-size: 16px; background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
<code>
const element = &#60;h1&#62;Hello, world!&#60;/h1&#62;
</code></pre>
    <p style="font-size: 16px;">
        Bien que cela ressemble à du HTML, en réalité, JSX est transformé par le compilateur React en des appels <code>React.createElement()</code>. C'est cette méthode qui génère la structure des éléments DOM que React va manipuler.
    </p>

    <h3 style="font-size: 16px;">Expression JavaScript dans JSX</h3>
    <p style="font-size: 16px;">
        Vous pouvez insérer des expressions JavaScript dans JSX en les entourant d'accolades <code>&#123;&#125;</code>. Exemple :
    </p>
    <pre style="font-size: 16px; background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
<code>
const name = &#39;Alice&#39;;
const element = &#60;h1&#62;Hello, &#123;name&#125;&#60;/h1&#62;
</code></pre>
</section>

<section>
    <h2 style="font-size: 20px;">2️⃣ ReactDOM</h2>
    <p style="font-size: 16px;">
        <code>ReactDOM</code> est un package fourni par React qui permet de manipuler le DOM dans le navigateur. Il est utilisé pour rendre des composants React dans le DOM.
    </p>

    <h3 style="font-size: 16px;">render()</h3>
    <p style="font-size: 16px;">
        C'est la méthode principale de <code>ReactDOM</code> qui permet d'afficher un composant React dans le DOM.
    </p>
    <pre style="font-size: 16px; background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
<code>
import React from &#64;react&#59;
import ReactDOM from &#64;react-dom&#59;

const App = () &#123;
  return &#60;h1&#62;Hello, React!&#60;/h1&#62;&#125;&#59;&#10;

ReactDOM.render(&#60;App /&#62;, document.getElementById(&#39;root&#39;))&#59;
</code></pre>
</section>

<section>
    <h2 style="font-size: 20px;">3️⃣ Composants</h2>
    <p style="font-size: 16px;">
        Les composants sont les éléments de base dans React. Un composant React peut être une fonction ou une classe qui retourne un JSX.
    </p>

    <h3 style="font-size: 16px;">Composants fonctionnels</h3>
    <p style="font-size: 16px;">
        Ce sont des fonctions JavaScript qui retournent du JSX. Ce type de composant est plus simple et préféré dans les versions modernes de React.
    </p>
    <pre style="font-size: 16px; background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
<code>
function Welcome(props) &#123;
  return &#60;h1&#62;Hello, &#123;props.name&#125;&#60;/h1&#62;&#125;&#10;
&#125;
</code></pre>

    <h3 style="font-size: 16px;">Composants de classe</h3>
    <p style="font-size: 16px;">
        Avant l'introduction des hooks, les composants étaient généralement créés sous forme de classes. Ils offrent plus de fonctionnalités, comme l'état local et les méthodes de cycle de vie.
    </p>
    <pre style="font-size: 16px; background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
<code>
class Welcome extends React.Component &#123;
  render() &#123;
    return &#60;h1&#62;Hello, &#123;this.props.name&#125;&#60;/h1&#62;&#125;&#10;
&#125;
</code></pre>

    <h3 style="font-size: 16px;">Props (Propriétés)</h3>
    <p style="font-size: 16px;">
        Les <strong>props</strong> sont des données envoyées d'un composant parent à un composant enfant. Elles sont immutables, ce qui signifie que le composant enfant ne peut pas les modifier.
    </p>
    <p style="font-size: 16px;">Exemple avec les <strong>props</strong> :</p>
    <pre style="font-size: 16px; background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
<code>
function Welcome(props) &#123;
  return &#60;h1&#62;Hello, &#123;props.name&#125;&#60;/h1&#62;&#125;&#10;

function App() &#123;
  return &#60;Welcome name="Alice" /&#62;&#125;
</code></pre>
    <p style="font-size: 16px;">
        Les <strong>props</strong> sont la manière principale de transmettre des données entre les composants parent et enfant.
    </p>
</section>

<section>
    <h2 style="font-size: 20px;">4️⃣ Conclusion</h2>
    <ul style="font-size: 16px;">
        <li><strong>JSX</strong> : Une syntaxe qui permet de mélanger JavaScript et HTML.</li>
        <li><strong>ReactDOM</strong> : Permet de rendre les composants dans le DOM.</li>
        <li><strong>Composants</strong> : Les blocs de construction de votre interface, qui peuvent être fonctionnels ou de classe.</li>
        <li><strong>Props</strong> : Les données que l'on passe entre les composants parent et enfant.</li>
    </ul>
</section>

  `,
  styles: [``]
})
export class ReactConceptsComponent  {

}


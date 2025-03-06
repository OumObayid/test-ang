import { Component } from '@angular/core';

@Component({
  selector: 'app-ReactComposant',
  template: `
<h1 style="font-size: 24px;">🚀 Création des Composants</h1>

<section>
    <h2 style="font-size: 20px;">Composants Fonctionnels vs Class Components</h2>
    <p style="font-size: 16px;">
        En React, il existe deux types de composants : les composants fonctionnels et les composants de classe. Chacun a ses propres avantages.
    </p>
    <h3 style="font-size: 16px;">Composants Fonctionnels</h3>
    <p style="font-size: 16px;">
        Un composant fonctionnel est une simple fonction JavaScript qui retourne du JSX. C'est le type de composant préféré dans les versions modernes de React, surtout avec l'introduction des hooks.
    </p>
    <pre style="font-size: 16px; background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
<code>
function Greeting() &#123;
  return &#60;h1&#62;Hello, React!&#60;/h1&#62;&#125;&#10;
</code></pre>

    <h3 style="font-size: 16px;">Composants de Classe</h3>
    <p style="font-size: 16px;">
        Un composant de classe est une classe JavaScript qui étend <code>React.Component</code>. Ce type de composant est plus ancien et offre des fonctionnalités comme l'état local et les méthodes de cycle de vie.
    </p>
    <pre style="font-size: 16px; background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
<code>
class Greeting extends React.Component &#123;
  render() &#123;
    return &#60;h1&#62;Hello, React!&#60;/h1&#62;&#125;&#10;
&#125;
</code></pre>
</section>

  `,
  styles: [``]
})
export class ReactComposantComponent  {

}


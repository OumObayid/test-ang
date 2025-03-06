import { Component } from '@angular/core';

@Component({
  selector: 'app-reactTestsUnitIntegr',
  template: `
<h1 style="font-size: 24px;">🧪 Tests Unitaires et Tests d'Intégration</h1>

<section>
    <h2 style="font-size: 20px;">💡 Qu'est-ce qu'un Test Unitaire ?</h2>
    <p style="font-size: 16px;">
        Un test unitaire vérifie une seule "unité" fonctionnelle de votre code, généralement une fonction ou un composant React.
        Il permet de s'assurer qu'une fonction renvoie le bon résultat ou qu'un composant se comporte comme prévu lorsqu'il est rendu avec certaines props.
    </p>

    <h2 style="font-size: 20px;">🔧 Exemple de Test Unitaire avec Jest</h2>
    <p style="font-size: 16px;">
        Imaginons un composant simple qui affiche un message personnalisé en fonction des props :
    </p>

    <pre style="font-size: 16px; background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
<code>
import React from 'react';
import &#123; render &#125; from '&#64;testing-library/react';
import MyComponent from './MyComponent';

test('affiche un message personnalisé', () => &#123;
  const &#123; getByText &#125; = render(&lt;MyComponent message="Hello, React!" /&gt;);
  const message = getByText(/Hello, React!/i);
  expect(message).toBeInTheDocument();
&#125;);
</code></pre>

    <h2 style="font-size: 20px;">⚙️ Explication de l'exemple</h2>
    <p style="font-size: 16px;">
        - On utilise la fonction &#96;render&#96; de **React Testing Library** pour rendre le composant.
        - Ensuite, on recherche un élément contenant le texte "Hello, React!" grâce à &#96;getByText&#96;.
        - Finalement, on utilise &#96;expect&#96; pour vérifier que l'élément est bien dans le document.
    </p>

    <h2 style="font-size: 20px;">🔍 Qu'est-ce qu'un Test d'Intégration ?</h2>
    <p style="font-size: 16px;">
        Un test d'intégration vérifie que plusieurs composants fonctionnent ensemble correctement.
        Il s'assure que l'ensemble du système (ou plusieurs composants interagissant ensemble) fonctionne comme prévu, avec une logique de flux d'état et d'interactions entre composants.
    </p>

    <h2 style="font-size: 20px;">⚙️ Exemple de Test d'Intégration</h2>
    <p style="font-size: 16px;">
        Imaginons que vous ayez un composant de formulaire qui met à jour un état de message. Vous voulez tester l'intégration de ce formulaire avec un autre composant qui affiche ce message :
    </p>

    <pre style="font-size: 16px; background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
<code>
import React, &#123; useState &#125; from 'react';
import &#123; render, fireEvent &#125; from '&#64;testing-library/react';

function MessageForm() &#123;
  const [message, setMessage] = useState('');

  const handleChange = (e) => &#123;
    setMessage(e.target.value);
  &#125;

  return (
    &lt;div&gt;
      &lt;input type="text" onChange=&#123;handleChange&#125; /&gt;
      &lt;p&gt;Le message est : &#123;message&#125;&lt;/p&gt;
    &lt;/div&gt;
  );
&#125;

test('mettre à jour le message en fonction de la saisie utilisateur', () => &#123;
  const &#123; getByText, getByRole &#125; = render(&lt;MessageForm /&gt;);
  const input = getByRole('textbox');
  fireEvent.change(input, &#123; target: &#123; value: 'Hello, Testing!' &#125; &#125;);
  expect(getByText(/Le message est : Hello, Testing!/i)).toBeInTheDocument();
&#125;);
</code></pre>

    <h2 style="font-size: 20px;">⚙️ Explication de l'exemple</h2>
    <p style="font-size: 16px;">
        - Le test vérifie que lorsque l'utilisateur entre du texte dans un champ de saisie, le message qui s'affiche est mis à jour.
        - On utilise &#96;fireEvent.change&#96; pour simuler la saisie utilisateur dans un champ de texte, puis on vérifie que le message affiché a changé en conséquence.
    </p>

    <h2 style="font-size: 20px;">📈 Conclusion</h2>
    <p style="font-size: 16px;">
        Les tests unitaires et d'intégration permettent de garantir le bon fonctionnement de votre application React à un niveau fonctionnel et d'interaction.
        Les tests unitaires se concentrent sur des unités indépendantes de votre code, tandis que les tests d'intégration vérifient l'interaction entre plusieurs composants.
    </p>
</section>

  `,
  styles: [``]
})
export class ReactTestsUnitIntegrComponent  {

}


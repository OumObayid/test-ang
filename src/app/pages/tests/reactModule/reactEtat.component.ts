import { Component } from '@angular/core';

@Component({
  selector: 'app-reactُEtat',
  template: `
<h1 style="font-size: 24px;">🚀 L'État dans les Composants de Classe</h1>

<section>
    <h2 style="font-size: 20px;">💡 Introduction aux Composants de Classe et l'État</h2>
    <p style="font-size: 16px;">
        Dans React, les composants de classe étaient la méthode principale pour gérer l'état avant l'introduction des hooks. Dans un composant de classe, l'état est géré via un objet <code>this.state</code>, et la mise à jour de cet état se fait en utilisant la méthode <code>this.setState()</code>.
    </p>
    <p style="font-size: 16px;">
        Bien que l'utilisation des hooks (comme <code>useState</code>) soit maintenant privilégiée, il est toujours important de comprendre comment gérer l'état dans un composant de classe, car vous rencontrerez encore des projets qui utilisent cette approche.
    </p>

    <h3 style="font-size: 16px;">⚙️ Syntaxe de l'État dans un Composant de Classe</h3>
    <p style="font-size: 16px;">
        Dans un composant de classe, vous devez initialiser l'état dans le constructeur. Ensuite, vous utilisez <code>this.state</code> pour accéder à l'état, et <code>this.setState()</code> pour le mettre à jour.
    </p>
    <pre style="font-size: 16px; background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
<code>
class Counter extends React.Component &#123;
  constructor(props) &#123;
    super(props);
    this.state = &#123;
      count: 0
    &#125;;
  &#125;

  increment = () => &#123;
    this.setState(prevState => &#123;
      return &#123; count: prevState.count + 1 &#125;;
    &#125;);
  &#125;

  render() &#123;
    return &#60;div&#62;
      &#60;h2&#62;Compteur: &#123;this.state.count&#125;&#60;/h2&#62;
      &#60;button onClick=&#123;this.increment&#125;&#62;Ajouter 1&#60;/button&#62;
    &#60;/div&#62;
  &#125;
&#125;

export default Counter;
</code></pre>
    <p style="font-size: 16px;">
        Dans cet exemple :
        - <code>this.state</code> est utilisé pour définir l'état initial (compteur à 0).
        - <code>this.setState()</code> est utilisé pour mettre à jour l'état lorsque le bouton est cliqué.
    </p>

    <h3 style="font-size: 16px;">🛠️ Comprendre <code>this.setState()</code></h3>
    <p style="font-size: 16px;">
        La méthode <code>this.setState()</code> est utilisée pour modifier l'état dans un composant de classe. Elle accepte un objet ou une fonction en argument. Si un objet est passé, il fusionne l'état actuel avec les nouvelles valeurs. Si une fonction est utilisée, elle reçoit l'état précédent comme argument, ce qui permet de calculer l'état suivant basé sur la valeur précédente.
    </p>
    <pre style="font-size: 16px; background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
<code>
// Mettre à jour l'état en utilisant un objet
this.setState(&#123; count: this.state.count + 1 &#125;);

// Mettre à jour l'état en utilisant une fonction
this.setState((prevState) => &#123;
  return &#123; count: prevState.count + 1 &#125;;
&#125;);
</code></pre>

    <h3 style="font-size: 16px;">⚡ Mise à Jour Asynchrone de l'État</h3>
    <p style="font-size: 16px;">
        Comme avec le hook <code>useState</code>, la méthode <code>this.setState()</code> est asynchrone. Cela signifie que l'état n'est pas immédiatement mis à jour après l'appel de <code>this.setState()</code>. Si vous devez accéder à l'état après sa mise à jour, il est recommandé d'utiliser un callback dans <code>this.setState()</code>.
    </p>
    <pre style="font-size: 16px; background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
<code>
this.setState(&#123; count: this.state.count + 1 &#125;, () => &#123;
  console.log(this.state.count); // Affiche l'état mis à jour
&#125;);
</code></pre>

    <h3 style="font-size: 16px;">📦 Exemple Complet d'un Composant de Classe</h3>
    <p style="font-size: 16px;">
        Voici un exemple plus complet qui montre l'utilisation de <code>this.state</code> et <code>this.setState()</code> pour gérer l'état dans un composant de classe.
    </p>
    <pre style="font-size: 16px; background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
<code>
class Form extends React.Component &#123;
  constructor(props) &#123;
    super(props);
    this.state = &#123;
      name: '',
      age: ''
    &#125;;
  &#125;

  handleNameChange = (event) => &#123;
    this.setState(&#123; name: event.target.value &#125;);
  &#125;

  handleAgeChange = (event) => &#123;
    this.setState(&#123; age: event.target.value &#125;);
  &#125;

  handleSubmit = (event) => &#123;
    event.preventDefault();
    alert(&#96;Nom: $&#123;this.state.name&#125;, Âge: $&#123;this.state.age&#125;&#96;);
  &#125;

  render() &#123;
    return &#60;form onSubmit=&#123;this.handleSubmit&#125;&#62;
      &#60;input
        type="text"
        value=&#123;this.state.name&#125;
        onChange=&#123;this.handleNameChange&#125;
        placeholder="Entrez votre nom"
      /&#62;
      &#60;input
        type="number"
        value=&#123;this.state.age&#125;
        onChange=&#123;this.handleAgeChange&#125;
        placeholder="Entrez votre âge"
      /&#62;
      &#60;button type="submit"&#62;Envoyer&#60;/button&#62;
    &#60;/form&#62;
  &#125;
&#125;

export default Form;
</code></pre>

    <p style="font-size: 16px;">
        Dans cet exemple :
        - Le nom et l'âge de l'utilisateur sont stockés dans l'état.
        - Lorsqu'un utilisateur modifie l'input, l'état est mis à jour avec la nouvelle valeur.
        - Lors de la soumission du formulaire, un message avec le nom et l'âge est affiché.
    </p>

    <h3 style="font-size: 16px;">🧠 Gestion de l'État dans les Composants de Classe</h3>
    <p style="font-size: 16px;">
        Dans un composant de classe, vous pouvez utiliser l'état pour stocker n'importe quelle donnée qui varie au fil du temps. Cela peut inclure des valeurs telles que des informations d'utilisateur, des comptages, des résultats de calculs, etc. L'important est de gérer l'état de manière efficace pour rendre votre application dynamique.
    </p>

    <h3 style="font-size: 16px;">🎯 Conclusion</h3>
    <p style="font-size: 16px;">
        L'utilisation de l'état dans les composants de classe est une pratique essentielle dans React. Bien que les hooks soient désormais la méthode préférée, il est toujours crucial de savoir comment travailler avec l'état dans les composants de classe, car vous pourriez être amené à gérer des projets existants utilisant cette approche.
    </p>
</section>

  `,
  styles: [``]
})
export class ReactEtatComponent  {

}


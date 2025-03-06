import { Component } from '@angular/core';

@Component({
  selector: 'app-reactProps',
  template: `
  <h1 style="font-size: 24px;">🚀  Les Props : Passer des Données Entre Composants</h1>

<section>
    <h2 style="font-size: 20px;">Les Props (Propriétés) en React</h2>
    <p style="font-size: 16px;">
        Les <strong>props</strong> (abréviation de "properties") permettent de transmettre des données d'un composant parent vers un composant enfant. Elles sont utilisées pour rendre les composants réutilisables et modulaires. Les props sont immutables, ce qui signifie qu'un composant enfant ne peut pas modifier les props qu'il reçoit.
    </p>
    <p style="font-size: 16px;">
        En React, les props servent principalement à passer des informations ou des fonctions d'un composant parent à un composant enfant. Elles peuvent contenir des chaînes de caractères, des nombres, des tableaux, des objets, des fonctions, etc.
    </p>

    <h3 style="font-size: 16px;">Passer des Variables avec les Props</h3>
    <p style="font-size: 16px;">
        Les props sont principalement utilisées pour passer des valeurs comme des chaînes de caractères, des nombres, ou même des objets. Par exemple, si un composant parent a une variable et souhaite la transmettre à un composant enfant, il peut le faire via les props.
    </p>
    <pre style="font-size: 16px; background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
<code>
function Parent() &#123;
  const message = "Bienvenue sur React!";
  return &#60;Child message=&#123;message&#125; /&#62;
&#125;

function Child(props) &#123;
  return &#60;h1&#62;&#123;props.message&#125;&#60;/h1&#62;
&#125;
</code></pre>
    <p style="font-size: 16px;">
        Dans cet exemple, la variable <code>message</code> est passée du composant <code>Parent</code> au composant <code>Child</code> via la prop <code>message</code>.
    </p>

    <h3 style="font-size: 16px;">Passer des Fonctions avec les Props</h3>
    <p style="font-size: 16px;">
        Vous pouvez également passer des fonctions comme props. Cela est utile lorsque vous avez besoin que le composant enfant exécute une fonction définie dans le composant parent, souvent pour mettre à jour l'état du parent ou effectuer une autre action.
    </p>
    <pre style="font-size: 16px; background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
<code>
function Parent() &#123;
  const handleClick = () => &#123;
    alert('Le bouton a été cliqué!');
  &#125;
  return &#60;Child onClick=&#123;handleClick&#125; /&#62;
&#125;

function Child(props) &#123;
  return &#60;button onClick=&#123;props.onClick&#125;&#62;Cliquez ici&#60;/button&#62;
&#125;
</code></pre>
    <p style="font-size: 16px;">
        Ici, la fonction <code>handleClick</code> est définie dans le composant <code>Parent</code> et passée comme prop <code>onClick</code> au composant <code>Child</code>. Lorsque l'utilisateur clique sur le bouton dans le composant enfant, la fonction du parent est exécutée.
    </p>

    <h3 style="font-size: 16px;">Passer des Objets avec les Props</h3>
    <p style="font-size: 16px;">
        Les objets peuvent également être passés comme props. Par exemple, un composant parent pourrait avoir un objet contenant plusieurs propriétés, et cet objet pourrait être transmis à un enfant.
    </p>
    <pre style="font-size: 16px; background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
<code>
function Parent() &#123;
  const user = &#123; name: 'Alice', age: 25 &#125;;
  return &#60;Child user=&#123;user&#125; /&#62;
&#125;

function Child(props) &#123;
  return &#60;div&#62;
    &#60;p&#62;Nom: &#123;props.user.name&#125;&#60;/p&#62;
    &#60;p&#62;Âge: &#123;props.user.age&#125;&#60;/p&#62;
  &#60;/div&#62;
&#125;
</code></pre>
    <p style="font-size: 16px;">
        Dans cet exemple, un objet <code>user</code> est passé du composant <code>Parent</code> au composant <code>Child</code> via la prop <code>user</code>. Le composant enfant peut accéder aux propriétés de cet objet à travers <code>props.user</code>.
    </p>

    <h3 style="font-size: 16px;">Validation des Props avec PropTypes</h3>
    <p style="font-size: 16px;">
        Il est souvent utile de valider les types de données que vous passez via les props. React offre un moyen simple de le faire avec <code>PropTypes</code>. Cela vous permet de garantir que les props que vous transmettez aux composants sont du bon type.
    </p>
    <pre style="font-size: 16px; background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
<code>
import PropTypes from 'prop-types';

function Parent() &#123;
  return &#60;Child message="Hello" age=&#123;25&#125; /&#62;
&#125;

function Child(props) &#123;
  return &#60;div&#62;
    &#60;p&#62;&#123;props.message&#125;&#60;/p&#62;
    &#60;p&#62;&#123;props.age&#125;&#60;/p&#62;
  &#60;/div&#62;
&#125;

Child.propTypes = &#123;
  message: PropTypes.string.isRequired,
  age: PropTypes.number
&#125;
</code></pre>
    <p style="font-size: 16px;">
        Dans cet exemple, les props <code>message</code> et <code>age</code> sont validées dans le composant <code>Child</code>. Si un type incorrect est passé (par exemple, si <code>age</code> n'est pas un nombre), React lancera un avertissement dans la console.
    </p>

    <h3 style="font-size: 16px;">Props Enfants Spéciales</h3>
    <p style="font-size: 16px;">
        React permet également de passer des props spéciales, telles que <code>children</code>, qui sont utilisées pour encapsuler du contenu dynamique dans un composant.
    </p>
    <pre style="font-size: 16px; background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
<code>
function Parent() &#123;
  return &#60;Child&#62;Ceci est un contenu enfant&#60;/Child&#62;
&#125;

function Child(props) &#123;
  return &#60;div&#62;
    &#60;p&#62;&#123;props.children&#125;&#60;/p&#62;
  &#60;/div&#62;
&#125;
</code></pre>
    <p style="font-size: 16px;">
        Dans cet exemple, <code>props.children</code> permet au composant <code>Child</code> d'afficher le contenu passé entre ses balises ouvrantes et fermantes.
    </p>
</section>

  `,
  styles: [``]
})
export class ReactPropsComponent  {

}


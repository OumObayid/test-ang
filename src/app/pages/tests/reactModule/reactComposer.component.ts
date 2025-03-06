import { Component } from '@angular/core';

@Component({
  selector: 'app-reactComposer',
  template: `
  <h1 style="font-size: 24px;">🚀 Composition des Composants : Structurer une Application React</h1>

<section>
    <h2 style="font-size: 20px;">  Composition des Composants</h2>
    <p style="font-size: 16px;">
        La <strong>composition des composants</strong> est un concept fondamental en React. Elle permet de structurer une application en combinant des composants plus petits pour former des applications plus grandes. En utilisant la composition, nous pouvons réutiliser des composants, réduire la duplication du code et rendre l'application plus modulaire.
    </p>
    <p style="font-size: 16px;">
        Contrairement à d'autres bibliothèques ou frameworks où l'héritage est utilisé pour créer des hiérarchies complexes de composants, React privilégie la composition. En d'autres termes, au lieu de créer des sous-classes de composants, nous allons "composer" des composants en les imbriquant les uns dans les autres.
    </p>

    <h3 style="font-size: 16px;"> Passage de Composants Enfants avec &#96;props.children&#96;</h3>
    <p style="font-size: 16px;">
        L'une des méthodes les plus courantes de composition en React est le passage de composants enfants via la prop spéciale <code>&#96;children&#96;</code>. Cette prop permet à un composant parent d'encapsuler un contenu qui sera rendu dans le composant enfant.
    </p>
    <pre style="font-size: 16px; background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
<code>
function Container(props) &#123;
  return &#60;div&#62;
    &#123;props.children&#125;
  &#60;/div&#62;
&#125;

function App() &#123;
  return &#60;Container&#62;
    &#60;h1&#62;Titre de la page&#60;/h1&#62;
    &#60;p&#62;Voici le contenu principal de l'application&#60;/p&#62;
  &#60;/Container&#62;
&#125;
</code></pre>
    <p style="font-size: 16px;">
        Dans cet exemple, le composant <code>Container</code> sert de "wrapper" pour d'autres composants. Le contenu entre les balises <code>&#60;Container&#62;</code> et <code>&#60;/Container&#62;</code> dans le composant <code>App</code> sera passé à <code>Container</code> via la prop <code>&#96;children&#96;</code>.
    </p>

    <h3 style="font-size: 16px;"> Création de Composants Composés</h3>
    <p style="font-size: 16px;">
        En utilisant la composition, vous pouvez créer des composants plus complexes à partir de composants plus petits et plus simples. Par exemple, un composant de carte peut être composé de plusieurs autres composants comme le titre, le corps du texte et le pied de page.
    </p>
    <pre style="font-size: 16px; background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
<code>
function CardTitle(props) &#123;
  return &#60;h2&#62;&#123;props.title&#125;&#60;/h2&#62;
&#125;

function CardBody(props) &#123;
  return &#60;p&#62;&#123;props.body&#125;&#60;/p&#62;
&#125;

function CardFooter(props) &#123;
  return &#60;footer&#62;&#123;props.footer&#125;&#60;/footer&#62;
&#125;

function Card(props) &#123;
  return &#60;div className="card"&#62;
    &#60;CardTitle title=&#123;props.title&#125; /&#62;
    &#60;CardBody body=&#123;props.body&#125; /&#62;
    &#60;CardFooter footer=&#123;props.footer&#125; /&#62;
  &#60;/div&#62;
&#125;

function App() &#123;
  return &#60;Card title="Titre de la carte" body="Contenu de la carte" footer="Pied de page" /&#62;
&#125;
</code></pre>
    <p style="font-size: 16px;">
        Dans cet exemple, nous avons créé plusieurs petits composants comme <code>CardTitle</code>, <code>CardBody</code>, et <code>CardFooter</code>, qui sont ensuite combinés pour former un composant plus complexe <code>Card</code>. Ce type de composition permet de maintenir les composants réutilisables et faciles à comprendre.
    </p>

    <h3 style="font-size: 16px;">&#128187; Composants Présentations vs Composants Conteneurs</h3>
    <p style="font-size: 16px;">
        Une autre approche de la composition des composants est de séparer les composants en deux catégories : les <strong>composants de présentation</strong> et les <strong>composants conteneurs</strong>.
    </p>
    <p style="font-size: 16px;">
        - Les <strong>composants de présentation</strong> sont responsables de l'affichage des données et ne manipulent généralement pas l'état (ils sont souvent des composants "stateless").
        - Les <strong>composants conteneurs</strong> gèrent la logique et l'état, et sont responsables de la gestion des données.
    </p>
    <pre style="font-size: 16px; background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
<code>
// Composant de présentation
function UserProfile(props) &#123;
  return &#60;div&#62;
    &#60;h2&#62;Nom: &#123;props.name&#125;&#60;/h2&#62;
    &#60;h3&#62;Âge: &#123;props.age&#125;&#60;/h3&#62;
  &#60;/div&#62;
&#125;

// Composant conteneur
function UserContainer() &#123;
  const user = &#123; name: 'Alice', age: 30 &#125;;
  return &#60;UserProfile name=&#123;user.name&#125; age=&#123;user.age&#125; /&#62;
&#125;
</code></pre>
    <p style="font-size: 16px;">
        Ici, <code>UserProfile</code> est un composant de présentation qui reçoit des données via des props, tandis que <code>UserContainer</code> est un composant conteneur qui gère les données et les passe à <code>UserProfile</code>.
    </p>

    <h3 style="font-size: 16px;">⚙️ Composants Réutilisables et Paramétrables</h3>
    <p style="font-size: 16px;">
        Un autre avantage de la composition des composants est la possibilité de créer des composants réutilisables et paramétrables. En combinant des composants simples et bien définis, vous pouvez créer une grande variété de composants réutilisables pour différentes parties de votre application.
    </p>
    <pre style="font-size: 16px; background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
<code>
function Button(props) &#123;
  return &#60;button className=&#123;props.className&#125;&#62;&#123;props.label&#125;&#60;/button&#62;
&#125;

function App() &#123;
  return &#60;div&#62;
    &#60;Button className="primary" label="Valider" /&#62;
    &#60;Button className="secondary" label="Annuler" /&#62;
  &#60;/div&#62;
&#125;
</code></pre>
    <p style="font-size: 16px;">
        Le composant <code>Button</code> est un composant réutilisable qui peut être utilisé plusieurs fois avec différentes props. En passant différentes classes et étiquettes, vous pouvez obtenir différents boutons avec la même structure de base.
    </p>

    <h3 style="font-size: 16px;">🔚 Conclusion</h3>
    <p style="font-size: 16px;">
        La composition des composants est un concept clé de React, qui vous permet de structurer votre application de manière modulaire et réutilisable. En combinant des composants plus petits et plus simples, vous pouvez créer des applications plus grandes, plus claires et plus faciles à maintenir.
    </p>
</section>

  `,
  styles: [``]
})
export class reactComposerComponent  {

}


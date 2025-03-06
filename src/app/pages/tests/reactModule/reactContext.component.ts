import { Component } from '@angular/core';

@Component({
  selector: 'app-ReactContext',
  template: `
<h1 style="font-size: 24px;">🚀 Introduction au Context API</h1>

<section>
    <h2 style="font-size: 20px;">💡 Pourquoi utiliser le Context API ?</h2>
    <p style="font-size: 16px;">
        Dans une application React, il arrive souvent que des données globales (comme l'utilisateur connecté, un thème ou une langue)
        soient nécessaires dans plusieurs composants.
        Sans le **Context API**, on doit utiliser le "prop drilling" (passer des props à plusieurs niveaux), ce qui peut être inefficace.
    </p>

    <h2 style="font-size: 20px;">🔄 Le problème du Prop Drilling</h2>
    <p style="font-size: 16px;">
        Supposons que nous ayons une application avec plusieurs niveaux de composants, où un état doit être utilisé dans un composant
        profondément imbriqué. Sans **Context API**, nous devons passer les données manuellement à travers chaque composant.
    </p>

    <pre style="font-size: 16px; background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
<code>
function GrandParent() &#123;
  const message = "Bonjour depuis le GrandParent !";

  return &lt;Parent message=&#123;message&#125; /&gt;;
&#125;

function Parent(&#123; message &#125;) &#123;
  return &lt;Enfant message=&#123;message&#125; /&gt;;
&#125;

function Enfant(&#123; message &#125;) &#123;
  return &lt;p&gt;&#123;message&#125;&lt;/p&gt;;
&#125;
</code></pre>

    <p style="font-size: 16px;">
        Ici, la prop &#96;message&#96; est transmise manuellement à chaque niveau.
        Ce problème s'aggrave lorsque l'application devient plus complexe.
    </p>

    <h2 style="font-size: 20px;">🛠️ Solution : Le Context API</h2>
    <p style="font-size: 16px;">
        **Context API** permet de partager des données globales sans avoir à les passer explicitement à chaque composant intermédiaire.
        Il fonctionne en trois étapes :
    </p>
    <ul style="font-size: 16px;">
        <li>🆕 **Créer un contexte**</li>
        <li>📡 **Fournir une valeur via un Provider**</li>
        <li>🎯 **Consommer la valeur dans les composants**</li>
    </ul>

    <h2 style="font-size: 20px;">🔎 Exemple simple d'utilisation</h2>

    <p style="font-size: 16px;">
        Nous allons voir comment le **Context API** simplifie la gestion des données globales.
    </p>

    <pre style="font-size: 16px; background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
<code>
import React, &#123; createContext, useContext &#125; from 'react';

const MessageContext = createContext();

function GrandParent() &#123;
  return (
    &lt;MessageContext.Provider value="Bonjour depuis le contexte !"&gt;
      &lt;Parent /&gt;
    &lt;/MessageContext.Provider&gt;
  );
&#125;

function Parent() &#123;
  return &lt;Enfant /&gt;;
&#125;

function Enfant() &#123;
  const message = useContext(MessageContext);
  return &lt;p&gt;&#123;message&#125;&lt;/p&gt;;
&#125;

export default GrandParent;
</code></pre>

    <h2 style="font-size: 20px;">✅ Avantages du Context API</h2>
    <ul style="font-size: 16px;">
        <li>✔️ Évite le **prop drilling**, rendant le code plus lisible.</li>
        <li>✔️ Permet de gérer des états globaux facilement.</li>
        <li>✔️ Fonctionne avec **useContext** pour une récupération simple des données.</li>
    </ul>

    <p style="font-size: 16px;">
        Nous avons maintenant vu l'introduction au **Context API** !
        🚀 Passons à l'étape suivante : **Utilisation du Context API** 🎯
    </p>
</section>

  `,
  styles: [``]
})
export class ReactContextComponent  {

}


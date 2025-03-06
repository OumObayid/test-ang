import { Component } from '@angular/core';

@Component({
  selector: 'app-ReactCreatRoute',
  template: `
<h1 style="font-size: 24px;">🚀 Création des Routes</h1>

<section>
    <h2 style="font-size: 20px;">💡 Définition des Routes dans React Router</h2>
    <p style="font-size: 16px;">
        Dans une application React, les routes permettent de naviguer entre différentes pages. Nous utilisons <code>react-router-dom</code> pour configurer les routes.
    </p>

    <h2 style="font-size: 20px;">📌 Création des Composants de Page</h2>
    <p style="font-size: 16px;">
        Avant de définir les routes, nous devons créer les composants qui représenteront les différentes pages de notre application.
    </p>

    <h3 style="font-size: 18px;">🏠 Home.js</h3>
    <pre style="font-size: 16px; background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
<code>
import React from 'react';

function Home() &#123;
  return &lt;h2&gt;Page d'accueil&lt;/h2&gt;;
&#125;

export default Home;
</code></pre>

    <h3 style="font-size: 18px;">📖 About.js</h3>
    <pre style="font-size: 16px; background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
<code>
import React from 'react';

function About() &#123;
  return &lt;h2&gt;À propos de nous&lt;/h2&gt;;
&#125;

export default About;
</code></pre>

    <h3 style="font-size: 18px;">📞 Contact.js</h3>
    <pre style="font-size: 16px; background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
<code>
import React from 'react';

function Contact() &#123;
  return &lt;h2&gt;Contactez-nous&lt;/h2&gt;;
&#125;

export default Contact;
</code></pre>

    <h2 style="font-size: 20px;">🛠️ Configuration des Routes</h2>
    <p style="font-size: 16px;">
        Maintenant que nos composants sont prêts, nous allons les intégrer dans <code>App.js</code> en définissant les routes.
    </p>

    <pre style="font-size: 16px; background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
<code>
import React from 'react';
import &#123; BrowserRouter as Router, Routes, Route &#125; from 'react-router-dom';

import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() &#123;
  return (
    &lt;Router&gt;
      &lt;Routes&gt;
        &lt;Route path="/" element=&#123;&lt;Home /&gt;&#125; /&gt;
        &lt;Route path="/about" element=&#123;&lt;About /&gt;&#125; /&gt;
        &lt;Route path="/contact" element=&#123;&lt;Contact /&gt;&#125; /&gt;
      &lt;/Routes&gt;
    &lt;/Router&gt;
  );
&#125;

export default App;
</code></pre>

    <h2 style="font-size: 20px;">🚀 Explication</h2>
    <ul style="font-size: 16px;">
        <li><code>BrowserRouter</code> enveloppe l'application pour permettre le routage.</li>
        <li><code>Routes</code> contient toutes les routes de l'application.</li>
        <li><code>Route</code> définit une URL et le composant correspondant.</li>
    </ul>

    <h2 style="font-size: 20px;">🎯 Vérification</h2>
    <p style="font-size: 16px;">
        Lancez votre projet avec <code>npm start</code> ou <code>yarn start</code>. Essayez de naviguer vers :
    </p>
    <ul style="font-size: 16px;">
        <li><code>http://localhost:3000/</code> → Page d'accueil</li>
        <li><code>http://localhost:3000/about</code> → À propos</li>
        <li><code>http://localhost:3000/contact</code> → Contact</li>
    </ul>

    <p style="font-size: 16px;">
        Si tout fonctionne correctement, votre routage est bien en place ! 🎉
    </p>
</section>

  `,
  styles: [``]
})
export class ReactCreatRouteComponent  {

}


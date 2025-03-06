import { Component } from '@angular/core';

@Component({
  selector: 'app-reactInstRouter',
  template: `
<h1 style="font-size: 24px;">🚀 Installation et Configuration de React Router</h1>

<section>
    <h2 style="font-size: 20px;">💡 Installation de React Router</h2>
    <p style="font-size: 16px;">
        React Router est une bibliothèque qui permet d'ajouter le routage dans une application React. Pour l'installer, utilisez la commande suivante :
    </p>

    <pre style="font-size: 16px; background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
<code>
npm install react-router-dom
</code></pre>

    <p style="font-size: 16px;">
        Si vous utilisez Yarn :
    </p>

    <pre style="font-size: 16px; background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
<code>
yarn add react-router-dom
</code></pre>

    <h2 style="font-size: 20px;">🔗 Configuration de React Router</h2>
    <p style="font-size: 16px;">
        Une fois installé, nous devons configurer React Router dans notre application. Le fichier principal <code>App.js</code> ou <code>App.jsx</code> doit être modifié pour inclure <code>BrowserRouter</code>.
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

    <p style="font-size: 16px;">
        Explication :
    </p>
    <ul style="font-size: 16px;">
        <li><code>BrowserRouter</code> enveloppe toute l'application pour activer le routage.</li>
        <li><code>Routes</code> contient toutes les routes définies.</li>
        <li><code>Route</code> définit chaque route spécifique.</li>
    </ul>

    <p style="font-size: 16px;">
        Maintenant, votre application est prête à utiliser le routage avec React Router !
    </p>
</section>

  `,
  styles: [``]
})
export class ReactInstRouterComponent  {

}


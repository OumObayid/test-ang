import { Component } from '@angular/core';

@Component({
  selector: 'app-reactRedirection',
  template: `
<h1 style="font-size: 24px;">🚀 Gestion des Redirections et des Liens Actifs</h1>

<section>
    <h2 style="font-size: 20px;">🔗 Navigation avec Links</h2>
    <p style="font-size: 16px;">
        Dans React Router, l'utilisation de la balise <code>&lt;a&gt;</code> pour naviguer entre les pages recharge complètement l'application.
        À la place, nous utilisons le composant <code>Link</code> de <code>react-router-dom</code> pour permettre une navigation fluide sans rechargement.
    </p>

    <h3 style="font-size: 18px;">📌 Ajout d'un Menu de Navigation</h3>
    <p style="font-size: 16px;">
        Nous allons créer un composant <code>Navbar.js</code> contenant les liens de navigation.
    </p>

    <pre style="font-size: 16px; background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
<code>
import React from 'react';
import &#123; Link &#125; from 'react-router-dom';

function Navbar() &#123;
  return (
    &lt;nav&gt;
      &lt;ul&gt;
        &lt;li&gt;&lt;Link to="/"&gt;Accueil&lt;/Link&gt;&lt;/li&gt;
        &lt;li&gt;&lt;Link to="/about"&gt;À propos&lt;/Link&gt;&lt;/li&gt;
        &lt;li&gt;&lt;Link to="/contact"&gt;Contact&lt;/Link&gt;&lt;/li&gt;
      &lt;/ul&gt;
    &lt;/nav&gt;
  );
&#125;

export default Navbar;
</code></pre>

    <h2 style="font-size: 20px;">🔄 Gestion des Redirections</h2>
    <p style="font-size: 16px;">
        Parfois, nous avons besoin de rediriger les utilisateurs d'une page à une autre, par exemple après une connexion réussie.
        Pour cela, nous utilisons <code>Navigate</code>.
    </p>

    <h3 style="font-size: 18px;">➡️ Exemple de Redirection</h3>
    <p style="font-size: 16px;">
        Nous allons créer un composant <code>Login.js</code> qui redirige l'utilisateur après l'authentification.
    </p>

    <pre style="font-size: 16px; background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
<code>
import React, &#123; useState &#125; from 'react';
import &#123; Navigate &#125; from 'react-router-dom';

function Login() &#123;
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () =&gt; &#123;
    setIsLoggedIn(true);
  &#125;;

  if (isLoggedIn) &#123;
    return &lt;Navigate to="/" /&gt;;
  &#125;

  return (
    &lt;div&gt;
      &lt;h2&gt;Connexion&lt;/h2&gt;
      &lt;button onClick=&#123;handleLogin&#125;&gt;Se connecter&lt;/button&gt;
    &lt;/div&gt;
  );
&#125;

export default Login;
</code></pre>

    <h2 style="font-size: 20px;">✅ Ajout du Navbar et des Routes dans App.js</h2>
    <p style="font-size: 16px;">
        Nous intégrons maintenant le <code>Navbar</code> et les nouvelles routes dans <code>App.js</code>.
    </p>

    <pre style="font-size: 16px; background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
<code>
import React from 'react';
import &#123; BrowserRouter as Router, Routes, Route &#125; from 'react-router-dom';

import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Login from './Login';

function App() &#123;
  return (
    &lt;Router&gt;
      &lt;Navbar /&gt;
      &lt;Routes&gt;
        &lt;Route path="/" element=&#123;&lt;Home /&gt;&#125; /&gt;
        &lt;Route path="/about" element=&#123;&lt;About /&gt;&#125; /&gt;
        &lt;Route path="/contact" element=&#123;&lt;Contact /&gt;&#125; /&gt;
        &lt;Route path="/login" element=&#123;&lt;Login /&gt;&#125; /&gt;
      &lt;/Routes&gt;
    &lt;/Router&gt;
  );
&#125;

export default App;
</code></pre>

    <h2 style="font-size: 20px;">🎨 Ajout de Styles pour les Liens Actifs</h2>
    <p style="font-size: 16px;">
        Pour indiquer à l'utilisateur sur quelle page il se trouve, nous utilisons <code>NavLink</code> au lieu de <code>Link</code>.
    </p>

    <pre style="font-size: 16px; background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
<code>
import React from 'react';
import &#123; NavLink &#125; from 'react-router-dom';

function Navbar() &#123;
  return (
    &lt;nav&gt;
      &lt;ul&gt;
        &lt;li&gt;&lt;NavLink to="/" style=&#123;(&#123; isActive &#125;) =&gt; &#123;
          return &#123; fontWeight: isActive ? 'bold' : 'normal' &#125;;
        &#125;&#125;&gt;Accueil&lt;/NavLink&gt;&lt;/li&gt;

        &lt;li&gt;&lt;NavLink to="/about" style=&#123;(&#123; isActive &#125;) =&gt; &#123;
          return &#123; fontWeight: isActive ? 'bold' : 'normal' &#125;;
        &#125;&#125;&gt;À propos&lt;/NavLink&gt;&lt;/li&gt;

        &lt;li&gt;&lt;NavLink to="/contact" style=&#123;(&#123; isActive &#125;) =&gt; &#123;
          return &#123; fontWeight: isActive ? 'bold' : 'normal' &#125;;
        &#125;&#125;&gt;Contact&lt;/NavLink&gt;&lt;/li&gt;
      &lt;/ul&gt;
    &lt;/nav&gt;
  );
&#125;

export default Navbar;
</code></pre>

    <h2 style="font-size: 20px;">🚀 Résumé</h2>
    <ul style="font-size: 16px;">
        <li>Nous avons utilisé <code>Link</code> pour une navigation fluide.</li>
        <li>Nous avons implémenté <code>Navigate</code> pour rediriger l'utilisateur après connexion.</li>
        <li>Nous avons utilisé <code>NavLink</code> pour afficher un style différent sur le lien actif.</li>
    </ul>

    <p style="font-size: 16px;">
        Testez maintenant la navigation et la redirection dans votre navigateur ! 🎉
    </p>
</section>

  `,
  styles: [``]
})
export class ReactRedirectionComponent  {

}


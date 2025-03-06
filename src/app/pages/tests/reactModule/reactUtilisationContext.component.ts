import { Component } from '@angular/core';

@Component({
  selector: 'app-reactUtilisationContext',
  template: `
<h1 style="font-size: 24px;">🚀 Utilisation du Context API</h1>
<section>
<h2 style="font-size: 20px;">💡 Mise en place du Context API</h2>
    <p style="font-size: 16px;">
        Maintenant que nous avons compris pourquoi utiliser le **Context API**, voyons comment l'implémenter concrètement.
        L'utilisation du **Context API** repose sur trois étapes principales :
    </p>
    <ul style="font-size: 16px;">
        <li>🆕 **Créer un contexte** avec <code>createContext()</code></li>
        <li>📡 **Fournir une valeur** à l'aide du <code>Provider</code></li>
        <li>🎯 **Consommer cette valeur** grâce à <code>useContext()</code></li>
    </ul>

    <h2 style="font-size: 20px;">🆕 1. Création du contexte</h2>
    <p style="font-size: 16px;">
        La première étape consiste à créer un contexte avec <code>createContext()</code>.
    </p>
    <pre style="font-size: 16px; background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
<code>
import React, &#123; createContext &#125; from 'react';

const ThemeContext = createContext("light");

export default ThemeContext;
</code></pre>
<h2 style="font-size: 20px;">📡 2. Fournir une valeur via le Provider</h2>
    <p style="font-size: 16px;">
        On utilise le **Provider** pour fournir une valeur au contexte à tous les composants enfants.
    </p>

    <pre style="font-size: 16px; background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
<code>
import React, &#123; useState &#125; from 'react';
import ThemeContext from './ThemeContext';
import Enfant from './Enfant';

function App() &#123;
  const [theme, setTheme] = useState("light");

  return (
    &lt;ThemeContext.Provider value=&#123;theme&#125;&gt;
      &lt;Enfant /&gt;
      &lt;button onClick=&#123;() =&gt; setTheme(theme === "light" ? "dark" : "light")&#125;&gt;
        Changer le thème
      &lt;/button&gt;
    &lt;/ThemeContext.Provider&gt;
  );
&#125;

export default App;
</code></pre>
<h2 style="font-size: 20px;">🎯 3. Consommer le contexte avec useContext</h2>
    <p style="font-size: 16px;">
        Pour accéder aux données du **Context API**, on utilise le hook <code>useContext()</code>.
    </p>
    <pre style="font-size: 16px; background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
    <code>
    import React, &#123; useContext &#125; from 'react';
    import ThemeContext from './ThemeContext';

    function Enfant() &#123;
  const theme = useContext(ThemeContext);
  return &#60;p style=&#123; &#123; color: theme === "light"
  ? "black" : "white", backgroundColor: theme === "light" ? "white" : "black" &#125; &#125;&#62;
    Le thème actuel est &#123;theme&#125;
  &#60;/p&#62;;

&#125;

  export default Enfant;
    </code>
    </pre>

</section>
  `,
  styles: [``]
})
export class ReactUtilisationContextComponent  {

}


import { Component } from '@angular/core';

@Component({
  selector: 'app-reactForms',
  template: `
<h1 style="font-size: 24px;">🚀 Formulaire Contrôlé</h1>

<section>
    <h2 style="font-size: 20px;">💡 Qu'est-ce qu'un formulaire contrôlé ?</h2>
    <p style="font-size: 16px;">
        Un formulaire contrôlé est un formulaire où l'état des entrées est géré par React via le state.
        Chaque changement dans un champ met à jour le state, et la valeur de l'input est toujours synchronisée avec l'état.
    </p>

    <h2 style="font-size: 20px;">🛠️ Création d'un formulaire contrôlé</h2>
    <p style="font-size: 16px;">
        Voici un exemple simple d'un formulaire avec un champ de texte et un bouton de soumission.
    </p>

    <pre style="font-size: 16px; background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
<code>
import React, &#123; useState &#125; from 'react';

function Formulaire() &#123;
  const [nom, setNom] = useState("");

  const handleChange = (event) =&gt; &#123;
    setNom(event.target.value);
  &#125;;

  const handleSubmit = (event) =&gt; &#123;
    event.preventDefault();
    alert("Nom soumis : " + nom);
  &#125;;

  return (
    &lt;form onSubmit=&#123;handleSubmit&#125;&gt;
      &lt;label&gt;
        Nom :
        &lt;input type="text" value=&#123;nom&#125; onChange=&#123;handleChange&#125; /&gt;
      &lt;/label&gt;
      &lt;button type="submit"&gt;Envoyer&lt;/button&gt;
    &lt;/form&gt;
  );
&#125;

export default Formulaire;
</code></pre>

    <h2 style="font-size: 20px;">🔄 Explication du code</h2>
    <ul style="font-size: 16px;">
        <li><strong>useState</strong> est utilisé pour stocker la valeur du champ.</li>
        <li>La fonction <strong>handleChange</strong> met à jour l'état lorsque l'utilisateur tape.</li>
        <li>La valeur de l'input est liée à l'état via <code>value=&#123;nom&#125;</code>.</li>
        <li>La soumission est gérée par <strong>handleSubmit</strong>, qui affiche une alerte et empêche le rechargement de la page.</li>
    </ul>

    <h2 style="font-size: 20px;">📌 Ajouter plusieurs champs</h2>
    <p style="font-size: 16px;">
        Nous pouvons gérer plusieurs champs en utilisant un objet dans le state.
    </p>

    <pre style="font-size: 16px; background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
<code>
import React, &#123; useState &#125; from 'react';

function Formulaire() &#123;
  const [formData, setFormData] = useState(&#123; nom: "", email: "" &#125;);

  const handleChange = (event) =&gt; &#123;
    setFormData(&#123;
      ...formData,
      [event.target.name]: event.target.value
    &#125;);
  &#125;;

  const handleSubmit = (event) =&gt; &#123;
    event.preventDefault();
    alert(&#96;Nom: $&#123;formData.nom&#125;, Email: $&#123;formData.email&#125;&#96;);
  &#125;;

  return (
    &lt;form onSubmit=&#123;handleSubmit&#125;&gt;
      &lt;label&gt;
        Nom :
        &lt;input type="text" name="nom" value=&#123;formData.nom&#125; onChange=&#123;handleChange&#125; /&gt;
      &lt;/label&gt;
      &lt;br /&gt;
      &lt;label&gt;
        Email :
        &lt;input type="email" name="email" value=&#123;formData.email&#125; onChange=&#123;handleChange&#125; /&gt;
      &lt;/label&gt;
      &lt;br /&gt;
      &lt;button type="submit"&gt;Envoyer&lt;/button&gt;
    &lt;/form&gt;
  );
&#125;

export default Formulaire;
</code></pre>

    <h2 style="font-size: 20px;">✅ Résumé</h2>
    <ul style="font-size: 16px;">
        <li>Un formulaire contrôlé lie les entrées à l'état React.</li>
        <li>Chaque modification d'un champ met à jour l'état via <code>onChange</code>.</li>
        <li>Les valeurs des champs sont contrôlées avec <code>value</code>.</li>
    </ul>

    <p style="font-size: 16px;">
        Maintenant que vous avez compris les formulaires contrôlés, nous allons passer à la validation des formulaires ! 🚀
    </p>
</section>

  `,
  styles: [``]
})
export class ReactFormsComponent  {

}


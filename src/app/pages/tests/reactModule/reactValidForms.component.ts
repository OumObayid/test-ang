import { Component } from '@angular/core';

@Component({
  selector: 'app-reactValidForms',
  template: `
  <h1 style="font-size: 24px;">🚀 Validation des formulaires</h1>

<section>
    <h2 style="font-size: 20px;">💡 Pourquoi valider un formulaire ?</h2>
    <p style="font-size: 16px;">
        La validation des formulaires est essentielle pour garantir que les utilisateurs saisissent des données correctes avant de les envoyer au serveur.
        On peut effectuer la validation côté client avec React et côté serveur pour une sécurité renforcée.
    </p>

    <h2 style="font-size: 20px;">🛠️ Validation simple avec useState</h2>
    <p style="font-size: 16px;">
        Voici un exemple de validation de formulaire où l'on vérifie que les champs ne sont pas vides.
    </p>

    <pre style="font-size: 16px; background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
<code>
import React, &#123; useState &#125; from 'react';

function Formulaire() &#123;
  const [formData, setFormData] = useState(&#123; nom: "", email: "" &#125;);
  const [errors, setErrors] = useState(&#123; nom: "", email: "" &#125;);

  const handleChange = (event) =&gt; &#123;
    setFormData(&#123;
      ...formData,
      [event.target.name]: event.target.value
    &#125;);
  &#125;;

  const validate = () =&gt; &#123;
    let tempErrors = &#123; nom: "", email: "" &#125;;
    let isValid = true;

    if (!formData.nom.trim()) &#123;
      tempErrors.nom = "Le nom est requis.";
      isValid = false;
    &#125;

    if (!formData.email.includes("&#64;")) &#123;
      tempErrors.email = "L'email doit contenir &#64;.";
      isValid = false;
    &#125;

    setErrors(tempErrors);
    return isValid;
  &#125;;

  const handleSubmit = (event) =&gt; &#123;
    event.preventDefault();
    if (validate()) &#123;
      alert("Formulaire soumis avec succès !");
    &#125;
  &#125;;

  return (
    &lt;form onSubmit=&#123;handleSubmit&#125;&gt;
      &lt;label&gt;
        Nom :
        &lt;input type="text" name="nom" value=&#123;formData.nom&#125; onChange=&#123;handleChange&#125; /&gt;
        &lt;span style="color: red;"&gt;&#123;errors.nom&#125;&lt;/span&gt;
      &lt;/label&gt;
      &lt;br /&gt;
      &lt;label&gt;
        Email :
        &lt;input type="email" name="email" value=&#123;formData.email&#125; onChange=&#123;handleChange&#125; /&gt;
        &lt;span style="color: red;"&gt;&#123;errors.email&#125;&lt;/span&gt;
      &lt;/label&gt;
      &lt;br /&gt;
      &lt;button type="submit"&gt;Envoyer&lt;/button&gt;
    &lt;/form&gt;
  );
&#125;

export default Formulaire;
</code></pre>

    <h2 style="font-size: 20px;">🔄 Explication du code</h2>
    <ul style="font-size: 16px;">
        <li><strong>useState</strong> est utilisé pour stocker les valeurs et les erreurs.</li>
        <li>La fonction <strong>validate()</strong> vérifie si les champs sont corrects.</li>
        <li>Les messages d'erreur sont affichés en rouge sous les champs invalides.</li>
    </ul>

    <h2 style="font-size: 20px;">✅ Validation avec une bibliothèque externe</h2>
    <p style="font-size: 16px;">
        Pour une validation plus robuste, on peut utiliser <strong>Yup</strong> et <strong>Formik</strong>.
    </p>

    <pre style="font-size: 16px; background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
<code>
import React from 'react';
import &#123; useFormik &#125; from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object(&#123;
  nom: Yup.string().required("Le nom est requis."),
  email: Yup.string().email("Email invalide.").required("L'email est requis.")
&#125;);

function Formulaire() &#123;
  const formik = useFormik(&#123;
    initialValues: &#123; nom: "", email: "" &#125;,
    validationSchema,
    onSubmit: (values) =&gt; &#123;
      alert(JSON.stringify(values, null, 2));
    &#125;
  &#125;);

  return (
    &lt;form onSubmit=&#123;formik.handleSubmit&#125;&gt;
      &lt;label&gt;
        Nom :
        &lt;input type="text" name="nom" onChange=&#123;formik.handleChange&#125; value=&#123;formik.values.nom&#125; /&gt;
        &lt;span style="color: red;"&gt;&#123;formik.errors.nom&#125;&lt;/span&gt;
      &lt;/label&gt;
      &lt;br /&gt;
      &lt;label&gt;
        Email :
        &lt;input type="email" name="email" onChange=&#123;formik.handleChange&#125; value=&#123;formik.values.email&#125; /&gt;
        &lt;span style="color: red;"&gt;&#123;formik.errors.email&#125;&lt;/span&gt;
      &lt;/label&gt;
      &lt;br /&gt;
      &lt;button type="submit"&gt;Envoyer&lt;/button&gt;
    &lt;/form&gt;
  );
&#125;

export default Formulaire;
</code></pre>

    <h2 style="font-size: 20px;">🚀 Avantages de Yup et Formik</h2>
    <ul style="font-size: 16px;">
        <li>Formik simplifie la gestion des formulaires dans React.</li>
        <li>Yup permet d'écrire des règles de validation claires et lisibles.</li>
        <li>Gestion automatique des erreurs et des valeurs des champs.</li>
    </ul>

    <p style="font-size: 16px;">
        Nous avons maintenant vu la validation des formulaires ! La prochaine étape : **Gestion des événements de formulaire** 🎯
    </p>
</section>

  `,
  styles: [``]
})
export class ReactValidFormsComponent  {

}


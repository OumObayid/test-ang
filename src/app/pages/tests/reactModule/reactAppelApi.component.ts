import { Component } from '@angular/core';

@Component({
  selector: 'app-reactAppelApi',
  template: `
<h1 style="font-size: 24px;">🚀 Le Hook useEffect: Effectuer des Appels API</h1>

<section>
    <h2 style="font-size: 20px;">💡 Introduction</h2>
    <p style="font-size: 16px;">
        Le hook <code>useEffect</code> peut être utilisé pour effectuer des appels API dans une application React. Il est courant de récupérer des données depuis un serveur au moment du montage d'un composant, puis d'afficher ces données dans le rendu du composant. Le hook <code>useEffect</code> est idéal pour gérer ce type d'effet secondaire, comme l'appel à une API.
    </p>

    <h3 style="font-size: 16px;">⚙️ Syntaxe du Hook useEffect avec un appel API</h3>
    <p style="font-size: 16px;">
        L'appel à une API dans <code>useEffect</code> se fait de manière asynchrone. Il est souvent utile d'utiliser <code>async</code> et <code>await</code> dans la fonction de rappel pour gérer l'appel API de manière claire et concise. Vous pouvez aussi gérer l'état du chargement et des erreurs pendant que l'appel API est en cours.
    </p>
    <pre style="font-size: 16px; background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
<code>
import React, &#123; useState, useEffect &#125; from 'react';

function FetchData() &#123;
  const [data, setData] = useState(null);  // État pour stocker les données récupérées
  const [loading, setLoading] = useState(true);  // État pour gérer le chargement
  const [error, setError] = useState(null);  // État pour gérer les erreurs

  useEffect(() => &#123;
    // Fonction asynchrone pour effectuer l'appel API
    const fetchData = async () => &#123;
      try &#123;
        const response = await fetch('https://api.example.com/data');
        const result = await response.json();
        setData(result);  // Mettre à jour l'état avec les données récupérées
        setLoading(false);  // Fin du chargement
      &#125; catch (error) &#123;
        setError(error);  // Gérer les erreurs
        setLoading(false);  // Fin du chargement
      &#125;
    &#125;

    fetchData();  // Appel de la fonction

  &#125;, []);  // Le tableau vide signifie que l'effet ne se déclenche qu'une fois au montage

  if (loading) &#123;
    return &#60;div&#62;Chargement en cours...&#60;/div&#62;;
  &#125;

  if (error) &#123;
    return &#60;div&#62;Erreur: &#123;error.message&#125;&#60;/div&#62;;
  &#125;

  return &#60;div&#62;
    &#60;h1&#62;Données récupérées&#60;/h1&#62;
    &#60;pre&#62;&#123;JSON.stringify(data, null, 2)&#125;&#60;/pre&#62;
  &#60;/div&#62;;
&#125;

export default FetchData;
</code></pre>

    <p style="font-size: 16px;">
        Dans cet exemple, nous utilisons <code>useEffect</code> pour effectuer un appel API lorsque le composant est monté. Nous gérons l'état pour les données (<code>data</code>), le statut de chargement (<code>loading</code>) et les erreurs (<code>error</code>).
    </p>

    <h3 style="font-size: 16px;">💡 Détails de l'exemple</h3>
    <ul style="font-size: 16px;">
        <li><strong>useState</strong>: Nous utilisons <code>useState</code> pour définir trois états: <code>data</code> (les données récupérées), <code>loading</code> (indiquant si les données sont en train d'être chargées), et <code>error</code> (pour gérer les erreurs d'appel API).</li>
        <li><strong>useEffect</strong>: Nous effectuons l'appel API dans <code>useEffect</code> une seule fois, lors du montage du composant, grâce au tableau de dépendances vide <code>[]</code>.</li>
        <li><strong>fetch</strong>: Nous utilisons la méthode <code>fetch</code> pour effectuer l'appel API. C'est une méthode native de JavaScript pour récupérer des ressources via le réseau.</li>
        <li><strong>async/await</strong>: Nous utilisons <code>async/await</code> pour rendre l'appel API asynchrone et plus facile à comprendre.</li>
        <li><strong>Gestion des erreurs</strong>: Si l'appel échoue, l'erreur est capturée et stockée dans l'état <code>error</code>, ce qui permet d'afficher un message d'erreur.</li>
        <li><strong>Affichage des données</strong>: Si les données sont chargées avec succès, elles sont affichées sous forme de JSON formaté à l'aide de <code>JSON.stringify</code>.</li>
    </ul>

    <h3 style="font-size: 16px;">🎯 Conclusion</h3>
    <p style="font-size: 16px;">
        Le hook <code>useEffect</code> est extrêmement utile pour effectuer des appels API dans vos composants React. Il vous permet de récupérer des données depuis un serveur au moment du montage du composant et de gérer le chargement et les erreurs de manière simple. Utilisez-le pour intégrer facilement des appels API et afficher dynamiquement des données dans vos applications React.
    </p>
</section>

  `,
  styles: [``]
})
export class ReactAppelApiComponent  {

}


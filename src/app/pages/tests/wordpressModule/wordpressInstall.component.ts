import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wordpress-Install',
  template: `
<h1 style="font-size: 24px;">⚙️ Installation de WordPress</h1>

<section>
    <h2 style="font-size: 20px;">🔹 Les différentes méthodes d'installation</h2>
    <p style="font-size: 16px;">
        Il existe plusieurs façons d'installer WordPress, en fonction de vos besoins :
    </p>
    <ul style="font-size: 16px;">
        <li>🌍 **Installation sur un hébergement web** (méthode recommandée pour un site en ligne).</li>
        <li>💻 **Installation locale** (pour tester sur son ordinateur avec XAMPP, WAMP ou Local by Flywheel).</li>
        <li>🚀 **Installation en un clic** via des hébergeurs comme OVH, Bluehost, SiteGround.</li>
    </ul>

    <h2 style="font-size: 20px;">🖥️ Installation locale avec XAMPP</h2>
    <p style="font-size: 16px;">
        Pour installer WordPress sur votre ordinateur, nous allons utiliser **XAMPP**, un logiciel qui simule un serveur local.
    </p>

    <h3 style="font-size: 18px;">📥 Étape 1 : Télécharger et installer XAMPP</h3>
    <p style="font-size: 16px;">
        Rendez-vous sur le site officiel et téléchargez la version adaptée à votre système :
    </p>
    <a href="https://www.apachefriends.org/fr/index.html" target="_blank"
       style="font-size: 16px; color: blue; text-decoration: underline;">
        🔗 Télécharger XAMPP
    </a>

    <img src="https://www.apachefriends.org/images/xampp-logo-ac950edf.svg"
        alt="Logo XAMPP"
        style="width: 100%; max-width: 100px; display: block; margin: 20px auto;">

    <h3 style="font-size: 18px;">🗂️ Étape 2 : Télécharger WordPress</h3>
    <p style="font-size: 16px;">
        Téléchargez WordPress depuis le site officiel :
    </p>
    <a href="https://wordpress.org/download/" target="_blank"
       style="font-size: 16px; color: blue; text-decoration: underline;">
        🔗 Télécharger WordPress
    </a>

    <img src="https://s.w.org/style/images/about/WordPress-logotype-standard.png"
        alt="Logo WordPress"
        style="width: 100%; max-width: 200px; display: block; margin: 20px auto;">

    <h3 style="font-size: 18px;">📂 Étape 3 : Décompresser WordPress</h3>
    <p style="font-size: 16px;">
        Placez le dossier **wordpress** dans le répertoire &#96;htdocs&#96; de XAMPP :
    </p>
    <pre style="background-color: #f4f4f4; padding: 10px; border-radius: 5px;">
        C:&#92;xampp&#92;htdocs&#92;wordpress
    </pre>

    <h3 style="font-size: 18px;">🛠️ Étape 4 : Créer une base de données</h3>
    <p style="font-size: 16px;">
        - Ouvrez XAMPP et démarrez **Apache** et **MySQL**.
        - Accédez à **phpMyAdmin** via &#96;http://localhost/phpmyadmin&#96;.
        - Cliquez sur **Nouvelle base de données** et nommez-la &#96;wordpress_db&#96;.
    </p>

    <h3 style="font-size: 18px;">🚀 Étape 5 : Lancer l'installation de WordPress</h3>
    <p style="font-size: 16px;">
        - Ouvrez votre navigateur et entrez &#96;http://localhost/wordpress&#96;.
        - Suivez les étapes de configuration :
    </p>
    <ul style="font-size: 16px;">
        <li>📌 Sélectionnez la langue.</li>
        <li>📌 Entrez les informations de la base de données (&#96;wordpress_db&#96;, &#96;root&#96; comme utilisateur, sans mot de passe).</li>
        <li>📌 Configurez les identifiants de votre site.</li>
    </ul>

    <h2 style="font-size: 20px;">🎉 Conclusion</h2>
    <p style="font-size: 16px;">
        Félicitations ! 🎊 Vous avez installé WordPress en local. Vous pouvez maintenant accéder à votre site via :
    </p>
    <pre style="background-color: #f4f4f4; padding: 10px; border-radius: 5px;">
        http://localhost/wordpress
    </pre>

    <p style="font-size: 16px;">
        👉 Dans la prochaine étape, nous découvrirons **l'interface de WordPress** et comment l'utiliser.
    </p>
</section>

  `,
  styles: [``]
})
export class WordpressInstallComponent  {

}



import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configuration-laravel',
  template: `
    <h1>📌Partie2: Gestion de la base de données</h1>
    <h2>🔹 Configuration de la Base de Données</h2>
    <p>
      Pour configurer la base de données, vous devez modifier le fichier .env
      situé à la racine de votre projet Laravel.<br />
      Vous devez modifier les variables suivantes:
    </p>
    <div class="tab">
      <table>
        <tr>
          <td>DB_CONNECTION</td>
          <td>mysql</td>
        </tr>
        <tr>
          <td>DB_HOST</td>
          <td>localhost</td>
        </tr>
        <tr>
          <td>DB_PORT</td>
          <td>3306</td>
        </tr>
        <tr>
          <td>DB_DATABASE</td>
          <td>nom_de_la_base_de_données</td>
        </tr>
        <tr>
          <td>DB_USERNAME</td>
          <td>nom_utilisateur</td>
        </tr>
        <tr>
          <td>DB_PASSWORD</td>
          <td>mot_de_passe</td>
        </tr>
      </table>
    </div>
    <P>Localement, la configuration sera comme ceci:</P>
    <pre class="tab">
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=nom_de_la_base
DB_USERNAME=root
DB_PASSWORD=</pre>
    <p>Ensuite, appliquez la configuration avec :</p>
    <pre class="tab">
php artisan config:cache</pre>

  `,
  styles: `
 .tab,p,li{
   font-size:15px;
 }
.tab {
          background-color: #f8f9fa;
          padding: 15px;
          border: 1px solid #ddd;
          border-radius: 5px;
          overflow-x: auto;
          font-family: monospace;
        }
 `,
})
export class LaravelConfigurationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

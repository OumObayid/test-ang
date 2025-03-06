import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-migration-laravel',
  template: `
    <h1>📌 Partie 2 : Gestion de la Base de Données avec Eloquent</h1>
    <h2>🔹 Création des Migration</h2>
    <h3>🔸 Générer une migration</h3>
    <p>
      Les migrations permettent de créer et modifier la structure des tables
      dans la base de données.
    </p>
    <h4>a. pour la table users avec la commande:</h4>
    <pre class="tab">php artisan make:migration create_users_table</pre>
    <p>si elle existe, se contenter de la modifier en ayant ces champs:</p>
    <pre class="tab">
$table->id();
$table->string('firstname');
$table->string('lastname');
$table->string('email')->unique();
$table->timestamp('email_verified_at')->nullable();
$table->string('password');
$table->string('tel')->nullable();
$table->text('address')->nullable();
$table->string('role')->default('user');
$table->rememberToken();
$table->timestamps();</pre
    >
    <h4>b- pour la table categories avec la commande:</h4>
    <pre class="tab">php artisan make:migration create_categories_table</pre>
    <p>modifier la en ayant ces champs:</p>
    <pre class="tab">
$table->id(); // ID de la catégorie
$table->string('name'); // Nom de la catégorie
$table->text('description')->nullable(); // Description de la catégorie
$table->timestamps(); // created_at, updated_at</pre>
      <h4>c- pour la table products avec la commande:</h4>
      <pre class="tab">php artisan make:migration create_products_table</pre>
     modifier la en ayant ces champs:
     <pre class="tab">
$table->id(); // ID du produit
$table->string('name'); // Nom du produit
$table->text('description'); // Description du produit
$table->decimal('price', 10, 2); // Prix du produit
$table->unsignedBigInteger('categorie_id')->nullable(); // Permet de le rendre NULL si supprimé
$table->string('image')->nullable(); // Stocke seulement le chemin de l'image
$table->foreign('categorie_id')
    ->references('id')->on('categories')
    ->onDelete('set null');
$table->timestamps(); // created_at, updated_at</pre>
    <h3>🔸 Exécuter les migrations</h3>
    <p>Exécutez les migration pour créer les tables dans la base de données :</p>
    <pre class="tab">php artisan migrate</pre>
    <p>Les tables users, categories et products seront créées dans la base de données configurée.</p>
    <h2>🔸 Annuler une migration</h2>
    <p>Si vous souhaitez annuler la dernière migration effectuée :</p>
    <pre class="tab">php artisan migrate:rollback</pre>
    <p>Vous pouvez également annuler toutes les migrations :</p>
    <pre class="tab">php artisan migrate:reset</pre>
    <p>Attention : cela supprimera toutes les tables de la base de données.</p>
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
export class LaravelMigrationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

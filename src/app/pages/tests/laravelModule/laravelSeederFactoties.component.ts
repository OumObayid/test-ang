import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name',
  template: `
    <h1>📌 Partie 2 : Gestion de la Base de Données avec Eloquent</h1>
    <h2>🔹 Insérer des Données avec des Seeders et factorys</h2>
    <h3>🔸 Créer les Factory</h3>
    <p>
      Les factories permettent de générer des données aléatoires pour les
      seeders.
    </p>
    <h4>- creation:</h4>
    <p>pour users , il est deja crée</p>
    <p>pour categories:</p>
    <pre class="tab">
php artisan make:factory CategoryFactory --model=Category</pre
    >
    <p>un fichier de factory sera créé dans le dossier database/factories.</p>
    <p>pour products:</p>
    <pre class="tab">
php artisan make:factory ProductFactory --model=Product</pre
    >
    <p>un fichier de factory sera créé dans le dossier database/factories.</p>

    <h3>🔸 Modifier les factory avec faker</h3>
    <h4>- pour users:</h4>
    <p>ouvrir le fichier de factory et ajouter les données à générer :</p>
    <pre class="tab">
return [
            'firstname' => $this->faker->firstName(), // Prénom
            'lastname' => $this->faker->lastName(), // Nom
            'email' => $this->faker->unique()->safeEmail(), // Email unique
            'email_verified_at' => now(), // Vérification de l'email
            'password' => bcrypt('password123'), // Mot de passe par défaut
            'tel' => $this->faker->phoneNumber(), // Numéro de téléphone
            'address' => $this->faker->address(), // Adresse
            'card_number' => $this->faker->creditCardNumber(), // Numéro de carte
            'card_expiry_date' => $this->faker->creditCardExpirationDate(), // Date d'expiration
            'card_cvv' => $this->faker->numberBetween(100, 999), // CVV à 3 chiffres
            'card_holder_name' => $this->faker->name(), // Nom du titulaire de la carte
            'remember_token' => Str::random(10), // Token de mémorisation
        ];</pre
    >
    <h4>- pour categories:</h4>
    <p>Ouvrez le fichier de factory et ajoutez les données à générer :</p>
    <pre class="tab">
 return [
            'name' => $this->faker->unique()->word(), // Nom unique
            'description' => $this->faker->sentence(15), // Description aléatoire
            'created_at' => now(),
            'updated_at' => now(),
        ];</pre
    >
    <h4>- pour products:</h4>
    <p>Ouvrez le fichier de factory et ajoutez les données à générer :</p>
    <pre class="tab">
return [
            'name' => $this->faker->word(), // Un mot aléatoire
            'description' => $this->faker->sentence(10), // Une phrase de 10 mots
            'price' => $this->faker->randomFloat(2, 5, 500), // Prix entre 5 et 500 €
            'categorie_id' => Category::inRandomOrder()->first()->id ?? 1,
            'image' => 'products/default.jpg', // Par défaut une image générique
            'created_at' => now(),
            'updated_at' => now(),
        ];</pre
    >

    <h3>🔸 Configurer le DatabaseSeeder</h3>
    <p>
      Tu dois modifier DatabaseSeeder.php pour appeler tes factories et remplir
      la base de données correctement.
    </p>
    <p>
      Ouvre le fichier database/seeders/DatabaseSeeder.php et ajoute ce code :
    </p>
    <pre class="tab">
    public function run(): void
    &#123;
        // Créer les utilisateurs
        User::factory()-&#62;count(10)-&#62;create(); // Crée 10 utilisateurs aléatoires

        // Créer 10 catégories
        Category::factory()-&#62;count(10)-&#62;create()-&#62;each(function ($category) &#123;
        // Pour chaque catégorie, créer entre 4 et 7 produits liés
            Product::factory()-&#62;count(rand(4, 7))-&#62;create([
                'categorie_id' =&#62; $category-&#62;id
            ]);
        &#125;);
    &#125;</pre
    >
    <h3>🔸 Exécuter la commande de migration et seeding:</h3>
    <pre class="tab">php artisan migrate:fresh --seed</pre>
    <h3>🔸 Vérifier les produits créés dans Tinker:</h3>
    <p>execute ce commande :</p>
    <pre class="tab">php artisan tinker</pre>
    <p>puis essaye ces commandes :</p>
    <pre class="tab">
  User::count(); // Nombre total d'utilisateurs
  User::first(); // Affiche le premier utilisateur
  User::where('email', 'admin&#64;example.com')->first(); // Vérifie si l'admin est bien créé</pre
    >
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
export class LaravelSeederFactotiesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

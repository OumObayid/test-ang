import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relation-models',
  template: `
    <h1>
      📌 Cours détaillé : Gestion des relations entre les modèles (Eloquent
      Relationships)
    </h1>
    <h2>🎯 Objectifs de cette leçon</h2>
    <ul>
      <li>Comprendre les relations entre les modèles dans Laravel</li>
      <li>Savoir comment les implémenter avec Eloquent</li>
      <li>
        Utiliser ces relations pour interroger la base de données efficacement
      </li>
    </ul>
    <h2>1️⃣ Introduction aux relations Eloquent</h2>
    <p>
      Laravel utilise Eloquent ORM (Object-Relational Mapping) pour interagir
      avec la base de données en manipulant des objets plutôt que des requêtes
      SQL brutes.
    </p>
    <h3>🔹 Pourquoi utiliser les relations ?</h3>
    <ul>
      <li>Évite d’écrire des requêtes SQL complexes</li>
      <li>Rend le code plus lisible et maintenable</li>
      <li>Facilite la récupération des données liées</li>
    </ul>
    <h3>🔹 Les types de relations dans Laravel :</h3>
    <ul>
      <li>hasOne: Un à un (ex : un utilisateur a un profil)</li>
      <li>hasMany: Un à plusieurs (ex : une catégorie a plusieurs produits)</li>
      <li>
        belongsTo: Relation inverse (ex : un produit appartient à une catégorie)
      </li>
      <li>
        belongsToMany: Plusieurs à plusieurs (ex : un produit peut appartenir à
        plusieurs commandes)
      </li>
      <li>
        hasManyThrough: Un à plusieurs à travers un modèle intermédiaire (ex :
        un pays a plusieurs commandes à travers ses utilisateurs)
      </li>
      <li>
        morphOne / morphMany: Relations polymorphiques (ex : une image peut
        appartenir à un produit ou un utilisateur)
      </li>
    </ul>
    <h2>2️⃣ Relation "Un à Un" (hasOne et belongsTo)</h2>
    <p><strong>Exemple :</strong> Un utilisateur a un profil</p>
    <ul>
      <li>Un utilisateur possède un seul profil</li>
      <li>Un profil appartient à un utilisateur</li>
    </ul>
    <strong>Migration</strong>
    <p>On ajoute une clé étrangère user_id à la table profiles :</p>
    <pre class="tab">
Schema::create('profiles', function (Blueprint $table) &#123;
    $table-&#62;id();
    $table-&#62;unsignedBigInteger('user_id')-&#62;unique();
    $table-&#62;string('bio');
    $table-&#62;timestamps();

    $table-&#62;foreign('user_id')-&#62;references('id')-&#62;on('users')-&#62;onDelete('cascade');
&#125;);</pre
    >
    <p><strong>Modèle</strong> User.php (<strong>Relation</strong> hasOne)</p>
    <pre class="tab">
class User extends Model
&#123;
    public function profile()
    &#123;
        return $this-&#62;hasOne(Profile::class);
    &#125;
&#125;</pre
    >
    <p>
      <strong>Modèle</strong> Profile.php (<strong>Relation</strong> belongsTo)
    </p>
    <pre class="tab">
class Profile extends Model
&#123;
    public function user()
    &#123;
        return $this-&#62;belongsTo(User::class);
    &#125;
&#125;</pre
    >
    <p><strong>Utilisation</strong></p>
    <pre class="tab">
$user = User::find(1);
$profile = $user-&#62;profile; // Récupérer le profil de l'utilisateur

$profile = Profile::find(1);
$user = $profile-&#62;user; // Récupérer l'utilisateur associé au profil</pre
    >
    <h2>3️⃣ Relation "Un à Plusieurs" (hasMany et belongsTo)</h2>
    <p><strong>Exemple : Une catégorie a plusieurs produits</strong></p>
    <ul>
      <li>Une catégorie contient plusieurs produits</li>
      <li>Un produit appartient à une seule catégorie</li>
    </ul>
    <p><strong>Migration</strong></p>
    <p>On ajoute une clé étrangère category_id à la table products :</p>
    <pre class="tab">
Schema::create('products', function (Blueprint $table) &#123;
    $table-&#62;id();
    $table-&#62;unsignedBigInteger('category_id');
    $table-&#62;string('name');
    $table-&#62;decimal('price', 10, 2);
    $table-&#62;timestamps();

    $table-&#62;foreign('category_id')-&#62;references('id')-&#62;on('categories')-&#62;onDelete('cascade');
&#125;);</pre
    >
    <p>
      <strong>Modèle</strong> Category.php (<strong>Relation</strong> hasMany)
    </p>
    <pre class="tab">
class Category extends Model
&#123;
    public function products()
    &#123;
        return $this-&#62;hasMany(Product::class);
    &#125;
&#125;</pre
    >
    <p>
      <strong>Modèle</strong> Product.php (<strong>Relation</strong> belongsTo)
    </p>
    <pre class="tab">
class Product extends Model
&#123;
    public function category()
    &#123;
        return $this-&#62;belongsTo(Category::class);
    &#125;
&#125;</pre
    >
    <p><strong>Utilisation</strong></p>
    <pre class="tab">
$category = Category::find(1);
$products = $category-&#62;products; // Récupérer tous les produits d'une catégorie

$product = Product::find(1);
$category = $product-&#62;category; // Récupérer la catégorie d'un produit</pre
    >
    <h2>4️⃣ Relation "Plusieurs à Plusieurs" (belongsToMany)</h2>
    <p>
      <strong
        >Exemple : Un produit appartient à plusieurs commandes et une commande
        contient plusieurs produits</strong
      >
    </p>
    <ul>
      <li>Un produit peut être dans plusieurs commandes</li>
      <li>Une commande contient plusieurs produits</li>
    </ul>
    <p><strong>Migration pour la table pivot</strong> order_product</p>
    <pre class="tab">
Schema::create('order_product', function (Blueprint $table) &#123;
    $table-&#62;id();
    $table-&#62;unsignedBigInteger('order_id');
    $table-&#62;unsignedBigInteger('product_id');
    $table-&#62;integer('quantity');
    $table-&#62;timestamps();

    $table-&#62;foreign('order_id')-&#62;references('id')-&#62;on('orders')-&#62;onDelete('cascade');
    $table-&#62;foreign('product_id')-&#62;references('id')-&#62;on('products')-&#62;onDelete('cascade');
&#125;);</pre
    >
    <p><strong>Modèle</strong> Order.php</p>
    <pre class="tab">
class Order extends Model
&#123;
    public function products()
    &#123;
        return $this-&#62;belongsToMany(Product::class)-&#62;withPivot('quantity');
    &#125;
&#125;</pre
    >
    <p><strong>Modèle </strong> Product.php</p>
    <pre class="tab">
class Product extends Model
&#123;
    public function orders()
    &#123;
        return $this-&#62;belongsToMany(Order::class)-&#62;withPivot('quantity');
    &#125;
&#125;</pre
    >
    <p><strong>Utilisation</strong></p>
    <pre class="tab">
$order = Order::find(1);
$products = $order-&#62;products; // Récupérer les produits d'une commande

$product = Product::find(1);
$orders = $product-&#62;orders; // Récupérer les commandes d'un produit</pre
    >
    <h2>5️⃣ Relation "Un à Plusieurs à Travers" (hasManyThrough)</h2>
    <p>
      <strong
        >Exemple : Un pays a plusieurs commandes via ses utilisateurs</strong
      >
    </p>
    <ul>
      <li>Un pays a plusieurs utilisateurs</li>
      <li>Chaque utilisateur passe plusieurs commandes</li>
      <li>
        Un pays peut donc avoir plusieurs commandes à travers ses utilisateurs
      </li>
    </ul>
    <p><strong>Modèle</strong> Country.php</p>
    <pre class="tab">
class Country extends Model
&#123;
    public function orders()
    &#123;
        return $this-&#62;hasManyThrough(Order::class, User::class);
    &#125;
&#125;</pre
    >

    <p><strong>Utilisation</strong></p>
    <pre class="tab">
$country = Country::find(1);
$orders = $country->orders; // Récupérer toutes les commandes d’un pays
</pre>
    <h2>6️⃣ Relations Polymorphiques (morphOne et morphMany)</h2>
    <p>
      <strong
        >Exemple : Une image peut appartenir à un utilisateur ou un
        produit</strong
      >
    </p>
    <p><strong>Migration</strong> images</p>
    <pre class="tab">
Schema::create('images', function (Blueprint $table) &#123;
    $table-&#62;id();
    $table-&#62;string('url');
    $table-&#62;morphs('imageable'); // Crée automatiquement &#96;imageable_id&#96; et &#96;imageable_type&#96;
    $table-&#62;timestamps();
&#125;);</pre
    >
    <p><strong>Modèle</strong> Image.php</p>
    <pre class="tab">
class Image extends Model
&#123;
    public function imageable()
    &#123;
        return $this-&#62;morphTo();
    &#125;
&#125;</pre
    >
    <p><strong>Modèle</strong> User.php</p>
    <pre class="tab">
class User extends Model
&#123;
    public function image()
    &#123;
        return $this-&#62;morphOne(Image::class, 'imageable');
    &#125;
&#125;</pre
    >
    <p><strong>Modèle</strong> Product.php</p>
    <pre class="tab">
class Product extends Model
&#123;
    public function images()
    &#123;
        return $this-&#62;morphMany(Image::class, 'imageable');
    &#125;
&#125;</pre
    >
    <p><strong>Utilisation</strong></p>
    <pre class="tab">
$user = User::find(1);
$image = $user->image; // Récupérer l’image d’un utilisateur
</pre>
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
export class LaravelRelationModelsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modelsEloquent-laravel',
  template:`
<h1>📌 Partie 2 : Gestion de la Base de Données avec Eloquent
</h1>
<h2>🔹 Création des Modèles Eloquent</h2>
<h3>🔸 Générer un modèle</h3>
<p>Les modèles Eloquent permettent de gérer les données de la base de données.</p>
<h4>a- Pour la table users:</h4>
<p>si elle existe modifie la en ayant ce qui est suivant:</p>
<pre class="tab">namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
&#123;
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [
        'firstname', 'lastname', 'email', 'password', 'tel', 'address',
        'card_number', 'card_expiry_date', 'card_cvv', 'card_holder_name'
    ];

    protected $hidden = [
        'password', 'remember_token',
    ];

    protected $casts = [
        'email_verified_at' =&#62; 'datetime',
    ];
&#125;</pre>

<h4>b- Pour la table categories:</h4>
<p>Créez un modèle Category associé à la table categories :</p>
<pre class="tab">php artisan make:model Category</pre>
<p>Le fichier de modèle sera créé dans le dossier app/Models.</p>
<p>Modifie-le pour inclure la relation avec les produits, comme suit :</p>
<pre class="tab">namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
&#123;
    use HasFactory;

    protected $fillable = ['name', 'description'];

    public function products()
    &#123;
        return $this-&#62;hasMany(Product::class, 'categorie_id');
    &#125;
&#125;</pre>
<h4>c- Pour la table products:</h4>
<p>Créez un modèle Product associé à la table products :</p>
<pre class="tab">php artisan make:model Product</pre>
<p>Le fichier de modèle sera créé dans le dossier app/Models.</p>
<p> Modifie-le pour inclure la relation avec les categories, comme suit :</p>
<pre class="tab"> namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
&#123;
    use HasFactory;

    protected $fillable = [
        'name', 'description', 'price', 'categorie_id', 'image'
    ];
&#125;</pre>
  ` ,
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
           width: 100% !important;
         }
  `
})
export class LaravelModelsEloquentComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}


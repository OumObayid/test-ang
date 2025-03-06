import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route-controller-laravel',
  template: `
    <h1>📌 Partie 3 : Routes et controlleurs</h1>
    <h2>🔹 1. Installation et Configuration de Laravel Sanctum</h2>
    <p>
      Avant de créer les routes et contrôleurs, installons Sanctum pour
      l'authentification des utilisateurs :
    </p>
    <pre class="tab">composer require laravel/sanctum</pre>
    <p>
      Puis, publions sa configuration et ajoutons le middleware à
      app/Http/Kernel.php :
    </p>
    <pre class="tab">
php artisan vendor:publish --provider="LaravelSanctumSanctumServiceProvider"</pre
    >
    <p>Ensuite, on ajoute le middleware à app/Http/Kernel.php :</p>
    <pre class="tab">
'api' => [
    LaravelSanctumHttpMiddlewareEnsureFrontendRequestsAreStateful::class,
    'throttle:api',
    IlluminateRoutingMiddlewareSubstituteBindings::class,
],</pre
    >
    <p>Enfin, on lance la migration pour créer les tables nécessaires :</p>
    <pre class="tab">php artisan migrate</pre>
    <p>Puis, ajoute HasApiTokens dans le modèle User.php :</p>
    <pre class="tab">
use LaravelSanctumHasApiTokens;
class User extends Authenticatable
&#123;
    use HasApiTokens, HasFactory, Notifiable;
&#125;</pre
    >
    <h2>🔹 2. Génération des Controllers</h2>
<p>Dans le terminal, exécute ces commandes pour générer les controllers :</p>
<pre class="tab">php artisan make:controller AuthController
php artisan make:controller UserController
php artisan make:controller CategoryController
php artisan make:controller ProductController</pre>
<h2>🔹 3. Création du Middleware Admin:</h2>
<p>On doit protéger certaines routes pour qu'elles soient accessibles uniquement aux admins. Pour cela, on crée un middleware Admin :</p>
<h3>🔸 Générer le middleware AdminMiddleware :</h3>
<pre class="tab">php artisan make:middleware AdminMiddleware</pre>
<h3>🔸 Ajouter la logique dans le middleware :</h3>
<pre class="tab">&#60;?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdminMiddleware
&#123;
    public function handle(Request $request, Closure $next)
    &#123;
        // Vérifier si l'utilisateur est connecté et s'il a le rôle "admin"
        if (Auth::check() && Auth::user()-&#62;role === 'admin') &#123;
            return $next($request);
        &#125;

        // Accès refusé
        return response()-&#62;json(['message' =&#62; 'Accès refusé : vous devez être administrateur.'], 403);
    &#125;
&#125;</pre>
<h3>🔸  Ajouter le middleware dans app/Http/Kernel.php :</h3>
<pre class="tab">protected $routeMiddleware = [
    // ...
    'admin' =&#62; \App\Http\Middleware\AdminMiddleware::class,
];</pre>

<h2>🔹 4. Définition des Routes</h2>
<p>Ouvrir routes/api.php et ajouter les routes suivantes.</p>
<pre class="tab">&#60;?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
| Ce fichier contient toutes les routes de l'API de notre application.
| Il est organisé en plusieurs sections :
| - Routes d'authentification
| - Routes publiques (accessible sans connexion)
| - Routes protégées pour les utilisateurs connectés
| - Routes protégées pour les administrateurs
*/

/*
|--------------------------------------------------------------------------
| 📌 Routes d'Authentification
|--------------------------------------------------------------------------
| Permet aux utilisateurs de s'inscrire, de se connecter et de récupérer
| leurs informations.
*/
Route::post('/register', [AuthController::class, 'register']); // Inscription
Route::post('/login', [AuthController::class, 'login']); // Connexion

// Routes protégées par auth:sanctum (nécessite une connexion)
Route::middleware('auth:sanctum')-&#62;group(function () &#123;
    Route::post('/logout', [AuthController::class, 'logout']); // Déconnexion
    Route::get('/user', [AuthController::class, 'user']); // Infos utilisateur connecté
&#125;);

/*
|--------------------------------------------------------------------------
| 📌 Routes Publiques (Accessible sans Connexion)
|--------------------------------------------------------------------------
| Ces routes permettent aux utilisateurs non connectés d'afficher les
| catégories et les produits sans restriction.
*/
Route::get('/categories', [CategoryController::class, 'index']); // Liste des catégories
Route::get('/categories/&#123;id&#125;', [CategoryController::class, 'show']); // Détails d'une catégorie

Route::get('/products', [ProductController::class, 'index']); // Liste des produits
Route::get('/products/&#123;id&#125;', [ProductController::class, 'show']); // Détails d'un produit

/*
|--------------------------------------------------------------------------
| 📌 Routes Utilisateur (Protégé par Auth)
|--------------------------------------------------------------------------
| Ces routes sont accessibles uniquement aux utilisateurs connectés.
| Un utilisateur peut voir et modifier son profil.
*/
Route::middleware('auth:sanctum')-&#62;group(function () &#123;
    Route::get('/user/profile', [UserController::class, 'profile']); // Profil utilisateur connecté
    Route::put('/user/update', [UserController::class, 'update']); // Mettre à jour son propre compte
&#125;);

/*
|--------------------------------------------------------------------------
| 📌 Routes Administrateurs (Protégé par Auth + Admin)
|--------------------------------------------------------------------------
| Ces routes nécessitent une connexion et un rôle "admin".
| Seuls les administrateurs peuvent gérer les utilisateurs, catégories et produits.
*/
Route::middleware(['auth:sanctum', 'admin'])-&#62;group(function () &#123;
    // 🟢 Gestion des utilisateurs
    Route::get('/users', [UserController::class, 'index']); // Liste des utilisateurs
    Route::get('/users/&#123;id&#125;', [UserController::class, 'show']); // Détails d'un utilisateur
    Route::delete('/users/&#123;id&#125;', [UserController::class, 'destroy']); // Supprimer un utilisateur

    // 🟠 Gestion des catégories
    Route::post('/categories', [CategoryController::class, 'store']); // Ajouter une catégorie
    Route::put('/categories/&#123;id&#125;', [CategoryController::class, 'update']); // Modifier une catégorie
    Route::delete('/categories/&#123;id&#125;', [CategoryController::class, 'destroy']); // Supprimer une catégorie

    // 🔴 Gestion des produits
    Route::post('/products', [ProductController::class, 'store']); // Ajouter un produit
    Route::put('/products/&#123;id&#125;', [ProductController::class, 'update']); // Modifier un produit
    Route::delete('/products/&#123;id&#125;', [ProductController::class, 'destroy']); // Supprimer un produit
&#125;);</pre>
<h2>🔹 Création des Controllers</h2>
 <p>Maintenant, nous allons créer les méthodes principales dans chaque controller.</p>
 <h3>1️⃣ AuthController.php</h3>
  <pre class="tab">&#60;?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
&#123;
    public function register(Request $request)
    &#123;
        $request-&#62;validate([
            'firstname' =&#62; 'required|string',
            'lastname' =&#62; 'required|string',
            'email' =&#62; 'required|email|unique:users',
            'password' =&#62; 'required|min:6',
        ]);

        $user = User::create([
            'firstname' =&#62; $request-&#62;firstname,
            'lastname' =&#62; $request-&#62;lastname,
            'email' =&#62; $request-&#62;email,
            'password' =&#62; Hash::make($request-&#62;password),
        ]);

        return response()-&#62;json(['message' =&#62; 'Utilisateur créé avec succès'], 201);
    &#125;

    public function login(Request $request)
    &#123;
        $credentials = $request-&#62;validate([
            'email' =&#62; 'required|email',
            'password' =&#62; 'required'
        ]);

        if (!Auth::attempt($credentials)) &#123;
            return response()-&#62;json(['message' =&#62; 'Identifiants incorrects'], 401);
        &#125;

        $user = Auth::user();
        $token = $user-&#62;createToken('authToken')-&#62;plainTextToken;

        return response()-&#62;json(['token' =&#62; $token]);
    &#125;

    public function logout()
    &#123;
        Auth::user()-&#62;tokens()-&#62;delete();
        return response()-&#62;json(['message' =&#62; 'Déconnexion réussie']);
    &#125;

    public function user()
    &#123;
        return response()-&#62;json(Auth::user());
    &#125;
&#125;</pre>
<h3>2️⃣ UserController.php</h3>
<pre class="tab">&#60;?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
&#123;
    public function index()
    &#123;
        return response()-&#62;json(User::all());
    &#125;

    public function show($id)
    &#123;
        return response()-&#62;json(User::findOrFail($id));
    &#125;

    public function profile()
    &#123;
        return response()-&#62;json(auth()-&#62;user());
    &#125;

    public function update(Request $request)
    &#123;
        $user = auth()-&#62;user();
        $user-&#62;update($request-&#62;all());
        return response()-&#62;json(['message' =&#62; 'Profil mis à jour']);
    &#125;

    public function destroy($id)
    &#123;
        User::destroy($id);
        return response()-&#62;json(['message' =&#62; 'Utilisateur supprimé']);
    &#125;
&#125;</pre>
<h3>3️⃣ CategoryController.php</h3>
<pre class="tab">&#60;?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;

class CategoryController extends Controller
&#123;
    public function index() &#123; return response()-&#62;json(Category::all()); &#125;
    public function show($id) &#123; return response()-&#62;json(Category::findOrFail($id)); &#125;

    public function store(Request $request) &#123; Category::create($request-&#62;all()); &#125;
    public function update(Request $request, $id) &#123; Category::findOrFail($id)-&#62;update($request-&#62;all()); &#125;
    public function destroy($id) &#123; Category::destroy($id); &#125;
&#125;</pre>
<h3>4️⃣ ProductController.php</h3>
<pre class="tab">&#60;?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
&#123;
    /**
     * 📌 Afficher tous les produits (accessible à tous)
     */
    public function index()
    &#123;
        $products = Product::all();

        // Ajout de l'URL complète de l'image
        foreach ($products as $product) &#123;
            $product-&#62;image = $product-&#62;image ? asset('storage/' . $product-&#62;image) : null;
        &#125;

        return response()-&#62;json($products, 200);
    &#125;

    /**
     * 📌 Afficher un produit par son ID (accessible à tous)
     */
    public function show($id)
    &#123;
        $product = Product::find($id);

        if (!$product) &#123;
            return response()-&#62;json(['message' =&#62; 'Produit non trouvé'], 404);
        &#125;

        // Ajout de l'URL complète de l'image
        $product-&#62;image = $product-&#62;image ? asset('storage/' . $product-&#62;image) : null;

        return response()-&#62;json($product, 200);
    &#125;

    /**
     * 🔒 Ajouter un nouveau produit (ADMIN uniquement)
     */
    public function store(Request $request)
    &#123;
        $this-&#62;authorize('admin'); // Vérifie que l'utilisateur est admin

        $validator = Validator::make($request-&#62;all(), [
            'name' =&#62; 'required|string|max:255',
            'description' =&#62; 'nullable|string',
            'price' =&#62; 'required|numeric|min:0',
            'categorie_id' =&#62; 'nullable|exists:categories,id',
            'image' =&#62; 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048', // Validation de l'image
        ]);

        if ($validator-&#62;fails()) &#123;
            return response()-&#62;json($validator-&#62;errors(), 400);
        &#125;

        // Stockage de l'image
        $imagePath = null;
        if ($request-&#62;hasFile('image')) &#123;
            $imagePath = $request-&#62;file('image')-&#62;store('products', 'public');
        &#125;

        $product = Product::create([
            'name' =&#62; $request-&#62;name,
            'description' =&#62; $request-&#62;description,
            'price' =&#62; $request-&#62;price,
            'categorie_id' =&#62; $request-&#62;categorie_id,
            'image' =&#62; $imagePath, // Stocke le chemin de l'image
        ]);

        // Ajout de l'URL complète de l'image dans la réponse
        $product-&#62;image = $product-&#62;image ? asset('storage/' . $product-&#62;image) : null;

        return response()-&#62;json([
            'message' =&#62; 'Produit ajouté avec succès',
            'product' =&#62; $product
        ], 201);
    &#125;

    /**
     * 🔒 Mettre à jour un produit (ADMIN uniquement)
     */
    public function update(Request $request, $id)
    &#123;
        $this-&#62;authorize('admin'); // Vérifie que l'utilisateur est admin

        $product = Product::find($id);

        if (!$product) &#123;
            return response()-&#62;json(['message' =&#62; 'Produit non trouvé'], 404);
        &#125;

        $validator = Validator::make($request-&#62;all(), [
            'name' =&#62; 'sometimes|string|max:255',
            'description' =&#62; 'nullable|string',
            'price' =&#62; 'sometimes|numeric|min:0',
            'categorie_id' =&#62; 'nullable|exists:categories,id',
            'image' =&#62; 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048', // Validation de l'image
        ]);

        if ($validator-&#62;fails()) &#123;
            return response()-&#62;json($validator-&#62;errors(), 400);
        &#125;

        // Suppression de l'ancienne image si une nouvelle est téléchargée
        if ($request-&#62;hasFile('image')) &#123;
            if ($product-&#62;image) &#123;
                Storage::disk('public')-&#62;delete($product-&#62;image);
            &#125;
            $product-&#62;image = $request-&#62;file('image')-&#62;store('products', 'public');
        &#125;

        $product-&#62;update($request-&#62;except(['image']));

        // Ajout de l'URL complète de l'image dans la réponse
        $product-&#62;image = $product-&#62;image ? asset('storage/' . $product-&#62;image) : null;

        return response()-&#62;json([
            'message' =&#62; 'Produit mis à jour avec succès',
            'product' =&#62; $product
        ], 200);
    &#125;

    /**
     * 🔒 Supprimer un produit (ADMIN uniquement)
     */
    public function destroy($id)
    &#123;
        $this-&#62;authorize('admin'); // Vérifie que l'utilisateur est admin

        $product = Product::find($id);

        if (!$product) &#123;
            return response()-&#62;json(['message' =&#62; 'Produit non trouvé'], 404);
        &#125;

        // Suppression de l'image associée
        if ($product-&#62;image) &#123;
            Storage::disk('public')-&#62;delete($product-&#62;image);
        &#125;

        $product-&#62;delete();

        return response()-&#62;json(['message' =&#62; 'Produit supprimé avec succès'], 200);
    &#125;
&#125;</pre>
<h2>🔹 4. Tester les Routes</h2>
<p>Vous pouvez tester les routes avec Postman ou Insomnia en envoyant des requêtes HTTP aux différentes URL.</p>
<p>Voici quelques exemples de requêtes :</p>
<h3>🔸 Inscription d'un utilisateur :</h3>
<p>POST http://localhost:8000/api/register</p>
<pre class="tab">&#123;
  "firstname": "John",
  "lastname": "Doe",
  "email": "user&#64;#gmail.com",
  "password" : "password",
&#125;</pre>
<h3>🔸 Connexion d'un utilisateur :</h3>
<p>POST http://localhost:8000/api/login</p>
<pre class="tab">&#123;
  "email": "user&#64;#gmail.com",
  "password" : "password",
&#125;</pre>
<h3>🔸 Récupérer les informations de l'utilisateur connecté :</h3>
<pre class="tab">GET http://localhost:8000/api/user</pre>

<h3>🔸 Déconnexion de l'utilisateur :</h3>
<pre class="tab">POST http://localhost:8000/api/logout</pre>

<h3>🔸 Liste des catégories :</h3>
<pre class="tab">GET http://localhost:8000/api/categories</pre>

<h3>🔸 Liste des produits :</h3>
<pre class="tab">GET http://localhost:8000/api/products</pre>

<h3>🔸 Profil de l'utilisateur connecté :</h3>
<pre class="tab">GET http://localhost:8000/api/user/profile</pre>

<h3>🔸 Mettre à jour le profil de l'utilisateur :</h3>
<pre class="tab">PUT http://localhost:8000/api/user/update</pre>

<h3>🔸 Liste des utilisateurs (ADMIN) :</h3>
<pre class="tab">GET http://localhost:8000/api/users</pre>

<h3>🔸 Détails d'un utilisateur (ADMIN) :</h3>
<pre class="tab">GET http://localhost:8000/api/users/1</pre>

<h3>🔸 Supprimer un utilisateur (ADMIN) :</h3>
<pre class="tab">DELETE http://localhost:8000/api/users/1</pre>

<h2>🔹 Configurer le stockage des images: </h2>
<p>Si vous souhaitez stocker les images des produits, vous pouvez configurer le stockage dans le fichier .env :</p>
<pre class="tab">FILESYSTEM_DRIVER=public</pre>
<p>Ensuite, exécutez la commande suivante pour créer un lien symbolique :</p>
<pre class="tab">php artisan storage:link</pre>
<p>Vous pouvez maintenant stocker les images dans le dossier storage/app/public et les afficher dans vos vues.</p>
<p>Voilà, vous avez maintenant un API Laravel sécurisé avec Sanctum pour gérer les utilisateurs, les catégories et les produits.</p>
<p>Vous pouvez ajouter d'autres fonctionnalités et améliorations selon les besoins de votre application.</p>
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
export class LaravelRouteControllerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name',
  template: `
    <h1>📌 Partie 3 : développement de l'application</h1>
    <h2>1.🔹 Configuration de Blade et Layout Principal</h2>
    <p>
      Blade est un moteur de template puissant et simple à utiliser fourni avec
      Laravel. Il permet de créer des fichiers de vues avec des extensions
      .blade.php. Blade fournit des directives simples et pratiques pour
      travailler avec les vues. Il permet également d'ajouter des directives
      personnalisées.
    </p>
    <p>
      Le layout principal est un fichier de vue qui contient les balises html,
      head, body, etc. Il est utilisé pour définir la structure de base de
      l'application. Les autres vues peuvent étendre ce layout principal pour
      ajouter leur contenu.
    </p>
    <p>
      Avant de commencer avec les pages spécifiques, on va créer un layout
      principal pour éviter de répéter le même code dans chaque vue.
    </p>
    <h3>🔸1. Création du dossier des vues</h3>
    <p>Dans resources/views/, crée ces dossiers :</p>
    <ul>
      <li>auth/ → Pour les pages d'authentification</li>
      <li>dashboard/ → Pour le dashboard utilisateur</li>
      <li>admin/ → Pour les vues d'administration</li>
    </ul>
    <h3>🔸2. Création du layout principal</h3>
    <p>On crée un fichier resources/views/layouts/app.blade.php :</p>
    <pre class="tab" ngNonBindable>
&#60;!DOCTYPE html&#62;
&#60;html lang="fr"&#62;
&#60;head&#62;
    &#60;meta charset="UTF-8"&#62;
    &#60;meta name="viewport" content="width=device-width, initial-scale=1.0"&#62;
    &#60;title&#62;&#64;yield('title', 'Mon Application')&#60;/title&#62;
    &#60;link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap&#64;5.3.0/dist/css/bootstrap.min.css"&#62;
&#60;/head&#62;
&#60;body&#62;
    &#60;nav class="navbar navbar-expand-lg navbar-dark bg-dark"&#62;
        &#60;div class="container"&#62;
            &#60;a class="navbar-brand" href="&#123; &#123; url('/') &#125; &#125;"&#62;Mon App&#60;/a&#62;
            &#60;button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"&#62;
                &#60;span class="navbar-toggler-icon"&#62;&#60;/span&#62;
            &#60;/button&#62;
            &#60;div class="collapse navbar-collapse" id="navbarNav"&#62;
                &#60;ul class="navbar-nav ms-auto"&#62;
                    &#64;auth
                        &#60;li class="nav-item"&#62;&#60;a class="nav-link" href="&#123; &#123; route('dashboard') &#125; &#125;"&#62;Dashboard&#60;/a&#62;&#60;/li&#62;
                        &#60;li class="nav-item"&#62;
                            &#60;form method="POST" action="&#123; &#123; route('logout') &#125; &#125;"&#62;
                                &#64;csrf
                                &#60;button type="submit" class="btn btn-link nav-link"&#62;Déconnexion&#60;/button&#62;
                            &#60;/form&#62;
                        &#60;/li&#62;
                    &#64;else
                        &#60;li class="nav-item"&#62;&#60;a class="nav-link" href="&#123; &#123; route('login') &#125; &#125;"&#62;Connexion&#60;/a&#62;&#60;/li&#62;
                        &#60;li class="nav-item"&#62;&#60;a class="nav-link" href="&#123; &#123; route('register') &#125; &#125;"&#62;Inscription&#60;/a&#62;&#60;/li&#62;
                    &#64;endauth
                &#60;/ul&#62;
            &#60;/div&#62;
        &#60;/div&#62;
    &#60;/nav&#62;

    &#60;div class="container mt-4"&#62;
        &#64;yield('content')
    &#60;/div&#62;

    &#60;script src="https://cdn.jsdelivr.net/npm/bootstrap&#64;5.3.0/dist/js/bootstrap.bundle.min.js"&#62;&#60;/script&#62;
&#60;/body&#62;
&#60;/html&#62;</pre
    >
    <p>Ce layout inclut :</p>
    <ul>
      <li>Bootstrap pour le design</li>
      <li>
        Une navbar dynamique (elle affiche des liens différents selon si
        l'utilisateur est connecté ou non)
      </li>
      <li>
        Un conteneur &#64;yield('content') qui affichera le contenu des autres
        pages
      </li>
    </ul>
    <h2>🔹 2. Création des pages Login & Register</h2>
    <p>
      Maintenant qu’on a mis en place le layout principal, créons les pages
      d’authentification.
    </p>
    <h3>🔸1. Création de la page de connexion (Login)</h3>
    <p>On crée un fichier :</p>
    <p>📂 resources/views/auth/login.blade.php</p>
    <pre class="tab" ngNonBindable>
&#64;extends('layouts.app')

&#64;section('title', 'Connexion')

&#64;section('content')
&#60;div class="row justify-content-center"&#62;
    &#60;div class="col-md-6"&#62;
        &#60;h2 class="text-center mb-4"&#62;Connexion&#60;/h2&#62;

        &#64;if(session('error'))
            &#60;div class="alert alert-danger"&#62;&#123; &#123; session('error') &#125; &#125;&#60;/div&#62;
        &#64;endif

        &#60;form method="POST" action="&#123; &#123; route('login') &#125; &#125;"&#62;
            &#64;csrf

            &#60;div class="mb-3"&#62;
                &#60;label for="email" class="form-label"&#62;Email :&#60;/label&#62;
                &#60;input type="email" id="email" name="email" class="form-control" required value="&#123; &#123; old('email') &#125; &#125;"&#62;
                &#64;error('email') &#60;div class="text-danger"&#62;&#123; &#123; $message &#125; &#125;&#60;/div&#62; &#64;enderror
            &#60;/div&#62;

            &#60;div class="mb-3"&#62;
                &#60;label for="password" class="form-label"&#62;Mot de passe :&#60;/label&#62;
                &#60;input type="password" id="password" name="password" class="form-control" required&#62;
                &#64;error('password') &#60;div class="text-danger"&#62;&#123; &#123; $message &#125; &#125;&#60;/div&#62; &#64;enderror
            &#60;/div&#62;

            &#60;button type="submit" class="btn btn-primary w-100"&#62;Se connecter&#60;/button&#62;
        &#60;/form&#62;

        &#60;p class="text-center mt-3"&#62;
            Pas encore inscrit ? &#60;a href="&#123; &#123; route('register') &#125; &#125;"&#62;Créer un compte&#60;/a&#62;
        &#60;/p&#62;
    &#60;/div&#62;
&#60;/div&#62;
&#64;endsection</pre
    >

    <h3>🔸2. Création de la page d’inscription (Register)</h3>
    <p>On crée un fichier :</p>
    <p>📂 resources/views/auth/register.blade.php</p>
    <pre class="tab" ngNonBindable>
&#64;extends('layouts.app')

&#64;section('title', 'Inscription')

&#64;section('content')
&#60;div class="row justify-content-center"&#62;
    &#60;div class="col-md-6"&#62;
        &#60;h2 class="text-center mb-4"&#62;Inscription&#60;/h2&#62;

        &#64;if(session('error'))
            &#60;div class="alert alert-danger"&#62;&#123; &#123; session('error') &#125; &#125;&#60;/div&#62;
        &#64;endif

        &#60;form method="POST" action="&#123; &#123; route('register') &#125; &#125;"&#62;
            &#64;csrf

            &#60;div class="mb-3"&#62;
                &#60;label for="firstname" class="form-label"&#62;Prénom :&#60;/label&#62;
                &#60;input type="text" id="firstname" name="firstname" class="form-control" required value="&#123; &#123; old('firstname') &#125; &#125;"&#62;
                &#64;error('firstname') &#60;div class="text-danger"&#62;&#123; &#123; $message &#125; &#125;&#60;/div&#62; &#64;enderror
            &#60;/div&#62;

            &#60;div class="mb-3"&#62;
                &#60;label for="lastname" class="form-label"&#62;Nom :&#60;/label&#62;
                &#60;input type="text" id="lastname" name="lastname" class="form-control" required value="&#123; &#123; old('lastname') &#125; &#125;"&#62;
                &#64;error('lastname') &#60;div class="text-danger"&#62;&#123; &#123; $message &#125; &#125;&#60;/div&#62; &#64;enderror
            &#60;/div&#62;

            &#60;div class="mb-3"&#62;
                &#60;label for="email" class="form-label"&#62;Email :&#60;/label&#62;
                &#60;input type="email" id="email" name="email" class="form-control" required value="&#123; &#123; old('email') &#125; &#125;"&#62;
                &#64;error('email') &#60;div class="text-danger"&#62;&#123; &#123; $message &#125; &#125;&#60;/div&#62; &#64;enderror
            &#60;/div&#62;

            &#60;div class="mb-3"&#62;
                &#60;label for="password" class="form-label"&#62;Mot de passe :&#60;/label&#62;
                &#60;input type="password" id="password" name="password" class="form-control" required&#62;
                &#64;error('password') &#60;div class="text-danger"&#62;&#123; &#123; $message &#125; &#125;&#60;/div&#62; &#64;enderror
            &#60;/div&#62;

            &#60;div class="mb-3"&#62;
                &#60;label for="password_confirmation" class="form-label"&#62;Confirmer le mot de passe :&#60;/label&#62;
                &#60;input type="password" id="password_confirmation" name="password_confirmation" class="form-control" required&#62;
            &#60;/div&#62;

            &#60;button type="submit" class="btn btn-success w-100"&#62;S'inscrire&#60;/button&#62;
        &#60;/form&#62;

        &#60;p class="text-center mt-3"&#62;
            Déjà inscrit ? &#60;a href="&#123; &#123; route('login') &#125; &#125;"&#62;Se connecter&#60;/a&#62;
        &#60;/p&#62;
    &#60;/div&#62;
&#60;/div&#62;
&#64;endsection</pre
    >
    <h3>🔸3. Ajout des Routes pour Login et Register</h3>
    <p>On ajoute ces routes dans routes/web.php :</p>
    <pre class="tab" ngNonBindable>
use AppHttpControllersAuthController;

Route::get('/login', [AuthController::class, 'showLoginForm'])-&#62;name('login');
Route::post('/login', [AuthController::class, 'login']);

Route::get('/register', [AuthController::class, 'showRegisterForm'])-&#62;name('register');
Route::post('/register', [AuthController::class, 'register']);

Route::post('/logout', [AuthController::class, 'logout'])-&#62;name('logout')-&#62;middleware('auth');</pre
    >
    <h3>🔸4. Mise à jour du contrôleur d’authentification</h3>
    <p>Explication des mises à jour :</p>
    <ul>
      <li>Ajout des vues (showLoginForm et showRegisterForm) 📄</li>
      <li>
        Mise à jour de register et login ⚡
        <ul>
          <li>
            Vérifie si la requête attend une réponse JSON (API) ou une
            redirection (Blade).
          </li>
          <li>
            Envoie un JSON si c'est une API, sinon redirige vers une page.
          </li>
        </ul>
      </li>
      <li>Gestion de la déconnexion 🚪</li>
      <li>Retourne un message JSON pour l’API.</li>
      <li>Retourne une redirection pour Blade.</li>
      <li>Retourne les informations de l’utilisateur authentifié 🧑</li>
    </ul>
    <pre class="tab" ngNonBindable>
namespace AppHttpControllers;

use IlluminateHttpRequest;
use AppModelsUser;
use IlluminateSupportFacadesAuth;
use IlluminateSupportFacadesHash;

class AuthController extends Controller
&#123;
    // Affiche le formulaire de connexion
    public function showLoginForm()
    &#123;
        return view('auth.login');
    &#125;

    // Affiche le formulaire d'inscription
    public function showRegisterForm()
    &#123;
        return view('auth.register');
    &#125;

    // Traitement de l'inscription
    public function register(Request $request)
    &#123;
        // Validation des données du formulaire
        $request-&#62;validate([
            'firstname' =&#62; 'required|string|max:255',
            'lastname' =&#62; 'required|string|max:255',
            'email' =&#62; 'required|email|unique:users', // Vérifie l'unicité de l'email
            'password' =&#62; 'required|min:6|confirmed', // Vérifie que la confirmation du mot de passe est correcte
        ]);

        // Création de l'utilisateur avec le mot de passe haché
        $user = User::create([
            'firstname' =&#62; $request-&#62;firstname,
            'lastname' =&#62; $request-&#62;lastname,
            'email' =&#62; $request-&#62;email,
            'password' =&#62; Hash::make($request-&#62;password),
        ]);

        // Vérifie si la requête est une requête API (JSON)
        if ($request-&#62;expectsJson()) &#123;
            return response()-&#62;json(['message' =&#62; 'Utilisateur créé avec succès'], 201);
        &#125;

        // Redirection vers la page de connexion avec un message de succès
        return redirect()-&#62;route('login')-&#62;with('success', 'Compte créé avec succès. Connectez-vous !');
    &#125;

    // Traitement de la connexion
    public function login(Request $request)
    &#123;
        // Validation des identifiants
        $credentials = $request-&#62;validate([
            'email' =&#62; 'required|email',
            'password' =&#62; 'required'
        ]);

        // Vérifie si les identifiants sont incorrects
        if (!Auth::attempt($credentials)) &#123;
            if ($request-&#62;expectsJson()) &#123;
                return response()-&#62;json(['message' =&#62; 'Identifiants incorrects'], 401);
            &#125;
            return back()-&#62;with('error', 'Email ou mot de passe incorrect.');
        &#125;

        // Récupère l'utilisateur authentifié
        $user = Auth::user();

        // Vérifie si la requête est une API et retourne un token si c'est le cas
        if ($request-&#62;expectsJson()) &#123;
            $token = $user-&#62;createToken('authToken')-&#62;plainTextToken;
            return response()-&#62;json(['token' =&#62; $token]);
        &#125;

        // Redirection en fonction du rôle de l'utilisateur
        return redirect()-&#62;route($user-&#62;role === 'admin' ? 'admin.dashboard' : 'dashboard');
    &#125;

    // Déconnexion de l'utilisateur
    public function logout(Request $request)
    &#123;
        Auth::logout(); // Déconnecte l'utilisateur
        $request-&#62;session()-&#62;invalidate(); // Invalide la session
        $request-&#62;session()-&#62;regenerateToken(); // Régénère le token CSRF pour sécurité

        // Vérifie si la requête est une API et retourne une réponse JSON
        if ($request-&#62;expectsJson()) &#123;
            return response()-&#62;json(['message' =&#62; 'Déconnexion réussie']);
        &#125;

        // Redirection vers la page de connexion
        return redirect()-&#62;route('login');
    &#125;

    // Retourne les informations de l'utilisateur actuellement authentifié
    public function user()
    &#123;
        return response()-&#62;json(Auth::user());
    &#125;
&#125;</pre>
<h2>🔹3. Création des Dashboards (User & Admin)</h2>
<p>Nous allons créer deux dashboards distincts :</p>
<ul>
  <li>✅ Dashboard Utilisateur (dashboard.blade.php) → Accessible aux utilisateurs connectés.</li>
  <li>✅ Dashboard Admin (admin/dashboard.blade.php) → Accessible uniquement aux administrateurs.</li>
</ul>
<h3>🔸1. Création du contrôleur DashboardController</h3>
<p>Nous allons créer un contrôleur unique qui gérera les deux dashboards.
</p>
<pre class="tab" ngNonBindable>php artisan make:controller DashboardController</pre>
<p>📂 Fichier : app/Http/Controllers/DashboardController.php</p>
<pre class="tab" ngNonBindable>namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
&#123;
    // Afficher le tableau de bord utilisateur
    public function userDashboard()
    &#123;
        return view('dashboard');
    &#125;

    // Afficher le tableau de bord administrateur
    public function adminDashboard()
    &#123;
        return view('admin.dashboard');
    &#125;
&#125;</pre>
<h3>🔸2.  Création des vues Blade</h3>
 <p>Nous allons maintenant créer les fichiers Blade pour les dashboards.</p>
  <p>📂 Fichier (User Dashboard): resources/views/dashboard.blade.php</p>
  <pre class="tab" ngNonBindable>&#64;extends('layouts.app')

&#64;section('content')
    &#60;div class="container"&#62;
        &#60;h2&#62;Bienvenue, &#123; &#123; auth()-&#62;user()-&#62;firstname &#125; &#125; !&#60;/h2&#62;
        &#60;p&#62;Vous êtes connecté en tant qu'utilisateur.&#60;/p&#62;
    &#60;/div&#62;
&#64;endsection</pre>
<p>📂 Fichier (Admin Dashboard): resources/views/admin/dashboard.blade.php</p>
<pre class="tab" ngNonBindable>&#64;extends('layouts.app')

&#64;section('content')
    &#60;div class="container"&#62;
        &#60;h2&#62;Bienvenue sur le Dashboard Admin, &#123; &#123; auth()-&#62;user()-&#62;firstname &#125; &#125; !&#60;/h2&#62;
        &#60;p&#62;Vous avez accès à la gestion des utilisateurs, produits et catégories.&#60;/p&#62;
    &#60;/div&#62;
&#64;endsection</pre>
<h3>🔸3. Ajout des Routes pour les Dashboards dans web.php</h3>
<p>Nous devons maintenant définir les routes pour accéder aux dashboards.</p>
<p>📂 Fichier : routes/web.php</p>
<pre class="tab" ngNonBindable>use App\Http\Controllers\DashboardController;

Route::middleware('auth')-&#62;group(function () &#123;
    // Route pour le tableau de bord utilisateur
    Route::get('/dashboard', [DashboardController::class, 'userDashboard'])-&#62;name('dashboard');

    // Route pour le tableau de bord administrateur (seulement pour les admins)
    Route::middleware('admin')-&#62;group(function () &#123;
        Route::get('/admin/dashboard', [DashboardController::class, 'adminDashboard'])-&#62;name('admin.dashboard');
    &#125;);
&#125;);</pre>
<h2>🔹4. Gestion des Produits (Affichage et Ajout) pour l'Admin</h2>
<p>Nous allons mettre en place :</p>
<p>🚀 Objectifs :</p>
<ul>
  <li>✅ Un affichage des produits pour l’Admin</li>
  <li>✅ Un formulaire pour ajouter un produit</li>
  <li>✅ Un formulaire pour modifier un produit</li>
  <li>✅ Une gestion de l’upload d’image</li>
  <li>✅ Des routes bien définies</li>
</ul>

<h3>🔸1. Mise à jour du ProductController.php</h3>
<p>Nous allons ajouter uniquement les méthodes nécessaires pour l'affichage et l’ajout des produits.</p>
<p>📂 Fichier : app/Http/Controllers/ProductController.php</p>
<pre class="tab" ngNonBindable>&#60;?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Category;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
&#123;
    // Affichage des produits (Admin)
    public function index()
    &#123;
        $products = Product::all();
        return view('admin.products.index', compact('products'));
    &#125;

    // Formulaire d'ajout d'un produit
    public function create()
    &#123;
        $categories = Category::all();
        return view('admin.products.create', compact('categories'));
    &#125;

    // Ajout d'un produit
    public function store(Request $request)
    &#123;
        $request-&#62;validate([
            'name' =&#62; 'required|string|max:255',
            'description' =&#62; 'nullable|string',
            'price' =&#62; 'required|numeric',
            'categorie_id' =&#62; 'nullable|exists:categories,id',
            'image' =&#62; 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        // Gestion de l'image
        $imagePath = null;
        if ($request-&#62;hasFile('image')) &#123;
            $imagePath = $request-&#62;file('image')-&#62;store('products', 'public');
        &#125;

        Product::create([
            'name' =&#62; $request-&#62;name,
            'description' =&#62; $request-&#62;description,
            'price' =&#62; $request-&#62;price,
            'categorie_id' =&#62; $request-&#62;categorie_id,
            'image' =&#62; $imagePath,
        ]);

        return redirect()-&#62;route('admin.products.index')-&#62;with('success', 'Produit ajouté avec succès.');
    &#125;

    // Formulaire de mise à jour d'un produit
    public function edit($id)
    &#123;
        $product = Product::findOrFail($id);
        $categories = Category::all();
        return view('admin.products.edit', compact('product', 'categories'));
    &#125;

    // Mise à jour d'un produit
    public function update(Request $request, $id)
    &#123;
        $product = Product::findOrFail($id);

        $request-&#62;validate([
            'name' =&#62; 'required|string|max:255',
            'description' =&#62; 'nullable|string',
            'price' =&#62; 'required|numeric',
            'categorie_id' =&#62; 'nullable|exists:categories,id',
            'image' =&#62; 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        // Gestion de l'image
        if ($request-&#62;hasFile('image')) &#123;
            // Supprimer l'ancienne image si elle existe
            if ($product-&#62;image) &#123;
                Storage::disk('public')-&#62;delete($product-&#62;image);
            &#125;

            $product-&#62;image = $request-&#62;file('image')-&#62;store('products', 'public');
        &#125;

        // Mise à jour des données
        $product-&#62;update([
            'name' =&#62; $request-&#62;name,
            'description' =&#62; $request-&#62;description,
            'price' =&#62; $request-&#62;price,
            'categorie_id' =&#62; $request-&#62;categorie_id,
        ]);

        return redirect()-&#62;route('admin.products.index')-&#62;with('success', 'Produit mis à jour avec succès.');
    &#125;
&#125;
</pre>
<h3>🔸2. Création des vues Blade pour les produits</h3>
<p>Nous allons créer deux fichiers Blade :</p>
<ul>
  <li>index.blade.php → Pour afficher la liste des produits</li>
  <li>create.blade.php → Pour ajouter un produit</li>
  <li>edit.blade.php → Pour mettre à jour un produit</li>
</ul>
<p>📂 Fichier : resources/views/admin/products/index.blade.php</p>
<pre class="tab" ngNonBindable>&#64;extends('layouts.app')

&#64;section('content')
&#60;div class="container"&#62;
    &#60;h2&#62;Liste des Produits&#60;/h2&#62;
    &#60;a href="&#123; &#123; route('admin.products.create') &#125; &#125;" class="btn btn-primary mb-3"&#62;Ajouter un produit&#60;/a&#62;

    &#64;if(session('success'))
        &#60;div class="alert alert-success"&#62;&#123; &#123; session('success') &#125; &#125;&#60;/div&#62;
    &#64;endif

    &#60;table class="table table-bordered"&#62;
        &#60;thead&#62;
            &#60;tr&#62;
                &#60;th&#62;Image&#60;/th&#62;
                &#60;th&#62;Nom&#60;/th&#62;
                &#60;th&#62;Description&#60;/th&#62;
                &#60;th&#62;Prix&#60;/th&#62;
                &#60;th&#62;Catégorie&#60;/th&#62;
            &#60;/tr&#62;
        &#60;/thead&#62;
        &#60;tbody&#62;
            &#64;foreach($products as $product)
            &#60;tr&#62;
                &#60;td&#62;
                    &#64;if($product-&#62;image)
                        &#60;img src="&#123; &#123; asset('storage/' . $product-&#62;image) &#125; &#125;" width="50"&#62;
                    &#64;else
                        Pas d'image
                    &#64;endif
                &#60;/td&#62;
                &#60;td&#62;&#123; &#123; $product-&#62;name &#125; &#125;&#60;/td&#62;
                &#60;td&#62;&#123; &#123; $product-&#62;description &#125; &#125;&#60;/td&#62;
                &#60;td&#62;&#123; &#123; $product-&#62;price &#125; &#125; €&#60;/td&#62;
                &#60;td&#62;&#123; &#123; $product-&#62;categorie_id ? $product-&#62;category-&#62;name : 'Non classé' &#125; &#125;&#60;/td&#62;
            &#60;/tr&#62;
            &#64;endforeach
        &#60;/tbody&#62;
    &#60;/table&#62;
&#60;/div&#62;
&#64;endsection</pre>
<p>📂 Fichier : resources/views/admin/products/create.blade.php</p>
<pre class="tab" ngNonBindable>&#64;extends('layouts.app')

&#64;section('content')
&#60;div class="container"&#62;
    &#60;h2&#62;Ajouter un Produit&#60;/h2&#62;

    &#60;form action="&#123; &#123; route('admin.products.store') &#125; &#125;" method="POST" enctype="multipart/form-data"&#62;
        &#64;csrf

        &#60;div class="mb-3"&#62;
            &#60;label for="name" class="form-label"&#62;Nom du produit&#60;/label&#62;
            &#60;input type="text" class="form-control" id="name" name="name" required&#62;
        &#60;/div&#62;

        &#60;div class="mb-3"&#62;
            &#60;label for="description" class="form-label"&#62;Description&#60;/label&#62;
            &#60;textarea class="form-control" id="description" name="description"&#62;&#60;/textarea&#62;
        &#60;/div&#62;

        &#60;div class="mb-3"&#62;
            &#60;label for="price" class="form-label"&#62;Prix&#60;/label&#62;
            &#60;input type="number" step="0.01" class="form-control" id="price" name="price" required&#62;
        &#60;/div&#62;

        &#60;div class="mb-3"&#62;
            &#60;label for="categorie_id" class="form-label"&#62;Catégorie&#60;/label&#62;
            &#60;select class="form-control" id="categorie_id" name="categorie_id"&#62;
                &#60;option value=""&#62;Sélectionner une catégorie&#60;/option&#62;
                &#64;foreach($categories as $category)
                    &#60;option value="&#123; &#123; $category-&#62;id &#125; &#125;"&#62;&#123; &#123; $category-&#62;name &#125; &#125;&#60;/option&#62;
                &#64;endforeach
            &#60;/select&#62;
        &#60;/div&#62;

        &#60;div class="mb-3"&#62;
            &#60;label for="image" class="form-label"&#62;Image du produit&#60;/label&#62;
            &#60;input type="file" class="form-control" id="image" name="image"&#62;
        &#60;/div&#62;

        &#60;button type="submit" class="btn btn-success"&#62;Ajouter&#60;/button&#62;
    &#60;/form&#62;
&#60;/div&#62;
&#64;endsection</pre>
📂 resources/views/admin/products/edit.blade.php
<pre class="tab" ngNonBindable>&#64;extends('layouts.app')

&#64;section('content')
&#60;div class="container"&#62;
    &#60;h2&#62;Modifier le Produit&#60;/h2&#62;

    &#60;form action="&#123; &#123; route('admin.products.update', $product-&#62;id) &#125; &#125;" method="POST" enctype="multipart/form-data"&#62;
        &#64;csrf
        &#64;method('PUT')

        &#60;div class="mb-3"&#62;
            &#60;label for="name" class="form-label"&#62;Nom du produit&#60;/label&#62;
            &#60;input type="text" class="form-control" id="name" name="name" value="&#123; &#123; $product-&#62;name &#125; &#125;" required&#62;
        &#60;/div&#62;

        &#60;div class="mb-3"&#62;
            &#60;label for="description" class="form-label"&#62;Description&#60;/label&#62;
            &#60;textarea class="form-control" id="description" name="description"&#62;&#123; &#123; $product-&#62;description &#125; &#125;&#60;/textarea&#62;
        &#60;/div&#62;

        &#60;div class="mb-3"&#62;
            &#60;label for="price" class="form-label"&#62;Prix&#60;/label&#62;
            &#60;input type="number" step="0.01" class="form-control" id="price" name="price" value="&#123; &#123; $product-&#62;price &#125; &#125;" required&#62;
        &#60;/div&#62;

        &#60;div class="mb-3"&#62;
            &#60;label for="categorie_id" class="form-label"&#62;Catégorie&#60;/label&#62;
            &#60;select class="form-control" id="categorie_id" name="categorie_id"&#62;
                &#60;option value=""&#62;Sélectionner une catégorie&#60;/option&#62;
                &#64;foreach($categories as $category)
                    &#60;option value="&#123; &#123; $category-&#62;id &#125; &#125;" &#123; &#123; $product-&#62;categorie_id == $category-&#62;id ? 'selected' : '' &#125; &#125;&#62;
                        &#123; &#123; $category-&#62;name &#125; &#125;
                    &#60;/option&#62;
                &#64;endforeach
            &#60;/select&#62;
        &#60;/div&#62;

        &#60;div class="mb-3"&#62;
            &#60;label for="image" class="form-label"&#62;Image du produit&#60;/label&#62;
            &#60;input type="file" class="form-control" id="image" name="image"&#62;
        &#60;/div&#62;

        &#60;button type="submit" class="btn btn-success"&#62;Mettre à jour&#60;/button&#62;
    &#60;/form&#62;
&#60;/div&#62;
&#64;endsection
</pre>
<h3>🔸3. Mise à jour des Routes pour les Produits</h3>
<p>📂 Fichier : routes/web.php</p>
<p>Ajout des routes pour afficher et ajouter des produits en mode admin.
</p>
<pre class="tab" ngNonBindable>Route::middleware(['auth', 'admin'])-&#62;prefix('admin')-&#62;group(function () &#123;
    Route::get('/products', [ProductController::class, 'index'])-&#62;name('admin.products.index');
    Route::get('/products/create', [ProductController::class, 'create'])-&#62;name('admin.products.create');
    Route::post('/products', [ProductController::class, 'store'])-&#62;name('admin.products.store');
    Route::get('/products/&#123;id&#125;/edit', [ProductController::class, 'edit'])-&#62;name('admin.products.edit');
    Route::put('/products/&#123;id&#125;', [ProductController::class, 'update'])-&#62;name('admin.products.update');
&#125;);</pre>

<h2>🔹5. Gestion des Catégories (Affichage, Ajout et Mise à Jour) pour l’Admin</h2>
<p>Nous allons mettre en place :</p>
<ul>
  <li>✅ Un affichage des catégories</li>
  <li>✅ Un formulaire pour ajouter une catégorie</li>
  <li>✅ Un formulaire pour modifier une catégorie</li>
  <li>✅ Des routes bien définies</li>
</ul>
<h3>🔸1. Mise à jour du CategoryController.php</h3>

<p>Nous allons ajouter les méthodes nécessaires pour l'affichage et l’ajout des catégories.</p>
<p>📂 Fichier : app/Http/Controllers/CategoryController.php</p>
<pre class="tab" ngNonBindable>&#60;?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;

class CategoryController extends Controller
&#123;
    // Affichage des catégories (Admin)
    public function index()
    &#123;
        $categories = Category::all();
        return view('admin.categories.index', compact('categories'));
    &#125;

    // Formulaire d'ajout d'une catégorie
    public function create()
    &#123;
        return view('admin.categories.create');
    &#125;

    // Ajout d'une catégorie
    public function store(Request $request)
    &#123;
        $request-&#62;validate([
            'name' =&#62; 'required|string|max:255|unique:categories',
        ]);

        Category::create([
            'name' =&#62; $request-&#62;name,
        ]);

        return redirect()-&#62;route('admin.categories.index')-&#62;with('success', 'Catégorie ajoutée avec succès.');
    &#125;

    // Formulaire de mise à jour d'une catégorie
    public function edit($id)
    &#123;
        $category = Category::findOrFail($id);
        return view('admin.categories.edit', compact('category'));
    &#125;

    // Mise à jour d'une catégorie
    public function update(Request $request, $id)
    &#123;
        $category = Category::findOrFail($id);

        $request-&#62;validate([
            'name' =&#62; 'required|string|max:255|unique:categories,name,' . $category-&#62;id,
        ]);

        $category-&#62;update([
            'name' =&#62; $request-&#62;name,
        ]);

        return redirect()-&#62;route('admin.categories.index')-&#62;with('success', 'Catégorie mise à jour avec succès.');
    &#125;
&#125;</pre>
<h3>🔸2. Création des vues Blade pour les catégories</h3>
<p>Nous allons créer trois fichiers Blade :</p>
<ul>
  <li>index.blade.php → Pour afficher la liste des catégories</li>
  <li>create.blade.php → Pour ajouter une catégorie</li>
  <li>edit.blade.php → Pour mettre à jour une catégorie</li>
</ul>
<p>📂 Fichier : resources/views/admin/categories/index.blade.php</p>
<pre class="tab" ngNonBindable>&#64;extends('layouts.app')

&#64;section('content')
&#60;div class="container"&#62;
    &#60;h2&#62;Liste des Catégories&#60;/h2&#62;
    &#60;a href="&#123; &#123; route('admin.categories.create') &#125; &#125;" class="btn btn-primary mb-3"&#62;Ajouter une catégorie&#60;/a&#62;

    &#64;if(session('success'))
        &#60;div class="alert alert-success"&#62;&#123; &#123; session('success') &#125; &#125;&#60;/div&#62;
    &#64;endif

    &#60;table class="table table-bordered"&#62;
        &#60;thead&#62;
            &#60;tr&#62;
                &#60;th&#62;Nom&#60;/th&#62;
                &#60;th&#62;Actions&#60;/th&#62;
            &#60;/tr&#62;
        &#60;/thead&#62;
        &#60;tbody&#62;
            &#64;foreach($categories as $category)
            &#60;tr&#62;
                &#60;td&#62;&#123; &#123; $category-&#62;name &#125; &#125;&#60;/td&#62;
                &#60;td&#62;
                    &#60;a href="&#123; &#123; route('admin.categories.edit', $category-&#62;id) &#125; &#125;" class="btn btn-warning btn-sm"&#62;Modifier&#60;/a&#62;
                &#60;/td&#62;
            &#60;/tr&#62;
            &#64;endforeach
        &#60;/tbody&#62;
    &#60;/table&#62;
&#60;/div&#62;
&#64;endsection</pre>
<p>📂 Fichier : resources/views/admin/categories/create.blade.php</p>
<pre class="tab" ngNonBindable>&#64;extends('layouts.app')

&#64;section('content')
&#60;div class="container"&#62;
    &#60;h2&#62;Ajouter une Catégorie&#60;/h2&#62;

    &#60;form action="&#123; &#123; route('admin.categories.store') &#125; &#125;" method="POST"&#62;
        &#64;csrf

        &#60;div class="mb-3"&#62;
            &#60;label for="name" class="form-label"&#62;Nom de la catégorie&#60;/label&#62;
            &#60;input type="text" class="form-control" id="name" name="name" required&#62;
        &#60;/div&#62;

        &#60;button type="submit" class="btn btn-success"&#62;Ajouter&#60;/button&#62;
    &#60;/form&#62;
&#60;/div&#62;
&#64;endsection</pre>
<p>📂 Fichier : resources/views/admin/categories/edit.blade.php</p>
<pre class="tab" ngNonBindable>&#64;extends('layouts.app')

&#64;section('content')
&#60;div class="container"&#62;
    &#60;h2&#62;Modifier la Catégorie&#60;/h2&#62;

    &#60;form action="&#123; &#123; route('admin.categories.update', $category-&#62;id) &#125; &#125;" method="POST"&#62;
        &#64;csrf
        &#64;method('PUT')

        &#60;div class="mb-3"&#62;
            &#60;label for="name" class="form-label"&#62;Nom de la catégorie&#60;/label&#62;
            &#60;input type="text" class="form-control" id="name" name="name" value="&#123; &#123; $category-&#62;name &#125; &#125;" required&#62;
        &#60;/div&#62;

        &#60;button type="submit" class="btn btn-success"&#62;Mettre à jour&#60;/button&#62;
    &#60;/form&#62;
&#60;/div&#62;
&#64;endsection</pre>
<h3>🔸3. Mise à jour des Routes pour les Catégories</h3>
<p>📂 Fichier : routes/web.php</p>
<pre class="tab" ngNonBindable>Route::middleware(['auth', 'admin'])-&#62;prefix('admin')-&#62;group(function () &#123;
    Route::get('/categories', [CategoryController::class, 'index'])-&#62;name('admin.categories.index');
    Route::get('/categories/create', [CategoryController::class, 'create'])-&#62;name('admin.categories.create');
    Route::post('/categories', [CategoryController::class, 'store'])-&#62;name('admin.categories.store');
    Route::get('/categories/&#123;id&#125;/edit', [CategoryController::class, 'edit'])-&#62;name('admin.categories.edit');
    Route::put('/categories/&#123;id&#125;', [CategoryController::class, 'update'])-&#62;name('admin.categories.update');
&#125;);</pre>
<h2>🔹6. Gestion des Utilisateurs (Affichage et Suppression) pour l'Admin</h2>
<p>Nous allons mettre en place :</p>
<ul>
  <li>✅ Un affichage des utilisateurs</li>
  <li>✅ Suppression d’un utilisateur</li>
  <li>✅ Des routes bien définies</li>
</ul>
<h3>🔸1. Mise à jour du UserController.php</h3>
<p>Nous allons ajouter les méthodes nécessaires pour l'affichage et la suppression des utilisateurs.</p>
<p>📂 Fichier : app/Http/Controllers/UserController.php</p>
<pre class="tab" ngNonBindable>&#60;?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
&#123;
    // Affichage des utilisateurs (Admin)
    public function index()
    &#123;
        $users = User::all();
        return view('admin.users.index', compact('users'));
    &#125;

    // Suppression d'un utilisateur
    public function destroy($id)
    &#123;
        $user = User::findOrFail($id);
        $user-&#62;delete();

        return redirect()-&#62;route('admin.users.index')-&#62;with('success', 'Utilisateur supprimé avec succès.');
    &#125;
&#125;</pre>
<h3>🔸2. Création des vues Blade pour afficher les utilisateurs</h3>
<p>Nous allons créer un fichier Blade :</p>
<p>📂 Fichier : resources/views/admin/users/index.blade.php</p>
<pre class="tab" ngNonBindable> &#64;extends('layouts.app')

&#64;section('content')
&#60;div class="container"&#62;
    &#60;h2&#62;Liste des Utilisateurs&#60;/h2&#62;

    &#64;if(session('success'))
        &#60;div class="alert alert-success"&#62;&#123;&#123; session('success') &#125;&#125;&#60;/div&#62;
    &#64;endif

    &#60;table class="table table-bordered"&#62;
        &#60;thead&#62;
            &#60;tr&#62;
                &#60;th&#62;ID&#60;/th&#62;
                &#60;th&#62;Nom&#60;/th&#62;
                &#60;th&#62;Email&#60;/th&#62;
                &#60;th&#62;Rôle&#60;/th&#62;
                &#60;th&#62;Actions&#60;/th&#62;
            &#60;/tr&#62;
        &#60;/thead&#62;
        &#60;tbody&#62;
            &#64;foreach($users as $user)
            &#60;tr&#62;
                &#60;td&#62;&#123;&#123; $user-&#62;id &#125;&#125;&#60;/td&#62;
                &#60;td&#62;&#123;&#123; $user-&#62;firstname &#125;&#125; &#123;&#123; $user-&#62;lastname &#125;&#125;&#60;/td&#62;
                &#60;td&#62;&#123;&#123; $user-&#62;email &#125;&#125;&#60;/td&#62;
                &#60;td&#62;&#123;&#123; $user-&#62;role &#125;&#125;&#60;/td&#62;
                &#60;td&#62;
                    &#64;if($user-&#62;role !== 'admin')
                        &#60;form action="&#123;&#123; route('admin.users.destroy', $user-&#62;id) &#125;&#125;" method="POST" onsubmit="return confirm('Voulez-vous vraiment supprimer cet utilisateur ?');"&#62;
                            &#64;csrf
                            &#64;method('DELETE')
                            &#60;button type="submit" class="btn btn-danger btn-sm"&#62;Supprimer&#60;/button&#62;
                        &#60;/form&#62;
                    &#64;else
                        &#60;span class="text-muted"&#62;Action non autorisée&#60;/span&#62;
                    &#64;endif
                &#60;/td&#62;
            &#60;/tr&#62;
            &#64;endforeach
        &#60;/tbody&#62;
    &#60;/table&#62;
&#60;/div&#62;
&#64;endsection
</pre>
<h3>🔸3. Mise à jour des Routes pour les Utilisateurs</h3>
<p>📂 Fichier : routes/web.php</p>
<pre class="tab" ngNonBindable>Route::middleware(['auth', 'admin'])-&#62;prefix('admin')-&#62;group(function () &#123;
    Route::get('/users', [UserController::class, 'index'])-&#62;name('admin.users.index');
    Route::delete('/users/&#123;id&#125;', [UserController::class, 'destroy'])-&#62;name('admin.users.destroy');
&#125;);</pre>
<h2>🔹7. Les routes finales et la navigation entre les pages</h2>
<p>Voici les routes finales pour accéder aux différentes pages :</p>
<ul>
  <li>✅ /login → Page de connexion</li>
  <li>✅ /register → Page d'inscription</li>
  <li>✅ /dashboard → Tableau de bord utilisateur</li>
  <li>✅ /admin/dashboard → Tableau de bord administrateur</li>
  <li>✅ /admin/products → Liste des produits</li>
  <li>✅ /admin/products/create → Ajouter un produit</li>
  <li>✅ /admin/products/&#123;id&#125;/edit → Modifier un produit</li>
  <li>✅ /admin/categories → Liste des catégories</li>
  <li>✅ /admin/categories/create → Ajouter une catégorie</li>
  <li>✅ /admin/categories/&#123;id&#125;/edit → Modifier une catégorie</li>
  <li>✅ /admin/users → Liste des utilisateurs</li>
</ul>
<h3>🔸1 Configuration des Routes dans web.php</h3>
<p>📂 Fichier : routes/web.php</p>
<pre class="tab" ngNonBindable>use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CategoryController;

// 🔹 Page d'accueil accessible à tous
Route::get('/', function () &#123;
    return view('welcome');
&#125;)-&#62;name('home');

// 🔹 Authentification
Route::get('/login', [AuthController::class, 'showLoginForm'])-&#62;name('login.form');
Route::post('/login', [AuthController::class, 'login'])-&#62;name('login');
Route::get('/register', [AuthController::class, 'showRegisterForm'])-&#62;name('register.form');
Route::post('/register', [AuthController::class, 'register'])-&#62;name('register');
Route::post('/logout', [AuthController::class, 'logout'])-&#62;name('logout')-&#62;middleware('auth');

// 🔹 Dashboard utilisateur (auth obligatoire)
Route::middleware(['auth'])-&#62;group(function () &#123;
    Route::get('/dashboard', [UserController::class, 'dashboard'])-&#62;name('user.dashboard');
&#125;);

// 🔹 Routes pour l'Admin (auth + admin obligatoire)
Route::middleware(['auth', 'admin'])-&#62;prefix('admin')-&#62;group(function () &#123;
    Route::get('/dashboard', function () &#123;
        return view('admin.dashboard');
    &#125;)-&#62;name('admin.dashboard');

    // Gestion des utilisateurs
    Route::get('/users', [UserController::class, 'index'])-&#62;name('admin.users.index');
    Route::delete('/users/&#123;id&#125;', [UserController::class, 'destroy'])-&#62;name('admin.users.destroy');

    // Gestion des produits
    Route::get('/products', [ProductController::class, 'index'])-&#62;name('admin.products.index');
    Route::get('/products/create', [ProductController::class, 'create'])-&#62;name('admin.products.create');
    Route::post('/products', [ProductController::class, 'store'])-&#62;name('admin.products.store');
    Route::get('/products/&#123;id&#125;/edit', [ProductController::class, 'edit'])-&#62;name('admin.products.edit');
    Route::put('/products/&#123;id&#125;', [ProductController::class, 'update'])-&#62;name('admin.products.update');
    Route::delete('/products/&#123;id&#125;', [ProductController::class, 'destroy'])-&#62;name('admin.products.destroy');

    // Gestion des catégories
    Route::get('/categories', [CategoryController::class, 'index'])-&#62;name('admin.categories.index');
    Route::get('/categories/create', [CategoryController::class, 'create'])-&#62;name('admin.categories.create');
    Route::post('/categories', [CategoryController::class, 'store'])-&#62;name('admin.categories.store');
    Route::get('/categories/&#123;id&#125;/edit', [CategoryController::class, 'edit'])-&#62;name('admin.categories.edit');
    Route::put('/categories/&#123;id&#125;', [CategoryController::class, 'update'])-&#62;name('admin.categories.update');
    Route::delete('/categories/&#123;id&#125;', [CategoryController::class, 'destroy'])-&#62;name('admin.categories.destroy');
&#125;);</pre>
<h3>🔸2. Création des liens de navigation dans les vues</h3>
<p>📂 Fichier : resources/views/layouts/app.blade.php</p>
<p>Ajout d’un menu de navigation dynamique en fonction du rôle de l’utilisateur.</p>
<pre class="tab" ngNonBindable>&#60;!DOCTYPE html&#62;
&#60;html lang="fr"&#62;
&#60;head&#62;
    &#60;meta charset="UTF-8"&#62;
    &#60;meta name="viewport" content="width=device-width, initial-scale=1.0"&#62;
    &#60;title&#62;&#64;yield('title', 'Mon Site')&#60;/title&#62;
    &#60;link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap&#64;5.3.0/dist/css/bootstrap.min.css"&#62;
&#60;/head&#62;
&#60;body&#62;

&#60;nav class="navbar navbar-expand-lg navbar-light bg-light"&#62;
    &#60;div class="container"&#62;
        &#60;a class="navbar-brand" href="&#123;&#123; route('home') &#125;&#125;"&#62;Mon Site&#60;/a&#62;

        &#60;ul class="navbar-nav ms-auto"&#62;
            &#64;guest
                &#60;li class="nav-item"&#62;&#60;a class="nav-link" href="&#123;&#123; route('login.form') &#125;&#125;"&#62;Connexion&#60;/a&#62;&#60;/li&#62;
                &#60;li class="nav-item"&#62;&#60;a class="nav-link" href="&#123;&#123; route('register.form') &#125;&#125;"&#62;Inscription&#60;/a&#62;&#60;/li&#62;
            &#64;else
                &#64;if(Auth::user()-&#62;role === 'admin')
                    &#60;li class="nav-item"&#62;&#60;a class="nav-link" href="&#123;&#123; route('admin.dashboard') &#125;&#125;"&#62;Dashboard Admin&#60;/a&#62;&#60;/li&#62;
                    &#60;li class="nav-item"&#62;&#60;a class="nav-link" href="&#123;&#123; route('admin.products.index') &#125;&#125;"&#62;Produits&#60;/a&#62;&#60;/li&#62;
                    &#60;li class="nav-item"&#62;&#60;a class="nav-link" href="&#123;&#123; route('admin.categories.index') &#125;&#125;"&#62;Catégories&#60;/a&#62;&#60;/li&#62;
                    &#60;li class="nav-item"&#62;&#60;a class="nav-link" href="&#123;&#123; route('admin.users.index') &#125;&#125;"&#62;Utilisateurs&#60;/a&#62;&#60;/li&#62;
                &#64;else
                    &#60;li class="nav-item"&#62;&#60;a class="nav-link" href="&#123;&#123; route('user.dashboard') &#125;&#125;"&#62;Dashboard&#60;/a&#62;&#60;/li&#62;
                &#64;endif
                &#60;li class="nav-item"&#62;
                    &#60;form action="&#123;&#123; route('logout') &#125;&#125;" method="POST"&#62;
                        &#64;csrf
                        &#60;button class="btn btn-link nav-link" type="submit"&#62;Déconnexion&#60;/button&#62;
                    &#60;/form&#62;
                &#60;/li&#62;
            &#64;endguest
        &#60;/ul&#62;
    &#60;/div&#62;
&#60;/nav&#62;

&#60;div class="container mt-4"&#62;
    &#64;yield('content')
&#60;/div&#62;

&#60;script src="https://cdn.jsdelivr.net/npm/bootstrap&#64;5.3.0/dist/js/bootstrap.bundle.min.js"&#62;&#60;/script&#62;
&#60;/body&#62;
&#60;/html&#62;</pre>

<h3>🔸3. Vérification des Pages et des Liens</h3>
<p>📌 Vérifier les routes disponibles</p>
<p>Dans le terminal, exécute :</p>
<pre class="tab" ngNonBindable>php artisan route:list</pre>
<p>📌 Tester la navigation</p>
<p>🔗 Créer un admin manuellement dans la base de données (ou via un seeder).</p>
<p>🔗 Essayer de naviguer vers /admin/dashboard sans être connecté → devrait être refusé.</p>
<p>🔗 Se connecter avec un compte admin → accès autorisé.</p>
<p>🔗 Se connecter avec un compte user → accès refusé aux routes admin.</p>





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
           max-width: 100%;
  overflow-x: auto;
  white-space: pre-wrap; /* Permet le retour à la ligne si nécessaire */
  word-wrap: break-word; /* Permet de casser les longs mots */
         }
  `,
})
export class LaravelVuesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

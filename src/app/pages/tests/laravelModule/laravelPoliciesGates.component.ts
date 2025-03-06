import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-policiesGates',
  template: `
<h1>🎯 Cours détaillé : Utilisation des Policies et des Gates dans Laravel</h1>
<h2>📌 Objectif de cette leçon</h2>
<ul>
  <li>Comprendre la différence entre Policies et Gates
</li>
  <li>Savoir quand utiliser l’un ou l’autre
</li>
  <li>Implémenter une Policy et une Gate pour gérer l’accès aux fonctionnalités
</li>
</ul>
<p>Laravel offre deux méthodes pour gérer l'autorisation des actions utilisateur :</p>

<p><strong>Gates: </strong>Utilisé pour Vérifications simples basées sur des rôles ou des permissions.	Son cas d'usage est d'empêcher un utilisateur d’accéder à une route spécifique.</p>
<p><strong>Policies: </strong>Classes dédiées à la gestion des permissions sur un modèle. Son cas d'usage est de contrôler qui peut modifier ou supprimer un produit.</p>

<h2>📌 Exemple de différence</h2>
<ul>
  <li>Gate : "Un utilisateur peut-il accéder à l’admin ?"
</li>
  <li>Policy : "Un utilisateur peut-il modifier un produit spécifique ?"
</li>
</ul>
<h2>2️⃣ Création et utilisation des Gates
</h2>
<h3>🔹 Étape 1 : Déclarer une Gate dans AuthServiceProvider
</h3>
<p>Dans app/Providers/AuthServiceProvider.php, ajoute une Gate dans la méthode boot() :</p>
<pre class="tab">use Illuminate\Support\Facades\Gate;
use App\Models\User;

public function boot()
&#123;
    Gate::define('access-admin', function (User $user) &#123;
        return $user-&#62;role === 'admin';
    &#125;);
&#125;</pre>
<p>📌 Cette Gate empêche un utilisateur non-admin d’accéder au tableau de bord administrateur.</p>
<h3>🔹 Étape 2 : Utiliser la Gate dans un contrôleur
</h3>
<p>Dans un contrôleur, tu peux vérifier la permission avec authorize :</p>
<pre class="tab">public function adminDashboard()
&#123;
    if (!Gate::allows('access-admin')) &#123;
        abort(403, "Accès refusé");
    &#125;

    return view('admin.dashboard');
&#125;
</pre>
<p>📌 Si l'utilisateur n'est pas admin, il est redirigé vers une erreur 403.</p>
<h3>🔹 Étape 3 : Vérification dans Blade
</h3>
<p>Dans tes vues, utilise &#64;can :</p>
<pre class="tab">&#64;can('access-admin')
    &#60;a href="&#123; &#123; route('admin.dashboard') &#125; &#125;"&#62;Accéder au Dashboard Admin&#60;/a&#62;
&#64;endcan
</pre>
<p>📌 Le lien n’apparaîtra que pour les admins.</p>
<h2>3️⃣ Création et utilisation des Policies
</h2>
<h3>🔹 Étape 1 : Générer une Policy</h3>
<p>Pour gérer l’autorisation des actions sur les produits, crée une Policy avec Artisan :</p>
<pre class="tab">php artisan make:policy ProductPolicy --model=Product
</pre>
<p>Cela crée un fichier ProductPolicy.php dans app/Policies.
</p>
<h3>🔹 Étape 2 : Définir les règles d’autorisation
</h3>
<p>Dans app/Policies/ProductPolicy.php :</p>
<pre class="tab">use App\Models\User;
use App\Models\Product;

class ProductPolicy
&#123;
    /**
     * Déterminer si l'utilisateur peut mettre à jour un produit.
     */
    public function update(User $user, Product $product)
    &#123;
        return $user-&#62;role === 'admin';
    &#125;
&#125;</pre>
<h3>🔹 Étape 3 : Associer la Policy au modèle
</h3>
<p>Dans AuthServiceProvider.php, enregistre la Policy :</p>
<pre class="tab">use App\Models\Product;
use App\Policies\ProductPolicy;

protected $policies = [
    Product::class => ProductPolicy::class,
];</pre>
<h3>🔹 Étape 4 : Appliquer la Policy dans un contrôleur
</h3>
<p>Dans ProductController.php, ajoute la vérification :</p>
<pre class="tab">public function update(Request $request, Product $product)
&#123;
    $this-&#62;authorize('update', $product);

    $product-&#62;update($request-&#62;all());

    return redirect()-&#62;route('products.index')-&#62;with('success', 'Produit mis à jour.');
&#125;</pre>
<p>📌 Si l'utilisateur n'a pas le droit, Laravel renvoie une erreur 403.</p>
<h3>🔹 Étape 5 : Vérification dans Blade
</h3>
<p>Dans ta vue edit.blade.php :</p>
<pre class="tab">&#64;can('update', $product)
    &#60;a href="&#123; &#123; route('products.edit', $product-&#62;id) &#125; &#125;"&#62;Modifier&#60;/a&#62;
&#64;endcan
</pre>
<p>📌 Le lien de modification n’apparaîtra que pour les admins.
</p>
<h2>📌 Conclusion
</h2>
<ul>
  <li>✅ Gates : Vérifications rapides et globales (exemple : accès admin)
  </li>
  <li>✅ Policies : Gestion avancée des permissions liées à un modèle spécifique
</li>
</ul>

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
export class LaravelPoliciesGatesComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}



import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-optimisation-laravel',
  template:`
<h1>📌 Optimisation des Performances dans Laravel
</h1>
<p>L'optimisation des performances dans Laravel permet d'améliorer la rapidité et la réactivité de votre application, tout en réduisant la charge sur le serveur et la base de données. Voici les meilleures pratiques à adopter.</p>
<h2>1️⃣ Mise en cache pour améliorer la rapidité
</h2>
<p>Laravel offre plusieurs types de cache pour stocker des informations fréquemment utilisées et réduire les requêtes répétées.</p>
<h3>🟢 a) Mise en cache des configurations
</h3>
<p>Après avoir mis à jour le fichier .env ou les configurations, utilisez :
</p>
<pre class="tab">php artisan config:cache
</pre>
<p>Cela regénère le cache de configuration et évite de recharger les fichiers à chaque requête.</p>
<h3>🟢 b) Mise en cache des routes</h3>
<p>Si vos routes sont définies et ne changent pas fréquemment, vous pouvez les mettre en cache pour accélérer le routage :</p>
<pre class="tab">php artisan route:cache
</pre>
<p>⚠️ Attention : Si vous ajoutez de nouvelles routes, exécutez d'abord php artisan route:clear.</p>
<h3>🟢 c) Mise en cache des vues Blade</h3>
<p>Laravel compile automatiquement les vues Blade, mais vous pouvez les forcer en cache pour de meilleures performances :</p>
<pre class="tab">php artisan view:cache
</pre>
<p>Pour supprimer ce cache si besoin :</p>
<pre class="tab">php artisan view:clear
</pre>
<h3>🟢 d) Mise en cache des requêtes avec Redis ou Memcached
</h3>
<p>Si vous avez des données utilisées fréquemment (comme les catégories ou les produits populaires), stockez-les en cache :</p>
<pre class="tab">use Illuminate\Support\Facades\Cache;

// Mettre en cache les catégories pendant 10 minutes
$categories = Cache::remember('categories', 600, function () &#123;
    return Category::all();
&#125;);</pre>
<p>Astuce : Redis est plus performant que le cache fichier, configurez-le dans .env :</p>
<pre class="tab">CACHE_DRIVER=redis
</pre>
<h2>2️⃣ Optimisation des requêtes SQL
</h2>
<p>Les performances d’une application Laravel sont souvent limitées par la base de données. Voici comment améliorer l’exécution des requêtes.</p>
<h3>🟢 a) Utiliser l’Eager Loading au lieu du Lazy Loading
</h3>
<p>Par défaut, Laravel charge les relations avec le lazy loading, ce qui provoque le problème N+1 :</p>
<pre class="tab">// ❌ Mauvaise pratique : Cela fait plusieurs requêtes SQL (N+1)
$products = Product::all();
foreach ($products as $product) &#123;
    echo $product-&#62;category-&#62;name;
&#125;</pre>
<p>✅ Solution : Eager Loading (chargement anticipé des relations)</p>
<pre class="tab">$products = Product::with('category')->get();
</pre>
<p>Cela réduit drastiquement le nombre de requêtes SQL !</p>
<h3>🟢 b) Indexer les colonnes souvent recherchées
</h3>
<p>Ajoutez des index aux colonnes utilisées dans les filtres :</p>
<pre class="tab">ALTER TABLE users ADD INDEX idx_email (email);
</pre>
<p>Cela accélère les requêtes WHERE email = ?.</p>
<h3>🟢 c) Pagination pour éviter de charger trop de données
</h3>
<p>Ne chargez pas toute la base de données en une seule requête, utilisez la pagination :</p>
<pre class="tab">$products = Product::paginate(10);
</pre>
<p>Dans la vue :</p>
<pre class="tab">&#123; &#123; $products-&#62;links() &#125; &#125;
</pre>
<p>Cela réduit la charge serveur et améliore l’expérience utilisateur.</p>
<h2>3️⃣ Minification et Optimisation des Assets
</h2>
<p>Laravel Mix est un outil puissant pour compiler et minifier les fichiers CSS et JavaScript.</p>
<h3>🟢 a) Minifier le CSS et le JavaScript
</h3>
<p>Ajoutez cette ligne dans webpack.mix.js :</p>
<pre class="tab">mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css')
   .version();
</pre>
<p>Puis compilez en mode production :</p>
<pre class="tab">npm run prod
</pre>
<p>Cela réduit la taille des fichiers et accélère le chargement des pages.
</p>
<h3>🟢 b) Charger les scripts en différé (defer & async)
</h3>
<p>Ajoutez ces attributs pour ne pas bloquer le rendu de la page :
</p>
<pre class="tab">&#60;script src="&#123; &#123; asset('js/app.js') &#125; &#125;" defer&#62;&#60;/script&#62;
</pre>
<h3>🟢 c) Activer la compression Gzip et Brotli
</h3>
<p>Ajoutez ces directives dans .htaccess :</p>
<pre class="tab">&#60;IfModule mod_deflate.c&#62;
    AddOutputFilterByType DEFLATE text/html text/css application/javascript
&#60;/IfModule&#62;</pre>
<h2>4️⃣ Chargement différé des images et scripts
</h2>
<h3>🟢 a) Lazy Loading des images
</h3>
<p>Utilisez loading="lazy" pour charger les images uniquement lorsqu’elles apparaissent à l’écran :</p>
<pre class="tab">&#60;img src="image.jpg" loading="lazy" alt="Image optimisée"&#62;
</pre>
<h3>🟢 b) Utiliser un CDN pour servir les images et assets
</h3>
<p>Les CDN comme Cloudflare ou AWS S3 accélèrent le chargement des fichiers statiques.
</p>
<p>Dans .env, changez :
</p>
<pre class="tab">ASSET_URL=https://cdn.mon-site.com
</pre>
<p>Puis dans config/app.php :</p>
<pre class="tab">'asset_url' => env('ASSET_URL', null),
</pre>
<p>Et utilisez asset() dans Blade :</p>
<pre class="tab">&#60;img src="&#123; &#123; asset('images/photo.jpg') &#125; &#125;" alt="Image rapide"&#62;
</pre>
<h2>5️⃣ Désactiver le mode Debug en Production
</h2>
<p>En production, ne laissez jamais le mode debug activé (APP_DEBUG=true), car il expose des informations sensibles.</p>

<p>Dans .env :</p>
<pre class="tab">APP_DEBUG=false</pre>



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
         }
  `
})
export class LaravelOptimisationComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}


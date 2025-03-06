import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-laravel-securite',
  template: `
<h1>🔒 Sécurité des Données dans Laravel</h1>
<hr>
<p>La sécurité est un aspect essentiel du développement web. Laravel fournit plusieurs mécanismes pour protéger les applications contre les attaques courantes.</p>
    <div class="section">
        <h2>1️⃣ Protection contre l'injection SQL</h2>
        <p>Laravel protège contre l'injection SQL avec <b>Eloquent</b> et les requêtes préparées.</p>
        <h3>❌ Mauvaise pratique :</h3>
        <code>
        $users = DB::select("SELECT * FROM users WHERE email = '$email'");
        </code>
        <h3>✅ Bonne pratique :</h3>
        <code>
        $users = DB::select("SELECT * FROM users WHERE email = ?", [$email]);
        </code>
        <h3>✅ Encore mieux avec Eloquent :</h3>
        <code>
        $user = User::where('email', $email)->first();
        </code>
    </div>

    <div class="section">
        <h2>2️⃣ Protection contre le Cross-Site Scripting (XSS)</h2>
        <h3>✅ Échapper les variables dans Blade :</h3>
        <code>
        &#123;&#123; $user->name %#125;%#125;  <!-- Protège automatiquement contre le XSS -->
        </code>
        <p>Si vous devez afficher du HTML sécurisé :</p>
        <code>
        &#123;!! $user->bio !!%#125;
        </code>
        <h3>✅ Filtrer les entrées utilisateur :</h3>
        <code>
        $request->merge(['comment' => strip_tags($request->comment)]);
        </code>
    </div>

    <div class="section">
        <h2>3️⃣ Protection contre les attaques CSRF</h2>
        <p>Laravel utilise des <b>tokens CSRF</b> pour sécuriser les requêtes POST, PUT, PATCH et DELETE.</p>
        <h3>✅ Ajoutez &#64;csrf dans les formulaires :</h3>
        <code>
        &lt;form action="/post-comment" method="POST"&gt;
            &#64;csrf
            &lt;input type="text" name="comment"&gt;
            &lt;button type="submit"&gt;Envoyer&lt;/button&gt;
        &lt;/form&gt;
        </code>
    </div>

    <div class="section">
        <h2>4️⃣ Sécurisation des fichiers uploadés</h2>
        <h3>✅ Vérifier les extensions de fichiers :</h3>
        <code>
        $request->validate([
            'image' => 'required|mimes:jpeg,png,jpg,gif|max:2048'
        ]);
        </code>
        <h3>✅ Stocker les fichiers en dehors du dossier public :</h3>
        <code>
        return response()->file(storage_path('app/uploads/' . $filename));
        </code>
    </div>

    <div class="section">
        <h2>5️⃣ Sécurisation des mots de passe</h2>
        <h3>✅ Toujours hacher les mots de passe :</h3>
        <code>
        use Illuminate\Support\Facades\Hash;
        $user->password = Hash::make('monmotdepasse');
        </code>
        <h3>✅ Vérifier un mot de passe :</h3>
        <code>
        if (Hash::check($request->password, $user->password)) &#123;
            // Authentification réussie
        %#125;
        </code>
    </div>

    <div class="section">
        <h2>6️⃣ Gestion des permissions avec Policies et Gates</h2>
        <h3>✅ Définir une Policy :</h3>
        <code>
        php artisan make:policy PostPolicy --model=Post
        </code>
        <h3>✅ Implémentation de la Policy :</h3>
        <code>
        public function update(User $user, Post $post) &#123;
            return $user->id === $post->user_id;
        %#125;
        </code>
    </div>

    <div class="section">
        <h2>7️⃣ Désactiver le mode Debug en Production</h2>
        <p>Le mode debug ne doit <b>jamais</b> être activé en production.</p>
        <code>
        APP_DEBUG=false
        </code>
    </div>

    <h2>🎯 Conclusion</h2>
    <p>En appliquant ces bonnes pratiques, votre application Laravel sera sécurisée contre les attaques les plus courantes.</p>
    <p><b>Prochaine étape :</b> Protection des API avec Sanctum et Passport ?</p>

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
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            padding: 20px;
            background-color: #f4f4f4;
        }
        h2 {
            color: #333;
        }
        code {
            background-color: #eee;
            padding: 5px;
            display: block;
            border-left: 3px solid #007BFF;
            margin: 10px 0;
            white-space: pre-wrap;
        }
        .section {
            background: white;
            padding: 15px;
            margin-bottom: 20px;
            border-radius: 5px;
            box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
        }
 `
})
export class LaravelSecuriteComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}


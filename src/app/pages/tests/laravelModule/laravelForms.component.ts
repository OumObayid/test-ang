import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms-laravel',
  template: `
    <h1>📌 Partie 3: Formulaires et Validation en Laravel</h1>
    <p>
      Dans cette section, nous allons voir comment gérer les formulaires et la
      validation des données dans Laravel. L'objectif est de garantir que les
      entrées utilisateur sont sécurisées et respectent les règles définies
      avant d'être traitées dans l'application.
    </p>
    <h2>🟢 1. Où écrire les validations ?</h2>
    <p>
      Il existe trois méthodes principales pour valider un formulaire en Laravel
      :
    </p>
    <h3>🔹 1.1 Validation dans le contrôleur avec $request->validate()</h3>
    <p>
      C'est la méthode la plus rapide et simple. Elle est idéale pour des
      validations légères.
    </p>
    <pre class="tab">public function store(Request $request)
&#123;
    $validatedData = $request-&#62;validate([
        'nom' =&#62; 'required|string|max:255',
        'email' =&#62; 'required|email|unique:users,email',
        'age' =&#62; 'nullable|integer|min:18',
    ]);

    // Traitement après validation réussie...
&#125;</pre>

<h3>🔹 1.2 Validation avec une Form Request Class</h3>
<p>Si une validation est longue ou réutilisable, il est préférable d'utiliser une classe dédiée.</p>

<h4>🔸 1.2.1 Création de la classe</h4>
<p>Exécutez la commande suivante pour générer une classe de validation :</p>
<pre class="tab">php artisan make:request UserRequest</pre>
<h4>🔸 1.2.2 Définition des règles dans la classe</h4>
<p>Dans app/Http/Requests/UserRequest.php :</p>
<pre class="tab">namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
&#123;
    public function authorize()
    &#123;
        return true; // Mettre false pour restreindre l'accès
    &#125;

    public function rules()
    &#123;
        return [
            'nom' =&#62; 'required|string|max:255',
            'email' =&#62; 'required|email|unique:users,email',
            'age' =&#62; 'nullable|integer|min:18',
            'photo' =&#62; 'nullable|image|mimes:jpg,jpeg,png|max:2048',
        ];
    &#125;
&#125;</pre>
<h4>🔸 1.2.3 Utilisation dans le contrôleur</h4>
<pre class="tab">public function store(UserRequest $request)
&#123;
    // Les données sont validées automatiquement
    User::create($request-&#62;validated());

    return redirect()-&#62;back()-&#62;with('success', 'Utilisateur créé avec succès');
&#125;
</pre>
<h2>🟢 2. Validation de chaque type de données</h2>
<p>Nous allons voir comment valider différents types de champs dans un formulaire Laravel.</p>
<h3>🔹 2.1 Validation des chaînes de caractères (string, texte, nom, etc.)</h3>
<pre class="tab">'nom' => 'required|string|max:255',
'description' => 'nullable|string|min:10',
</pre>
<p>Explication :</p>
<ul>
    <li>required → Le champ est obligatoire.</li>
    <li>string → Doit être une chaîne de caractères.</li>
    <li>max:255 → Limite à 255 caractères.</li>
    <li>min:10 → Minimum 10 caractères.</li>
    <li>nullable → Peut être null  </li>
</ul>
<h3>🔹 2.2 Validation des nombres (integer, decimal, etc.)</h3>
<pre class="tab">'age' => 'required|integer|min:18|max:99',
'prix' => 'required|numeric|min:0.01',</pre>
<p>Explication :</p>
<ul>
    <li>integer → Doit être un nombre entier.</li>
    <li>numeric → Doit être un nombre (entier ou décimal).</li>
    <li>min:18 → Minimum 18.</li>
    <li>max:99 → Maximum 99.</li>
    <li>min:0.01 → Minimum 0.01.</li>
</ul>
<h3>🔹 2.3 2.3 Validation des emails et mots de passe</h3>
<pre class="tab">'email' => 'required|email|unique:users,email',
'password' => 'required|string|min:8|confirmed',</pre>
<p>Explication :</p>
<ul>
    <li>email → Doit être une adresse email valide.</li>
    <li>unique:users,email → Vérifie que l'email n'existe pas déjà dans la table users</li>
    <li>required → obligatoire </li>
    <li>string → Doit être une chaîne de caractères.</li>
    <li>min:8 → Minimum 8 caractères.</li>
    <li>confirmed → Doit être confirmé par un champ de confirmation.</li>
</ul>
<h3>🔹 2.4 Validation des fichiers (images, documents, etc.)</h3>
<pre class="tab">'photo' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
'pdf' => 'required|file|mimes:pdf|max:4096',</pre>
<p>Explication :</p>
<ul>
    <li>nullable → Peut être null.</li>
    <li>image → Doit être une image.</li>
    <li>file → Doit être un fichier.</li>
    <li>mimes:jpg,jpeg,png → Extensions autorisées.</li>
    <li>max:2048 → Taille maximale en kilo-octets.</li>
</ul>
<h3>🔹 2.5 Validation des dates et heures</h3>
<pre class="tab">'date' => 'required|date|after:today',
'heure' => 'required|date_format:H:i',</pre>
<p>Explication :</p>
<ul>
    <li>date → Doit être une date valide.</li>
    <li>after:today → Doit être après la date actuelle.</li>
    <li>date_format:H:i → Doit être au format heure:minute.</li>
</ul>
<h3>🔹 2.5 Validation des sélections (dropdown, radio, checkbox)</h3>
<pre class="tab">'genre' => 'required|in:homme,femme',
'terms' => 'accepted',
'langues' => 'required|array|min:1',
'roles' => 'required|array|size:2',</pre>
<p>Explication :</p>
<ul>
    <li>in:homme,femme → Seules ces valeurs sont acceptées</li>
    <li>accepted → Doit être accepté (checkbox).</li>
    <li>array → Doit être un tableau.</li>
    <li>min:1 → Minimum 1 élément.</li>
    <li>size:2 → Doit contenir exactement 2 éléments.</li>
</ul>
<h2>🟢 3. Messages d'erreur personnalisés</h2>
<h3>🔹 3.1 Messages d'erreur personnalisés dans $request->validate()</h3>
<p>Il est possible de personnaliser les messages d'erreur directement dans la méthode validate :</p>
<pre class="tab">
$request->validate([
    'nom' => 'required|string|max:255',
    'email' => 'required|email|unique:users,email',
], [
    'nom.required' => 'Le nom est obligatoire.',
    'email.required' => 'L\'adresse e-mail est obligatoire.',
    'email.unique' => 'Cet e-mail est déjà pris.',
]);</pre>
<h3>🔹 3.2 3.2 Messages d'erreur personnalisés dans Form Request Class</h3>
<p>Il est également possible de définir des messages personnalisés dans la classe de validation :</p>
<pre class="tab">public function messages()
&#123;
    return [
        'nom.required' =&#62; 'Le nom ne peut pas être vide.',
        'email.unique' =&#62; 'Cet e-mail est déjà enregistré.',
    ];
&#125;</pre>
<h2>🟢 4. Affichage des erreurs dans la vue Blade</h2>
<p>Pour afficher les erreurs de validation dans une vue Blade, utilisez la méthode $errors :</p>
<p>Dans la vue Blade :</p>
<pre class="tab">&#64;if ($errors-&#62;any())
    &#60;div class="alert alert-danger"&#62;
        &#60;ul&#62;
            &#64;foreach ($errors-&#62;all() as $error)
                &#60;li&#62;&#123; &#123; $error &#125; &#125;&#60;/li&#62;
            &#64;endforeach
        &#60;/ul&#62;
    &#60;/div&#62;
&#64;endif</pre>
<p>Pour un champ spécifique :</p>
<pre class="tab">&#60;input type="text" name="nom" class="form-control &#64;error('nom') is-invalid &#64;enderror"&#62;
&#64;error('nom')
    &#60;div class="invalid-feedback"&#62;&#123; &#123; $message &#125; &#125;&#60;/div&#62;
&#64;enderror
</pre>
<h2>🟢 5. Gestion avancée des erreurs (API & AJAX)</h2>
<p>Dans le cas d’une API REST, Laravel retourne automatiquement un JSON avec les erreurs :</p>
<pre class="tab">&#123;
    "message": "The given data was invalid.",
    "errors": &#123;
        "email": ["L'adresse e-mail est déjà utilisée."]
    &#125;
&#125;
</pre>
<h3>🔹 5.1 Gestion des erreurs dans un contrôleur API</h3>
<p>Dans le contrôleur :</p>
<pre class="tab">public function store(Request $request)
&#123;
    $validator = Validator::make($request-&#62;all(), [
        'email' =&#62; 'required|email|unique:users,email',
    ]);

    if ($validator-&#62;fails()) &#123;
        return response()-&#62;json([
            'message' =&#62; 'Données invalides',
            'errors' =&#62; $validator-&#62;errors()
        ], 422);
    &#125;

    // Traitement si la validation est réussie
&#125;</pre>
<h3>🔹 5.2 Affichage des erreurs côté frontend (AJAX / Vue.js / React)</h3>
<p>Dans le code JavaScript :</p>
<pre class="tab">axios.post('/api/register', formData)
    .catch(error =&#62; &#123;
        console.log(error.response.data.errors);
    &#125;);</pre>
<h2>🟢 6. Notifications et Flash Messages</h2>
<p>Pour informer l’utilisateur après une action (succès, échec), on utilise les messages de session.
</p>
<h3>🔹 6.1 Définir un message dans le contrôleur</h3>
<p>Dans le contrôleur :</p>
<pre class="tab">return redirect()-&#62;route('users.index')-&#62;with('success', 'Utilisateur ajouté avec succès');</pre>
<h3>🔹 6.2 Afficher le message dans la vue</h3>
<p>Dans la vue Blade :</p>
<pre class="tab">&#64;if (session('success'))
    &#60;div class="alert alert-success"&#62;&#123; &#123; session('success') &#125; &#125;&#60;/div&#62;
&#64;endif
&#64;if (session('error'))
    &#60;div class="alert alert-danger"&#62;&#123; &#123; session('error') &#125; &#125;&#60;/div&#62;
&#64;endif</pre>
<h3>🔹 6.2 Améliorer avec Bootstrap pour la fermeture automatique</h3>
<p>Dans la vue Blade :</p>
<pre class="tab">&#64;if (session('success'))
    &#60;div class="alert alert-success alert-dismissible fade show" role="alert"&#62;
        &#123; &#123; session('success') &#125; &#125;
        &#60;button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"&#62;&#60;/button&#62;
    &#60;/div&#62;
&#64;endif</pre>












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
export class LaravelFormsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

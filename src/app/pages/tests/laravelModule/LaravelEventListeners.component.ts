import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  template: `
<h1>🎯 Gestion des Événements et Listeners dans Laravel
</h1>
<p>Laravel propose un système d’événements et de listeners permettant d’exécuter des actions spécifiques lorsqu’un événement survient. Cela permet de découpler le code et d'améliorer la maintenabilité de l’application.</p>
<h2>📌 1. Pourquoi utiliser les événements et listeners ?
</h2>
<p>Les événements sont utiles pour :</p>
<ul>
  <li>Déclencher des actions de manière asynchrone (exemple : envoyer un email après l’inscription d’un utilisateur).
</li>
  <li>Réduire le couplage entre les différentes parties de l’application.
</li>
  <li>Éviter de surcharger les contrôleurs avec trop de logique métier.
</li>
</ul>
<h2>📌 2. Création d’un événement et d’un listener</h2>
<p>Laravel offre une commande artisan pour générer un événement et son listener.</p>

<h3>Étape 1 : Générer un événement</h3>
<p>Un événement est une classe qui contient des données spécifiques liées à une action.</p>
<pre class="tab">php artisan make:event UserRegistered
</pre>
<p>Cela crée un fichier UserRegistered.php dans app/Events/.
</p>
<h3>Étape 2 : Modifier l’événement
</h3>
<p>Dans app/Events/UserRegistered.php, on peut ajouter des propriétés pour stocker des informations :
</p>
<pre class="tab">namespace App\Events;

use App\Models\User;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class UserRegistered
&#123;
    use Dispatchable, SerializesModels;

    public $user;

    public function __construct(User $user)
    &#123;
        $this-&#62;user = $user;
    &#125;
&#125;</pre>
<h3>Étape 3 : Générer un listener</h3>
<p>Un listener est une classe qui écoute un événement et exécute une action en réponse.</p>
<pre class="tab">php artisan make:listener SendWelcomeEmail --event=UserRegistered
</pre>
<p>Cela crée un fichier SendWelcomeEmail.php dans app/Listeners/.
</p>
<h3>Étape 4 : Modifier le listener
</h3>
<p>Dans app/Listeners/SendWelcomeEmail.php, on définit l’action à exécuter lorsque l’événement est déclenché :</p>
<pre class="tab">namespace App\Listeners;

use App\Events\UserRegistered;
use App\Mail\WelcomeMail;
use Illuminate\Support\Facades\Mail;

class SendWelcomeEmail
&#123;
    public function handle(UserRegistered $event)
    &#123;
        Mail::to($event-&#62;user-&#62;email)-&#62;send(new WelcomeMail($event-&#62;user));
    &#125;
&#125;</pre>
<h2>📌 3. Déclencher un événement
</h2>
<p>Un événement peut être déclenché n'importe où dans l’application.
</p>
<p>Dans le AuthController.php :</p>
<pre class="tab">use App\Events\UserRegistered;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;

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

    event(new UserRegistered($user)); // Déclenche l'événement

    return response()-&#62;json(['message' =&#62; 'Utilisateur enregistré avec succès'], 201);
&#125;</pre>
<h2>📌 4. Enregistrement des événements et listeners
</h2>
<p>Laravel détecte automatiquement les listeners, mais on peut aussi les déclarer dans EventServiceProvider.php :</p>
<pre class="tab">protected $listen = [
    UserRegistered::class => [
        SendWelcomeEmail::class,
    ],
];
</pre>
<p>Après avoir défini les événements et les listeners, exécutez la commande suivante pour enregistrer les modifications :</p>
<pre class="tab">php artisan event:cache
</pre>
<h2>📌 5. Tester les événements
</h2>
<p>Pour tester, vous pouvez déclencher manuellement l’événement depuis Tinker :</p>
<pre class="tab">php artisan tinker
event(new App\Events\UserRegistered(App\Models\User::first()));
</pre>
<p>Cela simulera l’inscription d’un utilisateur et déclenchera l’envoi d’un email de bienvenue.
</p>
<h2>🔥 Conclusion</h2>
<ul>
  <li>Les événements et listeners permettent un code plus organisé et modulaire.
</li>
  <li>On peut les utiliser pour gérer les emails, la journalisation, ou d’autres actions après un événement spécifique.
</li>
  <li>Ils améliorent la scalabilité et facilitent la maintenance de l’application.
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
export class LaravelEventListenersComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}



import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobs',
  template: `
    <h1>🎯 Les Jobs et Queues dans Laravel</h1>
    <p>
      Laravel propose un système de Jobs et Queues permettant d'exécuter des
      tâches en arrière-plan pour améliorer les performances et éviter de
      bloquer l’application.
    </p>
    <h2>📌 1. Pourquoi utiliser les Jobs et Queues ?</h2>
    <ul>
      <li>
        ✅ Amélioration des performances : certaines tâches longues (ex : envoi
        d’emails) sont exécutées en arrière-plan.
      </li>
      <li>
        ✅ Réduction du temps de réponse : l’application reste fluide car elle
        ne bloque pas l’utilisateur.
      </li>
      <li>
        ✅ Gestion des échecs : Laravel permet de relancer un job en cas
        d’échec.
      </li>
    </ul>
    <h2>📌 2. Configuration des Queues</h2>
    <h3>🔹 Étape 1 : Configurer le driver de queue</h3>
    <p>
      Dans .env, changez le driver de queue (par défaut sync qui exécute
      immédiatement les jobs) :
    </p>
    <pre class="tab">
QUEUE_CONNECTION=database
</pre>
    <h3>🔹 Étape 2 : Créer la table des jobs</h3>
    <p>Si vous utilisez la base de données, exécutez :</p>
    <pre class="tab">
php artisan queue:table
php artisan migrate</pre
    >
    <p>Cela crée une table jobs pour stocker les tâches en attente.</p>
    <h2>📌 3. Création d’un Job</h2>
    <h3>🔹 Étape 1 : Générer un Job</h3>
    <p>
      Un Job est une classe qui contient la logique d’une tâche à exécuter en
      arrière-plan.
    </p>
    <pre class="tab">php artisan make:job SendWelcomeEmail</pre>
    <p>Cela crée un fichier SendWelcomeEmail.php dans app/Jobs/.</p>
    <h3>🔹 Étape 2 : Modifier le Job</h3>
    <p>
      Dans app/Jobs/SendWelcomeEmail.php, ajoutez la logique d’envoi d’email :
    </p>
    <pre class="tab">
namespace AppJobs;

use AppMailWelcomeMail;
use IlluminateBusQueueable;
use IlluminateContractsQueueShouldBeUnique;
use IlluminateContractsQueueShouldQueue;
use IlluminateFoundationBusDispatchable;
use IlluminateQueueInteractsWithQueue;
use IlluminateQueueSerializesModels;
use IlluminateSupportFacadesMail;

class SendWelcomeEmail implements ShouldQueue
&#123;
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public $user;

    public function __construct($user)
    &#123;
        $this-&#62;user = $user;
    &#125;

    public function handle()
    &#123;
        Mail::to($this-&#62;user-&#62;email)-&#62;send(new WelcomeMail($this-&#62;user));
    &#125;
&#125;</pre
    >
    <p>
      ℹ️ Remarque : L’implémentation de ShouldQueue indique que le job doit être
      mis en file d’attente.
    </p>
    <h2>📌 4. Exécution du Job</h2>
    <p>
      Dans le contrôleur (AuthController.php), au lieu d’envoyer l’email
      directement, on envoie le job en file d’attente :
    </p>
    <pre class="tab">
use AppJobsSendWelcomeEmail;
use AppModelsUser;
use IlluminateSupportFacadesHash;
use IlluminateHttpRequest;

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

    SendWelcomeEmail::dispatch($user); // Envoi du job en file d’attente

    return response()-&#62;json(['message' =&#62; 'Utilisateur enregistré avec succès'], 201);
&#125;</pre
    >
    <h2>📌 5. Exécution des Jobs en file d’attente</h2>
    <p>Démarrez le worker pour traiter les jobs en attente :</p>
    <pre class="tab">php artisan queue:work</pre>
    <p>
      🔥 Laravel va exécuter les jobs stockés dans la base de données ou Redis.
    </p>
    <h2>📌 6. Gestion des échecs et relance des Jobs</h2>
    <h3>🔹 Activer la gestion des échecs</h3>
    <p>Ajoutez cette ligne dans .env :</p>
    <pre class="tab">
QUEUE_FAILED_DRIVER=database
</pre>
    <p>Puis exécutez :</p>
    <pre class="tab">
php artisan queue:failed-table
php artisan migrate</pre
    >
    <h3>🔹 Relancer un job échoué</h3>
    <p>Si un job échoue, vous pouvez le relancer avec :</p>
    <pre class="tab">
php artisan queue:retry all
</pre>
    <p>Ou pour un job spécifique :</p>
    <pre class="ta">
php artisan queue:retry &#123;id_du_job&#125;
</pre>
    <h2>🔥 Conclusion</h2>
    <ul>
      <li>
        ✅ Les Jobs et Queues permettent d’exécuter des tâches en arrière-plan
        sans ralentir l’utilisateur.
      </li>
      <li>
        ✅ Laravel propose un système robuste pour gérer les échecs et relancer
        les jobs automatiquement.
      </li>
      <li>
        ✅ On peut utiliser différents drivers de queue : database, Redis,
        Beanstalkd…
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
export class LaravelJobsQueuesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

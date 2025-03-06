import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-observers',
  template: `
    <h1>🎯 Cours détaillé : Utilisation des Observers dans Laravel</h1>
    <h2>📌 Objectif de cette leçon</h2>
    <ul>
      <li>Comprendre le rôle des Observers dans Laravel</li>
      <li>
        Implémenter un Observer avec une seule méthode pour écouter un événement
        spécifique
      </li>
    </ul>
    <h2>1️⃣ Qu'est-ce qu'un Observer dans Laravel ?</h2>
    <p>
      Un Observer est une classe qui permet d'exécuter du code automatiquement
      lorsqu'un certain événement se produit sur un modèle Eloquent.
    </p>
    <p>🔹 Pourquoi utiliser un Observer ?</p>
    <ul>
      <li>✅ Centraliser la logique des événements d'un modèle</li>
      <li>✅ Éviter la duplication de code dans les contrôleurs</li>
      <li>✅ Rendre l’application plus propre et maintenable</li>
    </ul>
    <h2>2️⃣ Création d’un Observer pour un seul événement</h2>
    <p>
      Prenons un exemple où nous voulons exécuter une action uniquement après la
      création d’un utilisateur.
    </p>
    <h3>🔹 Étape 1 : Générer l’Observer</h3>
    <p>Exécute la commande suivante pour créer un Observer :</p>
    <pre class="tab">
php artisan make:observer UserObserver --model=User
</pre>
    <p>Cela crée un fichier UserObserver.php dans app/Observers.</p>
    <h3>🔹 Étape 2 : Implémenter une seule méthode dans l’Observer</h3>
    <p>
      Ouvre app/Observers/UserObserver.php et modifie-le pour écouter uniquement
      l'événement created :
    </p>
    <pre class="tab">
&#60;?php

namespace AppObservers;

use AppModelsUser;
use IlluminateSupportFacadesLog;

class UserObserver
&#123;
    /**
     * Exécuté après la création d'un utilisateur.
     */
    public function created(User $user)
    &#123;
        Log::info("Nouvel utilisateur créé : " . $user-&#62;email);
    &#125;
&#125;</pre
    >
    <p>
      📌 Ici, l’événement created est utilisé pour enregistrer dans les logs
      chaque nouvel utilisateur créé.
    </p>
    <h3>🔹 Étape 3 : Enregistrer l’Observer</h3>
    <p>
      Dans AppServiceProvider.php, ajoute cet enregistrement dans la méthode
      boot() :
    </p>
    <pre class="tab">
use AppModelsUser;
use AppObserversUserObserver;

public function boot()
&#123;
    User::observe(UserObserver::class);
&#125;</pre
    >
    <h2>3️⃣ Test et vérification</h2>
    <p>
      Ajoute un utilisateur en base de données via Tinker ou une requête API :
    </p>
    <pre class="tab">
php artisan tinker
</pre>
    <p>Puis exécute :</p>
    <pre class="tab">
User::create([
    'firstname' => 'John',
    'lastname' => 'Doe',
    'email' => 'john.doe&#64;example.com',
    'password' => bcrypt('password')
]);
</pre>
    <p>
      ✅ Vérifie ensuite dans le fichier de logs (storage/logs/laravel.log) si
      le message est bien enregistré.
    </p>
    <h2>📌 Conclusion</h2>
    <ul>
      <li>Un Observer permet d'automatiser des actions sur un modèle</li>
      <li>Il évite d’écrire du code répétitif dans les contrôleurs</li>
      <li>
        Un seul événement peut être écouté si nécessaire (created, updated, etc.)
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
export class LaravelObserversComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

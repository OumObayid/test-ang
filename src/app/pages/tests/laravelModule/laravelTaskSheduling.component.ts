import { take } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  template: `
    <h1>📆 Task Scheduling (Planification des Tâches) dans Laravel</h1>
    <p>
      Laravel fournit un système de planification des tâches qui permet
      d'exécuter des commandes automatiquement à des intervalles spécifiques,
      sans avoir à configurer un cron job pour chaque tâche.
    </p>
    <h2>🔹 1. Pourquoi utiliser le Task Scheduling ?</h2>
    <ul>
      <li>
        ✅ Automatiser les tâches (ex : suppression des fichiers temporaires,
        envoi d’emails, génération de rapports).
      </li>
      <li>
        ✅ Éviter la multiplication des cron jobs : un seul cron peut gérer
        plusieurs tâches planifiées.
      </li>
      <li>
        ✅ Facilité de gestion : tout est centralisé dans un fichier unique.
      </li>
    </ul>
    <h2>🔹 2. Configuration du Cron Job Principal</h2>
    <p>
      Avant d'utiliser le Task Scheduling, Laravel a besoin d’un seul cron job
      qui exécute périodiquement l’ordonnanceur.
    </p>
    <p>
      Ajoutez cette ligne dans le cron job de votre serveur (en utilisant
      crontab -e) :
    </p>
    <pre class="tab">
* * * * * php /chemin/vers/votre/projet/artisan schedule:run >> /dev/null 2>&1
    </pre
    >
    <p>
      * * * * * php /chemin/vers/votre/projet/artisan schedule:run >> /dev/null
      2>&1
    </p>
    <h2>🔹 3. Définition des Tâches Planifiées</h2>
    <p>
      Toutes les tâches sont définies dans le fichier app/Console/Kernel.php,
      dans la méthode schedule().
    </p>
    <p>Exemple d'une tâche qui s'exécute toutes les heures :</p>
    <pre class="tab">
protected function schedule(Schedule $schedule)
&#123;
    $schedule-&#62;command('emails:send')-&#62;hourly();
&#125;</pre
    >
    <h2>🔹 4. Différentes Fréquences de Planification</h2>
    <p>
      Laravel offre plusieurs options pour définir la fréquence des tâches :
    </p>
    <ul>
      <li>->everyMinute() Exécuter chaque minute</li>
      <li>->everyFiveMinutes() Toutes les 5 minutes</li>
      <li>->hourly() Chaque heure</li>
      <li>->daily() Une fois par jour (à minuit)</li>
      <li>->dailyAt('13:00') Tous les jours à 13h</li>
      <li>->weekly() Une fois par semaine</li>
      <li>->monthly() Une fois par mois</li>
      <li>->yearly() Une fois par an</li>
      <li>->mondays()->at('8:00') Tous les lundis à 8h</li>
      <li>->weekdays()->at('9:00') Du lundi au vendredi à 9h</li>
      <li>->sundays()->at('20:00') Tous les dimanches à 20h</li>
    </ul>
    <h2>🔹 5. Exemples Concrets de Tâches Planifiées</h2>
    <h3>1️⃣ Supprimer les anciens logs tous les jours à minuit</h3>
    <pre class="tab">
$schedule->command('logs:clear')->daily();
    </pre
    >
    <h3>2️⃣ Nettoyer la base de données chaque semaine</h3>
    <pre class="tab">
$schedule-&#62;call(function () &#123;
    DB::table('sessions')-&#62;where('created_at', '&#60;', now()-&#62;subDays(7))-&#62;delete();
&#125;)-&#62;weekly();</pre
    >
    <h3>3️⃣ Envoyer un email de rappel aux utilisateurs inactifs</h3>
    <pre class="tab">
$schedule->job(new SendReminderEmail)->dailyAt('10:00');
</pre>
    <h3>4️⃣ Générer un rapport PDF chaque mois</h3>
    <pre class="tab">
$schedule->command('reports:generate')->monthlyOn(1, '6:00');</pre
    >
    <h2>🔹 6. Surveillance et Gestion des Tâches</h2>
    <p>
      Laravel permet de gérer l'état des tâches et de surveiller les erreurs.
    </p>
    <h3>1️⃣ Empêcher les doublons (avoid overlapping)</h3>
    <p>
      Si un job prend trop de temps, Laravel peut éviter de l’exécuter plusieurs
      fois en même temps :
    </p>
    <pre class="tab">
$schedule->command('emails:send')->hourly()->withoutOverlapping();</pre
    >
    <h3>2️⃣ Garder un log des exécutions</h3>
    <pre class="tab">
$schedule->command('reports:generate')->daily()->appendOutputTo(storage_path('logs/report.log'));</pre
    >
    <h2>🔹 7. Tester et Lancer les Tâches Manuellement</h2>
    <p>✅ Vérifier les tâches planifiées</p>
    <pre class="tab">
php artisan schedule:list
</pre>
    <p>✅ Exécuter les tâches immédiatement</p>
    <pre class="tab">php artisan schedule:run</pre>

    <h2>🔹 Conclusion</h2>
    <ul>
      <li>
        🔥 Laravel permet d'automatiser des tâches sans multiplier les cron
        jobs.
      </li>
      <li>🔥 Il offre une syntaxe simple pour définir les fréquences.</li>
      <li>
        🔥 On peut surveiller, empêcher les doublons et gérer les logs des
        tâches planifiées.
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
export class LaravelTaskShedulingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

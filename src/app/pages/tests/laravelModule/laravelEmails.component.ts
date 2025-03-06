import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email-laravel',
  template: `
    <h1>📩 Envoi d'Emails et Notifications dans Laravel</h1>
    <p>
      Laravel fournit un système puissant et flexible pour envoyer des emails et
      des notifications via différentes plateformes (email, SMS, Slack, etc.).
    </p>
    <h2>🔹 1. Configuration de l'envoi d'Emails</h2>
    <p>
      Laravel utilise Mailtrap (par défaut) pour tester l'envoi d'emails en
      local.
    </p>
    <h3>🔸 Modifier le fichier .env :</h3>
    <p>Ajoutez vos paramètres SMTP :</p>
    <pre class="tab">
MAIL_MAILER=smtp
MAIL_HOST=smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USERNAME=your_mailtrap_username
MAIL_PASSWORD=your_mailtrap_password
MAIL_ENCRYPTION=null
MAIL_FROM_ADDRESS=no-reply&#64;votreapp.com
MAIL_FROM_NAME="Votre Application"
</pre>
    <p>
      📌 Note : En production, utilisez un service comme Mailgun, SendGrid, SES
      ou autre.
    </p>
    <h2>🔹 2. Création et Envoi d'Emails</h2>
    <h3>1️⃣ Générer un Mailable</h3>
    <pre class="tab">
php artisan make:mail UserWelcomeMail
</pre>
    <h3>2️⃣ Modifier le fichier UserWelcomeMail.php</h3>
    <p>Dans app/Mail/UserWelcomeMail.php :</p>
    <pre class="tab">
namespace AppMail;

use IlluminateBusQueueable;
use IlluminateMailMailable;
use IlluminateQueueSerializesModels;

class UserWelcomeMail extends Mailable
&#123;
    use Queueable, SerializesModels;

    public $user;

    public function __construct($user)
    &#123;
        $this-&#62;user = $user;
    &#125;

    public function build()
    &#123;
        return $this-&#62;from('no-reply&#64;votreapp.com')
                    -&#62;subject('Bienvenue sur notre plateforme !')
                    -&#62;view('emails.welcome');
    &#125;
&#125;</pre
    >
    <h2>🔹 3. Création de la Vue d'Email</h2>
    <p>Dans resources/views/emails/welcome.blade.php :</p>
    <pre class="tab">
&#60;!DOCTYPE html&#62;
&#60;html&#62;
&#60;head&#62;
    &#60;title&#62;Bienvenue&#60;/title&#62;
&#60;/head&#62;
&#60;body&#62;
    &#60;h1&#62;Bonjour, &#123; &#123; $user-&#62;firstname &#125; &#125; !&#60;/h1&#62;
    &#60;p&#62;Merci de vous être inscrit sur notre plateforme.&#60;/p&#62;
&#60;/body&#62;
&#60;/html&#62;</pre
    >
    <h2>🔹 4. Envoi d'un Email</h2>
    <p>Ajoutez cette ligne dans un contrôleur :</p>
    <pre class="tab">
use AppMailUserWelcomeMail;
use IlluminateSupportFacadesMail;

public function sendWelcomeEmail()
&#123;
    $user = Auth::user();
    Mail::to($user-&#62;email)-&#62;send(new UserWelcomeMail($user));

    return response()-&#62;json(['message' =&#62; 'Email envoyé avec succès !']);
&#125;</pre
    >
    <h2>🔹 5. Utilisation des Queues pour les Emails</h2>
    <p>
      ⚡ Pour améliorer la performance, il est préférable d’envoyer les emails
      en tâche de fond.
    </p>
    <h3>1️⃣ Configurer la queue dans .env</h3>
    <pre class="tab">
QUEUE_CONNECTION=database
</pre>
    <h3>2️⃣ Créer une migration pour les jobs de queue</h3>
    <pre class="tab">
php artisan queue:table
php artisan migrate
</pre>
    <h3>3️⃣ Envoyer un email en arrière-plan</h3>
    <pre>
Mail::to($user->email)->queue(new UserWelcomeMail($user));
</pre>
    <h3>4️⃣ Lancer le worker</h3>
    <pre class="tab">
php artisan queue:work
</pre>
    <h2>🔹 6. Envoi de Notifications dans Laravel</h2>
    <p>
      Laravel propose aussi un système de notifications (différent des emails).
    </p>
    <p>📌 Les notifications peuvent être envoyées par :</p>
    <ul>
      <li>Email</li>
      <li>Base de données</li>
      <li>SMS (via Nexmo)</li>
      <li>Slack</li>
    </ul>
    <h3>1️⃣ Générer une Notification</h3>
    <pre class="tab">php artisan make:notification UserRegistered
    </pre>
    <h3>2️⃣ Modifier UserRegistered.php
    </h3>
    <p>Dans app/Notifications/UserRegistered.php :</p>
    <pre class="tab">namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class UserRegistered extends Notification
&#123;
    use Queueable;

    public function via($notifiable)
    &#123;
        return ['mail'];
    &#125;

    public function toMail($notifiable)
    &#123;
        return (new MailMessage)
                    -&#62;subject('Inscription réussie !')
                    -&#62;greeting('Bonjour ' . $notifiable-&#62;firstname)
                    -&#62;line('Merci de vous être inscrit.')
                    -&#62;action('Visitez notre site', url('/'))
                    -&#62;line('Merci de nous faire confiance !');
    &#125;
&#125;</pre>
<h3>3️⃣ Envoyer une Notification à un Utilisateur
</h3>
<p>Dans un contrôleur :</p>
<pre class="tab">use App\Notifications\UserRegistered;

public function notifyUser()
&#123;
    $user = Auth::user();
    $user-&#62;notify(new UserRegistered());

    return response()-&#62;json(['message' =&#62; 'Notification envoyée !']);
&#125;
</pre>
<h2>🔹 7. Stocker les Notifications en Base de Données
</h2>
<h3>1️⃣ Créer la table de notifications</h3>
<pre class="tab">php artisan notifications:table
php artisan migrate
</pre>
<h3>2️⃣ Activer la sauvegarde en base de données
</h3>
<p>Dans UserRegistered.php :</p>
<pre class="tab">public function via($notifiable)
&#123;
    return ['mail', 'database'];
&#125;

public function toDatabase($notifiable)
&#123;
    return [
        'message' =&#62; 'Bienvenue ' . $notifiable-&#62;firstname . ' sur notre plateforme !'
    ];
&#125;
</pre>
<h3>3️⃣ Récupérer les notifications d'un utilisateur
</h3>
<pre class="tab">$user = Auth::user();
$notifications = $user->notifications;
</pre>
<h2>✅ Conclusion</h2>
<ul>
  <li>🔥 Laravel simplifie l’envoi d'emails et de notifications.
</li>
  <li>🔥 Utiliser Mailables pour les emails et Notifications pour les autres canaux.
</li>
  <li>🔥 Stocker les notifications pour les afficher dans une interface utilisateur.
</li>
  <li>🔥 Optimiser avec les queues pour de meilleures performances.
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
export class LaravelEmailsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

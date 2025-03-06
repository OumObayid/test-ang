import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-node-lireEcrire',
  template: `
<div class="container mt-5">
    <h1 class="text-center">
        📂 Lire et écrire des fichiers avec Node.js
    </h1>

    <!-- Section 1 : Le module fs -->
    <div class="card my-3">
        <div class="card-body">
            <h2 class="card-title">
                🛠️ Le module fs
            </h2>
            <p class="card-text">
                Node.js fournit un module natif appelé <code>fs</code> (File System) qui permet de manipuler les fichiers,
                notamment pour les lire, les écrire, et les modifier.
            </p>
            <p class="card-text">
                Pour utiliser ce module, vous devez d'abord l'importer dans votre fichier JavaScript :
            </p>
            <div class="bg-light p-3 mb-3" style="font-size: 1.2em; border-radius: 5px;">
                <pre><code>const fs = require('fs');</code></pre>
            </div>
        </div>
    </div>

    <!-- Section 2 : Lire un fichier -->
    <div class="card my-3">
        <div class="card-body">
            <h2 class="card-title">
                📖 Lire un fichier
            </h2>
            <p class="card-text">
                Pour lire un fichier en Node.js, vous pouvez utiliser la méthode <code>fs.readFile</code>.
                Voici un exemple pour lire un fichier texte :
            </p>
            <div class="bg-light p-3 mb-3" style="font-size: 1.2em; border-radius: 5px;">
                <pre><code>
fs.readFile('exemple.txt', 'utf8', (err, data) => &#123;
    if (err) &#123;
        console.error('Erreur de lecture du fichier:', err);
        return;
    &#125;
    console.log('Contenu du fichier:', data);
&#125;);
                </code></pre>
            </div>
            <p class="card-text">
                Dans cet exemple, le fichier <code>exemple.txt</code> est lu en mode texte.
                La méthode <code>readFile</code> prend trois paramètres :
                - Le chemin du fichier à lire,
                - Le format d'encodage (ici, <code>utf8</code>),
                - Une fonction callback qui reçoit l'erreur éventuelle et les données du fichier.
            </p>
        </div>
    </div>

    <!-- Section 3 : Écrire dans un fichier -->
    <div class="card my-3">
        <div class="card-body">
            <h2 class="card-title">
                ✍️ Écrire dans un fichier
            </h2>
            <p class="card-text">
                Pour écrire dans un fichier, vous pouvez utiliser la méthode <code>fs.writeFile</code>.
                Voici un exemple pour écrire dans un fichier :
            </p>
            <div class="bg-light p-3 mb-3" style="font-size: 1.2em; border-radius: 5px;">
                <pre><code>
const contenu = 'Bonjour, Node.js !';

fs.writeFile('exemple.txt', contenu, 'utf8', (err) => &#123;
    if (err) &#123;
        console.error('Erreur d\'écriture dans le fichier:', err);
        return;
    &#125;
    console.log('Fichier écrit avec succès!');
&#125;);
                </code></pre>
            </div>
            <p class="card-text">
                Dans cet exemple, le texte "Bonjour, Node.js !" est écrit dans le fichier <code>exemple.txt</code>.
                La méthode <code>writeFile</code> prend trois paramètres :
                - Le chemin du fichier à écrire,
                - Le contenu à écrire dans le fichier,
                - Le format d'encodage,
                - Une fonction callback pour gérer l'erreur éventuelle.
            </p>
        </div>
    </div>

    <!-- Section 4 : Ajouter du contenu dans un fichier -->
    <div class="card my-3">
        <div class="card-body">
            <h2 class="card-title">
                ➕ Ajouter du contenu dans un fichier
            </h2>
            <p class="card-text">
                Si vous souhaitez ajouter du contenu à un fichier sans le remplacer, utilisez la méthode <code>fs.appendFile</code>.
                Voici un exemple :
            </p>
            <div class="bg-light p-3 mb-3" style="font-size: 1.2em; border-radius: 5px;">
                <pre><code>
const ajout = '\nVoici une nouvelle ligne de texte.';

fs.appendFile('exemple.txt', ajout, 'utf8', (err) => &#123;
    if (err) &#123;
        console.error('Erreur lors de l\'ajout au fichier:', err);
        return;
    &#125;
    console.log('Contenu ajouté avec succès!');
&#125;);
                </code></pre>
            </div>
            <p class="card-text">
                Dans cet exemple, une nouvelle ligne est ajoutée à la fin du fichier <code>exemple.txt</code>.
                La méthode <code>appendFile</code> fonctionne de manière similaire à <code>writeFile</code>, mais ajoute le contenu
                au lieu de remplacer le fichier existant.
            </p>
        </div>
    </div>
</div>

  `,
  styles: [``]
})
export class NodeLireEcrireFichierComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}


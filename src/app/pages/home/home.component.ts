import { Component } from '@angular/core'; // Importation du décorateur Component d'Angular, utilisé pour définir un composant Angular
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home', // Définition du sélecteur CSS, qui permet d'identifier ce composant dans le template HTML
  imports:[RouterLink],
  templateUrl: './home.component.html', // Lien vers le fichier HTML qui contient la structure du composant
  styleUrls: ['./home.component.scss'], // Lien vers le fichier CSS/SCSS qui contient le style pour ce composant. Utilisé ici pour la mise en forme de l'interface
})

export class HomeComponent {
  title = 'Page d\'accueil'; // Déclaration d'une propriété 'title' utilisée dans le template pour afficher le titre de la page
}

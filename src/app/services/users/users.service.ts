// Importation des modules nécessaires
import { Injectable } from '@angular/core'; // Décorateur pour déclarer un service Angular
import axios from 'axios'; // Bibliothèque tierce pour effectuer des requêtes HTTP
import { environment } from '../../../environments/environment';

// Le décorateur `@Injectable` rend ce service injectable dans toute l'application
@Injectable({
  providedIn: 'root', // Permet de rendre ce service disponible à tous les composants sans configuration supplémentaire
})
export class UsersService {
  // URL de base pour accéder à l'API, définie dans le fichier d'environnement
  private baseURL: string = environment.apiURL;

  // Constructeur du service
  constructor() {}

   async getUsers(): Promise<any> {
    try {
      // Appel à l'API pour récupérer les produits
      const response = await axios.get(
        `${this.baseURL}/users/getUsers.php`
      );
      // console.log('response service getUsers:', response);
      // console.log('response :', response);

      return response;

    } catch (error) {
      // Gestion des erreurs : affiche un message dans la console
      console.error('Erreur lors de la récupération des utilisateurs', error);

      // Propage l'erreur pour qu'elle puisse être gérée par l'appelant
      throw error;
    }


  }



  async deleteUser(data: any): Promise<any> {
    try {

      const response = await axios.post(
        `${this.baseURL}/users/deleteUser.php`,
        data
      );
      // console.log('response service delete User:', response);

      return response;

    } catch (error) {
      // Gestion des erreurs : affiche un message dans la console
      console.error('Erreur lors de la suppression de l\'utilisateur', error);

      // Propage l'erreur pour qu'elle puisse être gérée par l'appelant
      throw error;
    }


  }
}

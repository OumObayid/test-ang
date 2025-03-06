// Importation des modules nécessaires
import { Injectable } from '@angular/core'; // Décorateur pour déclarer un service Angular
import axios from 'axios'; // Bibliothèque tierce pour effectuer des requêtes HTTP
import { environment } from '../../../../environments/environment'; // Fichier de configuration pour les variables d'environnement

// Le décorateur `@Injectable` rend ce service injectable dans toute l'application
@Injectable({
  providedIn: 'root', // Permet de rendre ce service disponible à tous les composants sans configuration supplémentaire
})
export class CategoriesService {
  // URL de base pour accéder à l'API, définie dans le fichier d'environnement
  private baseURL: string = environment.apiURL;

  // Constructeur du service
  constructor() {}


  async getCategories(): Promise<any> {
    try {
      // Appel à l'API pour récupérer les produits
      const response = await axios.get(
        `${this.baseURL}/categories/getCategories.php`
      );
      // console.log('response service getCategories:', response);

      return response;

    } catch (error) {
      // Gestion des erreurs : affiche un message dans la console
      console.error('Erreur lors de la récupération des categories', error);

      // Propage l'erreur pour qu'elle puisse être gérée par l'appelant
      throw error;
    }


  }

  async addCategorie(data: any): Promise<any> {


    try {
      // Appel à l'API pour récupérer les produits
      const response = await axios.post(
        `${this.baseURL}/categories/addCategorie.php`,
        data
      );
      // console.log('response service getCategories:', response);

      return response;

    } catch (error) {
      // Gestion des erreurs : affiche un message dans la console
      console.error('Erreur lors de la récupération des categories', error);

      // Propage l'erreur pour qu'elle puisse être gérée par l'appelant
      throw error;
    }


  }

  async updateCategorie(data: any): Promise<any> {
    try {

      // Appel à l'API pour récupérer les produits
      const response = await axios.post(
        `${this.baseURL}/categories/updateCategorie.php`,
        data
      );
      // console.log('response service updateCategories:', response);

      return response;

    } catch (error) {
      // Gestion des erreurs : affiche un message dans la console
      console.error('Erreur lors de la récupération des categories', error);

      // Propage l'erreur pour qu'elle puisse être gérée par l'appelant
      throw error;
    }


  }

  async deleteCategorie(data: any): Promise<any> {
    try {

      // Appel à l'API pour récupérer les produits
      const response = await axios.post(
        `${this.baseURL}/categories/deleteCategorie.php`,
        data
      );
      console.log('response service getCategories:', response);

      return response;

    } catch (error) {
      // Gestion des erreurs : affiche un message dans la console
      console.error('Erreur lors de la récupération des categories', error);

      // Propage l'erreur pour qu'elle puisse être gérée par l'appelant
      throw error;
    }


  }
}

// Importation des modules nécessaires
import { Injectable } from '@angular/core'; // Décorateur pour déclarer un service Angular
import axios from 'axios'; // Bibliothèque tierce pour effectuer des requêtes HTTP
import { environment } from '../../../../environments/environment'; // Fichier de configuration pour les variables d'environnement

// Le décorateur `@Injectable` rend ce service injectable dans toute l'application
@Injectable({
  providedIn: 'root', // Permet de rendre ce service disponible à tous les composants sans configuration supplémentaire
})
export class ProductsService {
  // URL de base pour accéder à l'API, définie dans le fichier d'environnement
  private baseURL: string = environment.apiURL;

  // Constructeur du service
  constructor() {}


  async getProducts(): Promise<any> {
    try {
      // Appel à l'API pour récupérer les produits
      const response = await axios.get(
        `${this.baseURL}/products/getProducts.php`
      );

      return response;

    } catch (error) {
      // Gestion des erreurs : affiche un message dans la console
      console.error('Erreur lors de la récupération des produits', error);

      // Propage l'erreur pour qu'elle puisse être gérée par l'appelant
      throw error;
    }


  }
  async getProduct(): Promise<any> {
    try {
      // Appel à l'API pour récupérer les produits
      const response = await axios.get(
        `${this.baseURL}/products/getProduct.php`
      );
      // console.log('response service get product:', response);

      return response;

    } catch (error) {
      // Gestion des erreurs : affiche un message dans la console
      console.error('Erreur lors de la récupération des produits', error);

      // Propage l'erreur pour qu'elle puisse être gérée par l'appelant
      throw error;
    }


  }
  async addProduct(data: any): Promise<any> {
    try {
      // Appel à l'API pour récupérer les produits
      const response = await axios.post(
        `${this.baseURL}/products/addProduct.php`,
        data
      );

      return response;

    } catch (error) {
      // Gestion des erreurs : affiche un message dans la console
      console.error('Erreur lors de la récupération des produits', error);

      // Propage l'erreur pour qu'elle puisse être gérée par l'appelant
      throw error;
    }


  }
  async updateProduct(data: any): Promise<any> {
    try {
      // Appel à l'API pour récupérer les produits
      const response = await axios.post(
        `${this.baseURL}/products/updateProduct.php`,
        data
      );

      return response;

    } catch (error) {
      // Gestion des erreurs : affiche un message dans la console
      console.error('Erreur lors de la récupération des produits', error);

      // Propage l'erreur pour qu'elle puisse être gérée par l'appelant
      throw error;
    }


  }
  async deleteProduct(data: any): Promise<any> {
    try {
      // Appel à l'API pour récupérer les produits
      const response = await axios.post(
        `${this.baseURL}/products/deleteProduct.php`,
        data
      );

      return response;

    } catch (error) {
      // Gestion des erreurs : affiche un message dans la console
      console.error('Erreur lors de la récupération des produits', error);

      // Propage l'erreur pour qu'elle puisse être gérée par l'appelant
      throw error;
    }


  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Product {
  _id?: string; // L'identifiant est optionnel (généré automatiquement pour les nouveaux produits)
  nom: string; // Nom du produit
  description: string; // Description du produit
  prix: number; // Prix du produit
  categorie_nom: string; // Nom de la catégorie
}

@Injectable({
  providedIn: 'root', // Rend ce service disponible partout dans l'application
})
export class ProductNodeService {
  private apiUrl = 'http://localhost:5000/api/products'; // URL de base de l'API

  constructor(private http: HttpClient) {}

  /**
   * Récupère tous les produits
   * retourne Un tableau de produits sous forme d'Observable
   */
  getProducts(): Observable<Product[]> {
    //pour deboguer
    this.http.get<Product[]>(this.apiUrl).subscribe((data) => {
      console.log("Données reçues dans le service :", data);
    });
    //retourne les données
    return this.http.get<Product[]>(this.apiUrl);
  }


  /**
   * Ajoute un nouveau produit
   * le parametre product : Les détails du produit à ajouter
   * retourne Le produit ajouté sous forme d'Observable
   */
  addProduct(product: Product): Observable<Product> {
    // this.http.post<Product>(this.apiUrl, product).subscribe((data) => {
    //   console.log("Produit ajouté :", data);
    // });
    return this.http.post<Product>(this.apiUrl, product);
  }

  /**
   * Met à jour un produit existant
   * Le parametre id L'identifiant du produit à mettre à jour
   * Le parametre product Les nouvelles données du produit
   * retourne Le produit mis à jour sous forme d'Observable
   */
  updateProduct(id: string, product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}/${id}`, product);
  }

  /**
   * Supprime un produit
   * Le parametre id L'identifiant du produit à supprimer
   * retourne Un Observable indiquant la suppression
   */
  deleteProduct(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

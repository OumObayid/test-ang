import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  price: number;
  categoryName: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class JsonProductsService {
  // URL de l'API
  private baseURL = 'http://localhost:3000/products';

  // Injecter le service HttpClient
  constructor(private http: HttpClient) {}

  // Récupérer tous les produits
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseURL);
  }
  // Récupérer un produit par ID
  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.baseURL}/${id}`);
  }

  // Ajouter un produit
  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseURL, product);
  }

  // Modifier un produit
  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.baseURL}/${product.id}`, product);
  }

  // Supprimer un produit
  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseURL}/${id}`);
  }
}

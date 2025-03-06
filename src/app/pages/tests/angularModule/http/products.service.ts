import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'https://dummyjson.com/products'; // URL de l'API

  constructor(private http: HttpClient) {}

  // 🔹 1️⃣ Récupérer tous les produits (GET)
  getProducts(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  // 🔹 2️⃣ Récupérer un produit par ID (GET)
  getProductById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  // 🔹 3️⃣ Ajouter un produit (POST)
  addProduct(product: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, product, this.httpOptions()).pipe(
      catchError(this.handleError)
    );
  }

  // 🔹 4️⃣ Mettre à jour un produit (PUT)
  updateProduct(id: number, product: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, product, this.httpOptions()).pipe(
      catchError(this.handleError)
    );
  }

  // 🔹 5️⃣ Supprimer un produit (DELETE)
  deleteProduct(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  // 🛑 Gestion des erreurs
  private handleError(error: any) {
    console.error('Erreur détectée:', error);
    return throwError(() => new Error('Problème avec l\'API.'));
  }

  // 📌 Options HTTP (headers)
  private httpOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
  }
}

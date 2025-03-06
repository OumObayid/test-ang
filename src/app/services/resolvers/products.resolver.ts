import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductsResolver implements Resolve<any[]> {
  // Utilisation de JSONPlaceholder pour simuler une API de produits
  private apiUrl = 'https://fakestoreapi.com/products';  // URL de l'API simulée pour récupérer des "produits"

  constructor(private http: HttpClient) {}

  resolve(): Observable<any[]> {
    // Appel direct à l'API pour récupérer les produits
    return this.http.get<any[]>(this.apiUrl);
  }
}

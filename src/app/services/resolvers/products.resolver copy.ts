import { ProductsService } from '../http/apiphp/products/products.service';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsResolver implements Resolve<any[]> {
  constructor(private productService: ProductsService) {}

  resolve(): Observable<any[]> {
    // Appelle le service pour récupérer les produits
    return this.productService.getProducts()
    .pipe(
      map((response: any) => {
        // Vérifie si la réponse est valide et contient des produits
        if (response.success && response.dataProd) {
          return response.dataProd; // Retourne les produits extraits comme étant la valeur de l'observable
        } else {
          console.warn('No products found or API returned an error.');
          return []; // Retourne un tableau vide si la réponse n'est pas valide
        }
      })
    );
  }
}
// export const userResolver: ResolveFn<Product> = (
//   route,
//   state
// ): Observable<Product> => {
//   const productsService = inject(ProductsService);
//   return productsService.getProducts();
// };

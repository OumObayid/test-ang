import { CategoriesService } from './../../services/http/apiphp/categories/categories.service';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Categorie } from '../../interfaces/categorie';

@Injectable({
  providedIn: 'root',
})
export class CategoriesResolver implements Resolve<Categorie[]> {
  constructor(private categorieService: CategoriesService) {}

  resolve(): Observable<Categorie[]> {
    // Appelle le service pour récupérer les categories
    return this.categorieService.getCategories()
    .pipe(
      map((response: any) => {
        // Vérifie si la réponse est valide et contient des categories
        if (response.success && response.dataCat) {
          return response.dataCat; // Retourne les categories extraits comme étant la valeur de l'observable
        } else {
          console.warn('No categorys found or API returned an error.');
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

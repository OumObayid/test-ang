import {
  FirestoreService,
  Product,
} from '../../../../services/firebase/firestore.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-product-fire',
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container mt-4">
      <h1 class="text-center mb-4">Mettre à jour le produit</h1>
      <div class="card-body">
        <form (ngSubmit)="updateProduct()" class="row g-3">
          <div class="col-md-6">
            <label for="name" class="form-label">Nom</label>
            <input
              type="text"
              id="name"
              class="form-control"
              [(ngModel)]="product.nom"
              name="name"
              required
            />
          </div>
          <div class="col-md-6">
            <label for="price" class="form-label">Prix</label>
            <input
              type="number"
              id="price"
              class="form-control"
              [(ngModel)]="product.prix"
              name="price"
              required
            />
          </div>
          <div class="col-md-6">
            <label for="categoryName" class="form-label">Catégorie name</label>
            <input
              type="text"
              id="categoryName"
              class="form-control"
              [(ngModel)]="product.categorie_nom"
              name="categoryName"
              required
            />
          </div>
          <div class="col-md-12">
            <label for="description" class="form-label">Description</label>
            <textarea
              id="description"
              class="form-control"
              [(ngModel)]="product.description"
              name="description"
              rows="3"
              required
            ></textarea>
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-success">Mettre à jour</button>
          </div>
        </form>
      </div>
    </div>
  `,
  styles: [],
})
export class UpdateProductFireComponent implements OnInit {
  product: Product = {
    id: 0,
    nom: '',
    prix: 0,
    categorie_nom: '',
    description: '',
  };
  productId: string = '';
  constructor(
    private activatedRoute: ActivatedRoute,
    private firestoreService: FirestoreService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.paramMap.get('id') || '';
    this.firestoreService
      .getDocumentById('angproducts', this.productId)
      .subscribe((product) => {
        this.product = product;
      });
  }

  updateProduct(): void {
    this.firestoreService
      .updateDocument('angproducts', this.productId, this.product)
      .then(() => {
        alert('Produit mis à jour !');
        this.router.navigate(['/products-firebase']); // Redirection vers la liste des produits après mise à jour    })
      })
      .catch((error) => {
        console.error('Erreur lors de la suppression du produit :', error);
      });
  }
}

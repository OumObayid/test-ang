import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JsonProductsService } from '../../../../services/http/json/jsonproducts.service';
import { Product } from '../../../../services/http/json/jsonproducts.service';

@Component({
  selector: 'app-update-product',
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
              [(ngModel)]="product.name"
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
              [(ngModel)]="product.price"
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
              [(ngModel)]="product.categoryName"
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
export class JsonUpdateProductComponent implements OnInit {
  // Initialisation d'un produit vide
  product: Product = {
    id: 0,
    name: '',
    price: 0,
    categoryName: '',
    description: '',
  };

  // Injection des dépendances
  constructor(
    private activatedRoute: ActivatedRoute,
    private jsonProductsService: JsonProductsService,
    private router: Router
  ) {}

  // Récupérer le produit par ID lors de l'initialisation du composant
  ngOnInit(): void {
    const productId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.jsonProductsService.getProductById(productId).subscribe((product) => {
      this.product = product;
    });
  }

  // Mettre à jour le produit et rediriger vers la liste des produits après mise à jour
  updateProduct(): void {
    this.jsonProductsService.updateProduct(this.product).subscribe(() => {
      alert('Produit mis à jour !');
      this.router.navigate(['/products-json']); // Redirection vers la liste des produits après mise à jour
    });
  }
}

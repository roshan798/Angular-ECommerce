import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Product } from '../../models/product';
import { CommonModule } from '@angular/common';
import { MatCardModule } from "@angular/material/card"
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
@Component({
  selector: 'app-product-list',
  imports: [
    CommonModule, // to use if and for directive
    RouterModule, // to use routerLink directive
    MatCardModule, // material card
    MatButtonModule, // material button
    MatGridListModule, //material grid
    MatIconModule, // to usematerial icons
    MatInputModule,
    MatSelectModule

  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  filteredProduct: Product[] = [];
  sortOrder: String = "";

  constructor(private productService: ProductService) {

  }
  ngOnInit(): void {

    this.productService.getProducts()
      .subscribe(data => {
        this.products = data;
        this.filteredProduct = data;
      })
  }

  filterProducts(e: Event) {
    let searchTerm = (e.target as HTMLInputElement).value;
    searchTerm = searchTerm.toLowerCase();
    if (searchTerm === "") {
      this.filteredProduct = this.products;
    }
    else {
      this.filteredProduct = this.products.filter(product => {
        return product.name.toLowerCase().includes(searchTerm);
      })
      this.sortProducts(this.sortOrder);

      console.log(this.filteredProduct);
    }

  }

  sortProducts(sortValue: String) {
    this.sortOrder = sortValue;
    if (this.sortOrder === "priceLowHigh") {
      this.filteredProduct.sort((a, b) => a.price - b.price)
    }
    else if (this.sortOrder === "priceHighLow") {
      this.filteredProduct.sort((a, b) => b.price - a.price)
    }
  }
}

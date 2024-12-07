import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Product } from '../../models/product';
import { CommonModule } from '@angular/common';
import { MatCardModule } from "@angular/material/card"
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-product-list',
  imports: [
    CommonModule, // to use if and for directive
    RouterModule, // to use routerLink directive
    MatCardModule, // material card
    MatButtonModule, // material button
    MatGridListModule, //material grid
    MatIconModule // to usematerial icons
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  constructor(private productService: ProductService) {

  }
  ngOnInit(): void {
    this.productService.getProducts()
      .subscribe(data => {
        this.products = data;
      })
  }
}

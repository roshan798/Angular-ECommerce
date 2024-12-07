import { Routes } from '@angular/router';
import { ProductListComponent } from './component/product-list/product-list.component';
import { AddProductComponent } from './component/add-product/add-product.component';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "/products",
        pathMatch: "full"
        ,
    },
    {
        path: "products",
        component: ProductListComponent
    }, {
        path: "add-product",
        component: AddProductComponent
    }
];

/*
{
  "id": 1,
  "name": "Smartphone X",
  "description": "Latest model with 5G support",
  "brand": "TechBrand",
  "price": 799.99,
  "category": "Electronics",
  "releaseDate": "14-01-2024",
  "productAvailable": true,
  "stockQuantity": 50,
  "imageName": "smartphone_x.jpg",
  "imageType": "image/jpeg",
  "imageData": null
}
*/
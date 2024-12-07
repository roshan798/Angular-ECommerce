import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root',
})

export class ProductService {
  private apiUrl = environment.API_URL;
  constructor(private http: HttpClient) {
    console.log("env", environment);

  }

  getProducts(): Observable<Product[]> {
    console.log("called getProductService", this.apiUrl ? this.apiUrl : "nahi hai");

    return this.http.get<Product[]>(this.apiUrl + "/api/products")
  }
  addProduct(product: FormData) {
    console.log(product);
    return this.http.post<Product>(this.apiUrl + "/api/product",
      { id: Math.floor(Math.random() * 10), ...product }
    )

  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ProductService } from '../../service/product.service';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements OnInit {

  productForm: FormGroup = new FormGroup({});

  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      description: new FormControl('', [Validators.required, Validators.maxLength(500)]),
      brand: new FormControl('', Validators.required),
      price: new FormControl('', [Validators.required, Validators.min(0)]),
      category: new FormControl(''),
      stockQuantity: new FormControl('', [Validators.required, Validators.min(0)]),
      productAvailable: new FormControl(false),
      releaseDate: new FormControl(new Date())
    })
  }

  onSubmit() {
    if (this.productForm.valid) {
      console.log('Form Submitted:', this.productForm.value);
      let product = this.productForm.value;
      let response = this.productService.addProduct(product);
      response.subscribe(data => {
        console.log("Response : ", data);
        this.productForm.reset();
        alert("Product added succesfully with id: " + data.id)
        this.router.navigate(['/']);
      })

    } else {
      console.error('Form is invalid!');
    }
  }
}

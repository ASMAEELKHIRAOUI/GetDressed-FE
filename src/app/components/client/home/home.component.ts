import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Product } from '../../../modals/product';
import { ProductService } from '../../../services/product/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  products: Product[] = [];

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
      this.products.forEach(product => {
        if (product.price !== undefined && product.promotion !== undefined) {
          product.price = +(product.price - (product.promotion * (product.price / 100))).toFixed(2)
        }
      });
    })
  }

  productDetails(id: number | undefined): void{
    if(id){
      console.log('Product id:', id);
      this.router.navigate(['/product', id]);
    }
  }

}
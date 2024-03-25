import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Product } from '../../../models/product';
import { ProductService } from '../../../services/product/product.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
      this.products.forEach(product => {
        product.price = product.price - (product.promotion * (product.price / 100))

      });
    })
  }
}

import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';

import { Product } from 'app/domains/shared/models/product.model';

import { HeaderComponent } from 'app/domains/shared/components/header/header.component';
import { ProductComponent } from '../../components/product/product.component';

import { CartService } from 'app/domains/shared/services/cart.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, HeaderComponent, ProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products = signal<Product[]>([]);

  private cartService = inject(CartService);

  constructor() {
    const initProducts: Product[] = [
      {
        id: 1,
        img: 'https://picsum.photos/320/320?r=1',
        title: 'Product 1',
        price: 100,
        createdAt: new Date().toISOString() 
      },
      {
        id: 2,
        img: 'https://picsum.photos/320/320?r=2',
        title: 'Product 2',
        price: 200,
        createdAt: new Date().toISOString() 
      },
      {
        id: 3,
        img: 'https://picsum.photos/320/320?r=3',
        title: 'Product 3',
        price: 300,
        createdAt: new Date().toISOString() 
      },
      {
        id: 4,
        img: 'https://picsum.photos/320/320?r=4',
        title: 'Product 4',
        price: 400,
        createdAt: new Date().toISOString() 
      },
      {
        id: 5,
        img: 'https://picsum.photos/320/320?r=5',
        title: 'Product 5',
        price: 500,
        createdAt: new Date().toISOString()
      },
      {
        id: 6,
        img: 'https://picsum.photos/320/320?r=6',
        title: 'Product 6',
        price: 600,
        createdAt: new Date().toISOString()
      },
      {
        id: 7,
        img: 'https://picsum.photos/320/320?r=7',
        title: 'Product 7',
        price: 700,
        createdAt: new Date().toISOString()
      },
      {
        id: 8,
        img: 'https://picsum.photos/320/320?r=8',
        title: 'Product 8',
        price: 800,
        createdAt: new Date().toISOString()
      }
    ];
    this.products.set(initProducts);
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}

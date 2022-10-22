import { Component, OnInit } from '@angular/core';
import { Product } from 'projects/shared-lib/src/lib/models';
import {
  ProductHttpService,
  ProductResponse,
} from 'projects/shared-lib/src/public-api';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  public productList: Product[] = []; // Liste von Produkten

  constructor(private productsService: ProductHttpService) {}

  ngOnInit(): void {
    this.productsService
      .getProducts()
      .subscribe((response: ProductResponse) => { // Subscription auf ein "Observable" vom Type "ProductResponse"
        console.log('>>> Products ', response);
        this.productList = response.content;
      });
  }
}

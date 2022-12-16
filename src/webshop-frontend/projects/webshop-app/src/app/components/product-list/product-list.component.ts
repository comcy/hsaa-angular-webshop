import { Component, OnInit } from '@angular/core';
import { UsersLogicServiceInterface } from 'projects/shared-lib/src/lib/domain/core-services/user-logic-service.interface';
import { Product } from 'projects/shared-lib/src/lib/domain';
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
  public productList: Product[] = []; // Liste von Produkten, initialisiert als leeres Array um Laufzeitfehler zu vermeiden

  constructor(private productsService: ProductHttpService) {}

  ngOnInit(): void {
    this.productsService
      .getProducts()
      .subscribe((response: ProductResponse) => {
        // Subscription auf ein "Observable" vom Type "ProductResponse"
        this.productList = response.content;
      });
  }
}

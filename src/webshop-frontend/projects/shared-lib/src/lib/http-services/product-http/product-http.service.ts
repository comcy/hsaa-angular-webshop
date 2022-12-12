import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../domain';

export interface ProductResponse {
  content: Product[];
  pageable: string;
  totalPages: number;
  totalElements: number;
  last: boolean;
  size: number;
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ProductHttpService {
  private url = 'http://localhost:8080';
  private path = 'product';

  constructor(private http: HttpClient) {}

  public getProducts(queryParams?: any): Observable<ProductResponse> {
    return this.http.get<ProductResponse>(`${this.url}/${this.path}`);
  }
}

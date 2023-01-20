import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { ProductResponseModel } from '../models/productResponse.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  baseUrl: string = 'https://localhost:7084/api/Products';
  constructor(private httpClient: HttpClient) {}
  getAllProducts(): Observable<ProductResponseModel> {
    return this.httpClient.get<ProductResponseModel>(this.baseUrl + '/getall');
  }
}

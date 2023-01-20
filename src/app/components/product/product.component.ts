import { ProductResponseModel } from './../../models/productResponse.model';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  dataLoaded:boolean = false;
  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getAllProducts().subscribe((res) => {
      if (res) {
        //this.products = res;
        console.log(res);
        this.products = res.data;
        this.dataLoaded = true;
      }
    });
  }
}

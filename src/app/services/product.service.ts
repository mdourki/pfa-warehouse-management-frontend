import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductsResult } from '../models/productModel/productsResult';
import { Product } from '../models/productModel/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productsApiUrl = "http://localhost:8888/PFA-PRODUCT-SERVICE/products"

  constructor(private http : HttpClient) { }

  fetchProducts() {
    return this.http.get<ProductsResult>(this.productsApiUrl);
  }

  persist(product : Product) {
    return this.http.post<Product>(this.productsApiUrl, product)
  }

  delete(id : any) {
    return this.http.delete(this.productsApiUrl+"/"+id)
  }

  getProduct(id : any) {
    return this.http.get<Product>(this.productsApiUrl+"/"+id);
  }

  update(product : Product) {
    return this.http.put<Product>(this.productsApiUrl+"/"+product.id, product)
  }
}

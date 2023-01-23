import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Product } from '../models/productModel/product';
import { ProductService } from '../services/product.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-new-produit',
  templateUrl: './new-produit.component.html',
  styleUrls: ['./new-produit.component.scss']
})
export class NewProduitComponent {

  product:Product = {
    name: "",
    price: 0,
    couleur: "",
    taille: "",
    style: ""
  };

  constructor(private formBuilder:FormBuilder , 
    private productService:ProductService ,
    private router: Router) {}

  productForm = this.formBuilder.group({
    name:"",
    price:'',
    couleur:"",
    taille:"",
    style:"",
  });

  saveForm(){
    console.log('Form data is ', this.productForm.value);
    this.persistProduct()
  }

  persistProduct() {
    this.product.couleur = this.productForm.value.couleur as string
    this.product.name = this.productForm.value.name as string
    this.product.price = Number(this.productForm.value.price) 
    this.product.taille = this.productForm.value.taille as string
    this.product.style = this.productForm.value.style as string
    console.log('Product value ',this.product)
    this.productService.persist(this.product)
    .subscribe((p) => {
      this.router.navigate(['/products'])
    })
  }
}

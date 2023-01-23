import { Component, Inject } from '@angular/core';
import { Product } from '../models/productModel/product';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import {Router} from "@angular/router"

@Component({
  selector: 'app-edit-produit',
  templateUrl: './edit-produit.component.html',
  styleUrls: ['./edit-produit.component.scss']
})
export class EditProduitComponent {

  id! : number;

  constructor(private formBuilder:FormBuilder ,
    private productService : ProductService , 
    private _Activatedroute:ActivatedRoute , 
    private router: Router) {} 

  product!:Product;

  productForm = this.formBuilder.group({
    name:"",
    price:'',
    couleur:"",
    taille:"",
    style:"",
  });

  ngOnInit() {
    this.getProduct();
    console.log("Prod : " + this.product)
  }

  getProduct() {
    this.id=Number(this._Activatedroute.snapshot.paramMap.get("id")); 
    this.productService.getProduct(this.id)
    .subscribe(result =>  {
      this.initProduct(result)
      this.initProductForm(result)
    })
  }
  
  initProduct(result : any) {
    this.product = result
  }

  initProductForm(result : any) {
    this.productForm = this.formBuilder.group({
      name:result.name as string,
      price:result.price as string,
      couleur:result.couleur as string,
      taille:result.taille as string,
      style:result.style as string,
    }); 
  }

  saveForm(){
    console.log('Form data is ', this.productForm.value);
    this.updateProduct()
  }

  updateProduct() {
    this.product.id = this.id
    this.product.couleur = this.productForm.value.couleur as string
    this.product.name = this.productForm.value.name as string
    this.product.price = Number(this.productForm.value.price) 
    this.product.taille = this.productForm.value.taille as string
    this.product.style = this.productForm.value.style as string
    console.log('Product value ',this.product)
    this.productService.update(this.product)
    .subscribe((p) => {
      this.router.navigate(['/products'])
    })
  }
}

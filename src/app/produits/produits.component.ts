import { Component } from '@angular/core';
import { Product } from 'src/app/models/productModel/product';
import { ProductService } from 'src/app/services/product.service';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatIconButton } from '@angular/material/button';
import {Router} from "@angular/router"

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.scss']
})


export class ProduitsComponent {

  productsList!: Product[]; 
  dataSource = new MatTableDataSource<Product>;

  constructor(private productService : ProductService , private router: Router) {}

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productService.fetchProducts()
    .subscribe( result =>  {
      this.productsList = result._embedded.products , 
      console.log(this.productsList) ,
      this.dataSource = new MatTableDataSource<Product>(this.productsList);
      this.dataSource.paginator = this.paginator;
    })
  }

  displayedColumns: string[] = ['name', 'price', 'couleur', 'taille' , 'style' , 'edit' , 'delete'];
  

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    
  }

  deleteProduct(id:number) {
    this.productService.delete(id)
    .subscribe(() => {
      this.productsList = this.productsList.filter(product => product.id != id)
      this.dataSource = new MatTableDataSource<Product>(this.productsList);
      this.dataSource.paginator = this.paginator;
    })
  }
  
  editProduct(id:number) {
    this.router.navigate(['products/editProduct',id])
  }
}

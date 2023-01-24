import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Palette } from '../models/paletteModel/palette';

@Component({
  selector: 'app-palettes',
  templateUrl: './palettes.component.html',
  styleUrls: ['./palettes.component.scss']
})
export class PalettesComponent {
  displayedColumns: string[] = ['name', 'prdtName', 'quantity', 'qrCode' , 'edit' , 'delete'];
  dataSource = new MatTableDataSource<Palette>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  openQR(name:string,prdtName:string,quantity:number) {
    window.open("https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+name+
    " | Produit : "+prdtName+" | Quantité : "+quantity+" | Emplacement : B12 | Dépôt : Ibn Sina", "_blank");
  }
}


const ELEMENT_DATA: Palette[] = [
  { name: 'Palette 1', prdtName: "T-Shirt-L-B", quantity: 50},
  { name: 'Palette 2', prdtName: "T-Shirt-XL-B", quantity: 60},
  { name: 'Palette 3', prdtName: "T-Shirt-XXL-N", quantity: 40},
  { name: 'Palette 4', prdtName: "Chemise-L-B", quantity: 50},
  { name: 'Palette 5', prdtName: "Short-L-B", quantity: 30},
  { name: 'Palette 6', prdtName: "Sweat-M-N", quantity: 45},
  { name: 'Palette 7', prdtName: "Sweat-L-V", quantity: 50},
];

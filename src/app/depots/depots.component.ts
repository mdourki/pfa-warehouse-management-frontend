import { Component } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {Router} from "@angular/router"
import { Depot } from '../models/depotModel/depot';
import { DepotService } from '../services/depot.service';
import {AfterViewInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-depots',
  templateUrl: './depots.component.html',
  styleUrls: ['./depots.component.scss']
})
export class DepotsComponent {

  depotsList!: Depot[]; 
  dataSource = new MatTableDataSource<Depot>;

  constructor(private depotService : DepotService , private router: Router) {}

  ngOnInit() {
    this.fetchDepots();
  }

  fetchDepots() {
    this.depotService.fetchDepots()
    .subscribe( result =>  {
      this.depotsList = result._embedded.depots , 
      console.log(this.depotsList) ,
      this.dataSource = new MatTableDataSource<Depot>(this.depotsList);
      this.dataSource.paginator = this.paginator;
    })
  }

  displayedColumns: string[] = ['libelle', 'adresse', 'edit' , 'delete'];
  

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    
  }

  deleteDepot(id:number) {
    this.depotService.delete(id)
    .subscribe(() => {
      this.depotsList = this.depotsList.filter(depot => depot.id != id)
      this.dataSource = new MatTableDataSource<Depot>(this.depotsList);
      this.dataSource.paginator = this.paginator;
    })
  }
  
  editDepot(id:number) {
    this.router.navigate(['depots/editDepot',id])
  }

}

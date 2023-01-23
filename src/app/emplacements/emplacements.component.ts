import { Component } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {Router} from "@angular/router"
import { Emplacement } from '../models/emplacementModel/emplacement';
import { EmplacementItem } from '../models/emplacementModel/emplacementItem';
import { EmplacementService } from '../services/emplacement.service';
import {AfterViewInit, ViewChild} from '@angular/core';
import { Depot } from '../models/depotModel/depot';
import { DepotService } from '../services/depot.service';

const ELEMENT_DATA: EmplacementItem[] = [
  {allee: 'A', nivHoriz: '1', nivVerti: '1', depotName: 'Depot 1'},
  {allee: 'B', nivHoriz: '2', nivVerti: '2', depotName: 'Depot 1'},
];

@Component({
  selector: 'app-emplacements',
  templateUrl: './emplacements.component.html',
  styleUrls: ['./emplacements.component.scss']
})
export class EmplacementsComponent {

  emplacementsList!: Emplacement[]; 
  emplacementsItems: EmplacementItem[] = []; 

  //dataSource = new MatTableDataSource<EmplacementItem>;
  dataSrc = new MatTableDataSource<EmplacementItem>(this.emplacementsItems);
  emplacementItem! : EmplacementItem;

  depot!: Depot;

  constructor(private emplacementService : EmplacementService , 
    private router: Router , 
    private depotService : DepotService) {}

  ngOnInit() {
    this.fetchEmplacements()
    this.dataSrc = new MatTableDataSource<EmplacementItem>(this.emplacementsItems);
    /*this.dataSource = new MatTableDataSource<EmplacementItem>(this.emplacementsItems)
    this.dataSource.data = this.emplacementsItems
    this.dataSource.paginator = this.paginator;*/
  }

  setDepot(result : any) {
    this.depot = result
  }

  fetchEmplacements() {
    this.emplacementService.fetchEmplacements()
    .subscribe( result =>  {
      this.emplacementsList = result._embedded.emplacements , 
      console.log( this.emplacementsList) ,
      this.emplacementsList.forEach(e => {
        this.depotService.getDepot(e.depotID)
        .subscribe(result =>  {
          this.setDepot(result)
          this.emplacementItem = {
            id:e.id,
            allee:e.allee,
            nivHoriz:e.nivHoriz,
            nivVerti:e.nivVerti,
            depotName:this.depot.libelle
          }
          this.emplacementsItems.push(this.emplacementItem)
        })        
      }) 
    })
    
    /* this.dataSource = new MatTableDataSource<EmplacementItem>(this.emplacementsItems);
    this.dataSource.paginator = this.paginator; */
    
  }

  displayedColumns: string[] = ['allee', 'nivHoriz', 'nivVerti', 'depotName', 'edit' , 'delete'];
  

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSrc.paginator = this.paginator;
  }

  deleteEmplacement(id:number) {
    this.emplacementService.delete(id)
    .subscribe(() => {
      this.emplacementsList = this.emplacementsList.filter(depot => depot.id != id)
      this.emplacementsItems = this.emplacementsItems.filter(depot => depot.id != id)
      this.dataSrc = new MatTableDataSource<EmplacementItem>(this.emplacementsItems);
      this.dataSrc.paginator = this.paginator;
    })
  }
  
  editEmplacement(id:number) {
    this.router.navigate(['emplacements/editEmplacement',id])
  }

}

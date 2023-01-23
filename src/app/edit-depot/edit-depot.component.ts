import { Component } from '@angular/core';
import { Depot } from '../models/depotModel/depot';
import { DepotService } from '../services/depot.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import {Router} from "@angular/router"

@Component({
  selector: 'app-edit-depot',
  templateUrl: './edit-depot.component.html',
  styleUrls: ['./edit-depot.component.scss']
})
export class EditDepotComponent {

  id! : number;

  constructor(private formBuilder:FormBuilder ,
    private depotService : DepotService , 
    private _Activatedroute:ActivatedRoute , 
    private router: Router) {} 

  depot!:Depot;

  depotForm = this.formBuilder.group({
    libelle:"",
    adresse:"",
  });

  ngOnInit() {
    this.getDepot();
    console.log("Dep : " + this.depot)
  }

  getDepot() {
    this.id=Number(this._Activatedroute.snapshot.paramMap.get("id")); 
    this.depotService.getDepot(this.id)
    .subscribe(result =>  {
      this.initDepot(result)
      this.initDepotForm(result)
    })
  }
  
  initDepot(result : any) {
    this.depot = result
  }

  initDepotForm(result : any) {
    this.depotForm = this.formBuilder.group({
      libelle:result.libelle as string,
      adresse:result.adresse as string,
    }); 
  }

  saveForm(){
    console.log('Form data is ', this.depotForm.value);
    this.updateDepot()
  }

  updateDepot() {
    this.depot.id = this.id
    this.depot.libelle = this.depotForm.value.libelle as string
    this.depot.adresse = this.depotForm.value.adresse as string
    console.log('Depot value ',this.depot)
    this.depotService.update(this.depot)
    .subscribe((d) => {
      this.router.navigate(['/depots'])
    })
  }
}

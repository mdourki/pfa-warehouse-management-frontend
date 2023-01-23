import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Depot } from '../models/depotModel/depot';
import { DepotService } from '../services/depot.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-new-depot',
  templateUrl: './new-depot.component.html',
  styleUrls: ['./new-depot.component.scss']
})
export class NewDepotComponent {
  depot:Depot = {
    libelle: "",
    adresse: ""
  };

  constructor(private formBuilder:FormBuilder , 
    private depotService:DepotService ,
    private router: Router) {}

  depotForm = this.formBuilder.group({
    libelle:"",
    adresse:"",
  });

  saveForm(){
    console.log('Form data is ', this.depotForm.value);
    this.persistDepot()
  }

  persistDepot() {
    this.depot.libelle = this.depotForm.value.libelle as string
    this.depot.adresse = this.depotForm.value.adresse as string
    console.log('Product value ',this.depot)
    this.depotService.persist(this.depot)
    .subscribe((p) => {
      this.router.navigate(['/depots'])
    })
  }
}

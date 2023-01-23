import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Depot } from '../models/depotModel/depot';
import { DepotsResult } from '../models/depotModel/depotsResult';

@Injectable({
  providedIn: 'root'
})
export class DepotService {

  depotsApiUrl = "http://localhost:8888/PFA-DEPOT-SERVICE/depots"

  constructor(private http : HttpClient) { }

  fetchDepots() {
    return this.http.get<DepotsResult>(this.depotsApiUrl);
  }

  persist(depot : Depot) {
    return this.http.post<Depot>(this.depotsApiUrl, depot)
  }

  delete(id : any) {
    return this.http.delete(this.depotsApiUrl+"/"+id)
  }

  getDepot(id : any) {
    return this.http.get<Depot>(this.depotsApiUrl+"/"+id);
  }

  update(depot : Depot) {
    return this.http.put<Depot>(this.depotsApiUrl+"/"+depot.id, depot)
  }
}

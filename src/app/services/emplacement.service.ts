import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Emplacement } from '../models/emplacementModel/emplacement';
import { EmplacementsResult } from '../models/emplacementModel/emplacementsResult';

@Injectable({
  providedIn: 'root'
})
export class EmplacementService {

  emplacementsApiUrl = "http://localhost:8888/PFA-EMPLACEMENT-SERVICE/emplacements"

  constructor(private http : HttpClient) { }

  fetchEmplacements() {
    return this.http.get<EmplacementsResult>(this.emplacementsApiUrl);
  }

  persist(emplacement : Emplacement) {
    return this.http.post<Emplacement>(this.emplacementsApiUrl, emplacement)
  }

  delete(id : any) {
    return this.http.delete(this.emplacementsApiUrl+"/"+id)
  }

  getEmplacement(id : any) {
    return this.http.get<Emplacement>(this.emplacementsApiUrl+"/"+id);
  }

  update(emplacement : Emplacement) {
    return this.http.put<Emplacement>(this.emplacementsApiUrl+"/"+emplacement.id, emplacement)
  }
}

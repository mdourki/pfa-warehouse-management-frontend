import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaletteService {

  palettesApiUrl = "http://localhost:8888/PFA-PALETTE-SERVICE/palettes"

  constructor() { }
}

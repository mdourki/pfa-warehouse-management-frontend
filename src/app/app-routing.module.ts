import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProduitsComponent } from './produits/produits.component';
import { PalettesComponent } from './palettes/palettes.component';
import { DepotsComponent } from './depots/depots.component';
import { EmplacementsComponent } from './emplacements/emplacements.component';
import { NewProduitComponent } from './new-produit/new-produit.component';
import { EditProduitComponent } from './edit-produit/edit-produit.component';
import { NewDepotComponent } from './new-depot/new-depot.component';
import { EditDepotComponent } from './edit-depot/edit-depot.component';
import { NewEmplacementComponent } from './new-emplacement/new-emplacement.component';
import { EditEmplacementComponent } from './edit-emplacement/edit-emplacement.component';
import { NewPaletteComponent } from './new-palette/new-palette.component';
import { EditPaletteComponent } from './edit-palette/edit-palette.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
                  /* Products */
  {path: 'products', component: ProduitsComponent},
  {path: 'products/newProduct', component: NewProduitComponent},
  {path: 'products/editProduct/:id', component: EditProduitComponent},
                  /* Palettes */
  {path: 'palettes', component: PalettesComponent},
  {path: 'palettes/newPalette', component: NewPaletteComponent},
  {path: 'palettes/editPalette/:id', component: EditPaletteComponent},
                    /* Depots */
  {path: 'depots', component: DepotsComponent},
  {path: 'depots/newDepot', component: NewDepotComponent},
  {path: 'depots/editDepot/:id', component: EditDepotComponent},
                /* Emplacements */
  {path: 'emplacements', component: EmplacementsComponent},
  {path: 'emplacements/newEmplacement', component: NewEmplacementComponent},
  {path: 'emplacements/editEmplacement/:id', component: EditEmplacementComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { ProduitsComponent } from './produits/produits.component';
import { PalettesComponent } from './palettes/palettes.component';
import { DepotsComponent } from './depots/depots.component';
import { EmplacementsComponent } from './emplacements/emplacements.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { NewProduitComponent } from './new-produit/new-produit.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { EditProduitComponent } from './edit-produit/edit-produit.component';
import { NewDepotComponent } from './new-depot/new-depot.component';
import { EditDepotComponent } from './edit-depot/edit-depot.component';
import { EditEmplacementComponent } from './edit-emplacement/edit-emplacement.component';
import { NewEmplacementComponent } from './new-emplacement/new-emplacement.component';
import { NewPaletteComponent } from './new-palette/new-palette.component';
import { EditPaletteComponent } from './edit-palette/edit-palette.component';



@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    HomeComponent,
    ProduitsComponent,
    PalettesComponent,
    DepotsComponent,
    EmplacementsComponent,
    NewProduitComponent,
    EditProduitComponent,
    NewDepotComponent,
    EditDepotComponent,
    EditEmplacementComponent,
    NewEmplacementComponent,
    NewPaletteComponent,
    EditPaletteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

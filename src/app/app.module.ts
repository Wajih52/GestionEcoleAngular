import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AjouterEvenementComponent } from './ajouter-evenement/ajouter-evenement.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { HomeEventComponent } from './home-event/home-event.component';
import {AppRoutingModule} from "./app-routing.module";
import { NotFoundComponent } from './not-found/not-found.component';
import { AfficherEvenementComponent } from './afficher-evenement/afficher-evenement.component';
import { DetailsEvenementComponent } from './details-evenement/details-evenement.component';
import { NavbarComponent } from './composantHTML/navbar/navbar.component';
import { DeleteEvenementComponent } from './delete-evenement/delete-evenement.component';
import { ModifierEvenementComponent } from './modifier-evenement/modifier-evenement.component';
import { SidebarComponent } from './composantHTML/sidebar/sidebar.component';
import { EtudiantEvenementComponent } from './etudiant-evenement/etudiant-evenement.component';
import { FormulaireParticipationComponent } from './formulaire-participation/formulaire-participation.component';

@NgModule({
  declarations: [
    AppComponent,
    AjouterEvenementComponent,
    HomeEventComponent,
    NotFoundComponent,
    AfficherEvenementComponent,
    DetailsEvenementComponent,
    NavbarComponent,
    DeleteEvenementComponent,
    ModifierEvenementComponent,
    SidebarComponent,
    EtudiantEvenementComponent,
    FormulaireParticipationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

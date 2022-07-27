import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListecoursComponent } from './listecours/listecours.component';
import { ListenotesComponent } from './listenotes/listenotes.component';
import {EtudiantEvenementComponent} from "./etudiant-evenement/etudiant-evenement.component";
import {FormulaireParticipationComponent} from "./formulaire-participation/formulaire-participation.component";
import { frontRountingModule } from './frontoffice-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RouterModule } from '@angular/router';
import { DashAchatComponent } from './dash-achat/dash-achat.component';
import { DashComptaComponent } from './dash-compta/dash-compta.component';
import { DashclasseComponent } from './dashclasse/dashclasse.component';
import { DashmatiereComponent } from './dashmatiere/dashmatiere.component';
import { InfoEtudiantComponent } from './info-etudiant/info-etudiant.component';


@NgModule({
  declarations: [
    ListecoursComponent,
    ListenotesComponent,
    EtudiantEvenementComponent,
    FormulaireParticipationComponent,
    DashAchatComponent,
    DashComptaComponent,
    DashclasseComponent,
    DashmatiereComponent,
    InfoEtudiantComponent,
    FormulaireParticipationComponent
  ],
  imports: [
   
    CommonModule,
    frontRountingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
   
  
    
  ]
})
export class FrontofficeModule { }

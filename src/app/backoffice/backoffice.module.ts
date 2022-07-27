import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddcoursComponent } from './addcours/addcours.component';
import { AddnotesComponent } from './addnotes/addnotes.component';
import { ListenotesComponent } from './listenotes/listenotes.component';
import { ListecoursComponent } from './listecours/listecours.component';
import { UpdatecoursComponent } from './updatecours/updatecours.component';
import { UpdatenoteComponent } from './updatenote/updatenote.component';
import { AddAbsenceComponent } from './add-absence/add-absence.component';
import { AffichageAbsenceComponent } from './affichage-absence/affichage-absence.component';
import { UpdateAbsenceComponent } from './update-absence/update-absence.component';
import {AddPieceComponent  } from './add-piece/add-piece.component';
import { AffichagePieceComponent } from './affichage-piece/affichage-piece.component';
import { SearchComponent } from './search/search.component';
import { UpdatePieceComponent } from './update-piece/update-piece.component';
import { AddAchatComponent } from './add-achat/add-achat.component';
import { UpdateAchatComponent } from './update-achat/update-achat.component';
import { AddComptaComponent } from './add-compta/add-compta.component';
import { UpdateComptaComponent } from './update-compta/update-compta.component';
import {AfficherEvenementComponent} from "./afficher-evenement/afficher-evenement.component";
import {AjouterEvenementComponent} from "./ajouter-evenement/ajouter-evenement.component";
import {AfficherParticipantComponent} from "./afficher-participant/afficher-participant.component";
import {ModifierEvenementComponent} from "./modifier-evenement/modifier-evenement.component";
import {DetailsEvenementComponent} from "./details-evenement/details-evenement.component";
import { AfficherMatiereComponent } from './affichermatiere/affichermatiere.component';
import { AddMatiereComponent } from './addmatiere/addmatiere.component';
import { UpdateMatiereComponent } from './updatematiere/updatematiere.component';
import { AfficherClasseComponent } from './afficherclasse/afficherclasse.component';
import { AddclasseComponent } from './addclasse/addclasse.component';
import { UpdateClasseComponent } from './updateclasse/updateclasse.component';
import {backRountingModule} from './backoffice-routing.module';
import {PdfViewerModule} from 'ng2-pdf-viewer'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {Ng2SearchPipeModule} from "ng2-search-filter";
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { frontRountingModule } from '../frontoffice/frontoffice-routing.module';
import { AfficherAchatComponent } from './afficher-achat/afficher-achat.component';
import { AfficherComptaComponent } from './afficher-compta/afficher-compta.component';
import { DetailsEtudiantEvenementComponent } from '../frontoffice/details-etudiant-evenement/details-etudiant-evenement.component';

@NgModule({
  declarations: [
    AddcoursComponent,
    AddAbsenceComponent,
    AddAchatComponent,
    AddComptaComponent,
    AddMatiereComponent,
    AddclasseComponent,
    AddPieceComponent,
    AddnotesComponent,
    AjouterEvenementComponent,

    ListecoursComponent,
    ListenotesComponent,

    UpdateAbsenceComponent,
    UpdateAchatComponent,
    UpdateClasseComponent,
    UpdateComptaComponent,
    UpdateMatiereComponent,
    UpdatePieceComponent,
    UpdatecoursComponent,
    UpdatenoteComponent,

    AffichageAbsenceComponent,
    AffichagePieceComponent,
    AfficherClasseComponent,
    AfficherEvenementComponent,
    AfficherMatiereComponent,
    AfficherParticipantComponent,
    AfficherAchatComponent,
    AfficherComptaComponent,

    DetailsEvenementComponent,
    DetailsEtudiantEvenementComponent,
    SearchComponent,
    ModifierEvenementComponent

  ],
  imports: [

    CommonModule,
    backRountingModule,
    PdfViewerModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    Ng2SearchPipeModule,

    
   
    
  ]

})
export class BackofficeModule { }

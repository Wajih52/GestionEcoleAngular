import {UpdatecoursComponent} from './updatecours/updatecours.component';
import {ListenotesComponent} from './listenotes/listenotes.component';
import {UpdatenoteComponent} from './updatenote/updatenote.component';
import {AddnotesComponent} from './addnotes/addnotes.component';
import {ListecoursComponent} from './listecours/listecours.component';
import {AddcoursComponent} from './addcours/addcours.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AddAbsenceComponent } from './add-absence/add-absence.component'; 
import { AffichageAbsenceComponent } from './affichage-absence/affichage-absence.component';
import {UpdateAbsenceComponent} from './update-absence/update-absence.component';
import {AddPieceComponent  } from './add-piece/add-piece.component';
import { AffichagePieceComponent } from './affichage-piece/affichage-piece.component';
import { UpdatePieceComponent } from './update-piece/update-piece.component';
import { SearchComponent } from './search/search.component';
import { AddAchatComponent } from './add-achat/add-achat.component';
import { AfficherAchatComponent } from './afficher-achat/afficher-achat.component';
import { UpdateAchatComponent } from './update-achat/update-achat.component';
import { AddComptaComponent } from './add-compta/add-compta.component';
import { AfficherComptaComponent } from './afficher-compta/afficher-compta.component';
import { UpdateComptaComponent } from './update-compta/update-compta.component';
import {AfficherEvenementComponent} from "./afficher-evenement/afficher-evenement.component";
import {AjouterEvenementComponent} from "./ajouter-evenement/ajouter-evenement.component";
import {DetailsEvenementComponent} from "./details-evenement/details-evenement.component";
import {AfficherParticipantComponent} from "./afficher-participant/afficher-participant.component";
import {ModifierEvenementComponent} from "./modifier-evenement/modifier-evenement.component";
import { AfficherMatiereComponent } from './affichermatiere/affichermatiere.component';
import { AddMatiereComponent } from './addmatiere/addmatiere.component';
import { UpdateMatiereComponent } from './updatematiere/updatematiere.component';
import { AfficherClasseComponent } from './afficherclasse/afficherclasse.component';
import { AddclasseComponent } from './addclasse/addclasse.component';
import { UpdateClasseComponent } from './updateclasse/updateclasse.component';

export const backRoutes: Routes = [

    {path:'add',component:AddnotesComponent},
    {path:'liste',component:ListenotesComponent},
    {path:'liste/edit-note/:id',component:UpdatenoteComponent},
    {path:'addcours',component:AddcoursComponent},
    {path:'listecours',component:ListecoursComponent},
    {path:'listecours/edit-cours/:id',component:UpdatecoursComponent},
    {path:'addAbsence',component:AddAbsenceComponent},
    {path:'afficherAbsence',component:AffichageAbsenceComponent},
    {path:'afficherAbsence/edit-absence/:id',component:UpdateAbsenceComponent},
    {path:'addPiece',component:AddPieceComponent},
    {path:'afficherPiece',component:AffichagePieceComponent},
    {path:'afficherPiece/edit-piece/:id',component:UpdatePieceComponent},
    {path:'searchEtudiant',component:SearchComponent},
    {path:'addAchat',component:AddAchatComponent},
    {path:'afficherAchat',component:AfficherAchatComponent},
    {path:'afficherAchat/edit-achat/:id',component:UpdateAchatComponent},
    {path:'addCompta',component:AddComptaComponent},
    {path:'afficherCompta',component:AfficherComptaComponent},
    {path:'afficherCompta/edit-compta/:id',component:UpdateComptaComponent},
    {path:'afficher',component:AfficherEvenementComponent},
    {path:'ajouterevenement',component:AjouterEvenementComponent},
    {path:'details/:id',component:DetailsEvenementComponent},
    {path:'afficherparticipant',component:AfficherParticipantComponent},
    {path:'modifier/:id/:id2',component:ModifierEvenementComponent},
    {path:'afficherMatiere',component:AfficherMatiereComponent},
    {path:'addMatiere',component:AddMatiereComponent},
    {path:'afficherMatiere/edit-matiere/:id',component:UpdateMatiereComponent},
    {path:'afficherClasse',component:AfficherClasseComponent},
    {path:'addclasse',component:AddclasseComponent},
    {path:'afficherClasse/edit-classe/:id',component:UpdateClasseComponent}
    
    
  

];
@NgModule({
    imports: [RouterModule.forChild(backRoutes)],
    exports: [RouterModule],
  })

export class backRountingModule{}
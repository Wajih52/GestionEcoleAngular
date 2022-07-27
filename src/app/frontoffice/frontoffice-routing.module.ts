
import {ListenotesComponent} from './listenotes/listenotes.component';
import {ListecoursComponent} from './listecours/listecours.component';
import { InfoEtudiantComponent } from './info-etudiant/info-etudiant.component';
import { DashAchatComponent } from './dash-achat/dash-achat.component';
import { DashComptaComponent } from './dash-compta/dash-compta.component';
import {DetailsEtudiantEvenementComponent} from "./details-etudiant-evenement/details-etudiant-evenement.component";
import {EtudiantEvenementComponent} from "./etudiant-evenement/etudiant-evenement.component";
import {FormulaireParticipationComponent} from "./formulaire-participation/formulaire-participation.component";
import {DashclasseComponent} from './dashclasse/dashclasse.component';
import { DashmatiereComponent} from './dashmatiere/dashmatiere.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


export const frontRoutes: Routes = [

    {path:'liste',component:ListenotesComponent},
    {path:'listecours',component:ListecoursComponent},
    {path:'afficherInfo',component:InfoEtudiantComponent},
    {path:'afficherDash',component:DashAchatComponent},
    {path:'afficherDashC',component:DashComptaComponent},
    {path:'details/:id',component:DetailsEtudiantEvenementComponent},
    {path:'listeevenement',component:EtudiantEvenementComponent},
    {path:'formulaire/:id/:nom',component:FormulaireParticipationComponent},
    {path:'dashclasse',component:DashclasseComponent},
    {path:'dashmatiere',component:DashmatiereComponent},
    
    



];
@NgModule({
    imports: [RouterModule.forChild(frontRoutes)],
    exports: [RouterModule],
  })

export class frontRountingModule{}
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeEventComponent} from "./home-event/home-event.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {AjouterEvenementComponent} from "./ajouter-evenement/ajouter-evenement.component";
import {AfficherEvenementComponent} from "./afficher-evenement/afficher-evenement.component";
import {DetailsEvenementComponent} from "./details-evenement/details-evenement.component";
import {DeleteEvenementComponent} from "./delete-evenement/delete-evenement.component";
import {ModifierEvenementComponent} from "./modifier-evenement/modifier-evenement.component";
import {EtudiantEvenementComponent} from "./etudiant-evenement/etudiant-evenement.component";
import {FormulaireParticipationComponent} from "./formulaire-participation/formulaire-participation.component";


const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeEventComponent},
  {path:'afficher',component:AfficherEvenementComponent},
  {path:'details/:id',component:DetailsEvenementComponent},
  {path:'delete/:id',component:DeleteEvenementComponent},
  {path:'modifier/:id/:id2',component:ModifierEvenementComponent},
  {path:'etudiant/afficher',component:EtudiantEvenementComponent},
  {path:'etudiant/formulaire/:id',component:FormulaireParticipationComponent},

  {path:'ajouter',component:AjouterEvenementComponent},
  {path :'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

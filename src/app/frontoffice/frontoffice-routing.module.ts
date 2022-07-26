
import {ListenotesComponent} from './listenotes/listenotes.component';
import {ListecoursComponent} from './listecours/listecours.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


export const frontRoutes: Routes = [

    {path:'liste',component:ListenotesComponent},
    {path:'listecours',component:ListecoursComponent},



];
@NgModule({
    imports: [RouterModule.forChild(frontRoutes)],
    exports: [RouterModule],
  })

export class frontRountingModule{}
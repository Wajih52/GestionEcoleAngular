import {UpdatecoursComponent} from './updatecours/updatecours.component';
import {ListenotesComponent} from './listenotes/listenotes.component';
import {UpdatenoteComponent} from './updatenote/updatenote.component';
import {AddnotesComponent} from './addnotes/addnotes.component';
import {ListecoursComponent} from './listecours/listecours.component';
import {AddcoursComponent} from './addcours/addcours.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


export const backRoutes: Routes = [

    {path:'add',component:AddnotesComponent},
    {path:'liste',component:ListenotesComponent},
    {path:'liste/edit-note/:id',component:UpdatenoteComponent},
    {path:'addcours',component:AddcoursComponent},
    {path:'listecours',component:ListecoursComponent},
    {path:'listecours/edit-cours/:id',component:UpdatecoursComponent}



];
@NgModule({
    imports: [RouterModule.forChild(backRoutes)],
    exports: [RouterModule],
  })

export class backRountingModule{}
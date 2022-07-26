import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddcoursComponent } from './addcours/addcours.component';
import { AddnotesComponent } from './addnotes/addnotes.component';
import { ListenotesComponent } from './listenotes/listenotes.component';
import { ListecoursComponent } from './listecours/listecours.component';
import { UpdatecoursComponent } from './updatecours/updatecours.component';
import { UpdatenoteComponent } from './updatenote/updatenote.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {backRountingModule} from './backoffice-routing.module'
import {PdfViewerModule} from 'ng2-pdf-viewer'

@NgModule({
  declarations: [
    AddcoursComponent,
    AddnotesComponent,
    ListenotesComponent,
    ListecoursComponent,
    UpdatecoursComponent,
    UpdatenoteComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    backRountingModule,
    PdfViewerModule
  ]
})
export class BackofficeModule { }

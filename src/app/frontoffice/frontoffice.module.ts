import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListecoursComponent } from './listecours/listecours.component';
import { ListenotesComponent } from './listenotes/listenotes.component';
import { frontRountingModule } from './frontoffice-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListecoursComponent,
    ListenotesComponent
  ],
  imports: [
    CommonModule,
    frontRountingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  
    
  ]
})
export class FrontofficeModule { }

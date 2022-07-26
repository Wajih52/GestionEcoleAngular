import { AuthLayoutComponent } from './layout/app-layout/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layout/app-layout/main-layout/main-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guard/auth.guard';
import { AddAbsenceComponent } from './add-absence/add-absence.component';
import { AffichageAbsenceComponent } from './affichage-absence/affichage-absence.component';
import { UpdateAbsenceComponent } from './update-absence/update-absence.component';
import { SearchComponent } from './search/search.component';
import { AffichagePieceComponent } from './affichage-piece/affichage-piece.component';
import { UpdatePieceComponent } from './update-piece/update-piece.component';
import { AddPieceComponent } from './add-piece/add-piece.component';
import { InfoEtudiantComponent } from './info-etudiant/info-etudiant.component';
const routes: Routes = [


  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: '/authentication/signin', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {path:'addAbsence',component:AddAbsenceComponent},
      {path:'afficherAbsence',component:AffichageAbsenceComponent},
      {path:'afficherAbsence/edit-absence/:id',component:UpdateAbsenceComponent},
      {path:'searchEtudiant',component:SearchComponent},
      {path:'afficherPiece',component:AffichagePieceComponent},
      {path:'afficherPiece/edit-piece/:id',component:UpdatePieceComponent},
      {path:'addPiece',component:AddPieceComponent},
      {path:'afficherInfo',component:InfoEtudiantComponent},

      {
        path: 'advance-table',
        loadChildren: () =>
          import('./advance-table/advance-table.module').then(
            (m) => m.AdvanceTableModule
          ),
      },
      {
        path: 'extra-pages',
        loadChildren: () =>
          import('./extra-pages/extra-pages.module').then(
            (m) => m.ExtraPagesModule
          ),
      },
      {
        path: 'multilevel',
        loadChildren: () =>
          import('./multilevel/multilevel.module').then(
            (m) => m.MultilevelModule
          ),
      },
    ],
  },

  {
    path: 'authentication',
    component: AuthLayoutComponent,
    loadChildren: () =>
      import('./authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}

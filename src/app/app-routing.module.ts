import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FichiersComponent } from './fichiers/fichiers.component';

const routes: Routes = [

  { path:"fichiers", component:FichiersComponent}
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

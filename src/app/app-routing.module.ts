import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FichiersComponent } from './fichiers/fichiers.component';
import { NewFichierComponent } from './new-fichier/new-fichier.component';
import { LoginComponent } from './login/login.component';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { AuthenticationGuard } from './guards/authentication.guard';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
import { AuthorizationGuard } from './guards/authorization.guard';
import { DetectionsComponent } from './detections/detections.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  { path:"login", component:LoginComponent},
  { path: '**', redirectTo: '/login' },
  { path:"", redirectTo: "/login", pathMatch: "full"},
  { path: "admin", component: AdminTemplateComponent, canActivate:[AuthenticationGuard],
  children :[
    { path:"fichiers", component:FichiersComponent},
    { path:"new-fichier", component:NewFichierComponent, canActivate: [AuthorizationGuard]
  , data : {role:"ADMIN"}},
    { path:"notAuthorized", component:NotAuthorizedComponent},
    { path:"detections", component:DetectionsComponent},
    { path: 'home', component: HomeComponent },


  ]}
  

   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

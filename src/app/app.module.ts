import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FichiersComponent } from './fichiers/fichiers.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http"
import { ReactiveFormsModule } from '@angular/forms';
import { NewFichierComponent } from './new-fichier/new-fichier.component';
import { LoginComponent } from './login/login.component';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { AppHttpInterceptor } from './interceptors/app-http.interceptor';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
import { DetectionsComponent } from './detections/detections.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FichiersComponent,
    NewFichierComponent,
    LoginComponent,
    AdminTemplateComponent,
    NotAuthorizedComponent,
    DetectionsComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide : HTTP_INTERCEPTORS, useClass: AppHttpInterceptor , multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

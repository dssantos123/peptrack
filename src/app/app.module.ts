import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { LoginComponent } from './login/login.component';
import { StudioComponent } from './studio/studio.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { environment } from '../environments/environment';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    LoginComponent,
    StudioComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
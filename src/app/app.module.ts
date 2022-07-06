import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentnameComponent } from './departmentname/departmentname.component';
import { FacultynameComponent } from './facultyname/facultyname.component';
import { StudentsnameComponent } from './studentsname/studentsname.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentnameComponent,
    FacultynameComponent,
    StudentsnameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

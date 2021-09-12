import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { NewsLetterComponent } from './Components/news-letter/news-letter.component';
import { ProgramsComponent } from './Components/programs/programs.component';
import { FacultyComponent } from './Components/faculty/faculty.component';
import { AdmissionComponent } from './Components/admission/admission.component';
import { ContactUSComponent } from './Components/contact-us/contact-us.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { DummyComponent } from './Components/dummy/dummy.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsLetterComponent,
    ProgramsComponent,
    FacultyComponent,
    AdmissionComponent,
    ContactUSComponent,
    NavbarComponent,
    DummyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

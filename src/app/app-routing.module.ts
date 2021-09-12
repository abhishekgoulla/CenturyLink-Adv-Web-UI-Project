import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmissionComponent } from './Components/admission/admission.component';
import { ContactUSComponent } from './Components/contact-us/contact-us.component';
import { DummyComponent } from './Components/dummy/dummy.component';
import { FacultyComponent } from './Components/faculty/faculty.component';
import { HomeComponent } from './Components/home/home.component';
import { NewsLetterComponent } from './Components/news-letter/news-letter.component';
import { ProgramsComponent } from './Components/programs/programs.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'newsletter',component:NewsLetterComponent},
  {path:'programs',component:ProgramsComponent},
  {path:'faculty',component:FacultyComponent},
  {path:'addmission',component:AdmissionComponent},
  {path:'contactus',component:ContactUSComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

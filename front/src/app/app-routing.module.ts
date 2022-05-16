import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobComponent } from './components/job/job.component';
import { RegisterComponent } from './components/register/register.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import{EventsComponent} from './components/events/events.component';
import { CentersUserComponent } from './components/centers-user/centers-user.component';
import { LoginComponent } from './components/login/login.component';
import { JobUserComponent } from './components/job-user/job-user.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { VolunteerAdminComponent } from './components/volunteer-admin/volunteer-admin.component';
import { VolunteerUserComponent } from './components/volunteer-user/volunteer-user.component';
import { VolunteerFormComponent } from './components/volunteer-form/volunteer-form.component';
import { JobFormComponent } from './components/job-form/job-form.component';


const routes: Routes = [
  {path:'',component:LandingPageComponent},
  {path: 'register',component:RegisterComponent},
  {path:'jobOpportunitiesAdmin',component:JobComponent},
  {path:'events',component:EventsComponent},
  {path:'trainingCenters',component:CentersUserComponent},
  {path:'login',component:LoginComponent},
  {path:'jobOpportunities',component:JobUserComponent},
  {path:'volunteerAdmin',component:VolunteerAdminComponent},
  {path:'volunteerUser',component:VolunteerUserComponent},
  {path:'volunteerForm',component:VolunteerFormComponent},
  {path:'jobForm',component:JobFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

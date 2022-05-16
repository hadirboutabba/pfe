import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';
import { EventsComponent } from './components/events/events.component';
import { RegisterComponent } from './components/register/register.component';
import { JobComponent } from './components/job/job.component';
import { VolunteerAdminComponent } from './components/volunteer-admin/volunteer-admin.component';
import { VolunteerUserComponent } from './components/volunteer-user/volunteer-user.component';
import { JobUserComponent } from './components/job-user/job-user.component';
import { CentersUserComponent } from './components/centers-user/centers-user.component';
import { CentersAdminComponent } from './components/centers-admin/centers-admin.component';
import { AboutComponent } from './components/about/about.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VolunteerFormComponent } from './components/volunteer-form/volunteer-form.component';
import { JobFormComponent } from './components/job-form/job-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ServicesComponent,
    ContactComponent,
    EventsComponent,
    RegisterComponent,
    JobComponent,
    VolunteerAdminComponent,
    VolunteerUserComponent,
    JobUserComponent,
    CentersUserComponent,
    CentersAdminComponent,
    AboutComponent,
    LandingPageComponent,
    VolunteerFormComponent,
    JobFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

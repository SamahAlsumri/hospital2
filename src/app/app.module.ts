import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientComponent } from './patient/patient.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { AdminstrativeComponent } from './adminstrative/adminstrative.component';
import { AddpatientComponent } from './addpatient/addpatient.component';
import { PatientsnamesComponent } from './patientsnames/patientsnames.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { MedicalReportComponent } from './medical-report/medical-report.component';
import { ContactComponent } from './contact/contact.component';
import { PrescriptionComponent } from './prescription/prescription.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    DoctorsComponent,
    AdminstrativeComponent,
    AddpatientComponent,
    PatientsnamesComponent,
    AppointmentComponent,
    MedicalReportComponent,
    ContactComponent,
    PrescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

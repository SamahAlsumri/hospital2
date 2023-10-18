import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorsComponent } from './doctors/doctors.component';
import { PatientComponent } from './patient/patient.component';
import { AdminstrativeComponent } from './adminstrative/adminstrative.component';
import { AddpatientComponent } from './addpatient/addpatient.component';
import { PatientsnamesComponent } from './patientsnames/patientsnames.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { MedicalReportComponent } from './medical-report/medical-report.component';
import { ContactComponent } from './contact/contact.component';
import { PrescriptionComponent } from './prescription/prescription.component';

const routes: Routes = [
  {path:'',component:AdminstrativeComponent},
  {path:'patient',component:PatientComponent},
  {path:'doctors',component:DoctorsComponent},
  {path:'addpatient',component:AddpatientComponent},
  {path:'patientsnames',component:PatientsnamesComponent},
  {path:'appointment',component:AppointmentComponent},
  {path:'MedicalReport',component:MedicalReportComponent},
  {path:'contact',component:ContactComponent},
  {path:'prescription',component:PrescriptionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

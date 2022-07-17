import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentLoginComponent } from './student-login/student-login.component';
import { DemoCompComponent } from './demo-comp/demo-comp.component';
import { BankLoginComponent } from './bank-login/bank-login.component';
import { ManagerLoginComponent } from './manager-login/manager-login.component';
import { ShowAllDetailsComponent } from './show-all-details/show-all-details.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentRegisterComponent } from './student-register/student-register.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { LoanDetailsComponent } from './loan-details/loan-details.component';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { CourseComponent } from './course/course.component';
import { AddressComponent } from './address/address.component';
import { DocumentsComponent } from './documents/documents.component';
import { GuarentorComponent } from './guarentor/guarentor.component';
import { MortgageComponent } from './mortgage/mortgage.component';
import { ShowLoanDataComponent } from './show-loan-data/show-loan-data.component';
import { ShowEmiDetailsComponent } from './show-emi-details/show-emi-details.component';
import { AcceptDocumentComponent } from './accept-document/accept-document.component';
import { RejectDocumentComponent } from './reject-document/reject-document.component';
import { ViewByManagerComponent } from './view-by-manager/view-by-manager.component';
import { ViewLoanApplicationsComponent } from './view-loan-applications/view-loan-applications.component';

@NgModule({
  declarations: [
    StudentLoginComponent,
    DemoCompComponent,
    BankLoginComponent,
    ManagerLoginComponent,
    ShowAllDetailsComponent,
    StudentDashboardComponent,
    StudentDetailsComponent,
    StudentLoginComponent,
    StudentRegisterComponent,
    UserRegisterComponent,
    LoanDetailsComponent,
    ManagerDashboardComponent,
    CourseComponent,
    AddressComponent,
    DocumentsComponent,
    GuarentorComponent,
    MortgageComponent,
    ShowLoanDataComponent,
    ShowEmiDetailsComponent,
    AcceptDocumentComponent,
    RejectDocumentComponent,
    ViewByManagerComponent,
    ViewLoanApplicationsComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class StudentModule { }

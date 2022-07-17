import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { CourseComponent } from './course/course.component';
import { DocumentsComponent } from './documents/documents.component';
import { GuarentorComponent } from './guarentor/guarentor.component';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { MortgageComponent } from './mortgage/mortgage.component';
import { ShowAllDetailsComponent } from './show-all-details/show-all-details.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { ViewByManagerComponent } from './view-by-manager/view-by-manager.component';
import { ViewLoanApplicationsComponent } from './view-loan-applications/view-loan-applications.component';

const routes: Routes = [
  {
    path:'studentDetails',component:StudentDetailsComponent,
    children:[
      {
        path:'course/:studentId',
        component:CourseComponent,
      }
        // children:[
        //   {
        //     path:'course',component:CourseComponent
        //   },
        //   {
        //     path:'address',component:AddressComponent
        //   },
        //   {
        //     path:'documents',component:DocumentsComponent
        //   },
        //   {
        //     path:'guarentor',component:GuarentorComponent
        //   },
        //   {
        //     path:'mortgage',component:MortgageComponent
        //   }
        // ]
        
    ]
  },
  
    // path:'managerDashboard',
    // component:ManagerDashboardComponent,
    // children:
    // [
      { path:'managerDashboard/viewLoanApplications',
      component:ViewLoanApplicationsComponent,
      children:
      [
        { path:'viewByManager/:studentId',
          component:ViewByManagerComponent
        }
      ]
      }
    ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }

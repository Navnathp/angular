import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

import { FullComponent } from './layouts/full/full.component';
import { BankLoginComponent } from './student/bank-login/bank-login.component';
import { LoanDetailsComponent } from './student/loan-details/loan-details.component';
import { LoanOfficerDashboardComponent } from './student/loan-officer-dashboard/loan-officer-dashboard.component';
import { ManagerDashboardComponent } from './student/manager-dashboard/manager-dashboard.component';
import { ManagerLoginComponent } from './student/manager-login/manager-login.component';
import { ShowAllDetailsComponent } from './student/show-all-details/show-all-details.component';
import { StudentDashboardComponent } from './student/student-dashboard/student-dashboard.component';
import { StudentDetailsComponent } from './student/student-details/student-details.component';
import { StudentLoginComponent } from './student/student-login/student-login.component';
import { StudentRegisterComponent } from './student/student-register/student-register.component';
import { UserRegisterComponent } from './student/user-register/user-register.component';
import { CourseComponent } from './student/course/course.component';
import { AddressComponent } from './student/address/address.component';
import { DocumentsComponent } from './student/documents/documents.component';
import { GuarentorComponent } from './student/guarentor/guarentor.component';
import { MortgageComponent } from './student/mortgage/mortgage.component';
import { ShowLoanDataComponent } from './student/show-loan-data/show-loan-data.component';
import { ShowEmiDetailsComponent } from './student/show-emi-details/show-emi-details.component';
import { ViewByManagerComponent } from './student/view-by-manager/view-by-manager.component';

export const Approutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'about',
        loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
      },
      {
        path: 'component',
        loadChildren: () => import('./component/component.module').then(m => m.ComponentsModule)
      }
      ,
      {
        path:'banklogin',
        component:BankLoginComponent
      },
      {
        path:'managerlogin',
        component:ManagerLoginComponent
      },
      {
        path:'studentlogin',
        component:StudentLoginComponent
      },
      {
        path:'studentlogin/userRegister',
        component:UserRegisterComponent
      },
      {
        path:'studentlogin/studentRegister',
        component:StudentRegisterComponent
      },
      {
        path:'studentRegister',
        component:StudentRegisterComponent
      },
      {
        path:'studentDashboard/studentRegister',
        component:StudentRegisterComponent
      },
      {
        path:'studentlogin/userRegister/studentlogin',
        component:StudentLoginComponent
      },
      {
        path:'studentlogin/studentDashboard',
        component:StudentDashboardComponent
      },
      {
        path:'studentDashboard',
        component:StudentDashboardComponent
      },
      {
        path:'managerDashboard',
        component:ManagerDashboardComponent,
      },
      {
        path:'studentlogin/studentDashboard/studentRegister',
        component:StudentRegisterComponent
      },
      {
        path:'banklogin/loanOfficerDashboard',
        component:LoanOfficerDashboardComponent
      },
      {
        path:'loanOfficerDashboard',
        component:LoanOfficerDashboardComponent
      },
      {
        path:'banklogin/loanOfficerDashboard/studentDetails',
        component:StudentDetailsComponent
      },
      {
        path:'studentDetails',
        component:StudentDetailsComponent
      },
      {
        path:'loanDetails',
        component:LoanDetailsComponent
      },
      {
        path:'banklogin/loanOfficerDashboard/loanDetails',
        component:LoanDetailsComponent
      },
      {
        path:'loanData',
        component:ShowLoanDataComponent,
        children:
        [
          {
            path:'emiDetails/:loanId',
            component:ShowEmiDetailsComponent
          }
        ]
      },
      
      // {
      //   path:'studentDetails/showAllDetails/:studentId',
      //   component:ShowAllDetailsComponent,
      //   children:[
      //     {
      //       path:'studentDetails/showAllDetails/:studentId/course',component:CourseComponent
      //     },
      //     {
      //       path:'address',component:AddressComponent
      //     },
      //     {
      //       path:'documents',component:DocumentsComponent
      //     },
      //     {
      //       path:'guarentor',component:GuarentorComponent
      //     },
      //     {
      //       path:'mortgage',component:MortgageComponent
      //     }
      //   ]
      //   }
      //   {
      //     path:'banklogin/loanOfficerDashboard/showAllDetails',
      //     component:ShowAllDetailsComponent
      //   }
    ]
  }
  // {
  //   path: '**',
  //   redirectTo: '/starter'
  // }
];

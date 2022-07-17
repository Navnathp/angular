import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loan-officer-dashboard',
  templateUrl: './loan-officer-dashboard.component.html',
  styleUrls: ['./loan-officer-dashboard.component.scss']
})
export class LoanOfficerDashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  studentDetails(){
    this.router.navigate(['studentDetails']);
  }

  loanDetails(){
    this.router.navigate(['loanDetails']);
  }
  logout(){
    this.router.navigate(['']);
  }
  ShowLoanDetails(){
    this.router.navigate(['loanData']);
  }

}
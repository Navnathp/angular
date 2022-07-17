import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoanDetails } from 'src/app/model/loan-details';
import { EmiDetails } from 'src/app/model/emi-details';
import { CommonService } from 'src/app/service/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loan-details',
  templateUrl: './loan-details.component.html',
  styleUrls: ['./loan-details.component.scss']
})
export class LoanDetailsComponent implements OnInit {

  constructor(private fb:FormBuilder,private commonService:CommonService,private router:Router) { }
  loanDetailsForm:FormGroup;

//   emiDetails:EmiDetails={
//     emidId:0,
//     emiAmountMonthly:0,
//     nextEmiDueDate:'',
//     previousEmiStatus:'',
// }

  ngOnInit(): void {
    this.loanDetailsForm=this.fb.group({
    loanId: [],
    studentId:[],
    studentName:[],
    email:[],
    loanAmount:[],
    rateOfInterest:[],
    tenure:[],
    totalAmountToBePaid:[],
    processingFees:[],
    totalInterest:[],
    sanctionDate:[],
    emidetails:this.fb.group({
      emiAmountMonthly:[],
      nextEmiDueDate:[],
      previousEmiStatus:[]
    })
    })
  }

  loanDetails:LoanDetails ={
    loanId: 0,
    studentId:0,
    studentName:'',
    email:'',
    loanAmount: 0,
    rateOfInterest: 0,
    tenure: 0,
    totalAmountToBePaid: 0,
    processingFees: 0,
    totalInterest: 0,
    sanctionDate: '',
    emidetails: {
      emiId:0,
      emiAmountMonthly:0,
      nextEmiDueDate:'',
      previousEmiStatus:'',
    }
  }

  submiLoanDetails(){
    // console.log(this.loanDetailsForm.value);
    // this.loanDetails.loanId=this.loanDetailsForm.get('loanId').value;
    // this.loanDetails.loanAmount=this.loanDetailsForm.get('loanAmount').value;
    // this.loanDetails.rateOfInterest=this.loanDetailsForm.get('rateOfInterest').value;
    // this.loanDetails.tenure=this.loanDetailsForm.get('tenure').value;
    // this.loanDetails.totalAmountToBePaid=this.loanDetailsForm.get('totalAmountToBePaid').value;
    // this.loanDetails.processingFees=this.loanDetailsForm.get('processingFees').value;
    // this.loanDetails.totalInterest=this.loanDetailsForm.get('totalInterest').value;
    // this.loanDetails.sanctionDate=this.loanDetailsForm.get('sanctionDate').value;

    // this.loanDetails.emidetails.emiAmountMonthly=this.loanDetailsForm.get('emidetails').get('emiAmountMonthly').value;
    // this.loanDetails.emidetails.nextEmiDueDate=this.loanDetailsForm.get('emidetails').get('nextEmiDueDate').value;
    // this.loanDetails.emidetails.previousEmiStatus=this.loanDetailsForm.get('emidetails').get('previousEmiStatus').value;

    this.commonService.postLoanDetails(this.loanDetailsForm.value).subscribe();
    this.router.navigate(['loanOfficerDashboard']);
    // this.commonService.postEmiDetails(this.emiDetails).subscribe();
  }

  loanAmount:number;
  rateOfInterest:number;
  tenure:number;
  totalInterest:number;
  totalAmountToBePaid:number;
  emiAmountMonthly:number;

  calculateInterest($event:any){
    this.totalInterest=Number(this.loanAmount * (this.rateOfInterest / 100) * (this.tenure)/12);
    this.totalAmountToBePaid =Number(this.loanAmount) +(this.totalInterest);
    this.emiAmountMonthly=(this.totalAmountToBePaid )/(this.tenure);
  }
}

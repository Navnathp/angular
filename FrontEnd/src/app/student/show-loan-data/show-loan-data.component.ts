import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LoanDetails } from 'src/app/model/loan-details';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-show-loan-data',
  templateUrl: './show-loan-data.component.html',
  styleUrls: ['./show-loan-data.component.scss']
})
export class ShowLoanDataComponent implements OnInit {

  constructor(private commonService: CommonService,private location:Location) { }

  loanList:LoanDetails[];

  ngOnInit(): void {
    this.commonService.getAllLoanDetails().subscribe((data:LoanDetails[]) =>{
      this.loanList=data;
  })
  }
  deleteData(loanId:number){
    this.commonService.deleteLoanDetail(loanId).subscribe();
    window.location.reload();
  }
  
  callBack(){
    this.location.back();
  }

}

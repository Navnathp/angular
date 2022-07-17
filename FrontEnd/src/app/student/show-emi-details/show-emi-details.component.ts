import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoanDetails } from 'src/app/model/loan-details';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-show-emi-details',
  templateUrl: './show-emi-details.component.html',
  styleUrls: ['./show-emi-details.component.scss']
})
export class ShowEmiDetailsComponent implements OnInit {

  constructor(private router: ActivatedRoute, private commonService: CommonService,private locations: Location) { }

  loanDetailObj:LoanDetails;

  ngOnInit(): void {


    this.router.paramMap.subscribe(param => {
      this.commonService.getSingleLoanDetail(parseInt(param.get('loanId'))).subscribe(data => {
        this.loanDetailObj=data;
      })
    })
  }
  callBack(){
    this.locations.back();
  }
}

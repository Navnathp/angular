import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emi-calculator',
  templateUrl: './emi-calculator.component.html',
  styleUrls: ['./emi-calculator.component.scss']
})
export class EmiCalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

    loanAmount: number=200000;
    tenure: number=12;
    interest: number=6;
    emi: number = 0;
    cal() {
      var outstandingAmount =
        Number(this.loanAmount) +
        Number(this.loanAmount * (this.interest / 100) * this.tenure);
      this.emi = outstandingAmount / this.tenure;
    }
  }


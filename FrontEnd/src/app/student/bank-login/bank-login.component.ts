import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-bank-login',
  templateUrl: './bank-login.component.html',
  styleUrls: ['./bank-login.component.scss']
})
export class BankLoginComponent implements OnInit {

  constructor(private routes: Router,private formbuilder: FormBuilder,private commonService:CommonService) { }

  loginForm:FormGroup;

  ngOnInit(): void {
    this.loginForm=this.formbuilder.group({
      username: [],
      password: []
    })
  }
  
  login(){
    this.commonService.getAllAdmins().subscribe(list => {

      for(let a of list)
      {
          if(this.loginForm.get('username').value==a.username &&
          this.loginForm.get('password').value==a.password)
          {

            alert('Login Successfull')
            this.routes.navigate(['loanOfficerDashboard']);
          }
          else
          {
            this.routes.navigate(['banklogin']);
          }
      }
    })
  
}

  

}

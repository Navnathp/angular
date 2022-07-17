import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-manager-login',
  templateUrl: './manager-login.component.html',
  styleUrls: ['./manager-login.component.scss']
})
export class ManagerLoginComponent implements OnInit {

  constructor(private fb:FormBuilder,private commonService:CommonService,private router:Router) { }
  managerloginForm:FormGroup;

  ngOnInit(): void {
    this.managerloginForm=this.fb.group({
      username: [],
      password: []
    })
  }

  loginManager(){
    this.commonService.getAllManagers().subscribe(list=>{

      for(let m of list)
      {
        if(this.managerloginForm.get('username').value==m.username && this.managerloginForm.get('password').value==m.password)
        {
           this.router.navigate(['managerDashboard']);
        }
      }
     })
     this.router.navigate(['managerlogin']);
  }
}

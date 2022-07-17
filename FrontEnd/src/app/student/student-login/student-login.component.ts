import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.scss']
})
export class StudentLoginComponent implements OnInit {

  constructor(private fb:FormBuilder,private router:Router,private commonService:CommonService) { }

  studentloginForm:FormGroup;

  ngOnInit(): void {
    this.studentloginForm=this.fb.group({
      email: [],
      password: []
    })
  }

  loginStudent(){
    
    this.commonService.getAllUsers().subscribe(list=>{

      for(let u of list)
      {
        if(this.studentloginForm.get('email').value==u.email && this.studentloginForm.get('password').value==u.password)
        {
           this.router.navigate(['studentDashboard']);
        }
      }
     })
     this.router.navigate(['studentlogin']);
  }

  
}

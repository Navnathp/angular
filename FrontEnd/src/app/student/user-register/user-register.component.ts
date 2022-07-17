import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

  constructor(private fb: FormBuilder,private router:Router,private commonService:CommonService) { }

  userRegisterForm:FormGroup;

  ngOnInit(): void {
    this.userRegisterForm = this.fb.group({

    studentId: [],
    studentName: [],
    dob: [],
    gender: [],
    email: [],
    mobNo: [],
    password: [],
    })
  }

  submitUser(){
    this.commonService.postNewStudent(this.userRegisterForm.value).subscribe();
    this.router.navigate(['studentlogin']);
    console.log(this.userRegisterForm.value);
  }
}

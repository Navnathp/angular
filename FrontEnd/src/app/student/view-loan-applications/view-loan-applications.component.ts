import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/model/student';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-view-loan-applications',
  templateUrl: './view-loan-applications.component.html',
  styleUrls: ['./view-loan-applications.component.scss']
})
export class ViewLoanApplicationsComponent implements OnInit {

  constructor(private commonService:CommonService,private location:Location,private router:Router) { }
  studentList:Student[];
  
  ngOnInit(): void {
    this.commonService.getAllStudents().subscribe((data:Student[]) =>{
      this.studentList=data;
    })

  }

  deleteData(id:number){
    alert("Confirm Delete");
    this.commonService.deleteStudent(id).subscribe();
    window.location.reload();
  }

  callBack(){
    this.location.back();
  }
  logout(){
    this.router.navigate(['']);
  }

  acceptDocument(){

  }

  rejectDocument(){
    
  }

}

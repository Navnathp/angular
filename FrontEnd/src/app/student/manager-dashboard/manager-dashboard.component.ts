import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/model/student';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-manager-dashboard',
  templateUrl: './manager-dashboard.component.html',
  styleUrls: ['./manager-dashboard.component.scss']
})
export class ManagerDashboardComponent implements OnInit {


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

 
}

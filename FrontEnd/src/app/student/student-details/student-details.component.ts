import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/service/common.service';
import { Student } from 'src/app/model/student';
import { Location } from '@angular/common';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {

  constructor(private commonService:CommonService,private location:Location) { }
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

}

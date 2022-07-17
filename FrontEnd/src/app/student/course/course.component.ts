import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/model/student';
import { Course } from 'src/app/model/course';
import { CommonService } from 'src/app/service/common.service';
import { Documents } from 'src/app/model/documents';
import { Guarentor } from 'src/app/model/guarentor';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  constructor(private common:CommonService,private location:Location,private routes:ActivatedRoute) { }
  studentObj:Student;
  retrievedDoc: any;
  retrievedGua:any;
  reader=new FileReader();
  ngOnInit(): void {
    console.log(this.studentObj)
    this.routes.paramMap.subscribe(param1=>{
      this.common.getStudent(parseInt(param1.get('studentId'))).subscribe(data=>{
        this.studentObj=data;
      })
    })
    
  }
deleteData(cid:number)
{

}
showDocuments()
{
  console.log(this.studentObj.documents);
  
  this.common.getDocument(this.studentObj.documents.documentId).subscribe((d:Documents) => {
    this.retrievedDoc=d;
  })
  console.log(this.studentObj.guarentor);
  this.common.getGuarentor(this.studentObj.guarentor.guarentorId).subscribe((g:Guarentor) => {
    this.retrievedGua=g;
  })
}

callBack(){
  this.location.back();
}
}

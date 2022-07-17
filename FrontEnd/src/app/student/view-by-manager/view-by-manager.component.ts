import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Documents } from 'src/app/model/documents';
import { Guarentor } from 'src/app/model/guarentor';
import { Student } from 'src/app/model/student';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-view-by-manager',
  templateUrl: './view-by-manager.component.html',
  styleUrls: ['./view-by-manager.component.scss']
})
export class ViewByManagerComponent implements OnInit {

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

approveLoan(){
  console.log(this.studentObj.studentId);

  this.studentObj.loanStatus='approved';
  this.common.changeLoanStatus(this.studentObj.studentId,this.studentObj.loanStatus,this.studentObj).subscribe();
  this.common.getStudentLoanDetail(this.studentObj.studentId).subscribe();
}

rejectDocument(){
  this.studentObj.loanStatus='rejected';
  this.common.changeLoanStatus(this.studentObj.studentId,this.studentObj.loanStatus,this.studentObj).subscribe();
  this.common.sendRejectionMail(this.studentObj.studentId).subscribe();
}
}

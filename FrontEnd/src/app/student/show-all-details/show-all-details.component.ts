import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/model/student';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-show-all-details',
  templateUrl: './show-all-details.component.html',
  styleUrls: ['./show-all-details.component.scss']
})
export class ShowAllDetailsComponent implements OnInit {

  constructor(private router:Router,private routes:ActivatedRoute,private common:CommonService) { }
  studentObj:Student;

  ngOnInit(): void {
    console.log(this.studentObj)
    this.routes.paramMap.subscribe(param1=>{
      this.common.getStudent(parseInt(param1.get('studentId'))).subscribe(data=>{
        this.studentObj=data;
      })
    })
    
  }
  navCourse()
  {
    this.router.navigate(['studentDetails/showAllDetails/:studentId','course'])
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.scss']
})
export class StudentRegisterComponent implements OnInit {

  step:any=1 ;
  constructor(private fb: FormBuilder,private commonService:CommonService,private router:Router) { }

  studentRegisterForm:FormGroup;

  selectedadharcard:any;
  selectedpancard:any;
  selectedaddressProof:any;
  selectedcollegeBonafied:any;
  selectedsignature:any;
  selectedmarksheet:any;
  selectedphoto:any;

  selectedincomeProof:any;
  selectedadharcardG:any;
  selectedpancardG:any;
  selectedbankStatement:any;

  selectedmpropertyProof:any;

 

  ngOnInit(): void {
    this.studentRegisterForm = this.fb.group({

    studentId: [],
    studentName: [],
    dob: [],
    gender: [],
    email: ['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    mobNo: ['',[Validators.required,
        Validators.pattern("/^[7-9]\d{9}$/"),
        Validators.minLength(10), Validators.maxLength(10)]],
    password: [],
    loanStatus:[],
    course:this.fb.group({
    courseId: [],
    courseName: [],
    courseType: [],
    college: [],
    university: [],
    courseDuration: [],
    collegeAddress: [],
    }),
    address: this.fb.group({
    addressId: [],
    areaName:[],
    cityName:[],
    pincode:[],
    }),
    documents:this.fb.group({
      doucmentId:[],
      bank:this.fb.group({
        bankId:[],
        bankName:[],
        ifscCode:[],
        micrCode:[],
        bankContactNo:[],
        bankEmail:[],
        bankAddress:[],
      })
    }),
    guarentor:this.fb.group({
      guarentorId:[],
      guarentorName:[],
      profession:[],
      guarentorAddress:[],
    }),
    mortgage:this.fb.group({
      mid: [],
      mpropertyValue: [],
      mpropertyType: [],
      mloanonProperty:[],
    })
  })
  
  }

  onselectedFile1(event:any){this.selectedadharcard=event.target.files[0];};
  onselectedFile2(event:any){this.selectedpancard=event.target.files[0];}
  onselectedFile3(event:any){this.selectedaddressProof=event.target.files[0];}
  onselectedFile4(event:any){this.selectedcollegeBonafied=event.target.files[0];}
  onselectedFile5(event:any){this.selectedsignature=event.target.files[0];}
  onselectedFile6(event:any){this.selectedmarksheet=event.target.files[0];}
  onselectedFile7(event:any){this.selectedphoto=event.target.files[0];}
  onselectedFile8(event:any){this.selectedincomeProof=event.target.files[0];}
  onselectedFile9(event:any){this.selectedadharcardG=event.target.files[0];}
  onselectedFile10(event:any){this.selectedpancardG=event.target.files[0];}
  onselectedFile11(event:any){this.selectedbankStatement=event.target.files[0];}
  onselectedFile12(event:any){this.selectedmpropertyProof=event.target.files[0];}


  submit(){
    this.step=this.step + 1;

    const document1=JSON.stringify(this.studentRegisterForm.value);
    // create object formdata
      const uploadDocument= new FormData();
    // store file formdata

      uploadDocument.append("studentDetails",document1);

      uploadDocument.append("adharcard",this.selectedadharcard);
      uploadDocument.append("pancard",this.selectedpancard);
      uploadDocument.append("addressProof",this.selectedaddressProof);
      uploadDocument.append("collegeBonafied",this.selectedcollegeBonafied);

      uploadDocument.append("signature",this.selectedsignature);
      uploadDocument.append("marksheet",this.selectedmarksheet);
      uploadDocument.append("photo",this.selectedphoto);

      uploadDocument.append("incomeProof",this.selectedincomeProof);
      uploadDocument.append("adharcardG",this.selectedadharcardG);
      uploadDocument.append("pancardG",this.selectedpancardG);
      uploadDocument.append("bankStatement",this.selectedbankStatement);

      uploadDocument.append("mortgageDocuments",this.selectedmpropertyProof);
    
    this.commonService.postStudent(uploadDocument).subscribe();

   // this.snackbar.open(err.error.message, "close ", { duration: 2500 });

    console.log(this.studentRegisterForm.value);

    if(this.step==8){
      this.router.navigate(['studentDashboard']);
    }
  }

  previous(){
    this.step=this.step - 1;
  }

  //var to calculate age
  dob:Date
  age:number;

  public calculateAge($event: any)
  {
   if (this.dob) {
     //convert date again to type Date
     const bdate = new Date(this.dob);
     const timeDiff = Math.abs(Date.now() - bdate.getTime() );
     this.age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
   }
 }

}

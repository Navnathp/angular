import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BankAdmin } from 'src/app/model/bank-admin';
import { BankManager } from 'src/app/model/bank-manager';
import { Course } from 'src/app/model/course';
import { LoanDetails } from 'src/app/model/loan-details';
import { Student } from 'src/app/model/student';
import { Observable } from 'rxjs';
import { EmiDetails } from 'src/app/model/emi-details';
import { User } from 'src/app/model/user';
import { Documents } from 'src/app/model/documents';
import { Guarentor } from 'src/app/model/guarentor';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private httpClient: HttpClient) { }

  url: string = 'http://localhost:8082/';

  student:Student = {
    studentId: 0,
    studentName: '',
    dob: '',
    gender: '',
    email: '',
    mobNo: 0,
    password: '',
    loanStatus:'',
    course:{
    courseId: 0,
    courseName: '',
    courseType: '',
    college: '',
    university: '',
    courseDuration: 0,
    collegeAddress: '',
    },
    address:{
    addressId: 0,
    areaName:'',
    cityName:'',
    pincode:0,
    },
    documents: {
      documentId:0,
      adharcard:[],
      pancard:[],
      addressProof:[],
      collegeBonafied:[],
      signature:[],
      marksheet:[],
      photo:[],
      bank:{
        bankId:0,
        bankName:'',
        ifscCode:'',
        micrCode:'',
        bankContactNo:0,
        bankEmail:'',
        bankAddress:'',
      }
    },
    guarentor:{
      guarentorId:0,
      guarentorName:'',
      profession:'',
      incomeProof:[],
      adharcard:[],
      pancard:[],
      bankStatement:[],
      guarentorAddress:'',
    },
    mortgage:{
      mid: 0,
      mpropertyValue: '',
      mpropertyProof:[],
      mpropertyType: '',
      mloanonProperty:'',
  }
    }

    loanDetails:LoanDetails ={
      loanId: 0,
      studentId:0,
	    studentName:'',
	    email:'',
      loanAmount: 0,
      rateOfInterest: 0,
      tenure: 0,
      totalAmountToBePaid: 0,
      processingFees: 0,
      totalInterest: 0,
      sanctionDate: '',
      emidetails: {
        emiId:0,
        emiAmountMonthly:0,
        nextEmiDueDate:'',
        previousEmiStatus:'',
      }
    }

    bankAdmin:BankAdmin ={
      adminId: 0,
      username: '',
      password: ''
    }

    bankManager:BankManager ={
      managerId: 0,
      username: '',
      password: ''
    }

    postStudent(stu:any) {
      console.log("In Common Service"+stu);
      return this.httpClient.post(this.url+"addDemoStudent",stu);
    }

    getAllStudents():Observable<Student[]>{
      return this.httpClient.get<Student[]>(this.url+"getStudents");
    }

    deleteStudent(id:number){
      return this.httpClient.delete<Student>(this.url+"deleteStudent/"+id);
    }
    //Loan Details
    postLoanDetails(loandetails:LoanDetails){
      console.log(loandetails);
      return this.httpClient.post(this.url+"addLoanDetails",loandetails);
    }

    postNewStudent(user:User)
    {
      return this.httpClient.post(this.url+"addNewUser",user);
    }
    getAllUsers():Observable<User[]>
    {
      return this.httpClient.get<User[]>(this.url+"getUsers");
    }
    getAllManagers():Observable<BankManager[]>
    {
      return this.httpClient.get<BankManager[]>(this.url+"getManagers");
    }
    getAllAdmins():Observable<BankAdmin[]>
    {
      return this.httpClient.get<BankAdmin[]>(this.url+"getAdmins");
    }
    getStudent(sid:number):Observable<Student>
    {
      return this.httpClient.get<Student>(this.url+"getSingleStudent/"+sid);
    }
    getDocument(did:number):Observable<Documents>
    {
     
      return this.httpClient.get<Documents>(this.url+"getDocument/"+did);
    }
    getGuarentor(gid:number):Observable<Guarentor>
    {
      return this.httpClient.get<Guarentor>(this.url+"getGuarentor/"+gid);
    }
    getAllLoanDetails():Observable<LoanDetails[]>{
      return this.httpClient.get<LoanDetails[]>(this.url+"getAllLoanDetails");
    }

    getSingleLoanDetail(id:number):Observable<LoanDetails>{
      return this.httpClient.get<LoanDetails>(this.url+"getSingleLoan/"+id);
    }

    deleteLoanDetail(id:number){
      return this.httpClient.delete<LoanDetails>(this.url+"deleteLoan/"+id);
    }

    changeLoanStatus(studentId:number,loanStatus:string,student:Student){
      return this.httpClient.patch(this.url+"updateByPatch/"+studentId+"/"+loanStatus,student);
    }

    getStudentLoanDetail(studentId:number):Observable<LoanDetails>{
      return this.httpClient.get<LoanDetails>(this.url+"getStudentLoanDetail/"+studentId);
    }

    sendRejectionMail(studentId:number):Observable<LoanDetails>{
      return this.httpClient.get<LoanDetails>(this.url+"sendRejectionMail/"+studentId);
    }
    // postEmiDetails(emi:EmiDetails){
    //   return this.httpClient.post<EmiDetails>(this.url+"addLoanDetails",emi)
    // }
  }

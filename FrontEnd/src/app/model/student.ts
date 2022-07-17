import { Address } from "./address";
import { Course } from "./course";
import { Documents } from "./documents";
import { Guarentor } from "./guarentor";
import { Mortgage } from "./mortgage";

export class Student {
    studentId:number;
    studentName:string;
    dob:string;
    gender:string;
    email:string;
    mobNo:number;
    password:string;
    loanStatus:string;
    course:Course;
    address:Address;
    documents:Documents;
    guarentor:Guarentor;
    mortgage:Mortgage
}

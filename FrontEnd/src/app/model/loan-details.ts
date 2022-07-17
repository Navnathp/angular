import { StyleCompiler } from "@angular/compiler";
import { EmiDetails } from "./emi-details";

export class LoanDetails {
    loanId: number;
    studentId:number;
	studentName:string;
	email:string;
    loanAmount:number;
    rateOfInterest:number;
    tenure:number;
    totalAmountToBePaid:number;
    processingFees:number;
    totalInterest:number;
    sanctionDate:string;
    emidetails:EmiDetails;
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dAccno="";
  dPswd="";
  dAmount="";
  wAccno="";
  wPswd="";
  wAmount="";
  depositform=this.fb.group({
    acno:['',[Validators.required,Validators.minLength(4),Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    amount:['',[Validators.required,Validators.pattern('[0-9]*')]]
  })
  withdrawform=this.fb.group({
    acno:['',[Validators.required,Validators.minLength(4),Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    amount:['',[Validators.required,Validators.pattern('[0-9]*')]]
  })
  user=this.dataService.currentUser;
  constructor(private dataService:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
 deposit(){
   if(this.depositform.valid){
   var accno=this.depositform.value.acno;
   var pswd=this.depositform.value.pswd;
   var amount=this.depositform.value.amount;
   const result = this.dataService.deposit(accno,pswd,amount)
   if(result){
      alert("The given amount"+amount+"  credited... and new balance is:"+result);
   }
  }
  else{
    alert("invalid form");
  }
 }
 withdraw(){
  if(this.withdrawform.valid){
  var accno=this.withdrawform.value.acno;
  var pswd=this.withdrawform.value.pswd;
  var amount=this.withdrawform.value.amount;
  const result = this.dataService.withdraw(accno,pswd,amount)
  if(result){
     alert("The given amount"+amount+" debited.... and new balance is:"+result);
  }
  }
  else{
    alert("invalid form");
  }
}
}

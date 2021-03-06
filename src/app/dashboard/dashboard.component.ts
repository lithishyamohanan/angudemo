import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  user:any;
  acno:any;
  lDate : Date= new Date()
  constructor(private dataService:DataService,private fb:FormBuilder,private router:Router) { 
    this.user=localStorage.getItem("name")
  }

  ngOnInit(): void {
  }
 deposit(){
   if(this.depositform.valid){
   var accno=this.depositform.value.acno;
   var pswd=this.depositform.value.pswd;
   var amount=this.depositform.value.amount;
   this.dataService.deposit(accno,pswd,amount)
   .subscribe((result:any)=>{
    if(result){
      alert(result.message);
    }
  },
    (result:any)=>{
     alert(result.error.message)
    })
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
  this.dataService.withdraw(accno,pswd,amount)
  .subscribe((result:any)=>{
    if(result){
      alert(result.message);
    }
  },
    (result)=>{
     alert(result.error.message)
    })
  }
  else{
    alert("invalid form");
  }
}
onDelete(event:any){
  this.dataService.deleteAccDetails(event)
  .subscribe((result:any)=>{
    if(result){
      alert(result.message);
      this.router.navigateByUrl("")
    }
  },
  (result:any)=>{
    alert(result.error.message)
   })
}
onCancel(){
  this.acno=""
}
deleteAcc(){
 this.acno= localStorage.getItem("acno")
}
}

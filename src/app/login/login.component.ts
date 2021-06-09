import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim="your perfect banking partner";
  
loginform=this.fb.group({
  acno:['',[Validators.required,Validators.minLength(4),Validators.pattern('[0-9]*')]],
  pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
})

 
  constructor(private router:Router,private dataService:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  // accnoChange(event:any){
  //   this.accno=event.target.value;
  //   console.log(this.accno);
  // }
  // pswdChange(event:any){
  //   this.pswd=event.target.value;
  //   console.log(this.pswd);
  // }
login(){
 if(this.loginform.valid){
  var acno=this.loginform.value.acno;
  var pswd=this.loginform.value.pswd;
   this.dataService.login(acno,pswd)
   .subscribe((result:any)=>{
    if(result){
      alert(result.message);
      localStorage.setItem("name",result.name);
      localStorage.setItem("acno",result.acno);
      this.router.navigateByUrl("dashboard");
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
register(){
  this.router.navigateByUrl("register");
}
}

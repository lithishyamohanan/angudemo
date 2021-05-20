import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim="your perfect banking partner";
  acno="account number please";
  pswd="";
 
  constructor(private router:Router,private dataService:DataService) { }

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
 
  var acno=this.acno;
  var pswd=this.pswd;
  const result = this.dataService.login(acno,pswd)
  if(result){
    alert("login successful");
     this.router.navigateByUrl("dashboard");
  }
}
register(){
  this.router.navigateByUrl("register");
}
}

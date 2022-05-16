import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  signupform: any;

  constructor(private authserv :AuthService ,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.signupform =this.formBuilder.group({

      FirstName:['',],
      LastName:['',],
      mail:['',], 
      password:['',],
      phone:['',],
    })
  }
  onSignup(){
    console.log("azerty",this.signupform.value)
     this.authserv.signup(this.signupform.value).subscribe(user=>{console.log( this.signupform.value)})
     this.signupform.reset;
     alert("your register is successful");
    }

}

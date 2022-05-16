import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginform!:FormGroup;
  constructor(private authserv :AuthService ,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginform =this.formBuilder.group({

      mail:['',], 
      password:['',]
    })
  }
  onLogin(){
    console.log("azerty",this.loginform.value)
     this.authserv.login(this.loginform.value).subscribe(user=>{console.log("userfron back",user.user.role)})
     }

}

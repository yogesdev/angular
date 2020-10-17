import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'; 
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginserv :LoginService,private router: Router) { }

  ngOnInit(): void {
  }
  login ={
    email : '',
    password : ''
  };
  loginForm = new FormGroup({
    email:new FormControl(null),
    password:new FormControl(null)
  });
  adminLogin(){
    this.login.email = this.loginForm.value.email;
    this.login.password = this.loginForm.value.password;
    console.log(this.login);
    this.loginserv.loginAdmin(this.login).subscribe(
      (data:any)=>{
        console.log(data);
        if(data.access_token && data.userid){          
          this.router.navigate(['/admin/campaigns']);
          localStorage.setItem('jwt_token', JSON.stringify(data));
        
        }
      }
    );
  }
}

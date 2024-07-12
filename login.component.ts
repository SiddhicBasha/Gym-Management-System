import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../login/login.service';
import { CommonModule, getLocaleExtraDayPeriodRules } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';




@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

  firstname: string = '';
  password: string = '';

  isLogin: boolean = true;
  errorMessage: string = "";


  user: any;
  constructor(private router: Router, private http: HttpClient, private userService: LoginService, private us: LoginService ) { }

  login() {
    console.log(this.firstname);
    console.log(this.password);
    let bodyData = {
      firstname: this.firstname,
      password: this.password,
    };
    this.http.post("http://localhost:9992/cust/login", bodyData).subscribe((resultData: any) => {
      console.log(resultData);

      if (resultData.status==200) {
        if (this.firstname == "basha") {
          localStorage.setItem('username',this.firstname);
          this.router.navigateByUrl('/dash-admin');
        }
        else {
          this.userService.user = { firstname: resultData.message };
          console.log(this.userService.getUser());
          localStorage.setItem("username", this.firstname);

          this.router.navigateByUrl('/dash-cus');
          this.us.setvalidate(this.firstname)
        }

      }
      else {
        alert("Incorrect Username or Password");
        console.log("Error login");
      }
    });
  }

}
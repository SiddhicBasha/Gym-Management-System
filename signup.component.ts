import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  firstname: string = "";
  password: string = "";
  email: string = "";
  mobile: string = "";

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  register() {
    let bodyData =
    {
      "firstname": this.firstname,
      "password": this.password,
      "email": this.email,
      "mobile": this.mobile,
    };
    this.http.post("http://localhost:9992/cust/create", bodyData).subscribe((resultData: any) => {
      console.log(resultData);
      if(resultData.message == "Username already exists")
        {
          alert(resultData.message);
          this.clearFields();
        }
        else{
          if(this.email)
            {
              alert("Customer Registered Successfully");
              this.clearFields();
            }
            else{
              alert("Enter valid email address");
            }
        }
    });
  }

  save() {
    this.register();
  }

  clearFields() {
    document.querySelectorAll('.inputs input').forEach(input => {
        if (input instanceof HTMLInputElement) {
            input.value = '';
        }
    });
}

}


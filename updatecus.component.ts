import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-updatecus',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule],
  templateUrl: './updatecus.component.html',
  styleUrl: './updatecus.component.css'
})
export class UpdatecusComponent  {
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
      firstname: localStorage.getItem("username"),
      password: this.password,
      email: this.email,
      mobile: this.mobile,
    };
    console.log(bodyData)
    this.http.post<any>("http://localhost:9992/cust/updatecus", bodyData).subscribe((resultData: any) => {
      console.log(resultData);
        if(resultData.message == "Updated post successfully")
          {
            alert("Customer Updated UnSuccessfully")
          }
          else{
            alert("Update successful");
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
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { MancusService } from './mancus.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-mancus',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './mancus.component.html',
  styleUrl: './mancus.component.css'
})
export class MancusComponent {
  form: FormGroup  = this.formBuilder.group({
    userName: ['', [Validators.required]]
  })

  customers: any = {};
  ngOnInit(): void {
    console.log("hello");
    this.mancusService.getAllCustomers().subscribe({
      next: (res) => {
        this.customers = res.customers;
        console.log(this.customers);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
   constructor(private mancusService: MancusService, private http: HttpClient, private formBuilder: FormBuilder) { console.log("hi");}
    deleteCus() {
      this.http.post("http://localhost:9992/work/deleteWorkout", this.form.value).subscribe((resultData: any) => {
        console.log(resultData);
        alert("Workout Deleted Successfully")
      });
    }
}

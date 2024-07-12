import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ViewworkService } from './viewwork.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-viewwork',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './viewwork.component.html',
  styleUrl: './viewwork.component.css'
})
export class ViewworkComponent implements OnInit {

  constructor(private ViewworkService: ViewworkService, private http: HttpClient, private formBuilder: FormBuilder) { }

  users: any = {};
  ngOnInit(): void {
    console.log(localStorage.getItem("username"));
    if (localStorage.getItem("username") != null) {
      this.ViewworkService.getWorkout(localStorage.getItem("username")).subscribe({
        next: (res) => {
          this.users = res.workoutData;
          console.log(this.users);
        },
        error: (err) => {
          console.log(err);
        }
      })
    }
  }

}

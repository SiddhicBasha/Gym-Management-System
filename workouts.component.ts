import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { WorkoutsService } from './workouts.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-workouts',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './workouts.component.html',
  styleUrl: './workouts.component.css'
})
export class WorkoutsComponent implements OnInit {
  // username: string= '';
  // wrname: string = '';
  // wrtype: string = '';
  // sets: number = 0;
  // reps: number = 0;

  form: FormGroup  = this.formBuilder.group({
    userName: ['', [Validators.required]],
    trainerName: ['', [Validators.required]],
    wrname: ['', [Validators.required]],
    wrtype: ['', [Validators.required]],
    sets: [0, [Validators.required]],
    reps: [0, [Validators.required]]
  })
  

customers: any = {};
trainers: any = {};
  ngOnInit(): void {
    this.workoutService.getAllCustomers().subscribe({
      next: (res) => {
        this.customers = res.customers;
        console.log(this.customers);
      },
      error: (err) => {
        console.log(err);
      }
    }) 
    this.workoutService.getAllTrainers().subscribe({
      next: (res) => {
        console.log(res);
        this.trainers = res.trainerName;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
  constructor(private workoutService: WorkoutsService, private http: HttpClient, private formBuilder: FormBuilder) { }
  insertWorkout() {
    this.http.post("http://localhost:9992/work/createWorkout", this.form.value).subscribe((resultData: any) => {
      console.log(resultData);
      alert("Workout Registered Successfully")
    });
  }
  clearFields() {
    var inputs = document.querySelectorAll('#addworkoutModal input');
    inputs.forEach(function(input) {
        if (input instanceof HTMLInputElement) {
            input.value = '';
        }
    });
    var selects = document.querySelectorAll('#addworkoutModal select');
    selects.forEach(function(select) {
        if (select instanceof HTMLSelectElement) {
            select.selectedIndex = -1;
        }
    });
}
}

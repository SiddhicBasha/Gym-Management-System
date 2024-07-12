import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TrainerService } from './trainer.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-trainer',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './trainer.component.html',
  styleUrl: './trainer.component.css'
})
export class TrainerComponent {
  form: FormGroup  = this.formBuilder.group({
    trainer: [' ',[Validators.required]]
  })


    constructor(private TrainerService: TrainerService, private http: HttpClient, private formBuilder: FormBuilder) { }

    insertTrainer() {

      this.http.post("http://localhost:9992/trainer/createTrainer", this.form.value).subscribe((resultData: any) => {
        console.log(resultData);
        alert("Trainer Registered Successfully")
      });
    }

}
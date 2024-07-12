import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ViewcusService } from './viewcus.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';



@Component({
    selector: 'app-viewcus',
    standalone: true,
    imports: [FormsModule, CommonModule, HttpClientModule],
    templateUrl: './viewcus.component.html',
    styleUrl: './viewcus.component.css'
})
export class ViewcusComponent implements OnInit{


    users: any = {};
    ngOnInit(): void {
        this.ViewcusService.getAllWorkout().subscribe({
            next: (res) => {
                this.users = res.workoutData;
                console.log(this.users);
            },
            error: (err) => {
                console.log(err);
            }
        })
    }
    constructor(private ViewcusService: ViewcusService, private http: HttpClient, private formBuilder: FormBuilder) { }
}



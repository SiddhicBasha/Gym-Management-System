import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  constructor(private http:HttpClient) { }

  insertTrainer(){
    return this.http.get<any>("http://localhost:9992/trainer/createTrainer");
  }
}

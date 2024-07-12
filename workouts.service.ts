import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class WorkoutsService {
  constructor(private http:HttpClient) { }
  getAllCustomers(){
    return this.http.get<any>("http://localhost:9992/cust/allcustomer");
  }
  getAllTrainers(){
    return this.http.get<any>("http://localhost:9992/trainer/alltrainer");
  }
}
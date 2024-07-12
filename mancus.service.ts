import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MancusService {

  constructor(private http:HttpClient) { }

  getAllCustomers(){
    return this.http.get<any>("http://localhost:9992/cust/allcustomer");
  }
  
}

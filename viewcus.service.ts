import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ViewcusService {

  constructor(private http:HttpClient) { }

  getAllWorkout(){
    return this.http.get<any>("http://localhost:9992/work/displayWork");
  }
}

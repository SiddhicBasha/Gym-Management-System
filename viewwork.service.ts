import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ViewworkService {

  constructor(private http:HttpClient) { }
  getWorkout(userName: any){
    let queryparser = new HttpParams();
    queryparser = queryparser.append("userName", userName);
    console.log(userName);
    return this.http.get<any>("http://localhost:9992/work/disWork", {params: queryparser});
  }
}
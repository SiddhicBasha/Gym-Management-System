import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public login: any;
  user: any = {};
  constructor() { }
  setValue() {
    this.login = 1;
  }
  getValue() {
    return this.login;
  }
  getUser() { return this.user; }
  setUser(user: any) { this.user = user; }
  validate: any;

  setvalidate(val: string) {
    this.validate = val;
  }
  get getvalidate() {
    return this.validate;
  }

}
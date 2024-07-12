import { Component } from '@angular/core';
import { LoginService } from '../login/login.service';
import { DashAdminService } from './dash-admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash-admin',
  standalone: true,
  imports: [],
  templateUrl: './dash-admin.component.html',
  styleUrl: './dash-admin.component.css'
})
export class DashAdminComponent {
  user:any;
  constructor(private auth: DashAdminService, private route: Router, private us: LoginService) { 
    let u:any = localStorage.getItem('username');
    this.user=u;
    if(u == null || u == '')
      {
        this.route.navigateByUrl('/login');
      }
  }
  ngOnInit(): void {
  }
  logout(){
    localStorage.removeItem('username');
    this.route.navigateByUrl('/login');
  }
}

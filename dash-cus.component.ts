import { Component } from '@angular/core';
import { LoginService } from '../login/login.service';
import { DashAdminService } from '../dash-admin/dash-admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash-cus',
  standalone: true,
  imports: [],
  templateUrl: './dash-cus.component.html',
  styleUrl: './dash-cus.component.css'
})
export class DashCusComponent {
  constructor(private auth: DashAdminService, private route: Router, private us: LoginService) { }
  ngOnInit(): void {
  }
  sub() {
    this.us.setvalidate("")
  }

}

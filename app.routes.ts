import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { DashCusComponent } from './dash-cus/dash-cus.component';
import { DashAdminComponent } from './dash-admin/dash-admin.component';
import { WorkoutsComponent } from './workouts/workouts.component';
import { TrainerComponent } from './trainer/trainer.component';
import { ViewcusComponent } from './viewcus/viewcus.component';
import { MancusComponent } from './mancus/mancus.component';
import { ViewworkComponent } from './viewwork/viewwork.component';
import { UpdatecusComponent } from './updatecus/updatecus.component';

export const routes: Routes = [
    {path:'', redirectTo: '/home', pathMatch: 'full', title: 'Gym_management'},
    {path:'login', component: LoginComponent, title: 'login-page'},
    {path:'home', component: HomeComponent, title: 'home-page'},
    {path:'signup', component: SignupComponent, title: 'signup-page'},
    {path: 'dash-cus', component: DashCusComponent, title: 'dash-cus-page'},
    {path: 'dash-admin', component: DashAdminComponent, title: 'dash-admin-page'},
    {path: 'workouts', component: WorkoutsComponent, title: 'workout-page'},
    {path: 'trainer', component: TrainerComponent, title: 'trainer-page'},
    {path: 'viewcus', component: ViewcusComponent, title: 'viewCustomer-page'},
    {path: 'mancus', component: MancusComponent, title: 'mancus-page'},
    {path: 'viewwork', component: ViewworkComponent, title: 'viewwork-page'},
    {path: 'updatecus', component: UpdatecusComponent, title: 'updatecus-page'}
];
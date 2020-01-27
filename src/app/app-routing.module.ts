import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeelistComponent } from './Employee/employeelist/employeelist.component';
import { HomeComponent } from './home/home.component';
import { MasterComponent } from './master/master.component';
import { LoginComponent } from './home/login/login.component';


const routes: Routes = [
  { path: '', component: HomeComponent , pathMatch: 'full' },
  { path: 'Employee', component: EmployeeComponent },
  { path: 'Employeelist', component: EmployeelistComponent },
  { path: 'master', component: MasterComponent },
  { path: 'login', component: LoginComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

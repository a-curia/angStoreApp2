import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';


const routes: Routes = [
  {path: '', redirectTo: 'login'},
  {path: 'login', component: LoginFormComponent, pathMatch: 'full'},
  {path: 'register', component: RegisterFormComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

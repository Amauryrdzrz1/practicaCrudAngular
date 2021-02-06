import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';
import { PaginaVaciaComponent } from './pagina-vacia/pagina-vacia.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: '', redirectTo:'/register', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: '**', component: PaginaVaciaComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }

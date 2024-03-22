import { Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './components/auth/layout/layout.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { 
        path: 'auth', 
        component: LayoutComponent ,
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent }
    ]},
    
];

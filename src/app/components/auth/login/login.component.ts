import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { FormControlDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,
    ReactiveFormsModule,
    CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  form: any = {
    email: null,
    password: null,
  };

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(): void {
    const { email, password } = this.form;

    this.authService.login(email, password).subscribe({
      next: (data: any) => {
        // localStorage.setItem('member', JSON.stringify(data.member));
        localStorage.setItem('token', data.access_token);
        console.log("cc")
        // localStorage.setItem('refreshToken', data.refresh_token);
        // this.router.navigate(['/']);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!: FormGroup;
  openEye = false;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router, public _commonService: CommonService, private toastr: ToastrService) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  submitLogin() {
    const { username, password } = this.loginForm.value;
    this.auth.login(username, password).subscribe({
      next: (user) => {
        this.router.navigate(['/dashboard']);
        this.toastr.success('Login successful');
      },
      error: (err) => {
        this.toastr.error('Invalid Username or Password');
      }
    });
  }
}
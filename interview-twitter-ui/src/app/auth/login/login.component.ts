import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {AuthService} from "../../services/auth.service";

@Component({
  moduleId: module.id,
  templateUrl: 'login.component.html',
  selector: 'app-login',
})

export class LoginComponent {
  model: any = {username: '', password: ''};
  loading = false;
  incorrectCredentialsError = false;

  constructor(private router: Router,
              private authService: AuthService) {
  }

  onSubmit(loginForm: NgForm): void {
    if (loginForm.valid) {
      this.login();
    }
  }

  login() {
    this.loading = true;
    this.authService.login(this.model.username, this.model.password);
    this.router.navigate(['/app/tweets']);
  }

  isFormSubmittedWithInvalidUsername(loginForm: NgForm): boolean {
    const usernameFormControl = loginForm.form.controls['username'];
    return loginForm.submitted && usernameFormControl && !usernameFormControl.valid;
  }

  isFormSubmittedWithInvalidPassword(loginForm: NgForm): boolean {
    const passwordFormControl = loginForm.form.controls['password'];
    return loginForm.submitted && passwordFormControl && !passwordFormControl.valid;
  }
}

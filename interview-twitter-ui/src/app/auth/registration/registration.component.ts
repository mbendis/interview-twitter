import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {AuthService} from "../../services/auth.service";

@Component({
  moduleId: module.id,
  templateUrl: 'registration.component.html',
  selector: 'app-registration',
})

export class RegistrationComponent {

  model: any = {username: '', password: '', firstName: '', lastName: ''};
  loading = false;
  incorrectCredentialsError = false;

  constructor(private router: Router,
              private authService: AuthService) {
  }

  onSubmit(registrationForm: NgForm): void {
    if (registrationForm.valid) {
      this.register();
    }
  }

  register() {
    this.loading = true;
    this.authService.register(this.model.username, this.model.password, this.model.firstName, this.model.lastName);
    this.router.navigate(['/login']);
  }

  isFormSubmittedWithInvalidUsername(registrationForm: NgForm): boolean {
    const usernameFormControl = registrationForm.form.controls['username'];
    return registrationForm.submitted && usernameFormControl && !usernameFormControl.valid;
  }

  isFormSubmittedWithInvalidPassword(registrationForm: NgForm): boolean {
    const passwordFormControl = registrationForm.form.controls['password'];
    return registrationForm.submitted && passwordFormControl && !passwordFormControl.valid;
  }
}

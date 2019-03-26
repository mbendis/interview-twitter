import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {UserService} from '../../services/user/user.service';

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
              private userService: UserService) {
  }

  onSubmit(registrationForm: NgForm): void {
    if (registrationForm.valid) {
      this.register();
    }
  }

  register() {
    this.loading = true;
    this.userService.register(this.model.username, this.model.password, this.model.firstName, this.model.lastName).subscribe();
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

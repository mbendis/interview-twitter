import {Component} from '@angular/core';
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  preserveWhitespaces: false,
})
export class NavbarComponent {
  constructor(private authService: AuthService) {
  }

  getCurrentUser(): string {
    return this.authService.getCurrentUser();
  }
}

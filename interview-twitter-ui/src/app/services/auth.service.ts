import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {

  login(username: string, password: string) {
    const authToken = this.generateAuthToken(username, password);
    this.setAuthToken(authToken);
    this.storeUsername(username);
  }

  getAuthToken(): string {
    const authToken = localStorage.getItem("token");
    return authToken ? authToken : "";
  }

  setAuthToken(authToken: string) {
    localStorage.setItem("token", authToken);
  }

  private clearAuthToken() {
    localStorage.removeItem("token");
  }

  private clearCredentials() {
    localStorage.removeItem("username");
  }

  generateAuthToken(username: string, password: string): string {
    return btoa(username + ":" + password);
  }

  getCurrentUser(): string {
    const username = localStorage.getItem("username");
    return username ? username : null;
  }

  private storeUsername(username: string) {
    localStorage.setItem("username", username);
  }

  logout() {
    this.clearAuthToken();
    this.clearCredentials();
  }
  register(username: string, password: string, firstName: string, lastName: string){
    console.log('registration: ' + username + ' ' + password + ' ' + firstName + ' ' + lastName);
  }
}

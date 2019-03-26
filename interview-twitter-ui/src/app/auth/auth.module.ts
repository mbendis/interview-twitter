import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptor} from './auth.interceptor';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {AuthService} from "../services/auth.service";
import {AuthGuard} from "./auth.guard";
import {LoginContainerComponent} from "./login-container/login-container.component";
import {LoginComponent} from "./login/login.component";
import {AuthRoutingModule} from "./auth-routing.module";
import {RegistrationComponent} from "./registration/registration.component";
import {RegistrationContainerComponent} from "./registration-container/registration-container.component";
import {UserService} from '../services/user/user.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    AuthGuard,
    AuthService,
    UserService
  ],
  declarations: [
    LoginComponent,
    LoginContainerComponent,
    RegistrationComponent,
    RegistrationContainerComponent
  ],
})
export class AuthModule {
}

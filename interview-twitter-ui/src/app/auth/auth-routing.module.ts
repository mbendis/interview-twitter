import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginContainerComponent} from "./login-container/login-container.component";
import {RegistrationContainerComponent} from "./registration-container/registration-container.component";

const routes: Routes = [
  {
    path: '',
    component: LoginContainerComponent,
  },
  {
    path: 'registration',
    component: RegistrationContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {
}

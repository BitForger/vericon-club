import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallbackComponent } from './callback/callback.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'auth/callback', component: CallbackComponent },
  { path: 'auth/login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRouterModule {}

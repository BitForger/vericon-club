import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CallbackComponent } from './callback/callback.component';
import { AuthRouterModule } from './auth-router.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [CallbackComponent, LoginComponent],
  imports: [CommonModule, AuthRouterModule],
  exports: [AuthRouterModule],
})
export class AuthModule {}

import { Routes } from '@angular/router';

import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { guestGuard } from '../core/guards/guest.guard';

export const AUTH_ROUTES: Routes = [
  { path: 'login', component: LoginPageComponent, title: 'Connexion', canMatch: [guestGuard] },
  { path: 'register', component: RegisterPageComponent, title: 'Inscription' },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

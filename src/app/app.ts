import { Component, OnInit, signal } from '@angular/core';
import { AuthService } from './auth/services/auth.service';
import { RouterOutlet } from '@angular/router';
import { AuthStateService, User } from './core/services/auth-state.service';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('global-repo-frontend');
}

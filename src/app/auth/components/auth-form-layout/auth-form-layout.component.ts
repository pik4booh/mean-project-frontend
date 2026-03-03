import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';

@Component({
  selector: 'app-auth-form-layout',
  templateUrl: './auth-form-layout.component.html',
  styleUrl: './auth-form-layout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NzCardModule]
})
export class AuthFormLayoutComponent {
  readonly title = input<string>('Hello Mercado');
  readonly subtitle = input<string>('Connectez-vous pour continuer.');
  readonly titleId = input<string>('auth-title');
}

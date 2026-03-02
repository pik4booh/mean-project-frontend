import { ChangeDetectionStrategy, Component, forwardRef, input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'app-auth-email-input',
  templateUrl: './auth-email-input.component.html',
  styleUrl: './auth-email-input.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NzInputModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AuthEmailInputComponent),
      multi: true
    }
  ]
})
export class AuthEmailInputComponent implements ControlValueAccessor {
  readonly label = input<string>('Email');
  readonly id = input<string>('email');
  readonly placeholder = input<string>('you@example.com');
  readonly autocomplete = input<string>('email');
  readonly invalid = input<boolean>(false);

  value = '';
  isDisabled = false;

  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(value: string | null): void {
    this.value = value ?? '';
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  handleInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.onChange(this.value);
  }

  handleBlur(): void {
    this.onTouched();
  }
}

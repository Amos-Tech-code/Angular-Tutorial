import {Component, inject} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {HighlightDirective} from "../directives/high-light-directive";
import {JsonPipe} from "@angular/common";

interface LoginForm {
  email: FormControl<string>;
  password: FormControl<string>;
  rememberMe?: FormControl<boolean>;
}

@Component({
  selector: 'app-user-login',
  imports: [
    ReactiveFormsModule,
    JsonPipe,
    //HighlightDirective
  ],
  templateUrl: './user-login.component.html',
  standalone: true,
  styleUrl: './user-login.component.scss'
})
export class UserLoginComponent {
  fb = inject(FormBuilder);

  isPasswordDisabled = true;
  userLoginForm = new FormGroup<LoginForm>({
    password: new FormControl('', { nonNullable: true }),
    email: new FormControl('', { nonNullable: true }),
    rememberMe: new FormControl(false, { nonNullable: true }),
  })

  onSubmit(event: Event) {
    event.preventDefault();
    console.log(this.userLoginForm.value);
  }


  togglePassword() {
    this.isPasswordDisabled = !this.isPasswordDisabled;
    if (this.isPasswordDisabled) {
      this.userLoginForm.controls.password.disable()
    } else {
      this.userLoginForm.controls.password.enable()
    }
  }

  toggleRememberMe() {
    if(this.userLoginForm.controls.rememberMe) {
      this.userLoginForm.removeControl('rememberMe');
    } else {
      this.userLoginForm.addControl(
        'rememberMe',
        new FormControl(false, { nonNullable: true })
        );
    }
  }


}

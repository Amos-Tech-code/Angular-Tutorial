import {Component, inject} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {HighlightDirective} from "../directives/high-light-directive";

interface User {
  name: FormControl<string>;
  age: FormControl<number>;
  email: FormControl<string>;
}

@Component({
  selector: 'app-user-login',
  imports: [
    ReactiveFormsModule,
    HighlightDirective
  ],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.scss'
})
export class UserLoginComponent {
  fb = inject(FormBuilder);

  userLoginForm = new FormGroup({
    // name: ['', Validators.required],
    // age: ['', Validators.required],
    // email: ['', Validators.required],
    password: new FormControl('', { nonNullable: true }),
    email: new FormControl('', { nonNullable: true }),
  })

  onSubmit(event: Event) {
    event.preventDefault();
    console.log(this.userLoginForm.value);
  }

  updateValues() {
    this.userLoginForm.setValue({
      email: "user@gmail.com",
      password: "user"
    });
  }

}

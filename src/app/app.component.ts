import {Component} from '@angular/core';
import {FormArray, NgForm} from "@angular/forms";

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      //password: ['', [Validators.required, Validators.minLength(6)]],

      address: this.formBuilder.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
      }),

      phoneNumbers: this.formBuilder.array([
        this.formBuilder.control('', [
          Validators.required,
          Validators.pattern('^[0-9]{10}$')]
        )
      ])

    });
  }

  get phoneNumbers() {
    return this.userForm.get('phoneNumbers') as FormArray;
  }

  submitForm() {
    if (this.userForm.valid) {
      console.log('Form Submitted!', this.userForm.value);
    }
  }

  protected removePhoneNumber(i: number) {
    this.phoneNumbers.removeAt(i);
  }

  protected addPhoneNumber() {
    this.phoneNumbers.push(this.formBuilder.control('', [
      Validators.required,
      Validators.pattern('^[0-9]{10}$')]
    ));
  }
}

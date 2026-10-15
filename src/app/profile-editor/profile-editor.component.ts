import {Component, inject} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-profile-editor',
  imports: [
    ReactiveFormsModule,
    JsonPipe
  ],
  templateUrl: './profile-editor.component.html',
  styleUrl: './profile-editor.component.scss'
})
export class ProfileEditorComponent {

  private formBuilder= inject(FormBuilder);

  profileForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.formBuilder.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),
    aliases: this.formBuilder.array([this.formBuilder.control('')]),
  });

  get aliases() : FormArray {
    return this.profileForm.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.formBuilder.control(''));
  }

  get formValue() {
    return this.profileForm.value;
  }

  onSubmit(event: Event) {
    event?.preventDefault()
    if(this.profileForm.valid) {
      console.log(this.profileForm.value);
    } else {
      console.log("Form invalid");
    }
  }

  updateProfile() {
    // this.profileForm.setValue({
    //   firstName: 'Nancy',
    //   lastName: 'Smith',
    //   address: {
    //     street: '123 Drew Street',
    //     city: 'San Francisco',
    //     state: 'CA',
    //     zip: '123456'
    //   }
    // })
    console.log(this.profileForm.value);
  }
}

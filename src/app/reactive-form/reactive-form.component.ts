import { Component } from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-reactive-form',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent {

  name = new FormControl('');

  updateName() {
    this.name.setValue('Jane');
  }

  favouriteColorControl = new FormControl('');

  constructor() {
    this.favouriteColorControl.valueChanges.subscribe((value) => {
      console.log('New fav color:' + value);
    })
  }

  changeFavouriteColor() {
    this.favouriteColorControl.setValue("Red");
  }

}

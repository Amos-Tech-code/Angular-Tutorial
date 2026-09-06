import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Forms';

  user : { name: string; email: string } = {
    name: '',
    email: '',
  }

  submitForm(form: NgForm) : void {
    if (form.valid) {
      console.log(form.value, this.user);
    }
  }

  validateEmail() : boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(this.user.email);
  }

}

import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false
})
export class AppComponent {

  title = 'Angular Tutorial';

  currentUserName = 'Alice'; // Initial value

  changeName() {
    this.currentUserName = 'Bob'; // Changes the bound value
  }

}

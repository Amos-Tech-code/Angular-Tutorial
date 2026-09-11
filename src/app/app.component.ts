import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  title = "Routing";

  constructor(private router: Router) {

  }

  navigateToNotes() {
    this.router.navigate(['/notes']);
  }

  navigateToNote(id: number) {
    this.router.navigate(['/notes', id]);
  }

}

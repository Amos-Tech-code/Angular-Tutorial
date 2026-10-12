import {Component, ViewChild} from '@angular/core';
import {FormsModule, NgModel} from "@angular/forms";

@Component({
  selector: 'app-template-form',
  imports: [
    FormsModule
  ],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.scss'
})
export class TemplateFormComponent {

  @ViewChild('colorInput') colorInputModel !: NgModel;
  favoriteColor = '';

  ngAfterViewInit() {
    this.colorInputModel.valueChanges?.subscribe(color => {
      console.log(color);
    })
  }

  updateColor() {
    this.favoriteColor = 'red';
  }
}

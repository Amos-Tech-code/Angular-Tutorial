import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-bootstrap-tutorial',
  templateUrl: './bootstrap-tutorial.component.html',
  styleUrls: ['./bootstrap-tutorial.component.scss']
})
export class BootstrapTutorialComponent {

  items: Item[] = [
    {id: 1, name: "John"},
    {id: 2, name: "Kamau"},
    {id: 3, name: "Joy"},
    {id: 4, name: "Charlotte"}
  ]

  shuffleArray(){
    this.items = [...this.items].reverse();
  }

  trackById(_i: number, item: Item) {
    return item.id;
  }

}

type Item = {
  id: number;
  name: string,
}

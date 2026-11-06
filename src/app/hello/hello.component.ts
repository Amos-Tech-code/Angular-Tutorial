import {Component, computed, effect, signal} from '@angular/core';

@Component({
  selector: 'app-hello',
  imports: [],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.scss'
})
export class HelloComponent {

  protected title = 'Welcome to Modern Angular';

  protected isDisable = false;

  protected onClick() {
    console.log('Button is clicked!');
  }

  protected count = signal(0);

  protected doubleCount = computed((): number => this.count() * 2);

  private readonly countLog = effect((): void => {
    console.log('Count changed:', this.count());
  })

  // getDoubleCount() {
  //   console.log('getDoubleCount called');
  //   return this.count() * 2;
  // }

  incrementCounter() {
    this.count.update(value => value + 1)
  }

  decrementCounter() {
    this.count.update(value => value - 1);
  }

  resetCounter() {
    this.count.set(0);
  }

}

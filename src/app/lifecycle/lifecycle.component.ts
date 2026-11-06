import {Component, input, OnChanges, SimpleChanges} from '@angular/core';

interface UserProfile {
  name: string;
}

@Component({
  selector: 'app-lifecycle',
  imports: [],
  templateUrl: './lifecycle.component.html',
  standalone: true,
  styleUrl: './lifecycle.component.scss'
})
export class LifecycleComponent implements OnChanges {

  name = input('');

  // ✅ Removed the generic <LifecycleComponent> wrapper
  ngOnChanges(changes: SimpleChanges) {
    if (changes['name']) { // Use bracket notation for safe index access
      const nameChange = changes['name'];
      console.log(`Previous: ${nameChange.previousValue}`);
      console.log(`Current: ${nameChange.currentValue}`);
      console.log(`Is first: ${nameChange.firstChange}`);
    }
  }

}

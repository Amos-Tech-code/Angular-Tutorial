import {Component, inject} from '@angular/core';
import {QuestionService} from "./DynamicForm/question.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false
})
export class AppComponent {

  title = 'Angular Tutorial';

  questionService = inject(QuestionService);
  questions = this.questionService.getQuestions()

  currentUserName = 'Alice'; // Initial value

  changeName() {
    this.currentUserName = 'Bob'; // Changes the bound value
  }

}

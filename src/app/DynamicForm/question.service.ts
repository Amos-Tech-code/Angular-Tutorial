import {Injectable} from "@angular/core";
import {QuestionBase} from "./question-base";
import {Dropdown} from "./question.dropdown";
import {TextBox} from "./question.textbox";
import {of} from "rxjs";

@Injectable()
export class QuestionService {

  getQuestions() {

    const questions: QuestionBase<string>[] = [
      new Dropdown({
        key: 'favoriteAnimal',
        label: 'Favorite Animal',
        options: [
          { key: 'cat', value: 'Cat' },
          { key: 'dog', value: 'Dog' },
          { key: 'horse', value: 'Horse' },
          { key: 'capybara', value: 'Capybara' },
        ],
        order: 3,
      }),

      new TextBox({
        key: 'firstName',
        label: 'First Name',
        value: 'Alex',
        required: true,
        order: 1,
      }),

      new TextBox({
        key: 'lastName',
        label: 'Last Name',
        value: 'Killer man',
        required: true,
        order: 4,
      }),

      new TextBox({
        key: 'emailAddress',
        label: 'Email Address',
        type: 'email',
        order: 2,
      })
    ];

    return of(questions.sort());
  }

}

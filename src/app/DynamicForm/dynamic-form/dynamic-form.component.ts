import {Component, inject, Input} from '@angular/core';
import {QuestionBase} from "../question-base";
import {FormGroup, ReactiveFormsModule} from "@angular/forms";
import {QuestionControlService} from "../question-control.service";

@Component({
  selector: 'app-dynamic-form',
  providers: [QuestionControlService],
  templateUrl: './dynamic-form.component.html',
  standalone: false,
  styleUrl: './dynamic-form.component.scss'
})
export class DynamicFormComponent {

  @Input() questions!: QuestionBase<string>[];
  questionControlService = inject(QuestionControlService);
  form!: FormGroup;
  payload = '';

  ngOnInit() {
    this.form = this.questionControlService.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payload = JSON.stringify(this.form.getRawValue());
  }

}

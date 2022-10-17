import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { QuestionBase } from '../questionbase';

@Component({
  selector: 'app-question',
  templateUrl: './formcomponent.component.html'
})
export class FormcomponentComponent{
  @Input() question!: QuestionBase<string>;
  @Input() form!: FormGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }
}

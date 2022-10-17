import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { QuestionBase } from '../questionbase';
import { QuestioncontrolService } from '../questioncontrol.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamicform.component.html',
  providers: [ QuestioncontrolService ]
})
export class DynamicFormComponent implements OnInit {

  @Input() questions: QuestionBase<string>[] | null = [];
  form!: FormGroup;
  payLoad = '';

  constructor(private qcs: QuestioncontrolService) {}

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions as QuestionBase<string>[]);
    console.log(this.questions);

  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}


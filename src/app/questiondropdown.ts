import { QuestionBase } from './questionbase';

export class DropdownQuestion extends QuestionBase<string> {
  override controlType = 'dropdown';
}

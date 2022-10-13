import { QuestionBase } from "./questionbase";

export class TextboxQuestion extends QuestionBase<string> {
  override controlType = 'textbox';
}

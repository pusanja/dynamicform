import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DynamicFormComponent } from './dynamicform/dynamicform.component';
import { FormcomponentComponent  } from './formcomponent/formcomponent.component';

@NgModule({
  imports: [ BrowserModule, ReactiveFormsModule ],
  declarations: [ AppComponent, DynamicFormComponent, FormcomponentComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {
  }
}

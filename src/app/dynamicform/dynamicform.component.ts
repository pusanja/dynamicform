import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { QuestionBase } from '../questionbase';

@Component({
  selector: 'app-dynamicform',
  templateUrl: './dynamicform.component.html',
  styleUrls: ['./dynamicform.component.css']
})
export class DynamicformComponent implements OnInit {
  dynamicform!: FormGroup;

  constructor() { }

  ngOnInit() {
    this.dynamicform = new FormGroup({
      fname: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }
  onSubmit(): void{
    console.log(this.dynamicform.value);
  }

}




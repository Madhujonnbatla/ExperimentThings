import { Component, forwardRef, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommonFuctions } from 'src/app/SharedClass/common-fuctions';
import { Template } from '../Models/template';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css'],
  providers: [Template]
})
export class TemplateDrivenComponent implements OnInit {
  name: any;
  commonInterface: CommonFuctions;
  // Model: Template;
  constructor(@Inject(forwardRef(() => Template)) public Model: Template) {
  }

  ngOnInit(): void {
    // this.Model = new Template()
    this.Model.Name = "Madhu";
    this.Model.Rating = 4;
    this.Model.FeedBack = "Super Picha Cool";
  }
  Signup(Form: NgForm) {
    console.log(Form.value);
  }
  Calculation() {
    let obj = ['1', '2'];
    let ResultSTD = this.commonInterface.StandardDeviation(obj);
    console.log(ResultSTD);

  }

}

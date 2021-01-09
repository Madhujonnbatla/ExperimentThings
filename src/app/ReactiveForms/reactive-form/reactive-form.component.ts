import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
UserForm:FormGroup;
submitted:boolean=false;
  constructor(private FormBuilder:FormBuilder) { }
  ngOnInit(): void {
    this.UserForm= this.FormBuilder.group({
      FirstName:new FormControl('',Validators.required),
      LastName:new FormControl('',Validators.required),
      MobileNo:new FormControl('',Validators.required),
      Address:new FormControl('',),
    })
  }
  Submit(){
    if(this.UserForm.invalid){
      this.submitted=true;
    }
    console.log(this.UserForm.value);
  }
}

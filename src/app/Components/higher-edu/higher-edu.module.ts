import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MastersComponent } from './masters/masters.component';
import { SharedfileModule } from '../sharedfile/sharedfile.module';



@NgModule({
  declarations: [MastersComponent],
  imports: [
    CommonModule,
    SharedfileModule
  ],
  exports: [
    MastersComponent
  ],

})
export class HigherEduModule { }

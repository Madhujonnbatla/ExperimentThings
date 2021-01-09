import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SamplemasterComponent } from '../samplemaster/samplemaster.component';
import { TemplateDrivenComponent } from 'src/app/Template-driven/template-driven/template-driven.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateDrivenService } from 'src/app/Template-driven/Services/template-driven.service';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [SamplemasterComponent, TemplateDrivenComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule

  ],
  exports: [
    SamplemasterComponent,
    TemplateDrivenComponent
  ],
  providers: [
    TemplateDrivenService
  ]
})
export class SharedfileModule { }

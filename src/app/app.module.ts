import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDrivenComponent } from './Template-driven/template-driven/template-driven.component';
import { ReactiveFormComponent } from './reactiveforms/reactive-form/reactive-form.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HigherEduModule } from './Components/higher-edu/higher-edu.module';
import { SharedfileModule } from './Components/sharedfile/sharedfile.module';

@NgModule({
  declarations: [
    AppComponent,
    // TemplateDrivenComponent,
    ReactiveFormComponent,
    NotFoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HigherEduModule,
    SharedfileModule,
    ReactiveFormsModule
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }


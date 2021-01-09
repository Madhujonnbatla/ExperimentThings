import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormComponent } from './reactiveforms/reactive-form/reactive-form.component';
import { TemplateDrivenComponent } from './Template-driven/template-driven/template-driven.component';

const routes: Routes = [
  {
    path: 'Template-Driven',
    loadChildren: () => import('./Components/sharedfile/sharedfile.module').then(m => m.SharedfileModule)
  },
  // {
  //   path: 'Reactive-form',
  //   // component: ReactiveFormComponent
  //   loadChildren: () => import('./app.module').then(m => m.AppModule)
  // }
  // , { path: '', redirectTo: '/app-template-driven', pathMatch: 'full' },
  // { path: '**', component: TemplateDrivenComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

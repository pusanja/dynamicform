import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicFormComponent } from './dynamicform/dynamicform.component';

const routes: Routes = [
{ path: 'create',component:DynamicFormComponent},
{path: '',redirectTo:'/create', pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicformComponent } from './dynamicform/dynamicform.component';
import { FormcomponentComponent } from './formcomponent/formcomponent.component';

const routes: Routes = [
{ path: 'create',component:DynamicformComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

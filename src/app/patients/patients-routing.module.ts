import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InitialFormComponent } from './initial-form/initial-form.component';

const routes: Routes = [
	{
		path: 'initial-form/:id',
		component: InitialFormComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientsRoutingModule { }

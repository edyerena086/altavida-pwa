import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientsRoutingModule } from './patients-routing.module';
import { InitialFormComponent } from './initial-form/initial-form.component';

//Material design
import { MaterialModule } from './../material';

@NgModule({
  declarations: [InitialFormComponent],
  imports: [
    CommonModule,
    PatientsRoutingModule,
    MaterialModule
  ]
})
export class PatientsModule { }

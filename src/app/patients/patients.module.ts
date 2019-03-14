import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

import { PatientsRoutingModule } from './patients-routing.module';
import { InitialFormComponent } from './initial-form/initial-form.component';

//Material design
import { MaterialModule } from './../material';

@NgModule({
  declarations: [InitialFormComponent],
  imports: [
    CommonModule,
    PatientsRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PatientsModule { }

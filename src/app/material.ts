import {NgModule} from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatNativeDateModule} from '@angular/material';
import {MatStepperModule} from '@angular/material/stepper';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  imports: [MatButtonModule, MatGridListModule, MatSelectModule, MatToolbarModule, MatMenuModule, MatCheckboxModule, MatStepperModule, MatCardModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule],
  exports: [MatButtonModule, MatGridListModule, MatSelectModule, MatToolbarModule, MatMenuModule, MatCheckboxModule, MatStepperModule, MatCardModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule],
})
export class MaterialModule { }
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { MatRadioModule } from '@angular/material/radio';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  imports: [
    MatButtonModule,
    MatRadioModule,
    MatListModule,
    MatDividerModule,
    MatSelectModule,
    MatGridListModule
  ],
  exports: [
    MatButtonModule,
    MatRadioModule,
    MatListModule,
    MatDividerModule,
    MatSelectModule,
    MatGridListModule
  ],
})
export class MaterialModule { }

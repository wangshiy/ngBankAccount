import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  imports: [
    MatButtonModule,
    MatRadioModule
  ],
  exports: [
    MatButtonModule,
    MatRadioModule
  ],
})
export class MaterialModule { }

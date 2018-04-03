import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRouting } from './app.routes';
import { AccountSelectComponent } from './account-select/account-select.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { AccountConfirmComponent } from './account-confirm/account-confirm.component';


@NgModule({
  declarations: [
    AppComponent,
    AccountSelectComponent,
    AccountDetailComponent,
    AccountConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Angular Material
import { MaterialModule } from './material.module';

// Services
import { ApiServiceService } from './services/api-service.service';

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
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    AppRouting
  ],
  providers: [
    ApiServiceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

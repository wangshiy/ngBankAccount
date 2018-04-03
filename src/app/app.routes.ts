import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AccountSelectComponent } from './account-select/account-select.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { AccountConfirmComponent } from './account-confirm/account-confirm.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'account-select',
    pathMatch: 'full'
  },
  {
    path: 'account-select',
    component: AccountSelectComponent
  },
  {
    path: 'account-detail/:id',
    component: AccountDetailComponent
  },
  {
    path: 'account-confirm',
    component: AccountConfirmComponent
  }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });

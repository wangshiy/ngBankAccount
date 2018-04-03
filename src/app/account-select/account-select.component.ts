import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../services/api-service.service';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/takeUntil';

@Component({
  selector: 'app-account-select',
  templateUrl: './account-select.component.html',
  styleUrls: ['./account-select.component.css']
})
export class AccountSelectComponent implements OnInit, OnDestroy {

  private favoriteSeason: string;
  private accounts: object[];
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private router: Router,
    private apiServiceService: ApiServiceService) {
  }

  ngOnInit() {
    this.getAccounts();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
  }

  getAccounts() {
    this.apiServiceService.getAccounts()
      .takeUntil(this.destroy$)
      .subscribe((res) => {
        this.accounts = res;
      }, (err) => {
        console.error(`error: ${err}`);
      });
  }

  onSubmit() {
    this.router.navigateByUrl('account-detail');
  }

}

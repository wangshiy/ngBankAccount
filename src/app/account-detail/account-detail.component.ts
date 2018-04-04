import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiServiceService } from '../services/api-service.service';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/takeUntil';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css']
})
export class AccountDetailComponent implements OnInit, OnDestroy {
  private destroy$: Subject<boolean> = new Subject<boolean>();
  private accountId: string;
  private detailId: string;
  private currencyId: string;
  private account: object;
  private details: object[];
  private currencies: object[];
  private invalid: boolean;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private apiServiceService: ApiServiceService,
  ) {
    this.accountId = '';
    this.detailId = '';
    this.currencyId = '';
    this.account = {
      type: '',
      title1: '',
      title2: ''
    };
    this.details = [];
    this.currencies = [];
    this.invalid = true;
    this.activatedRoute.params
      .takeUntil(this.destroy$)
      .subscribe( (params) => {
        this.accountId = params.id;
      }, (err) => {
        console.error(`error: ${err}`);
      });
  }

  ngOnInit() {
    this.getAccountById(this.accountId);
    this.getAccountDetail();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
  }

  onChange(e) {
    this.detailId = e.value.id;
    this.currencies = e.value.candidateCurrencyList;
  }

  onCurrencyChange(e) {
    this.invalid = false;
    this.currencyId = e.value.id;
  }

  getAccountById(accountId: string) {
    this.apiServiceService.getAccountById(accountId)
      .takeUntil(this.destroy$)
      .subscribe((res) => {
        this.account = res;
      }, (err) => {
        console.error(`error: ${err}`);
      });
  }

  getAccountDetail() {
    this.apiServiceService.getAccountDetails()
      .takeUntil(this.destroy$)
      .subscribe((res) => {
        this.details = res;
      }, (err) => {
        console.error(`error: ${err}`);
      });
  }

  onNext() {
    const accountId = this.accountId;
    const detailId = this.detailId;
    const currencyId = this.currencyId;
    this.router.navigate([`/account-confirm/${accountId}/${detailId}`],
      { queryParams: { currencyId: currencyId}, queryParamsHandling: 'merge' });
  }

}

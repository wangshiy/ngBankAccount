import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiServiceService } from '../services/api-service.service';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/takeUntil';

@Component({
  selector: 'app-account-confirm',
  templateUrl: './account-confirm.component.html',
  styleUrls: ['./account-confirm.component.css']
})
export class AccountConfirmComponent implements OnInit, OnDestroy {
  private destroy$: Subject<boolean> = new Subject<boolean>();
  private accountId: string;
  private detailId: string;
  private currencyId: string;
  private detail: object;
  private currency: object;
  private editDetailsUrl: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private apiServiceService: ApiServiceService,
  ) {
    this.accountId = '';
    this.detailId = '';
    this.currencyId = '';
    this.detail = {
      description: ''
    };
    this.currency = {
      description: ''
    };
    this.editDetailsUrl = '';
    this.activatedRoute.params
      .takeUntil(this.destroy$)
      .subscribe( (params) => {
        this.accountId = params.accountId;
        this.detailId = params.detailId;
        this.editDetailsUrl = `/account-detail/${this.accountId}`;
      }, (err) => {
        console.error(`error: ${err}`);
      });
    this.activatedRoute.queryParams
      .takeUntil(this.destroy$)
      .subscribe( (params) => {
        this.currencyId = params.currencyId;
      }, (err) => {
        console.error(`error: ${err}`);
      });
  }

  ngOnInit() {
    this.getAccountDetailById(this.detailId);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
  }

  getAccountDetailById(detailId: string) {
    this.apiServiceService.getAccountDetailById(detailId)
      .takeUntil(this.destroy$)
      .subscribe((res) => {
        this.detail = res;
        this.currency = this.getCurrencyByCurrencyId(this.detail, this.currencyId);
      }, (err) => {
        console.error(`error: ${err}`);
      });
  }

  getCurrencyByCurrencyId(detail: object, currencyId: string) {
    return detail['candidateCurrencyList'].filter((e) => {
      return e.id === currencyId;
    })[0];
  }

}

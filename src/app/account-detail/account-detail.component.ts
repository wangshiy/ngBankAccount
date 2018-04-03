import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiServiceService: ApiServiceService,
  ) {
    this.activatedRoute.params
      .takeUntil(this.destroy$)
      .subscribe( (params) => {
        this.accountId = params.id;
      }, (err) => {
        console.error(`error: ${err}`);
      });
  }

  ngOnInit() {
    this.getAccountById('4936860403166155298');
  }

  ngOnDestroy() {
    this.destroy$.next(true);
  }

  getAccountById(accountId: string) {
    this.apiServiceService.getAccountById(accountId)
      .takeUntil(this.destroy$)
      .subscribe((res) => {
        console.log('res', res);
      }, (err) => {
        console.error(`error: ${err}`);
      });
  }

}

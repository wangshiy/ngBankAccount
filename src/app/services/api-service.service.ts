import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Injectable()
export class ApiServiceService {

  constructor() { }

  getAccounts() {
    return Observable.of(mockAccountData)
      .delay(Math.random() * 500);
  }

  getAccountById(accountId: string) {
    const mockAccount = mockAccountData.filter((e) => {
      return e.id === accountId;
    });
    return Observable.of(mockAccount[0])
      .delay(Math.random() * 500);
  }

  getAccountDetails() {
    return Observable.of(mockAccountDetailData)
      .delay(Math.random() * 500);
  }

  getAccountDetailById(detailId: string) {
    const mockDetail = mockAccountDetailData.filter((e) => {
      return e.id === detailId;
    });
    return Observable.of(mockDetail[0])
      .delay(Math.random() * 500);
  }

}

const mockAccountData = [
  {
    id: '4936860402673657465',
    type: 'Joint/And',
    title1: 'PXNX DXNXTX FXDXLXS I IX',
    title2: 'AXTX-XKX ZXIXNXEX FXDXLXS',
  },
  {
    id: '4936860403166155298',
    type: 'Sole Owner',
    title1: 'PXNX ZXIXNXEX FXDXLXS',
    title2: 'AXTXFXKX',
  }
];

const mockAccountDetailData = [
  {
    id: '001',
    description: 'Sub Account',
    candidateCurrencyList: [
      {
        id: 'EUR',
        description: 'EUR'
      },
      {
        id: 'CHF',
        description: 'CHF'
      },
      {
        id: 'PLN',
        description: 'PLN'
      },
      {
        id: 'USD',
        description: 'USD'
      }
    ]
  },
  {
    id: '007',
    description: 'Savings Account',
    candidateCurrencyList: [
      {
        id: 'GBP',
        description: 'GBP'
      },
      {
        id: 'PLN',
        description: 'PLN'
      },
      {
        id: 'USD',
        description: 'USD'
      },
      {
        id: 'EUR',
        description: 'EUR'
      }
    ]
  },
  {
    id: '024',
    description: 'Super Saving Account',
    candidateCurrencyList: [
      {
        id: 'GBP',
        description: 'GBP'
      },
      {
        id: 'USD',
        description: 'USD'
      }
    ]
  }
];

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
    return Observable.of(mockAccount)
      .delay(Math.random() * 500);
  }

  getAccountDetails() {

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

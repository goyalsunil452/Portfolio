import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class serviceEndPoint {
  marketData: any;

  private messageData = new BehaviorSubject('');
  messageData$ = this.messageData.asObservable();

  private messageDataWithKey = new BehaviorSubject('');
  messageDataWithKey$ = this.messageDataWithKey.asObservable();

  constructor(private httpClient: HttpClient) {}

  getData() {
    this.httpClient
      .get('https://angular-crypto-test-default-rtdb.firebaseio.com/users.json')
      .subscribe((users:any) => {
        console.log(users);
      });
  }

  fetchData(key:any) {
    this.httpClient
      .get(
        `https://portfolio-sunil-default-rtdb.firebaseio.com/portfolio/users/${key}`,
      )
      .subscribe(
        (response:any) => {
          console.log('response', response);
          this.messageDataWithKey.next(response);
        },
        (error:any) => {
          console.log(error);
        }
      );
  }

  postData(data:any) {
    this.httpClient
      .post(
        'https://portfolio-sunil-default-rtdb.firebaseio.com/portfolio/users.json',
        data
      )
      .subscribe(
        (response:any) => {
          console.log('response', response);
          this.messageData.next(response);
        },
        (error:any) => {
          console.log(error);
        }
      );
  }
}

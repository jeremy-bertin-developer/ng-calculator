import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ViewsServiceService {
  constructor() {}

  getDatas(value: any): Observable<any> {
    return new Observable((observer) => {
      observer.next(value);
      observer.complete();
    });
  }
}

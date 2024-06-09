import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
}) export class AlertService {
  private subject = new Subject<any>();
  constructor() {

  }
  confirm(message: string, yesFn: () => void, noFn: () => void) {
    this.setConfirmation(message, yesFn, noFn);
  }
  setConfirmation(message: string, yesFn: () => void, noFn: () => void) {
    let that = this;
    this.subject.next({
      type: "confirm",
      text: message,
      yesFn:
        function () {
          that.subject.next({type:'confirmed'}); //this will close the modal
          yesFn();
        },
      noFn: function () {
        that.subject.next({ type: 'not-confirmed' });
        noFn();
      }
    });

  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}

import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  private logged: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleConnection(): void {
    this.logged = !this.logged;
    this.subject.next(this.logged);
  }

  isLogged(): Observable<boolean> {
    this.subject.next(!this.logged);
    return this.subject.asObservable();
  }
}

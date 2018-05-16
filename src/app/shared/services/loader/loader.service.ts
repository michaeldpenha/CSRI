import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
export interface LoaderState {
  show: boolean;
}
@Injectable()
export class LoaderService {
  private loaderSubject = new Subject<LoaderState>();
  loaderState = this.loaderSubject.asObservable();
  constructor() { }
  public show = () => {
    this.loaderSubject.next(<LoaderState>{ show: true });
  }
  public hide = () => {
    this.loaderSubject.next(<LoaderState>{ show: false });
  }

}

import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilEventEmitterService {
  loadListPostComponent = new EventEmitter();

  constructor() {}

  loadListPost() {
    this.loadListPostComponent.emit(true);
  }
}

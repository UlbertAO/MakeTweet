import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilEventEmitterService {
  loadListPostComponent = new EventEmitter();
  keysAddedInLocalStorage = new EventEmitter();
  pending = new EventEmitter();

  constructor() {}

  loadListPost(selectedSourceList: string[]) {
    this.loadListPostComponent.emit(selectedSourceList);
  }
  keysAdded(keysAdded: boolean) {
    this.keysAddedInLocalStorage.emit(keysAdded);
  }
  isPending(isPending: boolean) {
    this.pending.emit(isPending);
  }
}

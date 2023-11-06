import { TestBed } from '@angular/core/testing';

import { UtilEventEmitterService } from './util-event-emitter.service';

describe('UtilEventEmitterService', () => {
  let service: UtilEventEmitterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilEventEmitterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

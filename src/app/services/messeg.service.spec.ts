import { TestBed } from '@angular/core/testing';

import { MessegService } from './messeg.service';

describe('MessegService', () => {
  let service: MessegService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessegService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

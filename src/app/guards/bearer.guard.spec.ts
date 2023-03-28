import { TestBed } from '@angular/core/testing';

import { BearerGuard } from './bearer.guard';

describe('BearerGuard', () => {
  let guard: BearerGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BearerGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

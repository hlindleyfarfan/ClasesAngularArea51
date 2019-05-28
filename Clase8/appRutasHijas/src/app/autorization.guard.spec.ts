import { TestBed, async, inject } from '@angular/core/testing';

import { AutorizationGuard } from './autorization.guard';

describe('AutorizationGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutorizationGuard]
    });
  });

  it('should ...', inject([AutorizationGuard], (guard: AutorizationGuard) => {
    expect(guard).toBeTruthy();
  }));
});

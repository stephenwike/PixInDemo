import { TestBed, inject } from '@angular/core/testing';

import { PixinService } from './pixin.service';

describe('PixinService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PixinService]
    });
  });

  it('should be created', inject([PixinService], (service: PixinService) => {
    expect(service).toBeTruthy();
  }));
});

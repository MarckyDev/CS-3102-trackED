import { TestBed } from '@angular/core/testing';

import { JsonhandlerService } from './jsonhandler.service';

describe('JsonhandlerService', () => {
  let service: JsonhandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonhandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

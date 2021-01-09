import { TestBed } from '@angular/core/testing';

import { TemplateDrivenService } from './template-driven.service';

describe('TemplateDrivenService', () => {
  let service: TemplateDrivenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemplateDrivenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

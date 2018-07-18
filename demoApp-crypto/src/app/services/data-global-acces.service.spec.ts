import { TestBed, inject } from '@angular/core/testing';

import { DataGlobalAccesService } from './data-global-acces.service';

describe('DataGlobalAccesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataGlobalAccesService]
    });
  });

  it('should be created', inject([DataGlobalAccesService], (service: DataGlobalAccesService) => {
    expect(service).toBeTruthy();
  }));
});

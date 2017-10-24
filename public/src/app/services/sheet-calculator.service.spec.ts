import { TestBed, inject } from '@angular/core/testing';

import { SheetCalculatorService } from './sheet-calculator.service';

describe('SheetCalculatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SheetCalculatorService]
    });
  });

  it('should be created', inject([SheetCalculatorService], (service: SheetCalculatorService) => {
    expect(service).toBeTruthy();
  }));
});

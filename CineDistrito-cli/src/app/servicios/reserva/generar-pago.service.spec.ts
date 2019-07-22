import { TestBed } from '@angular/core/testing';

import { GenerarPagoService } from './generar-pago.service';

describe('GenerarPagoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GenerarPagoService = TestBed.get(GenerarPagoService);
    expect(service).toBeTruthy();
  });
});

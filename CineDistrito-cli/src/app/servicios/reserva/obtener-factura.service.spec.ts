import { TestBed } from '@angular/core/testing';

import { ObtenerFacturaService } from './obtener-factura.service';

describe('ObtenerFacturaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ObtenerFacturaService = TestBed.get(ObtenerFacturaService);
    expect(service).toBeTruthy();
  });
});

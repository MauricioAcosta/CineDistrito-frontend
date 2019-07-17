import { TestBed } from '@angular/core/testing';

import { CambiarEstadoEnProcesoService } from './cambiar-estado-en-proceso.service';

describe('CambiarEstadoEnProcesoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CambiarEstadoEnProcesoService = TestBed.get(CambiarEstadoEnProcesoService);
    expect(service).toBeTruthy();
  });
});

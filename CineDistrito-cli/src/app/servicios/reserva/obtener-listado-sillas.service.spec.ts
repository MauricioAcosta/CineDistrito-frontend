import { TestBed } from '@angular/core/testing';

import { ObtenerListadoSillasService } from './obtener-listado-sillas.service';

describe('ObtenerListadoSillasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ObtenerListadoSillasService = TestBed.get(ObtenerListadoSillasService);
    expect(service).toBeTruthy();
  });
});

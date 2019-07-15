import { TestBed } from '@angular/core/testing';

import { ObtenerListaMultiplexService } from './obtener-lista-multiplex.service';

describe('ObtenerListaMultiplexService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ObtenerListaMultiplexService = TestBed.get(ObtenerListaMultiplexService);
    expect(service).toBeTruthy();
  });
});

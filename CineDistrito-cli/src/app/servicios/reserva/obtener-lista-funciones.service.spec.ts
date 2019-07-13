import { TestBed } from '@angular/core/testing';

import { ObtenerListaFuncionesService } from './obtener-lista-funciones.service';

describe('ObtenerListaFuncionesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ObtenerListaFuncionesService = TestBed.get(ObtenerListaFuncionesService);
    expect(service).toBeTruthy();
  });
});

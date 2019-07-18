import { TestBed } from '@angular/core/testing';

import { ObtenerListaSnacksService } from './obtener-lista-snacks.service';

describe('ObtenerListaSnacksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ObtenerListaSnacksService = TestBed.get(ObtenerListaSnacksService);
    expect(service).toBeTruthy();
  });
});

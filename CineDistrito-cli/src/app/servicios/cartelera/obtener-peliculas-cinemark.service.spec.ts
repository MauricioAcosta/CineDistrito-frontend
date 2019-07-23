import { TestBed } from '@angular/core/testing';

import { ObtenerPeliculasCinemarkService } from './obtener-peliculas-cinemark.service';

describe('ObtenerPeliculasCinemarkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ObtenerPeliculasCinemarkService = TestBed.get(ObtenerPeliculasCinemarkService);
    expect(service).toBeTruthy();
  });
});

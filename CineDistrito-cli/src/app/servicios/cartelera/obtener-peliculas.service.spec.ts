import { TestBed } from '@angular/core/testing';

import { ObtenerPeliculasService } from './obtener-peliculas.service';

describe('ObtenerPeliculasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ObtenerPeliculasService = TestBed.get(ObtenerPeliculasService);
    expect(service).toBeTruthy();
  });
});

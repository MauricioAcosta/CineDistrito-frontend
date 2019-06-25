import { TestBed } from '@angular/core/testing';

import { ObtenerInformacionPeliculaIMDbService } from './obtener-informacion-pelicula-imdb.service';

describe('ObtenerInformacionPeliculaIMDbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ObtenerInformacionPeliculaIMDbService = TestBed.get(ObtenerInformacionPeliculaIMDbService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { CompartirDatoPeliculaCarteleraReservaService } from './compartir-dato-pelicula-cartelera-reserva.service';

describe('CompartirDatoPeliculaCarteleraReservaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompartirDatoPeliculaCarteleraReservaService = TestBed.get(CompartirDatoPeliculaCarteleraReservaService);
    expect(service).toBeTruthy();
  });
});

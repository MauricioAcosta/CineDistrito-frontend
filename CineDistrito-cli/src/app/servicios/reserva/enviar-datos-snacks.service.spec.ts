import { TestBed } from '@angular/core/testing';

import { EnviarDatosSnacksService } from './enviar-datos-snacks.service';

describe('EnviarDatosSnacksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnviarDatosSnacksService = TestBed.get(EnviarDatosSnacksService);
    expect(service).toBeTruthy();
  });
});

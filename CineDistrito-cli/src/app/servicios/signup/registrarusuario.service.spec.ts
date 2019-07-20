import { TestBed } from '@angular/core/testing';

import { RegistrarusuarioService } from './registrarusuario.service';

describe('RegistrarusuarioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegistrarusuarioService = TestBed.get(RegistrarusuarioService);
    expect(service).toBeTruthy();
  });
});

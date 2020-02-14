import { TestBed } from '@angular/core/testing';

import { ConsultaUsuarioService } from './consulta-usuario.service';

describe('ConsultaUsuarioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConsultaUsuarioService = TestBed.get(ConsultaUsuarioService);
    expect(service).toBeTruthy();
  });
});

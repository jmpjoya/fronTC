import { TestBed } from '@angular/core/testing';

import { ListaMonedaService } from './lista-moneda.service';

describe('ListaMonedaService', () => {
  let service: ListaMonedaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaMonedaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

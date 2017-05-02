import { TestBed, inject } from '@angular/core/testing';

import { MascotasService } from './mascotas.service';

describe('MascotasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MascotasService]
    });
  });

  it('should ...', inject([MascotasService], (service: MascotasService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed } from '@angular/core/testing';

import { JeuCartesService } from './jeu-cartes.service';

describe('JeuCartesService', () => {
  let service: JeuCartesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JeuCartesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

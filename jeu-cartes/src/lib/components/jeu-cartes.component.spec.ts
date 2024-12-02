import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeuCartesComponent } from './jeu-cartes.component';

describe('JeuCartesComponent', () => {
  let component: JeuCartesComponent;
  let fixture: ComponentFixture<JeuCartesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JeuCartesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JeuCartesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

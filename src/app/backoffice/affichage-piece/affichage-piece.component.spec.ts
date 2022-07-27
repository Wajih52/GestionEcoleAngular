import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichagePieceComponent } from './affichage-piece.component';

describe('AffichagePieceComponent', () => {
  let component: AffichagePieceComponent;
  let fixture: ComponentFixture<AffichagePieceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichagePieceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichagePieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageAbsenceComponent } from './affichage-absence.component';

describe('AffichageAbsenceComponent', () => {
  let component: AffichageAbsenceComponent;
  let fixture: ComponentFixture<AffichageAbsenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichageAbsenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichageAbsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

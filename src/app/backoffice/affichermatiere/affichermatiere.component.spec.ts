import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichermatiereComponent } from './affichermatiere.component';

describe('AffichermatiereComponent', () => {
  let component: AffichermatiereComponent;
  let fixture: ComponentFixture<AffichermatiereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichermatiereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichermatiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

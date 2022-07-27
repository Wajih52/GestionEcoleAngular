import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherEvenementComponent } from './afficher-evenement.component';

describe('AfficherEvenementComponent', () => {
  let component: AfficherEvenementComponent;
  let fixture: ComponentFixture<AfficherEvenementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherEvenementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherEvenementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherComptaComponent } from './afficher-compta.component';

describe('AfficherComptaComponent', () => {
  let component: AfficherComptaComponent;
  let fixture: ComponentFixture<AfficherComptaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherComptaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherComptaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

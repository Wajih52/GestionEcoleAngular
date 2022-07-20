import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantEvenementComponent } from './etudiant-evenement.component';

describe('EtudiantEvenementComponent', () => {
  let component: EtudiantEvenementComponent;
  let fixture: ComponentFixture<EtudiantEvenementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtudiantEvenementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtudiantEvenementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

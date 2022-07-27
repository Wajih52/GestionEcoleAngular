import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsEtudiantEvenementComponent } from './details-etudiant-evenement.component';

describe('DetailsEtudiantEvenementComponent', () => {
  let component: DetailsEtudiantEvenementComponent;
  let fixture: ComponentFixture<DetailsEtudiantEvenementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsEtudiantEvenementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsEtudiantEvenementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

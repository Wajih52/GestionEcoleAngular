import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireParticipationComponent } from './formulaire-participation.component';

describe('FormulaireParticipationComponent', () => {
  let component: FormulaireParticipationComponent;
  let fixture: ComponentFixture<FormulaireParticipationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireParticipationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireParticipationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

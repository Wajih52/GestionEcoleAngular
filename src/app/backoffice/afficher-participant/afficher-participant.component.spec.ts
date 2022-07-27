import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherParticipantComponent } from './afficher-participant.component';

describe('AfficherParticipantComponent', () => {
  let component: AfficherParticipantComponent;
  let fixture: ComponentFixture<AfficherParticipantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherParticipantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

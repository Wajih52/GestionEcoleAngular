import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherAchatComponent } from './afficher-achat.component';

describe('AfficherAchatComponent', () => {
  let component: AfficherAchatComponent;
  let fixture: ComponentFixture<AfficherAchatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherAchatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherAchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

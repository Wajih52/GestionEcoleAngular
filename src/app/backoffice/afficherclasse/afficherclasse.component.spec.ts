import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherclasseComponent } from './afficherclasse.component';

describe('AfficherclasseComponent', () => {
  let component: AfficherclasseComponent;
  let fixture: ComponentFixture<AfficherclasseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherclasseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherclasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

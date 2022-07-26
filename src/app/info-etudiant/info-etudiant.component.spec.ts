import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoEtudiantComponent } from './info-etudiant.component';

describe('InfoEtudiantComponent', () => {
  let component: InfoEtudiantComponent;
  let fixture: ComponentFixture<InfoEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoEtudiantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

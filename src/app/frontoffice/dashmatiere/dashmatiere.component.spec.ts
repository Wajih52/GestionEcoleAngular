import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashmatiereComponent } from './dashmatiere.component';

describe('DashmatiereComponent', () => {
  let component: DashmatiereComponent;
  let fixture: ComponentFixture<DashmatiereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashmatiereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashmatiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

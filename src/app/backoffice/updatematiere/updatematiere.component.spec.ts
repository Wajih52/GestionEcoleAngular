import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatematiereComponent } from './updatematiere.component';

describe('UpdatematiereComponent', () => {
  let component: UpdatematiereComponent;
  let fixture: ComponentFixture<UpdatematiereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatematiereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatematiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

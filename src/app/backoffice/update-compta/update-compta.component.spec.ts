import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateComptaComponent } from './update-compta.component';

describe('UpdateComptaComponent', () => {
  let component: UpdateComptaComponent;
  let fixture: ComponentFixture<UpdateComptaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateComptaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateComptaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

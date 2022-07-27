import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComptaComponent } from './add-compta.component';

describe('AddComptaComponent', () => {
  let component: AddComptaComponent;
  let fixture: ComponentFixture<AddComptaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddComptaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComptaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

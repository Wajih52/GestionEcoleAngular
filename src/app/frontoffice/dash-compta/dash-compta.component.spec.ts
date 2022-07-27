import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashComptaComponent } from './dash-compta.component';

describe('DashComptaComponent', () => {
  let component: DashComptaComponent;
  let fixture: ComponentFixture<DashComptaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashComptaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashComptaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

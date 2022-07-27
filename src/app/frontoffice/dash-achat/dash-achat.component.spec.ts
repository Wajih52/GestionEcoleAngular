import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashAchatComponent } from './dash-achat.component';

describe('DashAchatComponent', () => {
  let component: DashAchatComponent;
  let fixture: ComponentFixture<DashAchatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashAchatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashAchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

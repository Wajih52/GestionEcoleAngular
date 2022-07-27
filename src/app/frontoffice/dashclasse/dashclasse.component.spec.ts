import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashclasseComponent } from './dashclasse.component';

describe('DashclasseComponent', () => {
  let component: DashclasseComponent;
  let fixture: ComponentFixture<DashclasseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashclasseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashclasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HairScheduleComponent } from './hair-schedule.component';

describe('HairScheduleComponent', () => {
  let component: HairScheduleComponent;
  let fixture: ComponentFixture<HairScheduleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HairScheduleComponent]
    });
    fixture = TestBed.createComponent(HairScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

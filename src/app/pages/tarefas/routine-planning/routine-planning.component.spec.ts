import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutinePlanningComponent } from './routine-planning.component';

describe('RoutinePlanningComponent', () => {
  let component: RoutinePlanningComponent;
  let fixture: ComponentFixture<RoutinePlanningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoutinePlanningComponent]
    });
    fixture = TestBed.createComponent(RoutinePlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

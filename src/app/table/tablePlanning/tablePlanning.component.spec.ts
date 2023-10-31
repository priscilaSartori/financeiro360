import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePlanningComponent } from './tablePlanning.component';

describe('TablePlanningComponent', () => {
  let component: TablePlanningComponent;
  let fixture: ComponentFixture<TablePlanningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablePlanningComponent]
    });
    fixture = TestBed.createComponent(TablePlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

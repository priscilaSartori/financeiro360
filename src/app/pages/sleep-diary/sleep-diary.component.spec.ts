import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SleepDiaryComponent } from './sleep-diary.component';

describe('SleepDiaryComponent', () => {
  let component: SleepDiaryComponent;
  let fixture: ComponentFixture<SleepDiaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SleepDiaryComponent]
    });
    fixture = TestBed.createComponent(SleepDiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReminderDashboardPage } from './reminder-dashboard.page';

describe('ReminderDashboardPage', () => {
  let component: ReminderDashboardPage;
  let fixture: ComponentFixture<ReminderDashboardPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReminderDashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

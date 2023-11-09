import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainDashboard2Page } from './main-dashboard2.page';

describe('MainDashboard2Page', () => {
  let component: MainDashboard2Page;
  let fixture: ComponentFixture<MainDashboard2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MainDashboard2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

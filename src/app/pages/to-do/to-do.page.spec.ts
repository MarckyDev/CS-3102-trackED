import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToDoPage } from './to-do.page';

describe('ToDoPage', () => {
  let component: ToDoPage;
  let fixture: ComponentFixture<ToDoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ToDoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

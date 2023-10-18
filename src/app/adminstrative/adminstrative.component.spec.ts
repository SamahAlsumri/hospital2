import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminstrativeComponent } from './adminstrative.component';

describe('AdminstrativeComponent', () => {
  let component: AdminstrativeComponent;
  let fixture: ComponentFixture<AdminstrativeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminstrativeComponent]
    });
    fixture = TestBed.createComponent(AdminstrativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

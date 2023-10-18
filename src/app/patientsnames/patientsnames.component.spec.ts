import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsnamesComponent } from './patientsnames.component';

describe('PatientsnamesComponent', () => {
  let component: PatientsnamesComponent;
  let fixture: ComponentFixture<PatientsnamesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientsnamesComponent]
    });
    fixture = TestBed.createComponent(PatientsnamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

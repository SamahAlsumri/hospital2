import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalReportComponent } from './medical-report.component';

describe('MedicalReportComponent', () => {
  let component: MedicalReportComponent;
  let fixture: ComponentFixture<MedicalReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicalReportComponent]
    });
    fixture = TestBed.createComponent(MedicalReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

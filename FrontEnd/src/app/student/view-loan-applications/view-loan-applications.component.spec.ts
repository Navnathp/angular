import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLoanApplicationsComponent } from './view-loan-applications.component';

describe('ViewLoanApplicationsComponent', () => {
  let component: ViewLoanApplicationsComponent;
  let fixture: ComponentFixture<ViewLoanApplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewLoanApplicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLoanApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

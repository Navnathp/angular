import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowLoanDataComponent } from './show-loan-data.component';

describe('ShowLoanDataComponent', () => {
  let component: ShowLoanDataComponent;
  let fixture: ComponentFixture<ShowLoanDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowLoanDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowLoanDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

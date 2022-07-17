import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowEmiDetailsComponent } from './show-emi-details.component';

describe('ShowEmiDetailsComponent', () => {
  let component: ShowEmiDetailsComponent;
  let fixture: ComponentFixture<ShowEmiDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowEmiDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowEmiDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

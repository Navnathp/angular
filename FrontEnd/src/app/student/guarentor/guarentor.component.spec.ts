import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuarentorComponent } from './guarentor.component';

describe('GuarentorComponent', () => {
  let component: GuarentorComponent;
  let fixture: ComponentFixture<GuarentorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuarentorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuarentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

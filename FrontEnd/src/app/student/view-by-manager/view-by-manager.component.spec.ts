import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewByManagerComponent } from './view-by-manager.component';

describe('ViewByManagerComponent', () => {
  let component: ViewByManagerComponent;
  let fixture: ComponentFixture<ViewByManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewByManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewByManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

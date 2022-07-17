import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptDocumentComponent } from './accept-document.component';

describe('AcceptDocumentComponent', () => {
  let component: AcceptDocumentComponent;
  let fixture: ComponentFixture<AcceptDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptDocumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

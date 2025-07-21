import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryStatusComponent } from './summary-status.component';

describe('SummaryStatusComponent', () => {
  let component: SummaryStatusComponent;
  let fixture: ComponentFixture<SummaryStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummaryStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

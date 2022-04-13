import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyntheticCalComponent } from './synthetic-cal.component';

describe('SyntheticCalComponent', () => {
  let component: SyntheticCalComponent;
  let fixture: ComponentFixture<SyntheticCalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SyntheticCalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SyntheticCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

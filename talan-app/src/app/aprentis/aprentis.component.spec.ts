import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprentisComponent } from './aprentis.component';

describe('AprentisComponent', () => {
  let component: AprentisComponent;
  let fixture: ComponentFixture<AprentisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AprentisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AprentisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

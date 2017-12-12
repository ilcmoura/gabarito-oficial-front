import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeTestComponent } from './college-test.component';

describe('CollegeTestComponent', () => {
  let component: CollegeTestComponent;
  let fixture: ComponentFixture<CollegeTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegeTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegeTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSubjectLevelComponent } from './list-subject-level.component';

describe('ListSubjectLevelComponent', () => {
  let component: ListSubjectLevelComponent;
  let fixture: ComponentFixture<ListSubjectLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSubjectLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSubjectLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPageSwimlanesComponent } from './project-page-swimlanes.component';

describe('ProjectPageSwimlanesComponent', () => {
  let component: ProjectPageSwimlanesComponent;
  let fixture: ComponentFixture<ProjectPageSwimlanesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectPageSwimlanesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectPageSwimlanesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSwimlaneComponent } from './project-swimlane.component';

describe('ProjectSwimlaneComponent', () => {
  let component: ProjectSwimlaneComponent;
  let fixture: ComponentFixture<ProjectSwimlaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectSwimlaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectSwimlaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

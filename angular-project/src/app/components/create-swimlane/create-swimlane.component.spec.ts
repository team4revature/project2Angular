import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSwimlaneComponent } from './create-swimlane.component';

describe('CreateSwimlaneComponent', () => {
  let component: CreateSwimlaneComponent;
  let fixture: ComponentFixture<CreateSwimlaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSwimlaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSwimlaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassCreatorComponent } from './class-creator.component';

describe('ClassCreatorComponent', () => {
  let component: ClassCreatorComponent;
  let fixture: ComponentFixture<ClassCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

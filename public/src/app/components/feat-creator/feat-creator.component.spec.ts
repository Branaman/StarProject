import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatCreatorComponent } from './feat-creator.component';

describe('FeatCreatorComponent', () => {
  let component: FeatCreatorComponent;
  let fixture: ComponentFixture<FeatCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

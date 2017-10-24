import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceCreatorComponent } from './race-creator.component';

describe('RaceCreatorComponent', () => {
  let component: RaceCreatorComponent;
  let fixture: ComponentFixture<RaceCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaceCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

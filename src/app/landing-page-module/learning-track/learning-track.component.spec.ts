import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningTrackComponent } from './learning-track.component';

describe('LearningTrackComponent', () => {
  let component: LearningTrackComponent;
  let fixture: ComponentFixture<LearningTrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningTrackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurAchievementComponent } from './our-achievement.component';

describe('OurAchievementComponent', () => {
  let component: OurAchievementComponent;
  let fixture: ComponentFixture<OurAchievementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurAchievementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurAchievementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { CoursesComponent } from './courses/courses.component';
import { LearningTrackComponent } from './learning-track/learning-track.component';
import { OurMentorsComponent } from './our-mentors/our-mentors.component';
import { OurOfferingComponent } from './our-offering/our-offering.component';
import { OurAchievementComponent } from './our-achievement/our-achievement.component';
import { FooterModule } from '../common-modules/footer/footer.module';
import { LoaderModule } from '../common-modules/loader/loader.module';

const routes = [
  {
      path      : '**',
      component: LandingPageComponent
  }
];

@NgModule({
  declarations: [
    LandingPageComponent,
    HeaderComponent,
    BannerComponent,
    CoursesComponent,
    LearningTrackComponent,
    OurMentorsComponent,
    OurOfferingComponent,
    OurAchievementComponent,
    
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FooterModule
  ]
})
export class LandingPageModule { }

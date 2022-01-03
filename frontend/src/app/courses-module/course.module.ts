import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferedCoursesComponent } from './offered-courses/offered-courses.component';
import { RouterModule } from '@angular/router';

const routes = [
  {
      path      : '**',
      component: OfferedCoursesComponent
  }
];

@NgModule({
  declarations: [
    OfferedCoursesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

  ]
})
export class CourseModule { }

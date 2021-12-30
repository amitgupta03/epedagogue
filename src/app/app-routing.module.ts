import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: 'course',
    loadChildren: () =>
      import('./courses-module/course.module').then(
        (m) => m.CourseModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./landing-page-module/landing-page.module').then(
        (m) => m.LandingPageModule
      ),
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

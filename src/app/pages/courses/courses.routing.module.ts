import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { CoursesGalleryComponent } from './courses-gallery/courses-gallery.component';
import { CoursesComponent } from './courses.component';

const routes: Route[] = [
  {
    path: 'courses',
    component: CoursesComponent,
    data: { breadcrumb: 'Courses' },
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: CoursesGalleryComponent,
        title: 'Courses Gallery | Angular is Rock',
      },

      {
        path: 'new',
        loadChildren: () =>
          import('./add-course/add-course.module').then(
            (m) => m.AddCourseModule
          ),
        data: { breadcrumb: 'Create Course' },
        title: 'Add Course | Angular is Rock',
      },

      {
        path: ':id',
        loadChildren: () =>
          import('./edit-course/edit-course.module').then(
            (m) => m.EditCourseModule
          ),
        data: { breadcrumb: 'Edit Course' },
        title: 'Edit Course | Angular is Rock',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/courses',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesRoutingModule {}

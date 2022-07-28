import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoursesGalleryModule } from './courses-gallery/courses-gallery.module';
import { CoursesComponent } from './courses.component';
import { CoursesRoutingModule } from './courses.routing.module';

@NgModule({
  declarations: [CoursesComponent],
  imports: [CoursesRoutingModule, CommonModule, CoursesGalleryModule],
  exports: [RouterModule],
})
export class CoursesModule {}

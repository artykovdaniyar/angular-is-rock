import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from '../courses.component';
import { CoursesSearchComponent } from './courses-search/course-search.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesItemComponent } from './courses-item/courses-item.component';
import { CoursesMoreComponent } from './courses-more/courses-more.component';
import { CoursesInfoCardComponent } from './courses-info-card/courses-info-card.component';
import { CoursesGalleryComponent } from './courses-gallery.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    CoursesSearchComponent,
    CoursesListComponent,
    CoursesItemComponent,
    CoursesMoreComponent,
    CoursesInfoCardComponent,
    CoursesGalleryComponent,
  ],

  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports: [CoursesGalleryComponent],
})
export class CoursesGalleryModule {}

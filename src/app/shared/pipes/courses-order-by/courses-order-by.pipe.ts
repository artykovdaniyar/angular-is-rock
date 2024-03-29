import { Pipe, PipeTransform } from '@angular/core';
import { Course } from 'src/app/shared/models/course';

@Pipe({
  name: 'orderBy',
  pure: false,
})
export class OrderByPipe implements PipeTransform {
  transform(courses: Course[]): Course[] {
    if (!courses.length) courses;
    return courses.sort((prevCourse, nextCourse) => {
      if (prevCourse.date > nextCourse.date) {
        return -1;
      } else if (prevCourse.date < nextCourse.date) {
        return 1;
      }
      return 0;
    });
  }
}

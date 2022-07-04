import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CoursesModule } from './core/courses/courses.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoreModule, CoursesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

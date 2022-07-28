import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseLoadingComponent } from './loading.component';

describe('CourseLoadingComponent', () => {
  let component: CourseLoadingComponent;
  let fixture: ComponentFixture<CourseLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseLoadingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

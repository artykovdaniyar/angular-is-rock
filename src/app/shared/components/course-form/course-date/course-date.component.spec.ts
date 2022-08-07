import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDateComponent } from './course-date.component';

describe('CourseDateComponent', () => {
  let component: CourseDateComponent;
  let fixture: ComponentFixture<CourseDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseDateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

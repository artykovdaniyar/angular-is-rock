import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  faArrowRotateRight,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { debounceTime, filter, Subscription, tap } from 'rxjs';

@Component({
  selector: 'courses-search',
  templateUrl: './course-search.component.html',
  styleUrls: ['./course-search.component.scss'],
})
export class CoursesSearchComponent implements OnInit, OnDestroy {
  faMagnifyingGlass = faMagnifyingGlass;
  faArrowRotateRight = faArrowRotateRight;
  searchControl!: FormControl;
  searchControlSub!: Subscription;
  @ViewChild('searchInput') searchInput!: ElementRef;
  @Input() searchQuery = '';
  @Output() onSubmit: EventEmitter<string> = new EventEmitter<string>();
  @Output() onReset: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit(): void {
    this.searchControl = new FormControl('');
    this.searchControl.patchValue(this.searchQuery ? this.searchQuery : '');
    this.searchControlSub = this.searchControl.valueChanges
      .pipe(
        tap((inputValue) => {
          if (inputValue.length === 0) {
            this.resetFormHandler();
          }
        }),
        filter(
          (searchText: string) =>
            searchText.length === 0 || searchText.length > 2
        ),
        debounceTime(500)
      )
      .subscribe((searchInputValue: string) => {
        if (this.searchControl.value.length) {
          this.submitHandler(searchInputValue.trim());
        } else if (!this.searchControl.dirty) {
          this.resetFormHandler();
          this.clearFormHandler();
        }
      });
  }

  resetFormHandler() {
    this.onReset.emit(true);
  }
  clearFormHandler() {
    this.searchControl.patchValue('');
  }

  submitHandler(fragmentForSerch: string) {
    this.onSubmit.emit(fragmentForSerch);
  }
  ngOnDestroy(): void {
    this.searchControlSub.unsubscribe();
  }
}

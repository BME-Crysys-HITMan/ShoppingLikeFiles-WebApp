import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterCaffDialogComponent } from './filter-caff-dialog.component';

describe('FilterCaffDialogComponent', () => {
  let component: FilterCaffDialogComponent;
  let fixture: ComponentFixture<FilterCaffDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterCaffDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterCaffDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCaffDialogComponent } from './edit-caff-dialog.component';

describe('EditCaffDialogComponent', () => {
  let component: EditCaffDialogComponent;
  let fixture: ComponentFixture<EditCaffDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCaffDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCaffDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

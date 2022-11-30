import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaffUploadDialogComponent } from './caff-upload-dialog.component';

describe('CaffUploadDialogComponent', () => {
  let component: CaffUploadDialogComponent;
  let fixture: ComponentFixture<CaffUploadDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaffUploadDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaffUploadDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCaffListComponent } from './admin-caff-list.component';

describe('AdminCaffListComponent', () => {
  let component: AdminCaffListComponent;
  let fixture: ComponentFixture<AdminCaffListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCaffListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCaffListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

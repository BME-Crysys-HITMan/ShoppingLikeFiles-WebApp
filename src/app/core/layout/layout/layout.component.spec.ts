import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxSpinnerService } from 'ngx-spinner';
import { MaterialModule } from 'src/app/material.module';
import { AuthService } from '../../auth/auth.service';
import { LoginService } from '../../auth/login.service';

import { LayoutComponent } from './layout.component';

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(async () => {

    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    const authServiceSpy = jasmine.createSpyObj('AuthService', ['getUser']);
    const loginServiceSpy = jasmine.createSpyObj('LoginService', ['logout']);
    const matDialogSpy =  jasmine.createSpyObj('MatDialog', ['open']);
    const ngxSpinnerServiceSpy =  jasmine.createSpyObj('NgxSpinnerService', ['show', 'hide']);

    await TestBed.configureTestingModule({
      declarations: [ LayoutComponent ],
      imports: [
        BrowserAnimationsModule,
        MaterialModule,
      ],
      providers: [
        {provide: AuthService, useValue: authServiceSpy},
        {provice: Router, useValue: routerSpy},
        {provide: NgxSpinnerService, useValue: ngxSpinnerServiceSpy},
        {provide: MatDialog, useValue: matDialogSpy},
        {provide: LoginService, useValue: loginServiceSpy}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should .....', () => {
    //fixture.componentInstance.navigateToProfile();
  });

});

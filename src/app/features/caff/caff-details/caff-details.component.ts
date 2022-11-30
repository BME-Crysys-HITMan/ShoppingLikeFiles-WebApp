import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { CaffResponse } from 'src/app/sdk';
import { CaffService } from '../caff.service';

@Component({
    selector: 'app-caff-details',
    templateUrl: './caff-details.component.html',
    styleUrls: ['./caff-details.component.scss']
})
export class CaffDetailsComponent implements OnInit {

    commentForm = this.fb.group({
        comment: [''],
    });

    caff: CaffResponse;

    comments = [
        {
            comment: 'tesaasdas dsad as',
            user: {
                username: '2423423'
            } 
        },
        {
            comment: 'tesaasdas dsad as',
            user: {
                username: '2423423'
            } 
        },
        {
            comment: 'tesaasdas dsad as',
            user: {
                username: '2423423'
            } 
        }
    ]

    constructor(
        private caffService: CaffService,
        private spinnerService: NgxSpinnerService,
        private fb: FormBuilder,
    ) { }

    ngOnInit(): void {
    }

    addComment() {

    }

    buyCaff() {
        
    }

}

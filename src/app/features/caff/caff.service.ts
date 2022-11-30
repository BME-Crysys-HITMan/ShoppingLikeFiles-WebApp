import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CaffResponse, CaffService as CaffApi } from 'src/app/sdk';

@Injectable({
    providedIn: 'root'
})
export class CaffService {

    constructor(
        private caffApi: CaffApi
    ) { }

    getCaffs(): Observable<CaffResponse[]> {
        return of([
            {
                id: '234234',
                caption: 'Test Caption',
                tags: ['asd', 'asd', 'ads', 'asd'],
                creator: 'Test creator',
                previewUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
            },
            {
                id: '234234',
                caption: 'Test Caption',
                tags: ['asd', 'asd', 'ads', 'asd'],
                creator: 'Test creator',
                previewUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
            },
            {
                id: '234234',
                caption: 'Test Caption',
                tags: ['asd', 'asd', 'ads', 'asd'],
                creator: 'Test creator',
                previewUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
            },
            {
                id: '234234',
                caption: 'Test Caption',
                tags: ['asd', 'asd', 'ads', 'asd'],
                creator: 'Test creator',
                previewUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
            },
            {
                id: '234234',
                caption: 'Test Caption',
                tags: ['asd', 'asd', 'ads', 'asd'],
                creator: 'Test creator',
                previewUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
            },
            {
                id: '234234',
                caption: 'Test Caption',
                tags: ['asd', 'asd', 'ads', 'asd'],
                creator: 'Test creator',
                previewUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
            },
            {
                id: '234234',
                caption: 'Test Caption',
                tags: ['asd', 'asd', 'ads', 'asd'],
                creator: 'Test creator',
                previewUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
            },
            {
                id: '234234',
                caption: 'Test Caption',
                tags: ['asd', 'asd', 'ads', 'asd'],
                creator: 'Test creator',
                previewUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
            },
            {
                id: '234234',
                caption: 'Test Caption',
                tags: ['asd', 'asd', 'ads', 'asd'],
                creator: 'Test creator',
                previewUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
            },
        ])
        //return this.caffApi.apiCaffGet();
    }

    getCaff(caffId: string): Observable<CaffResponse> {
        return of({
            id: '234234',
            caption: 'Test Caption',
            tags: ['asd', 'asd', 'ads', 'asd'],
            creator: 'Test creator',
            previewUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
        },);
        //return this.caffApi.apiCaffIdGet(caffId);
    }

    downloadCaff() {
        // TODO
        throw 'Notimplemated yet';
    }

    upload(formData: FormData): Observable<any> {
        console.log(formData);
        return of({})
    }
}

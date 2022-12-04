import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { CaffResponse, CaffService as CaffApi, UpdateCaffRequest } from 'src/app/sdk';

@Injectable({
    providedIn: 'root'
})
export class CaffService {

    constructor(
        private caffApi: CaffApi
    ) { }

    getCaffs(): Observable<CaffResponse[]> {
        // return of([
        //     {
        //         id: '234234',
        //         caption: 'Test Caption',
        //         tags: ['asd', 'asd', 'ads', 'asd'],
        //         creator: 'Test creator',
        //         previewUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
        //     },
        //     {
        //         id: '234234',
        //         caption: 'Test Caption',
        //         tags: ['asd', 'asd', 'ads', 'asd'],
        //         creator: 'Test creator',
        //         previewUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
        //     },
        //     {
        //         id: '234234',
        //         caption: 'Test Caption',
        //         tags: ['asd', 'asd', 'ads', 'asd'],
        //         creator: 'Test creator',
        //         previewUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
        //     },
        //     {
        //         id: '234234',
        //         caption: 'Test Caption',
        //         tags: ['asd', 'asd', 'ads', 'asd'],
        //         creator: 'Test creator',
        //         previewUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
        //     },
        //     {
        //         id: '234234',
        //         caption: 'Test Caption',
        //         tags: ['asd', 'asd', 'ads', 'asd'],
        //         creator: 'Test creator',
        //         previewUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
        //     },
        //     {
        //         id: '234234',
        //         caption: 'Test Caption',
        //         tags: ['asd', 'asd', 'ads', 'asd'],
        //         creator: 'Test creator',
        //         previewUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
        //     },
        //     {
        //         id: '234234',
        //         caption: 'Test Caption',
        //         tags: ['asd', 'asd', 'ads', 'asd'],
        //         creator: 'Test creator',
        //         previewUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
        //     },
        //     {
        //         id: '234234',
        //         caption: 'Test Caption',
        //         tags: ['asd', 'asd', 'ads', 'asd'],
        //         creator: 'Test creator',
        //         previewUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
        //     },
        //     {
        //         id: '234234',
        //         caption: 'Test Caption',
        //         tags: ['asd', 'asd', 'ads', 'asd'],
        //         creator: 'Test creator',
        //         previewUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
        //     },
        // ])
        return this.caffApi.apiCaffGet();
    }

    getCaff(caffId: number): Observable<CaffResponse> {
        // return of({
        //     id: '234234',
        //     caption: 'Test Caption',
        //     tags: ['asd', 'asd', 'ads', 'asd'],
        //     creator: 'Test creator',
        //     previewUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
        // },);
        return this.caffApi.apiCaffIdGet(caffId);
    }

    searchCaffs(filterData): Observable<CaffResponse[]> {
       return of([{
            id: 234234,
            caption: 'Test Caption',
            tags: ['asd', 'asd', 'ads', 'asd'],
            creator: 'Test creator',
            previewUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
        },]);
    }

    downloadCaff(id: number) {
        // this.caffApi.apiCaffIdDownloadGet(id)
        // .pipe(map(res => {
        //     return new Blob([res], { type: 'application/pdf'})
        //   }))
        // TODO
        throw 'Notimplemated yet';
    }

    updateCaff(updateCaffRequest: UpdateCaffRequest) {
        // this.caffApi.apiCaffIdPut()
    }

    upload(formData): Observable<any> {
       return this.caffApi.apiCaffUploadPost(formData);
    }
}

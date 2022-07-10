import { Component, OnInit } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
    selector: 'app-ss-funfacts-video',
    templateUrl: './ss-funfacts-video.component.html',
    styleUrls: ['./ss-funfacts-video.component.scss']
})
export class SsFunfactsVideoComponent implements OnInit {

    constructor(
        public ngxSmartModalService: NgxSmartModalService
    ) { }

    ngOnInit(): void {}

}
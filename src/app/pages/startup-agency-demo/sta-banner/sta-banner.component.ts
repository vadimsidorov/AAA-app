import { Component, OnInit } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
    selector: 'app-sta-banner',
    templateUrl: './sta-banner.component.html',
    styleUrls: ['./sta-banner.component.scss']
})
export class StaBannerComponent implements OnInit {

    constructor(
        public ngxSmartModalService: NgxSmartModalService
    ) { }

    ngOnInit(): void {}

}
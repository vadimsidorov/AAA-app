import { Component, OnInit } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
    selector: 'app-bc-banner',
    templateUrl: './bc-banner.component.html',
    styleUrls: ['./bc-banner.component.scss']
})
export class BcBannerComponent implements OnInit {

    constructor(
        public ngxSmartModalService: NgxSmartModalService
    ) { }

    ngOnInit(): void {}

}
import { Component, OnInit } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
    selector: 'app-fp-banner',
    templateUrl: './fp-banner.component.html',
    styleUrls: ['./fp-banner.component.scss']
})
export class FpBannerComponent implements OnInit {

    constructor(
        public ngxSmartModalService: NgxSmartModalService
    ) { }

    ngOnInit(): void {}

}
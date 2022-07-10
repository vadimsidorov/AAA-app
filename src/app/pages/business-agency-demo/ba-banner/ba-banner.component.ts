import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
    selector: 'app-ba-banner',
    templateUrl: './ba-banner.component.html',
    styleUrls: ['./ba-banner.component.scss']
})
export class BaBannerComponent implements OnInit {

    constructor(
        public ngxSmartModalService: NgxSmartModalService,
        private viewportScroller: ViewportScroller
    ) { }

    public onClick(elementId: string): void { 
        this.viewportScroller.scrollToAnchor(elementId);
    }

    ngOnInit(): void {}

}
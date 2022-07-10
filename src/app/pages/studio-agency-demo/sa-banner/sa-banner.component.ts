import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
    selector: 'app-sa-banner',
    templateUrl: './sa-banner.component.html',
    styleUrls: ['./sa-banner.component.scss']
})
export class SaBannerComponent implements OnInit {

    constructor(
        public ngxSmartModalService: NgxSmartModalService,
        private viewportScroller: ViewportScroller
    ) { }

    public onClick(elementId: string): void { 
        this.viewportScroller.scrollToAnchor(elementId);
    }

    ngOnInit(): void {}

}
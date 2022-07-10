import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
    selector: 'app-da-banner',
    templateUrl: './da-banner.component.html',
    styleUrls: ['./da-banner.component.scss']
})
export class DaBannerComponent implements OnInit {

    constructor(
        public ngxSmartModalService: NgxSmartModalService,
        private viewportScroller: ViewportScroller
    ) { }

    public onClick(elementId: string): void { 
        this.viewportScroller.scrollToAnchor(elementId);
    }

    ngOnInit(): void {}

}
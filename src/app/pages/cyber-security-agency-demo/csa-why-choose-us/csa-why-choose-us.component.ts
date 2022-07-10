import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
    selector: 'app-csa-why-choose-us',
    templateUrl: './csa-why-choose-us.component.html',
    styleUrls: ['./csa-why-choose-us.component.scss']
})
export class CsaWhyChooseUsComponent implements OnInit {

    constructor(
        private viewportScroller: ViewportScroller
    ) { }

    public onClick(elementId: string): void { 
        this.viewportScroller.scrollToAnchor(elementId);
    }

    ngOnInit(): void {}

}
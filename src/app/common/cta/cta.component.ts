import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
    selector: 'app-cta',
    templateUrl: './cta.component.html',
    styleUrls: ['./cta.component.scss']
})
export class CtaComponent implements OnInit {

    constructor(
        public router: Router,
        private viewportScroller: ViewportScroller
    ) { }

    public onClick(elementId: string): void { 
        this.viewportScroller.scrollToAnchor(elementId);
    }

    ngOnInit(): void {}

}
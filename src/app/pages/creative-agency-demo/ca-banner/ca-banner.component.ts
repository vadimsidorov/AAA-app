import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ViewportScroller } from '@angular/common';

@Component({
    selector: 'app-ca-banner',
    templateUrl: './ca-banner.component.html',
    styleUrls: ['./ca-banner.component.scss']
})
export class CaBannerComponent implements OnInit {

    constructor(
        private viewportScroller: ViewportScroller
	) { }

    public onClick(elementId: string): void { 
        this.viewportScroller.scrollToAnchor(elementId);
    }

    ngOnInit(): void {}

    homeSlides: OwlOptions = {
        items: 1,
		nav: true,
		loop: true,
		dots: true,
		autoplay: true,
		smartSpeed: 500,
		animateIn: 'fadeIn',
		animateOut: 'fadeOut',
		autoplayHoverPause: true,
		navText: [
			"<i class='fa-solid fa-chevron-left'></i>",
			"<i class='fa-solid fa-chevron-right'></i>"
		]
    }

}
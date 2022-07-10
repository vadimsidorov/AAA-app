import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ViewportScroller } from '@angular/common';

@Component({
    selector: 'app-pa-banner',
    templateUrl: './pa-banner.component.html',
    styleUrls: ['./pa-banner.component.scss']
})
export class PaBannerComponent implements OnInit {

    constructor(
        private viewportScroller: ViewportScroller
	) { }

    public onClick(elementId: string): void { 
        this.viewportScroller.scrollToAnchor(elementId);
    }

    ngOnInit(): void {}

    agencyPortfolioMainBanner = [
        {
            bgImg: `assets/images/banner/banner-bg1.jpg`,
			subTitle: `We are Creative`,
			title: `Digital Agency`,
			desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.`,
			btnText: `View Works`,
        },
        {
            bgImg: `assets/images/banner/banner-bg2.jpg`,
			subTitle: `We are Digital`,
			title: `UX/UI Design`,
			desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.`,
			btnText: `View Works`,
        },
        {
            bgImg: `assets/images/banner/banner-bg3.jpg`,
			subTitle: `We are Agency`,
			title: `Digital Marketing`,
			desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.`,
			btnText: `View Works`,
        }
    ]
    homeSlides: OwlOptions = {
		items: 1,
		nav: true,
		loop: true,
		dots: false,
		autoplay: true,
		smartSpeed: 1000,
		autoplayTimeout: 5000,
		animateOut: 'fadeOut',
		autoplayHoverPause: true,
		navText: [
			"<i class='fa-solid fa-chevron-left'></i>",
			"<i class='fa-solid fa-chevron-right'></i>"
		]
    }

}
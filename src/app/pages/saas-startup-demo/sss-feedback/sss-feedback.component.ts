import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
    selector: 'app-sss-feedback',
    templateUrl: './sss-feedback.component.html',
    styleUrls: ['./sss-feedback.component.scss']
})
export class SssFeedbackComponent implements OnInit {

    constructor(
        public ngxSmartModalService: NgxSmartModalService
	) { }

    ngOnInit(): void {}

    feedbackSlides: OwlOptions = {
		nav: true,
		loop: true,
		margin: 30,
		dots: false,
		autoplay: true,
		smartSpeed: 500,
		autoplayHoverPause: true,
		navText: [
			"<i class='fa-solid fa-chevron-left'></i>",
			"<i class='fa-solid fa-chevron-right'></i>"
		],
        responsive: {
			0: {
				items: 1
			},
			576: {
				items: 1
			},
			695: {
				items: 2
			},
			895: {
				items: 2
			},
			1200: {
				items: 2
			}
		}
    }

}
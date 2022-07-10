import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-pp-testimonials',
    templateUrl: './pp-testimonials.component.html',
    styleUrls: ['./pp-testimonials.component.scss']
})
export class PpTestimonialsComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}

    testimonialsSlides: OwlOptions = {
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
				items: 3
			},
			1200: {
				items: 3
			}
		}
    }

}
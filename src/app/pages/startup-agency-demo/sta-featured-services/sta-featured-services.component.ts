import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-sta-featured-services',
    templateUrl: './sta-featured-services.component.html',
    styleUrls: ['./sta-featured-services.component.scss']
})
export class StaFeaturedServicesComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}

    featuredServicesSlides: OwlOptions = {
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
			510: {
				items: 2
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
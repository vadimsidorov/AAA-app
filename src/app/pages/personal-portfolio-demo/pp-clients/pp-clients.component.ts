import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-pp-clients',
    templateUrl: './pp-clients.component.html',
    styleUrls: ['./pp-clients.component.scss']
})
export class PpClientsComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}

    partnerSlides: OwlOptions = {
		nav: false,
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
				items: 2
			},
			576: {
				items: 3
			},
			695: {
				items: 4
			},
			895: {
				items: 5
			},
			1200: {
				items: 6
			}
		}
    }

}
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-csa-partner',
    templateUrl: './csa-partner.component.html',
    styleUrls: ['./csa-partner.component.scss']
})
export class CsaPartnerComponent implements OnInit {

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
				items: 4
			},
			695: {
				items: 5
			},
			895: {
				items: 6
			},
			1200: {
				items: 8
			}
		}
    }

}
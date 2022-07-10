import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-sa-blog',
    templateUrl: './sa-blog.component.html',
    styleUrls: ['./sa-blog.component.scss']
})
export class SaBlogComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}

    blogSlides: OwlOptions = {
		nav: true,
		loop: true,
		margin: 30,
		dots: true,
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
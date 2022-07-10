import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-sa-projects',
    templateUrl: './sa-projects.component.html',
    styleUrls: ['./sa-projects.component.scss']
})
export class SaProjectsComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}

    projectsSlides: OwlOptions = {
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
			550: {
				items: 2
			},
			695: {
				items: 2
			},
			895: {
				items: 3
			},
			1200: {
				items: 4
			},
			1500: {
				items: 5
			}
		}
    }

}
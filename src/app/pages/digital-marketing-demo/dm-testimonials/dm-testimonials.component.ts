import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-dm-testimonials',
    templateUrl: './dm-testimonials.component.html',
    styleUrls: ['./dm-testimonials.component.scss']
})
export class DmTestimonialsComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}

    testimonialsSlides: OwlOptions = {
        items: 1,
		nav: true,
		loop: true,
		dots: false,
		autoplay: true,
		smartSpeed: 500,
		animateIn: 'fadeIn',
		animateOut: 'fadeOut',
		autoplayHoverPause: true,
		navText: [
			"<i class='fa-solid fa-arrow-left-long'></i>",
			"<i class='fa-solid fa-arrow-right-long'></i>"
		]
    }

}
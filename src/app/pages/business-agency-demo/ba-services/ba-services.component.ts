import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-ba-services',
    templateUrl: './ba-services.component.html',
    styleUrls: ['./ba-services.component.scss']
})
export class BaServicesComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}

    singleServicesBox = [
        {
            icon: `fa-solid fa-message`,
			title: `Business Consultancy`,
			desc: `Sed ut perspiciatis unde omnis iste natus error sit tatem accusantium doloremque laudantium, totam rem aperiam.`,
			link: `/services-details`
        },
        {
            icon: `fa-solid fa-laptop-code`,
			title: `Web Development`,
			desc: `Sed ut perspiciatis unde omnis iste natus error sit tatem accusantium doloremque laudantium, totam rem aperiam.`,
			link: `/services-details`
        },
        {
            icon: `fa-solid fa-lightbulb`,
			title: `Digital Marketing`,
			desc: `Sed ut perspiciatis unde omnis iste natus error sit tatem accusantium doloremque laudantium, totam rem aperiam.`,
			link: `/services-details`
        },
        {
            icon: `fa-solid fa-mobile-screen-button`,
			title: `Mobile App Development`,
			desc: `Sed ut perspiciatis unde omnis iste natus error sit tatem accusantium doloremque laudantium, totam rem aperiam.`,
			link: `/services-details`
        },
        {
            icon: `fa-solid fa-cart-arrow-down`,
			title: `eCommerce Development`,
			desc: `Sed ut perspiciatis unde omnis iste natus error sit tatem accusantium doloremque laudantium, totam rem aperiam.`,
			link: `/services-details`
        },
        {
            icon: `fa-solid fa-marker`,
			title: `Marketing & Reporting`,
			desc: `Sed ut perspiciatis unde omnis iste natus error sit tatem accusantium doloremque laudantium, totam rem aperiam.`,
			link: `/services-details`
        }
    ]

}
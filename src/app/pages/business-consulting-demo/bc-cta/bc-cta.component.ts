import { Component, OnInit } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
    selector: 'app-bc-cta',
    templateUrl: './bc-cta.component.html',
    styleUrls: ['./bc-cta.component.scss']
})
export class BcCtaComponent implements OnInit {

    constructor(
        public ngxSmartModalService: NgxSmartModalService
    ) { }

    ngOnInit(): void {}

}
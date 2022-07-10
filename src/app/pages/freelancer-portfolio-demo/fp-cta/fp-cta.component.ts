import { Component, OnInit } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
    selector: 'app-fp-cta',
    templateUrl: './fp-cta.component.html',
    styleUrls: ['./fp-cta.component.scss']
})
export class FpCtaComponent implements OnInit {

    constructor(
        public ngxSmartModalService: NgxSmartModalService
    ) { }

    ngOnInit(): void {}

}
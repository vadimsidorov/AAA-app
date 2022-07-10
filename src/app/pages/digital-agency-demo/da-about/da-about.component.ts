import { Component, OnInit } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
    selector: 'app-da-about',
    templateUrl: './da-about.component.html',
    styleUrls: ['./da-about.component.scss']
})
export class DaAboutComponent implements OnInit {

    constructor(
        public ngxSmartModalService: NgxSmartModalService
    ) { }

    ngOnInit(): void {}

}
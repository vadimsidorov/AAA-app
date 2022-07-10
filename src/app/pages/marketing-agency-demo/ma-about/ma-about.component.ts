import { Component, OnInit } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
    selector: 'app-ma-about',
    templateUrl: './ma-about.component.html',
    styleUrls: ['./ma-about.component.scss']
})
export class MaAboutComponent implements OnInit {

    constructor(
        public ngxSmartModalService: NgxSmartModalService
    ) { }

    ngOnInit(): void {}

}
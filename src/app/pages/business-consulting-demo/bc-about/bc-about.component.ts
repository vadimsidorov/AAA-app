import { Component, OnInit } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
    selector: 'app-bc-about',
    templateUrl: './bc-about.component.html',
    styleUrls: ['./bc-about.component.scss']
})
export class BcAboutComponent implements OnInit {

    constructor(
        public ngxSmartModalService: NgxSmartModalService
    ) { }

    ngOnInit(): void {}

}
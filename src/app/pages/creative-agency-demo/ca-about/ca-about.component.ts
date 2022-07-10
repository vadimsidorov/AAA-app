import { Component, OnInit } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
    selector: 'app-ca-about',
    templateUrl: './ca-about.component.html',
    styleUrls: ['./ca-about.component.scss']
})
export class CaAboutComponent implements OnInit {

    constructor(
        public ngxSmartModalService: NgxSmartModalService
    ) { }

    ngOnInit(): void {}

}
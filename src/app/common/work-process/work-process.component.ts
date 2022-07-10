import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-work-process',
    templateUrl: './work-process.component.html',
    styleUrls: ['./work-process.component.scss']
})
export class WorkProcessComponent implements OnInit {

    constructor(
        public router: Router
    ) { }

    ngOnInit(): void {}

}
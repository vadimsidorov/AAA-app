import { Component, OnInit } from '@angular/core';
import { IsActiveMatchOptions, Router } from '@angular/router';
import { RouteFeaturesEnum } from 'src/app/shared/enums/router-fragments.enum';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public routerFragments = RouteFeaturesEnum;
  routerLinkActiveOptions: IsActiveMatchOptions = {
    matrixParams: 'exact',
    queryParams: 'exact',
    paths: 'exact',
    fragment: 'exact',
  };

  constructor(public router: Router) {}

  ngOnInit(): void {}

  classApplied = false;
  toggleClass() {
    this.classApplied = !this.classApplied;
  }
}

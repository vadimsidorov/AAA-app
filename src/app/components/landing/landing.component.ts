import { Component, OnInit } from '@angular/core';
import { RouteFeaturesEnum } from 'src/app/shared/enums/router-fragments.enum';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  public routerFragments;
  constructor() {
    this.routerFragments = RouteFeaturesEnum;
  }
}

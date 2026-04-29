import { Component, Input, OnInit } from '@angular/core';
import { MenuContentComponent } from './menu-content/menu-content.component';
import { MenuHeaderComponent } from './menu-header/menu-header.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  imports: [
    MenuHeaderComponent,
    MenuContentComponent,

  ]
})
export class MenuComponent  implements OnInit {
@Input('menus') menusData: any;
  constructor() { }

  ngOnInit() {}

}
 
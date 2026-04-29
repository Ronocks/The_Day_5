import { Component, Input, OnInit } from '@angular/core';
import { UserInfoComponent } from '../user-info/user-info.component';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.scss'],
  imports: [
    UserInfoComponent
  ]
})
export class MenuHeaderComponent  implements OnInit {
@Input('user') menusUser: any;
  constructor() { }

  ngOnInit() {}

}

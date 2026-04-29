import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
  imports: [RouterLink]
})
export class UserInfoComponent  implements OnInit {
@Input('user') userData: any;
  constructor() { }

   ngOnInit() {
    console.log(this.userData)
  }

}
    
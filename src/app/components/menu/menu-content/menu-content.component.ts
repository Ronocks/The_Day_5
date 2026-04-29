import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-content',
  templateUrl: './menu-content.component.html',
  styleUrls: ['./menu-content.component.scss'],
  imports: [CommonModule]
})
export class MenuContentComponent  implements OnInit {
@Input('content') contentData: any;
  constructor() { }

  ngOnInit() {}
 
}

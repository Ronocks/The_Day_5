import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-content',
  templateUrl: './blog-content.component.html',
  styleUrls: ['./blog-content.component.scss'],
    imports: [CommonModule]
})
export class BlogContentComponent  implements OnInit {
@Input('content') contentData: any;
  constructor() { }

  ngOnInit() {}
 
}

import { Component, Input, OnInit } from '@angular/core';
import { BlogInfoComponent } from '../blog-info/blog-info.component';

@Component({
  selector: 'app-blog-header',
  templateUrl: './blog-header.component.html',
  styleUrls: ['./blog-header.component.scss'],
   imports: [
      BlogInfoComponent
    ]
})
export class BlogHeaderComponent  implements OnInit {
@Input('user') blogsUser: any;
  constructor() { }

  ngOnInit() {}

}

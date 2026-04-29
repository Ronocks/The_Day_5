import { Component, Input, OnInit } from '@angular/core';
import { BlogHeaderComponent } from './blog-header/blog-header.component';
import { BlogContentComponent } from './blog-content/blog-content.component';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  imports: [
      BlogHeaderComponent,
      BlogContentComponent,
  
    ]
})
export class BlogComponent  implements OnInit {
@Input('blogs') blogsData: any;
  constructor() { }

  ngOnInit() {}

}
  
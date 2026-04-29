import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog-info',
  templateUrl: './blog-info.component.html',
  styleUrls: ['./blog-info.component.scss'],
  imports: [RouterLink]
})
export class BlogInfoComponent  implements OnInit {
@Input('user') blogsData: any;
  constructor() { }

    ngOnInit() {
    console.log(this.blogsData)
  }
 
}
 
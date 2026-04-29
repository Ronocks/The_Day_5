import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonGrid, IonHeader, IonRow, IonTitle, IonToolbar,IonCol } from '@ionic/angular/standalone';
import { Blogs } from '../service/blogs/blogs';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { BlogComponent } from '../components/blog/blog.component';



@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, ExploreContainerComponent, BlogComponent,IonGrid, IonRow, IonCol]
})
export class Tab4Page implements OnInit {
  data: any = [];
  constructor(private blogs: Blogs) { }

    async ngOnInit(){
    this.data = await this.blogs.getAllBlogs();
  }

}
 
import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { MenuComponent } from '../components/menu/menu.component';
import { CommonModule } from '@angular/common';
import { Menus } from '../service/menus/menus';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, MenuComponent, CommonModule]
})
export class Tab2Page implements OnInit {
  data: any = [];
  constructor(private menus: Menus) {}

  async ngOnInit(){
    this.data = await this.menus.getAllMenus();
  }
}
 
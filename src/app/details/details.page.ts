import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons } from '@ionic/angular/standalone';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Menus } from '../service/menus/menus';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonBackButton, IonButtons, RouterLink]
})
export class DetailsPage implements OnInit {
data: any;
  constructor(private route: ActivatedRoute, private menus: Menus) {
    let _this = this; 
    this.route.params.subscribe(async (params) => {
      const id = params['id'];
      console.log('Menu ID:', id);
      const menus = await _this.menus.getMenusById(id);
      console.log('Menu Data:', menus)
      _this.data = menus;
    });
  }

  ngOnInit() {
    
  }

  getName(){
    return ` ${this.data?.userInfo?.name || ''}`;
  }
  getPicture(){
    return `${this.data?.userInfo?.picture || ''}`;
  }
  getPrice(){
    return `Price: ${this.data?.userInfo?.price || ''}`;
  }
  getDescription(){
    return ` ${this.data?.userInfo?.description || ''}`;
  }
  getAllergens(){
    return `Allergens: ${this.data?.userInfo?.allergens || ''}`;
  }
 


}


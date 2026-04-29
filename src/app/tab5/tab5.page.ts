import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { Identity } from '../service/identity/identity';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, RouterLink]
})
export class Tab5Page implements OnInit {

  constructor(private identity: Identity) { }
error: string = '';
  ngOnInit() {
  }

   login(email: string, pass: string ){
 this.identity.login(email, pass);

}
}

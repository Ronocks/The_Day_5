import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Events } from '../service/events/events';
import { Identity } from '../service/identity/identity';

@Component({
  selector: 'app-viewevents',
  templateUrl: './viewevents.page.html',
  styleUrls: ['./viewevents.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonBackButton]
})
export class VieweventsPage implements OnInit {
events: any[] = [];
  userEmail: string = '';
  constructor(private viewevent: Events,
      private identity: Identity) { }

  async ngOnInit() {
    const email = await this.identity.getCurrentUserEmail();

    if (email) {
      this.userEmail = email;
      this.events = await this.viewevent.getEventsByEmail(email);
    } else {
      console.log("No user logged in");
    }
  }

}

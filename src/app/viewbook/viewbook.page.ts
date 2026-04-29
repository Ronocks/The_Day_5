import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Booking } from '../service/booking/booking';
import { Identity } from '../service/identity/identity';

@Component({
  selector: 'app-viewbook',
  templateUrl: './viewbook.page.html',
  styleUrls: ['./viewbook.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonBackButton]
})
export class ViewbookPage implements OnInit {
bookings: any[] = [];
  userEmail: string = '';

  constructor(private viewbook: Booking,
    private identity: Identity) { }

  async ngOnInit() {
    const email = await this.identity.getCurrentUserEmail();

    if (email) {
      this.userEmail = email;
      this.bookings = await this.viewbook.getBookingsByEmail(email);
    } else {
      console.log("No user logged in");
    }
  }
  }





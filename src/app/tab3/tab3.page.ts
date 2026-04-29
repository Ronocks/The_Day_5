import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonBackButton, IonButtons } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { Booking } from '../service/booking/booking';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent,FormsModule, IonBackButton, IonButtons],
})
export class Tab3Page  implements OnInit{
  name = "";
  order = "";
  date = "";
  time = "";
  email = "";

  constructor(private booking: Booking, private router: Router) {}
  submitBooking() {
    this.booking.AddBooking(
      this.name,
      this.order,
      this.time,
       this.date,
      this.email,
     
    );
    this.router.navigate(['/thanks']);
  }

  ngOnInit() {
  }
}

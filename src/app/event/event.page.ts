import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { Events } from '../service/events/events';

@Component({
  selector: 'app-event',
  templateUrl: './event.page.html',
  styleUrls: ['./event.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonBackButton]
})
export class EventPage implements OnInit {
name = "";
  time = "";
  date = "";
  email = "";
  type = "";
  guests = "";
  details = "";


constructor(private event: Events, private router: Router) {}
  submitEvent() {
    this.event.AddEvent(
      this.name,
      this.time,
       this.date,
      this.email,
     this.type,
     this.guests,
     this.details,
    );
    this.router.navigate(['/thanks']);
  }



  ngOnInit() {
  }

}

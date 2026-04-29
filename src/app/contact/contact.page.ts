import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Contact } from '../service/contact/contact';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonBackButton]
})
export class ContactPage implements OnInit {
name = "";
  email = "";
  query = "";

  constructor(private contact: Contact, private router: Router) {}
  submitContact() {
    this.contact.AddContact(
      this.name,
      this.email,
     this.query,

    );
    this.router.navigate(['/thanks']);
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { Identity } from '../service/identity/identity';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, RouterLink]
}) 
export class RegisterPage implements OnInit {
error: string = '';
  constructor(private identity: Identity) { }

  ngOnInit() {
  }

  register(email: string, pass: string){
    this.identity.register(email,pass);
  }
}

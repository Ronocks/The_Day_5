import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonAccordion, IonAccordionGroup, IonBackButton, IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonTitle, IonToolbar } from '@ionic/angular/standalone';


@Component({
  selector: 'app-support',
  templateUrl: './support.page.html',
  styleUrls: ['./support.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonAccordion,IonAccordionGroup,IonItem,IonLabel, IonButtons, IonBackButton]
})
export class SupportPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
import { IonicModule } from '@ionic/angular';

import {
  IonToolbar,
  IonAccordion,
  IonItem,
  IonLabel,
  IonAccordionGroup,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonDatetime,
  IonFab,
  IonFabButton,
  IonIcon,
  IonButton
} from '@ionic/angular/standalone';

=======
import {IonHeader, IonToolbar, IonTitle, IonButton, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle, IonIcon, IonDatetime}from '@ionic/angular/standalone';
>>>>>>> acf74a24af39c24be8002528bd1682cc9b346889
@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard2.page.html',
  styleUrls: ['./main-dashboard2.page.scss'],
  standalone: true,
<<<<<<< HEAD
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    IonToolbar,
    IonAccordion,
    IonItem,
    IonLabel,
    IonAccordionGroup,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonDatetime,
    IonFab,
    IonFabButton,
    IonIcon,
    IonButton
  ]
=======
  imports: [IonHeader, IonToolbar, IonTitle, IonButton, 
    IonContent, IonCard, IonCardContent, IonCardHeader, 
    IonCardTitle, IonCardSubtitle, IonIcon, IonDatetime ]

>>>>>>> acf74a24af39c24be8002528bd1682cc9b346889
})
export class MainDashboard2Page implements OnInit {
  constructor() {}

  ngOnInit() {
    // Your initialization code here
  }
}

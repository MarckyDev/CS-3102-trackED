import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonHeader, IonToolbar, IonTitle, IonButton, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle, IonIcon, IonDatetime}from '@ionic/angular/standalone';
@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard2.page.html',
  styleUrls: ['./main-dashboard2.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonButton, 
    IonContent, IonCard, IonCardContent, IonCardHeader, 
    IonCardTitle, IonCardSubtitle, IonIcon, IonDatetime ]

})
export class MainDashboard2Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

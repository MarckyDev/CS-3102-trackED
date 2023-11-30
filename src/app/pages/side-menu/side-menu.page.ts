import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { addIcons } from "ionicons";

import { 
  clipboardOutline,
  checkmarkCircleOutline,
  notificationsOutline,
  homeOutline,

} from "ionicons/icons";

import { 
  IonButton,
  IonIcon,
  IonTabBar,
  IonTabs,
  IonTabButton,
  IonSplitPane,
  IonHeader,
  IonTitle,
  IonImg,
  IonRouterOutlet,
  IonItem,
  IonList,
  IonMenu
 } from "@ionic/angular/standalone";




@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.page.html',
  styleUrls: ['./side-menu.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    IonButton,
    IonIcon,
    IonSplitPane,
    IonTabBar,
    IonTabs,
    IonTabButton,
    IonHeader,
    IonTitle,
    IonImg,
    IonRouterOutlet,
    IonItem,
    IonList,
    IonMenu
  ]
})
export class SideMenuPage{
  constructor(private router: Router) {
    
    addIcons({ 
      clipboardOutline,
      checkmarkCircleOutline,
      notificationsOutline,
      homeOutline
     })
  }

  navigate(url: string) {
    this.router.navigateByUrl(url);
   }
 
}


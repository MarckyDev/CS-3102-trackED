import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { addIcons } from "ionicons";
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
  IonRouterOutlet
 } from "@ionic/angular/standalone";

import { 
  clipboardOutline,
  checkmarkCircleOutline,
  notificationsOutline,
  homeOutline,

} from "ionicons/icons";

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
    IonRouterOutlet
  ]
})
export class SideMenuPage implements OnInit {
  constructor() { 
    addIcons({ 
      clipboardOutline,
      checkmarkCircleOutline,
      notificationsOutline,
      homeOutline
     })
  }

  ngOnInit() {
  }

}

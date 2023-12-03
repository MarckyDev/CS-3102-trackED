import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { addIcons } from "ionicons";

import { 
  clipboardOutline,
  checkmarkCircleOutline,
  notificationsOutline,
  homeOutline,
  add

} from "ionicons/icons";
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
  IonButton,
  IonTabBar,
  IonTabs,
  IonTabButton,
  IonSplitPane,
  IonRouterOutlet,
  
} from '@ionic/angular/standalone';

import { DatabaseService } from 'src/app/services/database.service';



@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard2.page.html',
  styleUrls: ['./main-dashboard2.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    IonItem,
    IonLabel,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonDatetime,
    IonFab,
    IonFabButton,
    IonIcon,
    IonButton,
  ]
})
export class MainDashboard2Page implements OnInit {
  tasks: any[] = [];
  key = this.database.get('Users');
 


  constructor(private database: DatabaseService) {
    addIcons({ 
      clipboardOutline,
      checkmarkCircleOutline,
      notificationsOutline,
      homeOutline,
      add
     })
     console.log(this.key);
  }

  ngOnInit() {
    // Your initialization code here
  }



  addTasks(){
    this.tasks.push({});
  }

 
}

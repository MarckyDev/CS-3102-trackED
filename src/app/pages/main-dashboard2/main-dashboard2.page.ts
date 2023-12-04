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
  accomplished: any[] = [];
  missed: any[] = [];
  first_name: any;
  last_name: any;

  current_tasks = this.tasks.length;
  
  


  constructor(private database: DatabaseService) {
    addIcons({ 
      clipboardOutline,
      checkmarkCircleOutline,
      notificationsOutline,
      homeOutline,
      add
     });

     this.parseData();

  }

  ngOnInit() {
    // Your initialization code here
    this.addTask();
  }


  private async parseData(){
    let parsedData = [];
    
    let obj = JSON.parse(await this.database.get('Users'));
    parsedData.push(obj);

    this.first_name = obj.firstName;
    this.last_name = obj.lastName;   
    this.tasks = obj.tasks;
  }

  addTask() {
    const newTaskNumber = this.tasks.length + 1;
    const newTask = {
      title: `Tasks ${newTaskNumber}`,
      body: '',
      dueDate:'',
      completed:'',
    };
    this.tasks.push(newTask);
  }

  editTask(note: any) {
    // Implement edit functionality
    console.log('Edit Task:', note);
  }

  deleteTask(note: any) {
    // Implement delete functionality
    const index = this.tasks.indexOf(note);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }

  saveTask(note: any) {
    // Implement save functionality
    console.log('Save Task:', note);
  }

 
}

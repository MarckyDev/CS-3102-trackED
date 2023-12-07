import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { addIcons } from "ionicons";

import { 
  createOutline,
  trashOutline,
  checkmarkOutline,
} from "ionicons/icons";

import {
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
  current: any[] = [];
  accomplished: any[] = [];
  missed: any[] = [];
  first_name: any;
  last_name: any;

  current_tasks:number = 0;
  accomplished_tasks:number = 0;
  missed_tasks:number = 0;

  overall_tasks:number = 0;  
  
  isEditable:boolean = false;

  constructor(private database: DatabaseService) {
    addIcons({ 
      createOutline,
      trashOutline,
      checkmarkOutline,
     });   

  }

  ngOnInit() {
    // Your initialization code here
    this.parseData();
    this.addTask();
  }


  private async parseData(){
    let parsedData = [];
    
    let obj = JSON.parse(await this.database.get('Users'));
    parsedData.push(obj);

    this.first_name = obj.firstName;
    this.last_name = obj.lastName;   
    this.current = obj.tasks;

    this.current_tasks = this.current.length;
    this.accomplished_tasks = this.accomplished.length;
    this.missed_tasks = this.missed.length;
    this.updateOverallTasks();
  }

  addTask() {
    const newTaskNumber = this.current.length + 1;
    const newTask = {
      title: `Tasks ${newTaskNumber}`,
      body: '',
      dueDate:'',
      status:'',
    };
    this.current.push(newTask);
    this.current_tasks ++;

    this.updateOverallTasks();
  }

  editTask(task: any) {
    // Implement edit functionality
    if(this.isEditable){
      this.isEditable = false;
      console.log('Edit Task:', task);
    }

  }

  deleteTask(task: any) {
    // Implement delete functionality
    const index = this.current.indexOf(task);
    if (index !== -1) {
      this.current.splice(index, 1);
    }
    this.updateOverallTasks();
  }

  saveTask(task: any) {
    // Implement save functionality
    if(!this.isEditable){
      this.isEditable = true;
      console.log('Save Task:', task);
    }
  }

  updateOverallTasks() {
    this.overall_tasks = this.current_tasks + this.accomplished_tasks + this.missed_tasks;
   }
 
}

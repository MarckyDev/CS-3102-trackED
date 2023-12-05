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
  calendar_value:any;

  current_tasks = this.current.length;
  accomplished_tasks = this.accomplished.length;
  missed_tasks = this.missed.length;

  overall_tasks = this.current_tasks + this.accomplished_tasks + this.missed_tasks;  
  


  constructor(private database: DatabaseService) {
    addIcons({ 
      clipboardOutline,
      checkmarkCircleOutline,
      notificationsOutline,
      homeOutline,
      add
     });
     this.parseData();
     this.calendar_value = new Date().toISOString().split('T', 1).pop().toString(); //outputs date today
     console.log(this.calendar_value);

     
     

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
    this.current = obj.tasks;
  }

   /*
    let current = parsedData.find(p => p.tasks.dueDate <= this.calendar_value && p.tasks.completed == 'false'); //if current duedate ng task is equals to the current iondatetime value && yung completed is false then push sa current_tasks array
    let missed = parsedData.find(p => p.tasks.dueDate >= this.calendar_value && p.tasks.completed == 'false'); //if current duedate ng task is more than the current iondatetime value && yung completed is false then push sa missed array
    let accomplished = parsedData.find(p => p.tasks.completed == 'true'); //if yung completed is true then push sa accomplished array
    if(current){
      this.tasks.push(current);
    }else if(missed){
      this.missed.push(missed);
    }else{
      this.accomplished.push(accomplished);
    }*/

  addTask() {
    const newTaskNumber = this.current.length + 1;
    const newTask = {
      title: `Tasks ${newTaskNumber}`,
      body: '',
      dueDate:'',
      completed:'',
    };
    this.current.push(newTask);
  }

  editTask(task: any) {
    // Implement edit functionality
    console.log('Edit Task:', task);
  }

  deleteTask(task: any) {
    // Implement delete functionality
    const index = this.current.indexOf(task);
    if (index !== -1) {
      this.current.splice(index, 1);
    }
  }

  saveTask(task: any) {
    // Implement save functionality
    console.log('Save Task:', task);
  }

 
}

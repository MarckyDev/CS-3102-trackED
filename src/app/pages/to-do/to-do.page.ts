import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule} from '@ionic/angular';
import { 
  IonContent,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonDatetime,
  IonCard,
  IonCardContent,
  IonLabel,
  IonSegment,
  IonSegmentButton
} from '@ionic/angular/standalone';
import { DatabaseService } from 'src/app/services/database.service';


import { addIcons } from "ionicons";

import { 
  createOutline,
  trashOutline,
  checkmarkOutline,
} from "ionicons/icons";


@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.page.html',
  styleUrls: ['./to-do.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    IonContent,
    IonContent,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonDatetime,
    IonCard,
    IonCardContent,
    IonLabel,
    IonSegment,
    IonSegmentButton
  ]
})
export class ToDoPage implements OnInit {

  first_name: any;
  last_name: any;

  todos = [];
  completedTodos = [];
  missedTodos = [];

  selectedSegment: string = 'default';

  constructor(private database: DatabaseService) {
    addIcons({ 
      createOutline,
      trashOutline,
      checkmarkOutline,
     })
   }

   async parseData(){
    let parseData = [];
    let obj = JSON.parse(await this.database.get('Users'));
    this.first_name = obj.firstName;
    this.last_name = obj.lastName;

    parseData = obj.tasks;
   }

   async manage_todos(){
    let obj = JSON.parse(await this.database.get('Users'));
    let status = obj.tasks.status;
    this.todos = obj.tasks;

    for (let i = 0; i <  this.todos.length; i++) {
      const element =  this.todos.length[i];
      console.log(element);
      if(status == 'done'){

        this.completedTodos.push(element);
        console.log(this.completedTodos);
      }
  
      if(status == 'missed'){
        this.missedTodos.push(element);
        console.log(this.missedTodos);
      }
      
    }
   }

  ngOnInit() {
    this.parseData();
    this.manage_todos();
  }

}

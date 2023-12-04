import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule} from '@ionic/angular';
import { IonContent, IonTabs, IonTabBar, IonTabButton, IonDatetime, IonCard, IonCardContent, IonLabel, IonSegment, IonSegmentButton } from '@ionic/angular/standalone';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.page.html',
  styleUrls: ['./to-do.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, IonContent, IonContent, IonTabs, IonTabBar, IonTabButton, IonDatetime, IonCard, IonCardContent, IonLabel, IonSegment, IonSegmentButton ]
})
export class ToDoPage implements OnInit {

  first_name: any;
  last_name: any;
  constructor(private database: DatabaseService) {

    this.parseData();
   }

   async parseData(){
    let parseData = [];
    let obj = JSON.parse(await this.database.get('Users'));
    this.first_name = obj.firstName;
    this.last_name = obj.lastName;

   }

  ngOnInit() {
  }

}

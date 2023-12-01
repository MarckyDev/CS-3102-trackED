import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule} from '@ionic/angular';
import { IonContent, IonLabel, IonCard, IonCardContent, IonTabBar, IonDatetime } from '@ionic/angular/standalone';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.page.html',
  styleUrls: ['./to-do.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, IonContent, IonLabel, IonCard, IonCardContent, IonTabBar, IonDatetime]
})
export class ToDoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

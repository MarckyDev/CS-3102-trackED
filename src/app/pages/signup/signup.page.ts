import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, 
  IonCardSubtitle, IonItem, IonInput, IonLabel, IonButton, IonSelect, IonSelectOption} from '@ionic/angular/standalone';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, IonCard, IonCardHeader, IonCardTitle, IonCardContent, 
    IonCardSubtitle, IonItem, IonInput, IonLabel, IonButton, IonSelect, IonSelectOption]
})
export class SignupPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

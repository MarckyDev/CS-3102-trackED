import { Component, ElementRef, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonContent,
        IonCard,
        IonCardHeader,
        IonCardTitle,
        IonCardContent,
        IonItem,
        IonInput,
        IonButton,
        IonImg
       } from '@ionic/angular/standalone';


import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonItem,
    IonInput,
    IonButton,
    IonImg
  ]
})

export class LoginPage{
  @ViewChild('inputKey') inputKey!: IonInput;
  @ViewChild('inputUser') inputUser!: IonInput;

  constructor(private databaseService: DatabaseService) { }

  async setValue() {
    const username = await this.getInputValue(this.inputUser);
    const passcode = await this.getInputValue(this.inputKey);

    if (username && passcode) {
      this.databaseService.set(username, passcode);
      this.databaseService.viewStorage();
      console.log('Data set successfully.');
    } else {
      console.error('Please enter both username and passcode.');
    }
  }

  async clear() {
    this.databaseService.clearStorage();
  }

  private async getInputValue(input: IonInput): Promise<string> {
    const inputElement = await input.getInputElement();
    return inputElement.value || '';
  }


}
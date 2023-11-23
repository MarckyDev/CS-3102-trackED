import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, 
         IonCard,
         IonCardHeader,
         IonCardTitle,
         IonCardContent, 
         IonCardSubtitle,
         IonItem,
         IonInput,
         IonLabel,
         IonButton
        } from '@ionic/angular/standalone';

import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone: true,
  imports: [CommonModule,
            FormsModule,
            IonContent,
            IonCard,
            IonCardHeader,
            IonCardTitle,
            IonCardContent, 
            IonCardSubtitle,
            IonItem,
            IonInput,
            IonLabel,
            IonButton]
})
export class SignupPage{

 
  @ViewChild('firstName') firstName!: IonInput;
  @ViewChild('lastName') lastName!: IonInput;
  @ViewChild('email') email!: IonInput;
  @ViewChild('password') password!: IonInput;



  // FORMAT
  // key = last name
  // value = first name [0], email [1], password [2]
  


  constructor(private databaseService: DatabaseService) { }

  async setValue(){

    const first_name = await this.databaseService.getInputValue(this.firstName);
    const last_name = await this.databaseService.getInputValue(this.lastName);
    const e_mail = await this.databaseService.getInputValue(this.email);
    const passkey = await this.databaseService.getInputValue(this.password);
    const data = [first_name.toString(), e_mail.toString(), passkey.toString()]
    this.databaseService.set(last_name.toString(), data);
  }




}

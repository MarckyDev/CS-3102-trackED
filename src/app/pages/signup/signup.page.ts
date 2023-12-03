import { Component, ViewChild, OnInit } from '@angular/core';
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
import { Router } from '@angular/router';

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
export class SignupPage implements OnInit{

  user:String;
  @ViewChild('firstName') firstName!: IonInput;
  @ViewChild('lastName') lastName!: IonInput;
  @ViewChild('email') email!: IonInput;
  @ViewChild('password') password!: IonInput;

  


  // FORMAT
  // key = last name
  // value = first name [0], email [1], password [2]
  


  constructor(private databaseService: DatabaseService, private router: Router) { }


  ngOnInit(){

  }

  async onSubmit(){
    
    const first_name = await this.databaseService.getInputValue(this.firstName);
    const last_name = await this.databaseService.getInputValue(this.lastName);
    const e_mail = await this.databaseService.getInputValue(this.email);
    const passkey = await this.databaseService.getInputValue(this.password);

    let note = {title:String, body:String};
    let task = {title:String, body:String, dueDate:String, completed:Boolean};

    let user = {
      firstName: first_name.toString(),
      lastName:last_name.toString(),
      email:e_mail.toString(),
      password:passkey.toString(),
      notes:[note],
      tasks:[task]
    }
    
   
    this.databaseService.set('Users', JSON.stringify(user));
  }


  navigate(url: string){
    this.router.navigateByUrl(url);
  }


 




}

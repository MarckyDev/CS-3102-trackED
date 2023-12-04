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

    type note = {title:string, body:string};
    type task = {title:string, body:string, dueDate:string, completed:boolean};

    let user = {
      firstName: first_name.toString(),
      lastName:last_name.toString(),
      email:e_mail.toString(),
      password:passkey.toString(),
      notes:[],
      tasks:[]
    }

    user.notes.push({title: 'Today I ate my favorite food', body: 'So I was like eating this fave food called Papaya Galore, it was so yummy!'});
    user.notes.push({title: 'Dear Diary', body:'I am constipated :('});

    user.tasks.push({title:'Math homework', body:'Do quadratic equations assignment', dueDate:'2023-02-19', completed:'false'});
    user.tasks.push({title:'Science homework', body:'Memorize Kreb\'s cycle', dueDate:'2023-12-3', completed:'true'});
    user.tasks.push({title:'Implement Notifications', body:'Implement the notifications function for my task app', dueDate:'2023-12-25', completed:'false'});

    
   
    this.databaseService.set('Users', JSON.stringify(user));
    this.navigate('/login');
  }


  navigate(url: string){
    this.router.navigateByUrl(url);
  }


 




}

import { Component, ElementRef} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonContent,
        IonCard,
        IonCardHeader,
        IonCardTitle,
        IonCardContent,
        IonItem,
        IonInput,
        IonButton
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
    IonButton
  ]
})

export class LoginPage{
  key: any = "";
  value: any = "";

  constructor(private databaseService: DatabaseService, private elementRef: ElementRef) { }

  async setValue(){
    this.getUsername();
    this.getPassword();
    await this.databaseService.set(this.key, this.value);
    this.databaseService.viewStorage(); //in theory, it prints the storage 
    
  }

  async getKey(key_val:any){
    await this.databaseService.get(key_val)
  }


  async getInputElement(class_name:any): Promise<HTMLInputElement>{
    const IonInputElement = this.elementRef.nativeElement.querySelector(`.${class_name}`);
    return await IonInputElement.getInputElement();
  }

  async getUsername(){
    const value = this.getInputElement('email');
    this.value = value;
  }

  async getPassword(){
    const value = this.getInputElement('password');
    this.key = value;
  }

  async clear(){
    this.databaseService.clearStorage()
  }


}